import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconMessage } from "@walmart/wmreact-analytics";

const TAG_ACTION_COMMAND = "_tagAction";
const ON_SUB_DEPT_NAV_FLYOUT_ACTION = "ON_SUBDEPTNAV_FLYOUT";
const ON_SUB_DEPT_NAV_FLYOUT_ID = "nav.snv.fly.hvr";

const openSubDeptNav = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("open").match({ _type: "openSubDeptNav" })
  ]);

  sequence((occurrence) => {
    const open = occurrence.get("open");
    const { pageContext } = open.context;
    const { moduleId } = open.props;
    const { uid, name } = open.extras;

    canary.dispatch(beaconMessage([
      TAG_ACTION_COMMAND,
      pageContext,
      ON_SUB_DEPT_NAV_FLYOUT_ACTION,
      ON_SUB_DEPT_NAV_FLYOUT_ID, [
        ["co", moduleId],
        ["li", uid, { id: uid, nm: name }]
      ]
    ]));
  });
};

openSubDeptNav.identifier = "openSubDeptNav";

export default openSubDeptNav;
