import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cradekstra from "./Cardekstra";
import jurusan1 from "./../assets/Smk3.jpg";
import ekstra1 from "./../assets/smk4.jpg";
import ekstra2 from "./../assets/Smk5.jpg";

const Maincontent = () => {
    return (
        <div style={{ backgroundColor: '#28a745' }}>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-3">
                        <h1 className="display-4 fw-bold text-white">Eksplore Jurusan</h1>
                    </div>
                    <div className="col-12">
                        <Cardjurusan image={jurusan1} />
                    </div>
                    <div className="row">
                        <div className="col-12 text-center my-3">
                            <h1 className="display-4 fw-bold text-white">Ekstrakurikuler</h1>
                        </div>
                        <div className="col-12 my-3">
                            <Cradekstra image={ekstra1} description="Pramuka di SMK Al-Falah adalah pengalaman yang menginspirasi siswa untuk berkembang sebagai individu yang tangguh dan bertanggung jawab. Melalui kegiatan ini, siswa memperoleh keterampilan kepemimpinan, kerjasama tim, serta nilai-nilai seperti kemandirian dan keberanian, sambil menjelajahi alam dan memperluas pengetahuan mereka tentang lingkungan." />
                        </div>
                        <div className="col-12 my-3 my-3">
                            <Cradekstra image={ekstra2} description="Seni bela diri Silat Pagar Nusa di SMK Al-Falah adalah kegiatan yang memperkuat karakter siswa dengan disiplin, ketabahan, dan rasa hormat. Dalam latihan ini, siswa tidak hanya mempelajari teknik pertahanan diri, tetapi juga mengembangkan jiwa kepemimpinan, kerjasama tim, dan rasa percaya diri yang tinggi. Dengan terlibat dalam Silat Pagar Nusa, siswa memperoleh keterampilan fisik dan mental yang kuat untuk menghadapi tantangan di masa depan." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;