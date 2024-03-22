import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import MainContent from './MainContent.jsx';
import Footer from './Footer.jsx';
import './MajesticAcademy.css'

function App() {
  return(
    <>
     <Header/>
     <Navbar/>
     <div style={{ marginTop: '60px' }}>
        <MainContent />
     </div>
     <Footer/>
    </>   
  );

}

export default App
