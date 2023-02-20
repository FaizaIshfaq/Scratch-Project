import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState , useEffect, useRef} from 'react';
import './App.css';
import abd from './profile.jpeg';

function App() {
  const [open,setOpen]=useState(false);
  let menuRef=useRef();
  useEffect(()=>{
    let handler=(e)=>{
      if(!menuRef.current.contains(e.target)){
      setOpen(false);
      }
    };
    document.addEventListener("mousedown",handler)
    return()=>{
      document.removeEventListener("mousedown",handler)
    }
  });

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
          <img src={abd} />
        </div>
        <div className={`dropdown-menu ${open? 'active':'inactive'}`}>
          <h3>The Kiet<br/><span>website Designr</span></h3>
          <ul>
            <li className='dropdownItem'>
              <p>Dropdown1</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
