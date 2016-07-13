import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconMessage } from "@walmart/wmreact-analytics/lib/helpers/event-types";

const CAROUSEL_PREFIX = "Carousel_";
const TAG_ACTION_COMMAND = "_tagAction";
const MODULE_VIEW_ACTION = "MODULE_VIEW";
const MODULE_VIEW_ID = "mob.gbl.www.mod";

const moduleView = (canary) => {
  const moduleViewSequence = createSequence(canary.event, [
    pattern.label("moduleView").match({ _type: "module_view" })
  ]);

  const _populateData = (beaconData, extras) => {
    const { uids, plData } = extras;
    if (uids) {
      uids.forEach((uid) => {
        beaconData.push(["li", uid]);
      });
    }
    if (plData) {
      beaconData.push(["pl", plData]);
    }
  };

  moduleViewSequence((occurrence) => {
    const moduleViewOccurrence = occurrence.get("moduleView");
    const { context: { pageContext, moduleId }, extras } = moduleViewOccurrence;
    if (extras || moduleId) {
      const beaconData = [["co", moduleId || extras.moduleId]];
      if (extras) {
        _populateData(beaconData, extras);
      }

      canary.dispatch(beaconMessage([
        TAG_ACTION_COMMAND,
        `${CAROUSEL_PREFIX}${pageContext}`,
        MODULE_VIEW_ACTION,
        MODULE_VIEW_ID,
        beaconData
      ]));
    }
  });
};

moduleView.identifier = "moduleView";

export default moduleView;
