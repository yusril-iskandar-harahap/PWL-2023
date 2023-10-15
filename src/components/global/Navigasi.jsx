import { useNavigate } from "react-router-dom";
import "./Navigasi.css"

export default function Navigasi() {
    const navigate = useNavigate()

    return(
        <nav className='nav'>
            <ul>
                <li onClick={() => navigate('/')}>BERANDA</li>
                <li onClick={() => navigate('/About')}>ABOUT</li>
                <li onClick={() => navigate('/Kontak')}>KONTAK</li>
            </ul>
        </nav>
    );
}