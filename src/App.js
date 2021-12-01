import './App.css';
import { useState} from 'react';
// import { LoginFormC, LoginFormF } from './LoginForm';
import User from './User';


function App() {

  const [visible, setVisible] = useState(true);

 {
  return (
    <div >

    {visible ?
    <>
        {/* <LoginFormC />
        <LoginFormF />  */}
        <User />
    </>
      :
      null }
      <button onClick={() =>{ setVisible(! visible)} }>Toggle</button>
      </div>
  );
}
}

export default App;
