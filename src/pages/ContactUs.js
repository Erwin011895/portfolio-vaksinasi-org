
function ContactUs() {
  return (
    <>
      <section className="page-title bg-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="mb-4 text-lg" style={{color: 'white',}}>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-sm-12">
              <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                <span className="text-muted">Kami profesional</span>
                <h2 className="mb-5 mt-2">Silahkan hubungi kami apabila ada pertanyaan<br/>lebih lanjut</h2>
                <div>
                  <div className="row">
                    <div className="col-md-1">
                      <i className="ti-email mr-3"></i>
                    </div>
                    <div>vaksinasi.org@gmail.com</div>
                  </div>
                  <div className="row">
                    <div className="col-md-1">
                      <a href="https://www.facebook.com/Vaksinasiorg-347457153026587" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f mr-3"></i></a>
                    </div>
                    <div>vaksinasi.org</div>
                  </div>
                  <div className="row">
                    <div className="col-md-1">
                      <a href="http://twitter.com/vaksinasi_org" target="_blank" rel="noreferrer"><i className="fab fa-twitter mr-3"></i></a>
                    </div>
                    <div>vaksinasi_org</div>
                  </div>
                  <div className="row">
                    <div className="col-md-1">
                      <a href="https://www.instagram.com/vaksinasi.org_" target="_blank" rel="noreferrer"><i className="fab fa-instagram mr-3">
                  </i></a>
                    </div>
                    <div>vaksinasi.org_</div>
                  </div>
                    
                </div>
                
                <ul className="social-icons list-inline mt-5">
                  
                  <li className="list-inline-item">
                      <a href="http://facebook.com/Vaksinasiorg-347457153026587" target="blank"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  
                  <li className="list-inline-item">
                      <a href="https://twitter.com/vaksinasi_org" target="blank"><i className="fab fa-twitter"></i></a>
                  </li>
                  
                  <li className="list-inline-item">
                      <a href="https://www.instagram.com/vaksinasi.org_" target="blank"><i className="fab fa-instagram"></i></a>
                  </li>
                    
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
