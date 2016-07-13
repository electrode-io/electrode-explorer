import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconMessage } from "@walmart/wmreact-analytics/lib/helpers/event-types";

import ModuleAnalyticsUtils from "../utils/module-analytics-utils";

const ADD_DATA_COMMAND = "_addData";
const CAROUSEL_PREFIX = "Carousel_";

const addTempoData = (canary) => {
  const tempoSequence = createSequence(canary.event, [
    pattern.label("tempo").match({ _type: "tempo" })
  ]);

  tempoSequence((occurrence) => {
    // Send module data from Tempo response
    const tempo = occurrence.get("tempo");
    const { pageContext } = tempo.context;
    const modules = tempo.extras;
    const analyticsData = ModuleAnalyticsUtils.buildModuleAnalyticsData(modules);
    // dispatch for universal click
    canary.dispatch(beaconMessage([ADD_DATA_COMMAND, pageContext, analyticsData]));
    // dispatch for module view with carousel prefixed context
    if (pageContext !== "Header" && pageContext !== "Footer") {
      canary.dispatch(beaconMessage([ADD_DATA_COMMAND, `${CAROUSEL_PREFIX}${pageContext}`,
        analyticsData]));
    }
  });
};

addTempoData.identifier = "addTempoData";

export default addTempoData;
