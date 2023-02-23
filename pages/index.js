// need a ternary operator here. IF they are not logged in, show this page. If they ARE logged in, just take them to home.
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login-container">
      <p>Create and share your photocard collection!</p>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <button type="button" class="btn btn-primary">
              Log In
            </button>
          </div>

          <div class="col-sm">
            <Link href="/Home">
              <button type="button" class="btn btn-primary">
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
    </div>
  );
};

export default Login;
