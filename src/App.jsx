import './App.css';
import axios from 'axios';

function App() {

  const googleOauth = () =>{
    fetch('https://localhost:8000/google/auth')
    .then(response => response.json())
      .then(json => console.log(json))
  }
  return (
    <div className="App">
      <b>Hello!</b> Here is your secret:
      <br />
      <div >Show me!</div>
      <br />
      <div onClick={()=> googleOauth()}>Google login</div>
      <br />
      <div>Github login</div>
      <br />
      <div>Facebook login</div>
      <br />
      <div>Discord login</div>
      <br />
      <div>Sign out</div>
    </div>
  );
}

export default App;
