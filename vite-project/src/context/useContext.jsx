import { createContext, useContext, useState } from "react";

const store = 'light'
export const GlobalContext = createContext(null)

function UseContext({ children }) {
    const [state, setState] = useState(store)
    return <GlobalContext.Provider value={{state, setState}}>
        {children}
    </GlobalContext.Provider>
}
export default UseContext

export const MyContext = () => {
    return useContext(GlobalContext)
} 