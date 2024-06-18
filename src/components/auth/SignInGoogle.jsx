import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./../../config/firebase";

const SignInGoogle = () => {
  const provider = new GoogleAuthProvider();

  const signMeIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("signInWithPopup result", result);
      })
      .catch((error) => {
        console.error("signInWithPopup error", error.code, error.message);
      });
  };

  return (
    <div>
      <button onClick={signMeIn}>Sign in (Google)</button>
    </div>
  );
};

export default SignInGoogle;
