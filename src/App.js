// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';
import ContactUs from './pages/ContactUs.js';
import MengenaliVaksin from './pages/MengenaliVaksin.js';
import Database from './pages/Database.js';
import Registrasi from './pages/Registrasi.js';
import Lapor from './pages/Lapor.js';

function App() {
  const routePages = {
    '/': <Home/>,
    '/mengenali-vaksin': <MengenaliVaksin/>,
    '/database': <Database/>,
    '/register': <Registrasi/>,
    '/lapor': <Lapor/>,
    '/contact-us': <ContactUs/>
  };

  const pathname = document.location.pathname;
  const page = routePages[pathname];

  return (
    <>
      <Header/>
      {page}
      <Footer/>
    </>
  );
}

export default App;
