import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import { getUsers } from "../Api/Users";


export default class UserPage extends Component {

    state = {
        user: {},
    }

    componentDidMount = () =>{
        getUsers().then(response => {
            this.setState({
                users: response.data
            });
            console.console.log( this.setStat.users);

        })
        .catch(error=>{
            alert('there is an error')
        });
    }
    
    render(){
        return( 
        <div> 
            <h2>Users</h2>
            <ul>
                {this.state.users.map((user)=>{
                    <li key={user.id}>
                        {user.name}
                        <Link to={"/users/" + user.id}> View</Link>
                    </li>
                })}
            </ul>
        </div>
        )
    }
}