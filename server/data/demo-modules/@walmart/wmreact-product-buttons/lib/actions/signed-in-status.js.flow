import Cookies from "@walmart/electrode-cookies";

export const getSignInStatus = (cookieName = "hasCID") => {
  const cookieValue = Cookies.get(cookieName);
  return {
    type: "SIGN_IN_STATUS",
    isSignedIn: cookieValue === "1"
  };
};
