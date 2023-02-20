import Button from "react-bootstrap/Button";

function Login() {
  return (
    <div className="login-container">
      <p>Create and share your photocard collection!</p>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Button>Log In</Button>
          </div>

          <div class="col-sm">
            <Button onClick="<Home />">Continue as Guest</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
