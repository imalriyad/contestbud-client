/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const axiosPublic = useAxiosPublic();
  const [topContest, setTopContest] = useState([]);

  const registeration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  const passwordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubScribe();
  }, []);

  //  get search text and thosw related work
  const getSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    axiosPublic.get(`/get-top-contests?search=${searchText}`).then((res) => {
      setTopContest(res?.data);
    });
  };
  useEffect(() => {
    
    handleSearch();
  }, []); 
  const authInfo = {
    registeration,
    login,
    logout,
    passwordReset,
    googleLogin,
    isLoading,
    user,
    getSearchText,
    handleSearch,
    searchText,
    topContest
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
