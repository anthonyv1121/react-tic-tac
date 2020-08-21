import Auth0Lock from "auth0-lock";
const authDomain = "anthonylombardo.auth0.com";
const clientId = "EYbC6tMBuEnHYPFye9m5Lc87PbsB3hWO";

class AuthService {
  constructor() {
    this.lock = new Auth0Lock(clientId, authDomain, {
      auth: {
        params: {
          scope: "openid email"
        }
      }
    });
    this.showLock = this.showLock.bind(this);

    this.lock.on("authenticated", this.authProcess.bind(this));
  }

  authProcess = authResult => {
    console.log(authResult);
  };

  showLock = () => {
    this.lock.show();
  };

  setToken = authFields => {
    let { idToken, exp } = authFields;
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("exp", exp * 1000);
  };

  isCurrent = () => {
    let expString = localStorage.getItem("exp");
    if (!expString) {
      localStorage.removeItem("idToken");
      return false;
    }
    let now = new Date();
    let exp = new Date(parseInt(expString, 10)); // 10 is radix param

    if (exp < now) {
      this.logOut();
      return false;
    } else {
      return true;
    }
  };

  getToken = () => {
    let idToken = localStorage.getItem("idToken");
    if (this.isCurrent() && idToken) {
      return idToken;
    } else {
      localStorage.removeItem("idToken");
      localStorage.removeItem("exp");
      return false;
    }
  };

  logOut = () => {
    // remove for good measure
    localStorage.removeItem("idToken");
    localStorage.removeItem("exp");

    window.location.reload(); // refresh the page
  };
}
const auth = new AuthService();

export default auth;
