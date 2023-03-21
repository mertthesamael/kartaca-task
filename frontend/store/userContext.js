const { createContext } = require("react");



const UserContext = createContext()



export const UserContextWrapper = ({children}) => {




    const data = {
        name:'Mert'
    }
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext}