import React from "react";
import { Component } from "react";

export class LoginFormC extends Component {

   state = {
        email: 'rejeb@gmail.com'
    };
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handlePassword = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    render(){
        return (
        <div>
            class example

            <input name={this.state.email} onChange={this.handleEmail} placeholder='email' />
            <input name={this.state.email} onChange={this.handlePassword} placeholder='password' />

        </div>
        )
    }
}


export function LoginFormF (){
    const [email, setEmail, password, setPassword] = React.useState('')

    function handleEmail(e){
        setEmail(e.target.value)

    }

    function handlePassword(e){
        setPassword(e.target.value)

    }
    return (
        <div>
               <h2> Function example </h2>
            <input name={email} onChange={handleEmail} placeholder='email' />
            <input name={password} onChange={handlePassword} placeholder='password' />

            
        </div>
    )
}