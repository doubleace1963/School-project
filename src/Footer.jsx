import React from 'react'
import './MajesticAcademy.css'




function Footer() {
    return (
      <div style={{ backgroundColor: 'rgb(212, 212, 212)', height: '90px', paddingTop: '30px', paddingLeft: '150px' }}>
        <div style={{ margin: 'auto' }}>
          <a href="Majestic Academy.html" target="_self" style={{ color: 'rgb(191, 184, 184)', fontSize: '15px' }} className="hover-underline-animation"> Home</a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="MAaboutus.html" target="_self" style={{ color: 'rgb(191, 184, 184)', fontSize: '15px' }} className="hover-underline-animation"> About Us</a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="#" target="_self" style={{ color: 'rgb(191, 184, 184)', fontSize: '15px' }} className="hover-underline-animation"> Gallery</a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="#" target="_self" style={{ color: 'rgb(191, 184, 184)', fontSize: '15px' }} className="hover-underline-animation"> News</a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="#" target="_self" style={{ color: 'rgb(191, 184, 184)', fontSize: '15px' }} className="hover-underline-animation">Contact Us</a>
        </div>
        <p style={{ color: 'rgb(191, 184, 184)' }}>Copyright &copy;2023, Majestic Academy, Lagos</p>
        <p style={{ color: 'rgb(191, 184, 184)', textAlign: 'right', marginRight: '50px', marginBottom: '20px' }}>Inspired by <a href="kingscollegelagos.sch.ng" target="_blank" style={{ color: 'white' }} className="hover-underline-animation">King's College</a></p>
      </div>
    );
  }
  export default Footer