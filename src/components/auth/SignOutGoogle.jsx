import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { AuthContext } from "./AuthProvider";

const SignOutGoogle = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <p>Signed in as `{user.email}`</p>

      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default SignOutGoogle;
