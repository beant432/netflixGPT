import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase.config";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-8 py-3 z-30 flex justify-between">
      <img src={LOGO} alt="logo" className="h-24 " />
      {user && (
        <div className="p-4 r-0 flex">
          <img alt="userIcon" src={user.photoURL} className="h-8 w-8 flex" />
          <span
            className="text-white font-bold text-xl px-3 cursor-pointer"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
