
import ContactBar from "./ContactBar"
import Navigation from './Navigation'


const Header = ( { logo }) => {

  return (
    <>
      <ContactBar />
      <header className="App-header">
        
        <div className="nav-bar"> 
          <img src={logo} className="App-logo" alt="logo" />
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