export default [
  {
    id: "size",
    name: "Size",
    variantType: "DROPDOWN",
    variants: [
      {
        id: "size-full",
        name: "Full",
        status: "in stock",
        selected: true
      }, {
        id: "size-queen",
        name: "Queen",
        status: "in stock",
        selected: false
      }
    ],
    selectedVariantName: "Choose an Option",
    selectedVariantId: "",
  }, {
    selectedVariantName: "Choose an Option",
    selectedVariantId: "",
    variantType: "SWATCH",
    name: "Actual Color",
    swatchToggleCountPerBreakpoint: {
      "x-small": {
        swatchToggleCount: 2
      },
      "small": {
        swatchToggleCount: 1
      },
      "medium": {
        swatchToggleCount: 2
      },
      "large": {
        swatchToggleCount: 1
      },
      "x-large": {
        swatchToggleCount: 2
      }
    },
    variants: [{
      id: "color_blue",
      name: "Blue",
      selected: false,
      swatchImageUrl: "http://dummyimage.com/60x60/7766EE/fff",
      imageAssets: [
        {
          assetId: "7D60DE01AE5D49F3B3A58409B5199069",
          assetType: "IMAGE",
          versions: {
            hero: "http://dummyimage.com/450x450/7766EE/fff"
          }
        }
      ],
      status: "in stock"
    }, {
      id: "color_red",
      name: "Red",
      selected: false,
      swatchImageUrl: "http://dummyimage.com/60x60/FF6347/fff",
      imageAssets: [
        {
          assetId: "7D60DE01AE5D49F3B3A58409B5199069",
          assetType: "IMAGE",
          versions: {
            hero: "http://dummyimage.com/450x450/FF6347/fff"
          }
        }
      ],
      status: "in stock"
    }, {
      id: "color_green",
      name: "Green",
      selected: false,
      swatchImageUrl: "http://dummyimage.com/60x60/448833/fff",
      imageAssets: [
        {
          assetId: "7D60DE01AE5D49F3B3A58409B5199069",
          assetType: "IMAGE",
          versions: {
            hero: "http://dummyimage.com/450x450/448833/fff"
          }
        }
      ],
      status: "not available"
    }],
    id: "actual_color"
  }
];
