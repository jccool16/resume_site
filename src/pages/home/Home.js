import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import {SocialIcon} from 'react-social-icons';
import logo from './maxwell-cat.gif';

const Home = props => {
    return (
    <div className="Home" >
        <header className="Home-header">
          <img src={logo} alt="maxwell" style={{alignSelf: "center"}}/>
        </header>
        <h className="Home-name">
            <h1 className="Home-name header">
                Jackson Franke
            </h1>
            <h1 className="Home-name sub">
                BS in Computer Systems Engineering<br/>
                Arizona State University
            </h1>
        </h>

        <p>
                    <SocialIcon target="_blank" url="https://www.linkedin.com/in/jake-franke-9195b01ba"/>
            &nbsp;  <SocialIcon target="_blank" url="https://github.com/jccool16"/>
            &nbsp;  <SocialIcon target="_blank" href="https://www.discordapp.com/users/510270107604484128" url="https://www.discord.com"/>
        </p>
    </div>
    )
}

Home.propTypes = {}

export default Home