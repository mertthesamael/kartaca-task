import reducer from "./userReducer";
import { createContext, useEffect, useReducer, useState } from "react";
import { useGetData } from "@/hooks/useGetData";
import { auth, logout } from "@/config/firebase";

const UserContext = createContext();

export const UserContextWrapper = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, {
    status: false,
  });
  const [loading, setLoading] = useState(true)
  const { data: userData } = useGetData("user", user?.email);



  const checkLogin = async() => {
    setLoading(true)
    auth.onAuthStateChanged(function (user) {
      if (!user) {
        console.log("User is not logged in");
        dispatch({
          type: "UPDATE",
          name: false,
          email: false,
          status: false,
        });
      } else {
        
        console.log(user);
        dispatch({
          type: "UPDATE",
          name: user.displayName,
          email: user.email,
          status: true,
        });
      }
    });
    setLoading(false)
  };
  useEffect(() => {

    checkLogin();

  }, [userData]);

  const data = {
    currentUser: user,
    loading:loading,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserContext };
