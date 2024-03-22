import React from 'react'
import './MajesticAcademy.css'
import img3 from './Images/service-37.jpg';
import img4 from './Images/service-723.jpg';
import img5 from './Images/service-970.jpg';
import img6 from './Images/principal-566.jpg';
import img7 from './Images/gallery-90.jpg';
import img8 from './Images/gallery-326.jpg';
import img9 from './Images/gallery-477.jpg';
import img10 from './Images/gallery-690.jpg';
import img11 from './Images/gallery-940.jpg';
import img12 from './Images/gallery-986.jpg';



function MainContent() {
    return (
      <div>
        <div style={{fontSize: '20px', textAlign: 'center', color: 'rgb(144, 138, 138)'}}> <i>About us</i></div>
        <p style={{ fontSize: '40px', textAlign: 'center', fontWeight: 'bolder' }}>Quality Education For Your Children</p>
        <p className="underline"></p>
          <div className="underline2"></div>
          <br></br><br></br>
        <div style={{ display: 'flex' }}>
          <div className="tablehover">
            <div>
              <img src={img3} width="400px" className="zoom" alt="Service 1" />
            </div>
            <div className="table">
              <div style={{ fontSize: '25px', fontWeight: 'bold' }}>Other Activities</div>
              <br />
              <div style={{ marginLeft: '50px', marginRight: '50px', color: 'rgb(144, 138, 138)' }}>
                Sporting Facilities: Our Sporting facilities are standard and we encourage students to show all skills and passion within.
              </div>
              <br /><br /><br /><br />
              <div><a href="#" target="_self" className="b">KNOW MORE</a></div>
            </div>
          </div>
          <div className="tablehover2">
            <div><img src={img4} width="400px" className="zoom" alt="Service 2" /></div>
            <div className="table2">
              <div style={{ fontSize: '25px', fontWeight: 'bold' }}>Passionate Staff</div>
              <br />
              <div style={{ marginLeft: '50px', marginRight: '50px', color: 'rgb(144, 138, 138)' }}>
                We have an amazing group of passionate teaching and non-teaching staff who really love what they do.
              </div>
              <br /><br /><br /><br />
              <div><a href="#" target="_self" className="b">KNOW MORE</a></div>
            </div>
          </div>
          <div className="tablehover3">
            <div><img src={img5} width="400px" className="zoom" alt="Service 3" /></div>
            <div className="table3">
              <div style={{ fontSize: '25px', fontWeight: 'bold' }}>Security</div>
              <br />
              <div style={{ marginLeft: '50px', marginRight: '50px', color: 'rgb(144, 138, 138)' }}>
                Our environment is secured with visible presence of security personnels and equipment.
              </div>
              <br /><br /><br /><br />
              <div><a href="#" target="_self" className="b">KNOW MORE</a></div>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div style={{ display: 'flex' }}>
          <div style={{ paddingLeft: '100px' }}>
            <p style={{ fontSize: '40px', fontWeight: 'bolder', backgroundColor: 'white', width: '500px' }}>A Welcome Address From The Principal.</p>
            <p className="underline3"></p>
            <p style={{ fontSize: '20px', backgroundColor: 'white', width: '850px', color: 'rgb(144, 138, 138)' }}>
              On behalf of the management, staff and students of Majestic Academy, I welcome you to our official website.Majestic Academy is an all-boys school founded September 1909, situated at 3 Catholic Mission Street, Lagos Island, LagosAt Majestic Academy, excellence is our watch word, we believe that whatever is worth doing at all is worth doing well, we seek to establish this standard in our every operations and instill this value in our Wards.Every boy child committed in our care is guaranteed quality education under skilled instructors.  We aim to establish a solid foundation for all our Children through their academic and professional journey in life. We are also interested in the physical, social and psychological development of our Students, edging them to become responsible and impact driven  members of society.Our facilities are up-to-date making us infra-structurally positioned to deliver quality education to your children. We welcome applications from all parts of the country. We are ever ready to make Kings out of your male wards.Connect with us via MajesticAcademylagos@yahoo.com. We look forward to having a rewarding relationship with you. Welcome to our Website!
            </p>
            <p style={{ fontSize: '20px' }}><i>Principal</i></p>
          </div>
          <div style={{ paddingLeft: '50px', margin: 'auto' }}>
            <img src={img6} width="92%" alt="Principal" />
          </div>
        </div>
        <div style={{ backgroundColor: 'rgb(241, 241, 241)', height: '1000px' }}>
          <br /><br />
          <p style={{ fontSize: '20px', textAlign: 'center', color: 'rgb(144, 138, 138)' }}><i>Latest News</i></p>
          <p style={{ fontSize: '40px', textAlign: 'center', fontWeight: 'bolder' }}>WE KEEP YOU IN THE KNOW</p>
          <p className="underline"></p>
          <div className="underline2"></div>
          <br /><br /><br />
          <div style={{ display: 'flex' }}>
            <div className="tablehover">
              <div className="table0" style={{ height: '500px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '25px' }}>SECOND TERM 2023/2024 NEWSLETTER TO PARENT/GUARDIAN</div>
                <p style={{ marginLeft: '50px', marginRight: '50px', fontSize: '18px', color: 'rgb(144, 138, 138)' }}>
                  MAJESTIC ACADEMY, LAGOS SECOND-TERM NEWSLETTER TO PARENTS. Date: 4th April, 2024 We give glory to the Almighty God who has been gracious and helpful throughout this second Term. We particularly appreciate and thank our esteem parents/guardians for their support and commitmentMy profound gratitude...
                </p>
                <br /><br /><br /><br />
                <div><a href="#" target="_self" className="b">KNOW MORE</a></div>
              </div>
            </div>
            <div className="tablehover2">
              <div className="table0" style={{ height: '500px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '25px' }}>FIRST TERM 2023/2024 NEWSLETTER TO PARENT/GUARDIAN</div>
                <p style={{ marginLeft: '50px', marginRight: '50px', fontSize: '18px', color: 'rgb(144, 138, 138)' }}>
                  MAJESTIC ACADEMY, LAGOS FIRST TERM NEWSLETTER TO PARENTS 9th December, 2024   Protocol.   We thank the Almighty God for sustaining us to the end of First Term 2023/2024 Academic Session. We appreciate you our Esteemed Parents/Guardians for your supportive...
                </p>
                <br /><br /><br /><br /><br />
                <div><a href="#" target="_self" className="b">KNOW MORE</a></div>
              </div>
            </div>
            <div className="tablehover3">
              <div className="table0" style={{ height: '500px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '25px' }}>NOTABLE DATES From The Calendar of Events</div>
                <p style={{ marginLeft: '15px', marginRight: '15px', fontSize: '18px', color: 'rgb(144, 138, 138)' }}>Event Calendar</p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div><a href="#" target="_self" className="b">KNOW MORE</a></div>
              </div>
            </div>
          </div>
          <br /><br /><br /><br /><br />
          <div>
            <div><a href="#" target="_self" className="c" style={{ marginLeft: '600px', color: 'white' }}>EXPLORE MORE</a></div>
          </div>
        </div>
        <br /><br /><br /><br />
        <div>
          <p style={{ textAlign: 'center', color: 'rgb(144, 138, 138)' }}><i>Just a sneak peek at what we've been up to.</i></p>
          <p style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '50px' }}>From Our Gallery</p>
          <div className="underline"></div>
          <br />
          <div className="underline2"></div>
        </div>
        <br /><br />
        <div>
          <img src={img7} style={{ width: '400px', height: 'auto', marginLeft: '50px' }} alt="Gallery Image 1" />
          <img src={img8} style={{ width: '400px', height: 'auto', marginLeft: '50px' }} alt="Gallery Image 2" />
          <img src={img9} style={{ width: '400px', height: 'auto', marginLeft: '50px' }} alt="Gallery Image 3" />
        </div>
        <div>
          <img src={img10} style={{ width: '400px', height: 'auto', marginLeft: '50px', marginTop: '30px' }} alt="Gallery Image 4" />
          <img src={img11} style={{ width: '400px', height: 'auto', marginLeft: '50px', marginTop: '30px' }} alt="Gallery Image 5" />
          <img src={img12} style={{ width: '400px', height: 'auto', marginLeft: '50px', marginTop: '30px' }} alt="Gallery Image 6" />
        </div>
        <br /><br /><br /><br /><br /><br />
        <div style={{ backgroundColor: 'rgb(78, 76, 76)', height: '600px' }}>
          <br /><br />
          <p style={{ textAlign: 'center', color: 'white' }}><i>Parents Testimonial</i></p>
          <p style={{ textAlign: 'center', color: 'white', fontWeight: 'bolder', fontSize: '40px' }}>We make sure our parents get the best of their wards.</p>
          <div className="underline"></div>
          <div className="underline2"></div>
          <div style={{ display: 'flex' }}>
            <div className="tablehover">
              <div className="table">
                <br />
                <p style={{ marginLeft: '30px', marginRight: '30px', color: 'rgb(144, 138, 138)' }}><i>"Your teachers are awesome, you are doing a wonderful job and I am super grateful."</i></p>
                <br /><br />
                <p style={{ marginLeft: '30px', marginRight: '30px', fontSize: '25px', fontWeight: 'bolder' }}>MR. Richard Effiong</p>
              </div>
            </div>
            <div className="tablehover2">
              <div className="table2">
                <br />
                <p style={{ marginLeft: '50px', marginRight: '50px', color: 'rgb(144, 138, 138)' }}><i>"Admission process at Majestic Academy this year was seamless, stress-free, and well organized. The ICT staff were always there to attend to parents 24/7."</i></p>
                <br />
                <p style={{ marginLeft: '50px', marginRight: '50px', fontSize: '25px', fontWeight: 'bolder' }}>MRS. Joy Aderonke</p>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div style={{ fontSize: '40px', fontWeight: 'bolder', paddingLeft: '100px' }}>
          <p>Subscribe to Our Newsletter</p>
        </div>
        <div className="underline3" style={{ marginLeft: '100px' }}></div>
        <div style={{ display: 'flex' }}>
          <div style={{ fontWeight: 'lighter', paddingLeft: '100px' }}>
            <p style={{ color: 'rgb(144, 138, 138)' }}>BE THE FIRST TO KNOW WHAT'S HAPPENING.</p>
          </div>
          <form>
            <div style={{ display: 'flex' }}>
              <div className="container" style={{ marginLeft: '500px', borderRadius: '20px' }}>
                <input type="text" placeholder="Enter Email address" name="mail" required />
              </div>
              <div className="container">
                <input type="submit" value="Subscribe now" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  export default MainContent