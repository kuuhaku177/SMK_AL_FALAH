import Accor from "../components/Accordian";
import Footer from "../components/Footer";
import Profilsmk from "../components/Profilsekolah";
import NavScroll from "../components/navigation";
import backgroundImage from "../assets/bg.jpg"

const Profil = () =>{
    return (
        <div style={{ ...styles.background, backgroundImage: `url(${backgroundImage})` }}>
            <NavScroll/>
            <Profilsmk/>
            <Accor/>
            <Footer/>
        </div>
    )
}

const styles = {
    background: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
    },
};

export default Profil;