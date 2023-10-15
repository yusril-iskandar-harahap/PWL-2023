import Header from '../components/global/Header';
import Content from '../components/global/Content';
import Footer from '../components/global/Footer';
import logo from '../components/logo512.png';


const Beranda =() => {
    return(
        <div>
            <Header />
            <h3>BERANDA</h3>
            <Content/>
            <h4>Belajar React JS</h4>
            <img src={logo} alt="Logo React" height={200} width={200}/>
            <Footer/>
        </div>
    )
}

export default Beranda