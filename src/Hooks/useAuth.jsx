import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
const useAuth = () => {
  const AuthInfo = useContext(AuthContext);
  return AuthInfo;
};

export default useAuth;
