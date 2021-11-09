import { Component } from "react/cjs/react.production.min";
import { getUsers } from "../Api/Users";


export default class UsersPage extends Component {

    state = {
        users: [],
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
    setActive =() =>{
        console.log('hey');
    }
    
    render(){
        return( <div> 
            <h2>Users</h2>
            <ul>
                {this.state.users.map((user)=>{
                    <li key={user.id}>
                        {user.name}
                        <button onClick={()=>this.setActive(user)}> View</button>
                        <button onClick={()=>this.setActive(user)}> Delete</button>
                    </li>
                })}
            </ul>
        </div>
        )
    }
}

