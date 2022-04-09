import { useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});

  const singInWithGoogle = () => {
    console.log("sign in soon");
  };

  return { user, singInWithGoogle };
};

export default useFirebase;
