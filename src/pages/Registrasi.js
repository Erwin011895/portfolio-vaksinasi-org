
function Registrasi() {
  return (
    <>
      <section className="page-title bg-registrasi">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="mb-4 text-lg" style={{color: 'white',}}>
                  Registrasi Vaksin Mandiri
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
              <div className="section-title">
                <h1>
                  <a>
                    <br />
                     FORM PRE-REGISTRASI VAKSIN COVID-19
                  </a>
                </h1>
                <p>
                  Form ini sebagai rekapan data kami untuk vaksin COVID-19. Form ini bersifat rahasia dan tidak di publikasikan ataupun disebarluaskan tanpa seizin organisasi kami. (vaksinasi.org)
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="alert alert-success">
                <p>
                  Sukses. Terima kasih telah mendaftar
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
            <div className="col-lg-6">
              <form action="onSubmit" encType="multipart/form-data" method="post">
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
                  <label htmlFor="birthdate">
                    <strong>
                       Tanggal Lahir
                      <span className="text-color">
                         *
                      </span>
                    </strong>
                  </label>
                  <input id="birthdate" className="form-control" name="birthdate" required="" type="date" />
                </div>
                <br />
                <div className="form-check">
                  <label>
                    <strong>
                       Jenis Kelamin
                      <span className="text-color">
                         *
                      </span>
                    </strong>
                  </label>
                  <input id="male" className="form-check-input" name="gender" required="" type="radio" value="Laki-Laki" />
                  <label htmlFor="male">
                     Laki-Laki
                  </label>
                  <br />
                  <input id="female" className="form-check-input" name="gender" required="" type="radio" value="Perempuan" />
                  <label htmlFor="female">
                     Perempuan
                  </label>
                </div>
                <br />
                <div className="form-check">
                  <label>
                    <strong>
                       Status Perkawinan
                      <span className="text-color">
                         *
                      </span>
                    </strong>
                  </label>
                  <input className="form-check-input" name="status_kawin" required="" type="radio" value="Belum Menikah" />
                  <label>
                     Belum Menikah
                  </label>
                  <br />
                  <input className="form-check-input" name="status_kawin" required="" type="radio" value="Sudah Menikah" />
                  <label>
                     Sudah Menikah
                  </label>
                </div>
                <br />
                <div className="form-check">
                  <label>
                    <strong>
                       Status Kehamilan
                      <span className="text-color">
                         *
                      </span>
                    </strong>
                  </label>
                  <input className="form-check-input" name="status_hamil" required="" type="radio" value="Tidak Hamil" />
                  <label>
                     Tidak Hamil
                  </label>
                  <br />
                  <input className="form-check-input" name="status_hamil" required="" type="radio" value="Sedang Hamil" />
                  <label>
                     Sedang Hamil
                  </label>
                </div>
                <br />
                <div className="form-check">
                  <label>
                    <strong>
                       Kewarganegaraan
                      <span className="text-color">
                         *
                      </span>
                    </strong>
                  </label>
                  <input className="form-check-input" name="nation" required="" type="radio" value="WNI" />
                  <label>
                     Warga Negara Indonesia
                  </label>
                  <br />
                  <input className="form-check-input" name="nation" required="" type="radio" value="WNA" />
                  <label>
                     Warga Negara Asing
                  </label>
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Alamat Domisili
                    <span className="text-color">
                       *
                    </span>
                  </strong>
                  <input className="form-control" name="alamat" required="" type="text" />
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Nama Perusahaan/Instansi Tempat Bekerja
                    <span className="text-color">
                       *
                    </span>
                  </strong>
                  <input className="form-control" name="nama_instansi" required="" type="text" />
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
                <div className="form-check">
                  <label>
                    <strong>
                       Riwayat terinfeksi COVID-19
                      <span className="text-color">
                         *
                      </span>
                    </strong>
                  </label>
                  <input className="form-check-input" name="status_infeksi" required="" type="radio" value="Pernah Terinfeksi" />
                  <label>
                     Pernah Terinfeksi
                  </label>
                  <br />
                  <input className="form-check-input" name="status_infeksi" required="" type="radio" value="Sedang Terinfeksi" />
                  <label>
                     Sedang Terinfeksi
                  </label>
                  <br />
                  <input className="form-check-input" name="status_infeksi" required="" type="radio" value="Tidak Terinfeksi" />
                  <label>
                     Tidak Terinfeksi
                  </label>
                  <br />
                  <input className="form-check-input" name="status_infeksi" required="" type="radio" value="Tidak Mengetahui" />
                  <label>
                     Tidak Mengetahui
                  </label>
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Gejala Klinis atau Komorbid
                    <span className="text-color">
                       *
                    </span>
                  </strong>
                  <input className="form-control" name="gejala_klinis" required="" type="text" />
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Lokasi Pemeriksaan
                    <span className="text-color">
                       *
                    </span>
                    <strong>
                      <input className="form-control" name="lokasi_pemeriksaan" required="" type="text" />
                    </strong>
                  </strong>
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     No. Kartu Keluarga
                    <span className="text-color">
                       *
                    </span>
                    <strong>
                      <input className="form-control" name="no_kk" required="" type="text" />
                    </strong>
                  </strong>
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     No. HP Lain (Kontak Darurat)
                    <span className="text-color">
                       *
                    </span>
                    <strong>
                      <input className="form-control" name="no_hp_lain" required="" type="text" />
                    </strong>
                  </strong>
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     No. KTP
                    <span className="text-color">
                       *
                    </span>
                    <strong>
                      <input className="form-control" name="no_ktp" required="" type="text" />
                    </strong>
                  </strong>
                </div>
                <br />
                <div className="form-group">
                  <strong>
                     Upload Foto KTP
                    <span className="text-color">
                       *
                    </span>
                    <strong>
                      <input className="form-control" name="foto_ktp" required="" type="file" />
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

export default Registrasi;
