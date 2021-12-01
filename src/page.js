import React from "react";
import Layout from "./Layout";


export const UserContext = React.createContext();
export const ThemeContext = React.createContext();

const user= {name: "Rejeb"}
const theme= {color: "dark-theme"}


const Page = () => {
    
    return(
        <div>
            <UserContext.Provider value={user}>
                <ThemeContext.Provider value={theme}>
                    <Layout />
                </ThemeContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Page;