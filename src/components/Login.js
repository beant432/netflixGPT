import React, { useState, useRef } from "react";
import Header from "./Header";
import { CheckValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignFormOpen, setIsSignFormOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggleChange = () => {
    setIsSignFormOpen(!isSignFormOpen);
  };
  const handleButtonSubmit = () => {
    const message = CheckValidate(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignFormOpen) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://yt3.ggpht.com/yti/ADpuP3P6QkQb_GKfZJJqFcFAcWrYpw4wyyAZ5_l3qA=s88-c-k-c0x00ffffff-no-rj",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="bg-black">
      <Header />
      <div className="opacity-90 bg-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/7cb9679b-dd82-47aa-8629-efe9606364cf/CA-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="absolute z-10 h-[100vh]"
          alt="background"
          height={"100%"}
          width={"100%"}
        />
      </div>
      <form
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blend-luminosity bg-black text-white rounded-lg w-1/4 px-12 py-12 bg-opacity-80 z-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold">
          {isSignFormOpen ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignFormOpen && (
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-800 p-2 my-3 w-full rounded-lg h-12"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="bg-slate-800 px-4 my-3 w-full rounded-lg h-12"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-slate-800 px-4 my-3 w-full rounded-lg h-12"
          ref={password}
        />
        <p className="font-bold text-lg text-red-700">{errorMessage}</p>
        <button
          className="bg-red-700 w-full my-3 h-12 rounded-lg cursor-pointer"
          onClick={handleButtonSubmit}
        >
          {isSignFormOpen ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignFormOpen ? "New to Netflix?" : "Already Registered"}{" "}
          <span
            className="cursor-pointer font-bold"
            onClick={() => handleToggleChange()}
          >
            {!isSignFormOpen ? "Sign In Now" : "Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
