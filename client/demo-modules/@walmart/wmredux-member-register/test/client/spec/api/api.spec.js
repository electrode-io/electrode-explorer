/*eslint-disable*/
import api from "src/api/api";

describe("Checking API", () => {
	const signUpObj = {
		email: "sam@sams.com",
		password: "qwerqwer2",
		membershipNum: "10142100119369395",
		lastName: "string"
	};
	const registerMembershipObj = {
		membershipNum: "10142100119369395",
		lastName: "string"
	}

	it("test should check if promised was return in register membership", () => {
		expect(api.registerMembership(registerMembershipObj)).is.Promise;
	});

	it("test should check if promised was return in sign up", () => {
		expect(api.signUp(signUpObj)).is.Promise;
	});
});
