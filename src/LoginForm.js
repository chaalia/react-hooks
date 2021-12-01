import React, { useEffect } from "react";
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

    componentDidMount=() => {
        console.log("class comp did mount");
    }

    componentDidUpdate=() => {
        console.log("class comp did update");
    }

    componentWillUnmount=() => {
        console.log("class comp will unmount");
    }

    render(){
        return (
        <div>
            class example

            <input name={this.state.email} onChange={this.handleEmail} placeholder='email' />
            <input name={this.state.password} onChange={this.handlePassword} placeholder='password' />

        </div>
        )
    }
}


export function LoginFormF (){
    const [email, setEmail ] = React.useState('')
    const [password, setPassword] = React.useState('')
    function handleEmail(e){
        setEmail(e.target.value)

    }

    function handlePassword(e){
        setPassword(e.target.value)

    }
    useEffect(()=>{
        console.log("function comp did effect");
        return () => { 
            console.log("FUNCTION comp will unmount");
        };
    }
        , []
    )

    useEffect(()=>{
        console.log("function component did update");}
        , [email, password]
    )
    return (
        <div>
               <h2> Function example </h2>
            <input name={email} onChange={handleEmail} placeholder='email' />
            <input name={password} onChange={handlePassword} placeholder='password' />

            
        </div>
    )
}