// import './Header.css';

function Header(props) {
  const pathname = document.location.pathname;

  return (
    <header className="navigation">
      <div className="header-top ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4">
              <div className="header-top-socials text-center text-lg-left text-md-left">
                <a href="https://www.facebook.com/Vaksinasiorg-347457153026587" target="_blank" rel="noreferrer"><i className="ti-facebook"></i></a>
                <a href="https://www.twitter.com/vaksinasi_org" target="_blank" rel="noreferrer"><i className="ti-twitter"></i></a>
                <a href="https://www.instagram.com/vaksinasi.org_" target="_blank" rel="noreferrer"><i className="ti-instagram"></i></a>
              </div>
            </div>
            
            <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
              <div className="header-top-info">
                <a href="mailto:vaksinasi.org@gmail.com" ><i className="fa fa-envelope mr-2"></i><span>vaksinasi.org@gmail.com</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  py-4" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
           <img src="/assets/images/brandlogo.png" width="150" height="50" alt="" />
          </a>

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars"></span>
          </button>
        
          <div className="collapse navbar-collapse text-center" id="navbarsExample09">
          <ul className="navbar-nav ml-auto">
            <li className={pathname === '/' ? 'nav-item active' : 'nav-item'}>
              <a className="nav-link" href={'/'}>Tentang Kami <span className="sr-only">(current)</span></a>
            </li>
            <li className={pathname === '/mengenali-vaksin' ? 'nav-item active' : 'nav-item'}>
              <a className="nav-link" href={'/mengenali-vaksin'}>Mengenali Vaksin COVID-19</a>
            </li>
            <li className={pathname === '/register' ? 'nav-item active' : 'nav-item'}>
              <a className="nav-link" href={'/register'}>Registrasi Vaksin Mandiri</a>
            </li>
            <li className={pathname === '/database' ? 'nav-item active' : 'nav-item'}>
              <a className="nav-link" href={'/database'}>Database Vaksinasi</a>
            </li>
            <li className={pathname === '/lapor' ? 'nav-item active' : 'nav-item'}>
              <a className="nav-link" href={'/lapor'}>Lapor</a>
            </li>
            <li className={pathname === '/contact-us' ? 'nav-item active' : 'nav-item'}>
              <a className="nav-link" href={'/contact-us'}>Kontak Kami</a>
            </li>
            {/*<li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
              <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li><a className="dropdown-item" href="#">Our company</a></li>
                  <li><a className="dropdown-item" href="#">Pricing</a></li>
              </ul>
            </li>*/}
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
