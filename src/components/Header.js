
import { Link } from 'react-router-dom'

import ContactBar from "./ContactBar"
import Navigation from './Navigation'


const Header = ( { logo }) => {

  return (
    <>
      <ContactBar />
      <header className="App-header">
        
        <div className="nav-bar"> 
          <Link to="/mba-distilled">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Navigation />
        </div>
    
        <div className="h1-title">
         <span>THE</span>
          <h1>
            MBA <br/>
            DISTILLED
          </h1> 
        </div>

      </header>
    </>
  )
  
}

export default Header