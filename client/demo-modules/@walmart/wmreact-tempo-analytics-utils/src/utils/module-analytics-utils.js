/* eslint no-invalid-this: 0 */
/* @flow */
/**
* Utility functions for construction of the Tempo module data to send to _bcq
*/
import generateLeftHandNavUids from "./global-lhn-uid-swap";

const CLICK_THROUGH = "clickThrough";
const OBJECT = "object";
const IMAGE_MAP = "map";
const GLOBAL_LHN = "GlobalLefthandNav";

const PAGINATION_EVENT_MAPPING = {
  "nextSlide": "nextArrow",
  "previousSlide": "previousArrow",
  "goToSlide": "dot"
};

const DL_WHITELIST = {
  MultiStoryPOVResponsive: true,
  SingleStoryPOVResponsive: true,
  ItemCarouselCurated: true,
  CategoryCarouselCurated: true,
  VerticalCategoryCarouselCurated: true,
  FeaturedCategoriesCurated: true,
  SingleItem: true,
  HighlightedDepartments: true,
  HomepageSavingsCenter: true,
  MiniStoryStackable: true,
  WMXOMPAdCarousel: true,
  VerticalItemCarouselCurated: true
};

export default class ModuleAnalyticsUtils {
  // Extract number from zone name and convert to int
  static _getZoneNumber(zoneName: string): number {
    const match = zoneName.match(/zone(\d*)/i);
    if (match === null) {
      return 0;
    }
    const zoneNumber = match[1];
    if (zoneNumber) {
      return parseInt(zoneNumber);
    } else {
      return 0;
    }
  }

  // Get zones in sorted order from modules
  static _getSortedZones(modules: Object): Array<string> {
    const zoneNames = Object.keys(modules);
    zoneNames.sort((a, b) => {
      return this._getZoneNumber(a) - this._getZoneNumber(b);
    });
    return zoneNames;
  }

  // Find link objects nested within the module configs and append to array
  static _getLinks(object: Object, links: Array<Object>): void {
    for (const property in object) {
      const subObject = object[property];
      if (subObject !== null && typeof subObject === OBJECT) {
        if (subObject.hasOwnProperty(CLICK_THROUGH)) {
          links.push(subObject);
        } else {
          this._getLinks(subObject, links);
        }
      }
    }
  }

  // generate UIDs for links in product carousel to match frontend
  static _appendProductLinks(products: Array<Object>, links: Array<Object>): void {
    if (Array.isArray(products)) {
      products.forEach((product) => {
        const { id: { productId }, productName, canAddToCart } = product;
        if (canAddToCart) {
          links.push({
            uid: `${productId}`,
            id: productId,
            title: productName,
            clickThrough: {}
          });
        }
      });
    }
  }

  // Build links analytics data for module
  static _buildModuleLinksAnalyticsData(configs: Array<Object>): Object {
    const links = [];
    const linkDataArray = [];
    const linkUids = [];
    let linkIndex = 0;
    const { products } = configs;

    this._getLinks(configs, links);

    if (products) {
      this._appendProductLinks(products, links);
    }

    links.forEach((link) => {
      const { uid, id, assetId, title, clickThrough: { type, value } } = link;
      const linkAnalyticsObject = {
        lc: linkIndex + 1,
        ai: assetId,
        nm: title,
        pi: 1
      };
      if (id) {
        linkAnalyticsObject.id = id;
      }
      linkDataArray.push(["li", uid, linkAnalyticsObject]);
      linkUids.push(uid);
      linkIndex++;

      if (type === IMAGE_MAP) {
        for (let mapIndex = 0; mapIndex < value.length; mapIndex++) {
          const mapAnalyticsObject = { ...linkAnalyticsObject, lc: linkIndex + 1 };
          const mapUid = `${uid}-${mapIndex}`;
          linkDataArray.push(["li", mapUid, mapAnalyticsObject]);
          linkUids.push(mapUid);
          linkIndex++;
        }
      }
    });

    return { linkDataArray, linkUids };
  }

  // Build module analytics data for module
  static buildModuleAnalyticsData(modules: Object): Array<Object> {
    const moduleBcqAddDataArray = [];
    let linkBcqAddDataArray = [];
    const sortedZones = this._getSortedZones(modules);

    sortedZones.forEach((zoneName, index) => {
      const module = modules[zoneName];
      const { moduleId, type, name, version, publishedDate } = module;
      const moduleName = name ? name.substring(0, 15) : undefined; // only 15 chars are needed
      let { configs } = module;
      const isLHN = type === GLOBAL_LHN;

      const moduleObject = {
        id: moduleId,
        ty: type,
        vr: version,
        do: index + 1,
        st: publishedDate
      };

      if (isLHN) {
        configs = generateLeftHandNavUids(configs);
      } else {
        moduleObject.nm = moduleName;
        moduleObject.zn = zoneName;
      }

      const { linkDataArray, linkUids } = this._buildModuleLinksAnalyticsData(configs);

      // only add DL attribute for whitelisted modules
      if (DL_WHITELIST[type]) {
        moduleObject.dl = linkUids;
      }

      moduleBcqAddDataArray.push(["co", moduleId, moduleObject]);
      linkBcqAddDataArray = linkBcqAddDataArray.concat(linkDataArray);
    });

    return linkBcqAddDataArray.concat(moduleBcqAddDataArray);
  }

  //Build analytics for pagination on a tempo carousel module
  static buildPaginationAnalytics(type : string, zoneId : number, clickTarget : Object) {
    const context = `Carousel_${zoneId}`;
    const data = [["li", {"nm": PAGINATION_EVENT_MAPPING[type]}]];
    const url = "";
    const action = "ON_PAGINATION";
    const reportingId = "dis.pag.slc.clc";
    return ["_tagAction",
      context,
      action,
      reportingId,
      data,
      url,
      clickTarget];
  }
}
