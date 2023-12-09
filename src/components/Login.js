import React, { useState, useRef } from "react";
import Header from "./Header";
import { CheckValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVTAR } from "../utils/constant";

const Login = () => {
  const [isSignFormOpen, setIsSignFormOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
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
            photoURL: USER_AVTAR,
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
        .then(() => {})
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
          src={BG_IMG}
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
