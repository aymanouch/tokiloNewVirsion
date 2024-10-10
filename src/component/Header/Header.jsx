import React from 'react';
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import './header.css';
import logo from "../../img/tokil-logo.png";


function Header({gsap}) {
    const [menuBool, SetMenuBool] = useState(0);
  function showMenu(){
    let ecranSize = window.innerWidth ;
    if(!menuBool && ecranSize <= 720) {
      gsap.to("ul", {height:"100vh"});
      SetMenuBool(!menuBool)
    } else{
      gsap.to("ul", {height:"0vh"});
      SetMenuBool(!menuBool)
    }
  }
  return (
    <>
    <header className="App-header">
        <nav>
          <div className="menuIcon" onClick={()=>showMenu()}><CiMenuBurger size="2rem"/></div>
          <ul className='menu-container'>
            <li className='logo'><a href='/'><img alt="tokilo" src={logo}/></a></li>
            <li><a className ='link' href='/'>Store</a></li>
            <li><a className ='link' href='/'>About</a></li>
            <li><a className ='link' href='/'>Contact</a></li>
            </ul>
        </nav>
        <div className='bigTitle'>
          <h1>tokilo</h1>
          <br/><span><i>SOLDES</i> jusqu'à 60 %</span>
        </div>
      </header>
    </>
  )
}

export default Header