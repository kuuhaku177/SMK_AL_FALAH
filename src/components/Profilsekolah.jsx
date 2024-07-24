import React from 'react';
import logo from '../assets/logo.png'

class ProfilSekolah extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <img src={logo} alt="Logo Sekolah" style={styles.logo} />
                <h1 style={styles.heading}>INFORMASI SEKOLAH</h1>
                <div style={styles.info}>
                    <p><strong>Nama Sekolah :</strong> {this.props.nama}</p>
                    <p><strong>Sejarah Sekolah:</strong> {this.props.sejarah}</p>
                    <p><strong>NSPN  :</strong> {this.props.nspn}</p>
                    <p><strong>Kepala Sekolah :</strong> {this.props.kepalaSekolah}</p>
                    <p><strong>Alamat :</strong> {this.props.alamat}</p>
                    <div style={styles.contact}>
                        <p><strong>Kontak:</strong> {this.props.kontak}</p>
                    </div>
                </div>
            </div>
        ); 
    }
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    logo: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginBottom: '20px',
    },
    heading: {
        color: '#333',
        fontSize: '28px',
        marginBottom: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 'bold',
    },
    info: {
        padding: '10px',
        textAlign: 'left',
    },
    contact: {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '8px',
        marginTop: '20px',
    },
};

const Profilsmk = () => {
    return (
        <div>
            <ProfilSekolah
                nama="SMK Al FALAH"
                sejarah="Sejarah berdirinya SMK Al Falah dimulai atas keinginan para wali santri yang ingin melanjutkan pendidikan ke jenjang yang lebih tinggi. Hal ini dilakukan dengan tujuan untuk mempermudah pengawasan terhadap proses pembelajaran agama dan pendidikan formal bagi para santri. Pada tanggal 1 Juli 2017, SMK Al Falah resmi didirikan dengan menawarkan jurusan Bisnis Daring dan Pemasaran."
                nspn="69965958"
                kepalaSekolah="Bapak Masruri S.E S.Pd M.Pd"
                alamat="Jl. KH. Yusuf Tsanawi, desa buniayu Rt 05/03, kec. Tambak 53196"
                kontak="smkalfalahtambak@gmail.com"
            />
        </div>
    );
}

export default Profilsmk;