import './App.css';
import { Component, useState} from 'react';
import { LoginFormC, LoginFormF } from './LoginForm';


function App() {

  const [visible, setVisible] = useState(true);

 {
  return (
    <div >

    {visible ?
    <>
        <LoginFormC />
        <LoginFormF /> </>
      :
      null }
      <button onClick={() =>{ setVisible(! visible)} }>Toggle</button>
      </div>
  );
}
}

export default App;
