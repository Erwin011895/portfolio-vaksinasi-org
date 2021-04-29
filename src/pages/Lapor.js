
function Lapor() {
  return (
    <>
      <section className="page-title bg-lapor">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="mb-4 text-lg" style={{color: 'white',}}>
                  Lapor
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section service border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="col-lg-12">
                <div className="alert alert-success">
                  <p>
                    Sukses. Terima kasih telah mengisi form lapor
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="alert alert-danger">
                  <p>
                    Gagal. Terjadi kesalahan sistem. Silahkan coba kembali.
                  </p>
                </div>
              </div>
              <div className="section-title">
                <h1>
                  <a>
                    <br />
                     FORM LAPORAN VAKSIN COVID-19
                  </a>
                </h1>
                <p>
                  Form ini sebagai rekapan data kami untuk vaksin COVID-19. Form ini bertujuan sebagai referensi bagi orang yang belum melakukan vaksinasi. (vaksinasi.org)
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="onSubmit" enctype="multipart/form-data" method="post">
                <label className="">
                  <strong>
                     Nama Lengkap
                    <span className="text-color">
                       *
                    </span>
                  </strong>
                </label>
                <div className="row">
                  <div className="col">
                    <input className="form-control" name="fname" required="" type="text" placeholder="Nama Pertama" />
                  </div>
                  <div className="col">
                    <input className="form-control" name="lname" required="" type="text" placeholder="Nama Terakhir" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>
                    <strong>
                       Email
                      <span className="text-color">
                         *
                      </span>
                    </strong>
                  </label>
                  <input className="form-control" name="email" required="" type="email" />
                </div>
                <br />
                <div className="form-group">
                  <label>
                    <strong>
                       No. HP
                      <span className="text-color">
                         *
                      </span>
                    </strong>
                  </label>
                  <input className="form-control" name="no_hp" required="" type="text" />
                </div>
                <br />
                <div className="form-group">
                  <label for="tanggalvaksin">
                    <strong>
                       Tanggal Vaksin
                      <span className="text-color">
                         *
                      </span>
                    </strong>
                  </label>
                  <input id="tanggalvaksin" className="form-control" name="tanggalvaksin" required="" type="date" />
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Nama Vaksin
                    <span className="text-color">
                       *
                    </span>
                  </strong>
                  <select className="custom-select mb-3" name="namavaksin">
                    <option selected="selected">
                      Jenis - Jenis Vaksin
                    </option>
                    <option value="Sinovac">
                      Vaksin sinovac
                    </option>
                    <option value="Astrazaneca">
                      Vaksin astrazaneca
                    </option>
                    <option value="J&amp;J">
                      Vaksin J&amp;J
                    </option>
                    <option value="Pfizer">
                      Vaksin pfizer
                    </option>
                    <option value="Lain_Lain">
                      Lain-Lain
                    </option>
                  </select>
                  <strong>
                     Nama Vaksin Lain
                  </strong>
                  <small>
                     Isi jika anda mendapatkan Vaksin Jenis lain
                  </small>
                  <input className="form-control" name="vaksinlain" type="text" />
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Lokasi Menerima
                    <span className="text-color">
                       *
                    </span>
                  </strong>
                  <input className="form-control" name="lokasimenerima" required="" type="text" />
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Bagaimana Pelayanan Vaksin?
                    <span className="text-color">
                       *
                    </span>
                  </strong>
                  <input className="form-control" name="pelayanan_vaksin" required="" type="text" />
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Keluhan yang dirasakan setelah menerima vaksin
                    <span className="text-color">
                       *
                    </span>
                    <strong>
                      <input className="form-control" name="keluhan" required="" type="text" />
                    </strong>
                  </strong>
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Kritik dan Saran
                    <span className="text-color">
                       *
                    </span>
                    <strong>
                      <input className="form-control" name="kritik_saran" required="" type="text" />
                    </strong>
                  </strong>
                </div>
                <br />
                <div>
                  <button type="submit" value="Submit">
                     Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lapor;
