import React from "react";
import { ThemeContext, UserContext } from "./page";

const User = () => {
    
    return(
        <div>
            <UserContext.Consumer>
                {(user) => (
                    <ThemeContext.Consumer>
                        {(theme) => (
                        <div>{user.name} | {theme.color}</div>)}
                    </ThemeContext.Consumer> )}
            </UserContext.Consumer>

        </div>
    )
}

export default User;