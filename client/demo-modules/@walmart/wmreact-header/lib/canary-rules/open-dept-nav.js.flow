import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconMessage } from "@walmart/wmreact-analytics";

const TAG_ACTION_COMMAND = "_tagAction";
const ON_DEPTNAV_FLYOUT_ACTION = "ON_DEPTNAV_FLYOUT";
const ON_DEPTNAV_FLYOUT_ID = "nav.dnv.fly.hvr";

const openDeptNav = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("open").match({ _type: "openDeptNav" })
  ]);

  sequence((occurrence) => {
    const open = occurrence.get("open");
    const { pageContext } = open.context;
    const { moduleId } = open.props.moduleData;
    canary.dispatch(beaconMessage([
      TAG_ACTION_COMMAND,
      pageContext,
      ON_DEPTNAV_FLYOUT_ACTION,
      ON_DEPTNAV_FLYOUT_ID, [[
        "co", moduleId
      ]]
    ]));
  });
};

openDeptNav.identifier = "openDeptNav";

export default openDeptNav;
