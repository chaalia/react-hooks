import './App.css';
import {BrowserRouter,Route, Routes, Link} from "react-router-dom";
import { Component } from 'react/cjs/react.production.min';
import UsersPage from './pages/Userspages'
import UserPage from './pages/Userpage';

const HomePage = () => <p className="App">home page</p>
const AboutPage = () => <p className="App">About page</p>

class App extends Component {

  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>{" "}
        <Link to="/users">Users</Link>{" "}
        <Link to="/about">About</Link>
        
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="users" exact element={<UsersPage />} />
          <Route path="users/:id" exact element={<UserPage/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
