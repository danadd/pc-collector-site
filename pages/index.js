// need a ternary operator here. IF they are not logged in, show this page. If they ARE logged in, just take them to home.
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Link from "next/link";

const Login = () => {
  return (
    <div className="login-container container">
      <p>Create and share your photocard collection!</p>
      <div className="row">
        <div className="col-md-3">
          <button type="button" className="btn btn-primary">
            Log In
          </button>
          <button type="button" className="btn btn-primary">
            Sign Up
          </button>
        </div>

        <div className="col-md-3">
          <Link href="/Home">
            <button type="button" className="btn btn-primary">
              Continue as a guest*
            </button>
          </Link>

          <p className="disclaimer-text">
            *You will need to save your photocard list to your device and options are
            limited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
