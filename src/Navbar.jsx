import React from 'react';
import './MajesticAcademy.css';
import img2 from './Images/kenny-eliason-zFSo6bnZJTw-unsplash.jpg';


function Navbar() {
    const navbarStyle = {
      backgroundImage: `url(${img2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '1000px', // Set an appropriate height for the navbar
      minWidth: '1000px',
      position: 'relative', // Ensure children elements are positioned relative to the navbar
      color: 'white', // Default text color
      width: '100vw',

    };
  
    return (
      <div className="navbar" style={navbarStyle}>
        <div className="topleft" style={{ fontSize: '25px', fontWeight: 'bolder' }}>MAJESTIC ACADEMY</div>
        <div className="topright">
          <div style={{ fontSize: '17px', fontWeight: 'bold' }}>
            <a href="#" target="_self" className="hover-underline-animation">HOME</a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="MAaboutus.html" target="_self" className="hover-underline-animation">ABOUT US</a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="#" target="_self" className="hover-underline-animation">GALLERY</a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="#" target="_self" className="hover-underline-animation">NEWS</a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="#" target="_self" className="hover-underline-animation">CONTACT US</a>
          </div>
        </div>
        <div className="centered" style={{ fontWeight: 'bolder', fontSize: '60px' }}>MAJESTIC ACADEMY</div>
        <div className="centered2" style={{ fontWeight: 'bold', fontSize: '15px' }}><i>"Develop a passion for Learning"</i></div>
      </div>
    );
  }
  export default Navbar