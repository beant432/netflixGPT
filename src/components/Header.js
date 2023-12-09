import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase.config";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-8 py-3 z-30 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="h-24 "
      />
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
