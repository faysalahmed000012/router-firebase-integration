import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h3>Knock knock Who is there ?</h3>
      <p>{user ? user.displayName : "voooooooot"}</p>
    </div>
  );
};

export default Products;
