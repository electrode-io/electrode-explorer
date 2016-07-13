import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconMessage } from "@walmart/wmreact-analytics/lib/helpers/event-types";

const ADD_DATA_COMMAND = "_addData";
const TAG_OUTBOUND_ACTION_COMMAND = "_tagOutboundAction";
const UNIVERSAL_CLICK_ACTION = "ON_UNIV_LINK";
const UNIVERSAL_CLICK_ID = "nav.unv.slc.clc";
const DUMMY_LINK_KEY = "dummyLinkKey";

const universalClick = (canary) => {
  const clickSequence = createSequence(canary.event, [
    pattern.label("click").match({ _type: "click" })
  ]);

  clickSequence((occurrence) => {
    const click = occurrence.get("click");
    const { context: { pageContext, moduleId }, props, extras } = click;

    if (pageContext) {
      const linkKey = props["data-uid"] || extras && extras.uid;
      const href = props.href || extras && extras.href;

      // If no UID, dispatch minimal data
      if (!linkKey) {
        canary.dispatch(beaconMessage([
          ADD_DATA_COMMAND,
          pageContext,
          [[
            "li", DUMMY_LINK_KEY, {
              "lc": 0,
              "pi": 0
            }
          ]]
        ]));
      // Link from Tempo Module
      } else if (href && moduleId) {
        canary.dispatch(beaconMessage([
          TAG_OUTBOUND_ACTION_COMMAND,
          pageContext,
          UNIVERSAL_CLICK_ACTION,
          UNIVERSAL_CLICK_ID,
          [
            ["co", moduleId],
            ["li", linkKey]
          ],
          href
        ]));
      }
    }
  });
};

universalClick.identifier = "universalClick";

export default universalClick;
