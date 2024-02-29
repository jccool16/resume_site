import logo from './maxwell-cat.gif';
import './App.css';
import {SocialIcon} from 'react-social-icons';

function App() {
  return (
    <div className="App" >
      <header className="App-header" style={{marginLeft: 30}}>

        <img src={logo} className="Spinning-cat" alt="maxwell" style={{alignSelf: "center"}}/>

        <p style={{fontSize: 40, margin: 0}}>
          Jackson Franke
        </p>

        <p style={{fontSize: 20, fontWeight: 100, whiteSpace: "pre-wrap"}}>
          BS in Computer Systems Engineering<br/>
          Arizona State University
        </p>

        <p style={{fontSize: 20}}>
        </p>

        <p>
          <SocialIcon target="_blank" url="https://www.linkedin.com/in/jake-franke-9195b01ba"/>
          &nbsp;
          <SocialIcon target="_blank" url="https://github.com/jccool16"/>
          &nbsp;
          <SocialIcon target="_blank" href="https://www.discordapp.com/users/510270107604484128" url="https://www.discord.com"/>
        </p>
      </header>
    </div>
  );
}

export default App;
