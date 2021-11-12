import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { LoginFormC, LoginFormF } from './LoginForm';



class App extends Component {

  render() {
  return (
      <div className="App">
        <LoginFormC />
        <LoginFormF />

      </div>
  );
}
}

export default App;
