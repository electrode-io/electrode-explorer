import { FORM_FIELD_ERRORS } from "src/actions/constants/form";
import { formFieldErrors } from "src/actions/form";

describe("Form action", () => {
  it("Form field error type should be equal", () => {
    expect(formFieldErrors(null, null).type).to.be.equal(FORM_FIELD_ERRORS);
  });
});

