import reducer from "./userReducer";
import { createContext, useEffect, useReducer, useState } from "react";
import { useGetData } from "@/hooks/useGetData";
import { auth } from "@/config/firebase";

const UserContext = createContext();

export const UserContextWrapper = ({ children }) => {
  //User reducer settings
  const [user, dispatch] = useReducer(reducer, {
    status: false,
  });

  //Fetching userdata with custom hook
  const { data: userData } = useGetData("user", user?.email);
  const [loading, setLoading] = useState(true);

  //Checking if app contains user token
  const checkLogin = async () => {
    setLoading(true);
    auth.onAuthStateChanged(function (user) {
      if (!user) {
        dispatch({
          type: "UPDATE",
          name: false,
          email: false,
          status: false,
        });
      } else {
        dispatch({
          type: "UPDATE",
          name: user.displayName,
          email: user.email,
          status: true,
        });
      }
    });
    setLoading(false);
  };
  useEffect(() => {
    checkLogin();
  }, [userData]);

  const data = {
    currentUser: user,
    loading: loading,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserContext };
