// import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer section">
    <div className="container">
      <div className="row">
        {/*<div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget">
                <h4 className="text-capitalize mb-4">Company</h4>
                <ul className="list-unstyled footer-menu lh-35">
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </div>*/}
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="widget">
            <h4 className="text-capitalize mb-4">Quick Links</h4>
            <ul className="list-unstyled footer-menu lh-35">
              <li><a href="/">Tentang Kami</a></li>
              <li><a href="/mengenali-vaksin">Mengenali Vaksin COVID-19</a></li>
              <li><a href="/register">Registrasi Vaksin Mandiri</a></li>
              <li><a href="/database">Database Vaksinasi</a></li>
              <li><a href="/lapor">Lapor</a></li>
              <li><a href="contact-us">Kontak Kami</a></li>
            </ul>
          </div>
        </div>
        {/*<div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget">
                <h4 className="text-capitalize mb-4">Subscribe Us</h4>
                <p>Subscribe to get latest news article and resources  </p>
                <form action="#" className="sub-form">
                    <input type="text" className="form-control mb-3" placeholder="Subscribe Now ...">
                    <a href="#" className="btn btn-main btn-small">subscribe</a>
                </form>
            </div>
        </div>*/}
        <div className="col-lg-3 ml-auto col-sm-6">
          <div className="widget">
            <div className="logo mb-4">
              <h3><span>Vaksinasi.org</span></h3>
            </div>
            <h6><a href="mailto:vaksinasi.org@gmail.com" >vaksinasi.org@gmail.com</a></h6>
            {/*<a href="tel:+62-811-1313-435"><span className="text-color h4">+62 811-1313-435 (Hotline)</span></a>*/}
          </div>
        </div>
      </div>
      <div className="footer-btm pt-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="copyright">
              &copy; 2021 - Copyright Reserved to <span className="text-color">Vaksinasi.org</span> By Our Team
            </div>
          </div>
          <div className="col-lg-6 text-left text-lg-right">
            <ul className="list-inline footer-socials">
              <li className="list-inline-item"><a href="https://www.facebook.com/Vaksinasiorg-347457153026587" target="blank"><i className="ti-facebook mr-2"></i>Facebook</a></li>
              <li className="list-inline-item"><a href="https://twitter.com/vaksinasi_org" target="blank"><i className="ti-twitter mr-2"></i>Twitter</a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/vaksinasi.org_" target="blank"><i className="ti-instagram mr-2 "></i>Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
