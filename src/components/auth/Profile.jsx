import React, { useContext, useEffect } from "react";
import { auth } from "../../config/firebase";
import { AuthContext } from "./AuthProvider";
import SignInGoogle from "./SignInGoogle";
import SignOutGoogle from "./SignOutGoogle";

const Profile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        console.info("logged in..");
      } else {
        console.info("logged out..");
      }
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <div
      style={{
        marginTop: 80,
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {user ? <SignOutGoogle /> : <SignInGoogle />}
    </div>
  );
};

export default Profile;
