import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { auth } from "../firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Unichat!</h2>
        <div
          className="login-button google"
          onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
