import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconMessage } from "@walmart/wmreact-analytics";

const TAG_ACTION_COMMAND = "_tagAction";
const EMAIL_SUBSCRIBE_ACTION = "ON_EMAIL_SUBSCRIBE";
const EMAIL_SUBSCRIBE_ID = "com.eml.sbs.clc";

const emailSignupSubmit = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("submit").match({ _type: "emailSignupSubmit" })
  ]);

  sequence((occurrence) => {
    const submit = occurrence.get("submit");
    const { header, campaignId } = submit.props.moduleData.configs;
    canary.dispatch(beaconMessage([
      TAG_ACTION_COMMAND,
      submit.context.pageContext,
      EMAIL_SUBSCRIBE_ACTION,
      EMAIL_SUBSCRIBE_ID, [[
        "em", 1, {
          id: campaignId,
          nm: header
        }
      ]]
    ]));
  });
};

emailSignupSubmit.identifier = "emailSignupSubmit";

export default emailSignupSubmit;
