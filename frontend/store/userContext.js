import reducer from "./userReducer";
import { createContext, useEffect, useReducer } from "react"
import { useGetData } from "@/hooks/useGetData";
import { auth } from "@/config/firebase";


const UserContext = createContext()


export const UserContextWrapper = ({children}) => {


    const [user, dispatch] = useReducer(reducer,{
        status:false
    })
    const {data:userData} = useGetData("user",user?.email)

    
    const checkLogin = () => {
            auth.onAuthStateChanged(function(user) {
                if (!user) {
                    console.log("User is not logged in")
            }else{
                console.log(user)
                dispatch({
                    type:'UPDATE',
                    name:user.displayName,
                    email:user.email,
                    status:true
                })
                
            }
            
        })
  
  
    }
    useEffect(() => {
        checkLogin()
    },[userData])


    const data = {
        currentUser:user
    }
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext}