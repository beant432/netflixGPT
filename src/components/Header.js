import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase.config";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANG } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { handlelanguage } from "../utils/languageSlice";

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
  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleSelectionOfLang = (e) => {
    dispatch(handlelanguage(e.target.value));
  };

  const gptSearch = useSelector((store) => store.gptSearch.gptSearchShow);
  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-8 py-3 z-30 flex justify-between">
      <img src={LOGO} alt="logo" className="h-24 " />
      {user && (
        <div className="p-4 r-0 flex">
          {gptSearch && (
            <div>
              <select
                className="bg-purple-500 mx-2 py-2 px-3 "
                onChange={handleSelectionOfLang}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            className="mx-2 px-4 bg-green-300 h-8"
            onClick={() => handleGptSearch()}
          >
            {gptSearch ? "HomePage" : "GPT Search"}
          </button>
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
