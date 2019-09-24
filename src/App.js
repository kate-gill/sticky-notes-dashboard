import React from 'react';
import './App.css';
import Theme from './Theme';
import Greeting from './Greeting';
import Clock from './Clock';
import Weather from './Weather';
import Notes from './Notes';

const App = () => {

  const[theme, toggleTheme] = Theme();

  return(
    <div className={theme === 'dark' ? 'app dark' : 'app light'}>
      <nav className={theme === 'dark' ? 'navDark' : 'navLight'}>
        <div className={theme === 'dark' ? 'menuLeftDark' : 'menuLeftLight'}>
          <Greeting theme={theme}/>
        </div>
        <div className={theme === 'dark' ? 'menuCentralDark' : 'menuCentralLight'}>
          <i className="sun large material-icons">brightness_5</i>
          <input checked={theme === 'dark' ? true : false} className="toggle" type="checkbox" onClick={toggleTheme} readOnly/>
          <i className="moon large material-icons">brightness_3</i>
          <Clock />
        </div>
        <div className={theme === 'dark' ? 'weatherAppDark' : 'weatherAppLight'}>
          <Weather theme={theme}/>
        </div>
      </nav>
      <Notes theme={theme}/>
      <footer className={theme === 'dark' ? 'footDark' : 'footLight'}>2019 &copy; Sticky Notes Dashboard</footer>
    </div>
  )
}


export default App;
