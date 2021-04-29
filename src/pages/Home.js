
function Home() {
  return (
    <>
    	<section className="page-title bg-home">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-right" style={{color: 'white',}}>
                <h1 className="mb-4" style={{color: 'white',}}>vaksinasi.org</h1>
                <p className="mb-4">
                  cari tahu info <br/>
                  seputar vaksin disini <br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Vaksinasi.org</span>
                <h2 className="mt-3 content-title ">Kami adalah sebuah Organisasi Non-Profit</h2>
              </div>
              <div>
                  <p className="mb-3">Kami menyediakan informasi seputar jenis-jenis vaksin COVID-19, cara registrasi vaksin secara mandiri, melacak database untuk vaksinasi, dan menyediakan ruang diskusi/lapor terkait efek samping dan manfaat setelah vaksin. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
