import handleServerError from "../../../src/handle-server-error";

describe("Handle server error", () => {

  it("should set code as validation for validation errors", (done) => {
    handleServerError({
      responseJSON: {
        validation: {
          keys: ["phone"]
        }
      }
    }, function (error) {
      if (error.code === "validation") {
        done();
      } else {
        done(new Error("invalid code"));
      }
    });
  });

});
