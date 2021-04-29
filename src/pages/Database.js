
function Database() {
  return (
    <>
      <section className="page-title bg-database">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="mb-4 text-lg" style={{color: 'white',}}>
                  Database
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-2 position-relative">
        <form>
          <div className="container">
            <div className="row mb-4">
              <div className="col-sm-12 col-md-3">
                <input className="form-control" name="namadepan" required="" type="text" placeholder="Nama Depan" />
              </div>
              <div className="col-sm-12 col-md-3">
                <input className="form-control" name="namabelakang" required="" type="text" placeholder="Nama Belakang" />
              </div>
              <div className="col-sm-12 col-md-3">
                <input className="form-control" name="no_ktp" required="" type="text" placeholder="NIK KTP" />
              </div>
              <div className="col-sm-12 col-md-3">
                <button className="btn_cari" type="submit">
                   Cari
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="alert alert-success">
                  Peserta Terdaftar
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="alert alert-danger">
                  Peserta Tidak Terdaftar
                </div>
              </div>
            </div>

          </div>
        </form>
      </section>
    </>
  );
}

export default Database;
