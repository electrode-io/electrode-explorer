import {getJson} from "src/actions/helpers/fetch";

describe("Fetch helper", () => {
  it("should return a redux-effect-fetch", () => {
    const request = getJson("example.com");

    expect(request.type).to.equal("EFFECT_FETCH");
  });
});
