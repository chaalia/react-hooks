import axios from "axios";

export async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console(response)
    return response
}


export async function getUser(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    return response;
  }
