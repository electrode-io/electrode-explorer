import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconMessage } from "@walmart/wmreact-analytics";

const TAG_ACTION_COMMAND = "_tagAction";
const SOCIAL_SHARE_ACTION = "ON_SOCIALSHARE";
const SOCIAL_SHARE_ID = "shr.soc.slc.clc";
const WALMART = "Walmart";

const socialShare = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("click").match({ _type: "click", "context.moduleType": "GlobalSocialIcons" })
  ]);

  sequence((occurrence) => {
    const click = occurrence.get("click");
    const { pageContext } = click.context;
    const { title, "data-uid": uid } = click.props;

    if (pageContext && title) {
      canary.dispatch(beaconMessage([
        TAG_ACTION_COMMAND,
        pageContext,
        SOCIAL_SHARE_ACTION,
        SOCIAL_SHARE_ID, [
          ["so", title, {
            nm: title,
            id: uid,
            ty: WALMART
          }]
        ]
      ]));
    }
  });
};

socialShare.identifier = "socialShare";

export default socialShare;
