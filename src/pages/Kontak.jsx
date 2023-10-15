import Header from '../components/global/Header';
import Content from '../components/global/Content';
import Footer from '../components/global/Footer';
import "../components/global/Footer.css"

const Kontak =() => {
    return(
        <div>
            <Header />
            <h3>KONTAK</h3>
            <Content/>
            <h4>Hubungi Kami di</h4>
            <h4>0896-xxxx-xxxx</h4>
            <h4>Atau email Kami melalui</h4>
            <h4>yusril.119140223@student.itera.ac.id</h4>
            <form>
                <p>========</p>
                <label>
                    Pesan
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <p>========</p>
            </form>
            <Footer/>
        </div>
    )
}

export default Kontak