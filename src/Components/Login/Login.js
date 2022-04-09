import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { singInWithGoogle } = useFirebase({});
  return (
    <div>
      <h2>Please login</h2>
      <div style={{ margin: "20px" }}>
        <button>Google Sign In</button>
      </div>
      <form>
        <input type="email" name="" id="" placeholder="Your email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
