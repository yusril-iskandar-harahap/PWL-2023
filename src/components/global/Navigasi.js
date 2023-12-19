import "./Navigasi.css"
import myKeranjang from '../../components/image/keranjang.png';

export default function Navigasi() {
    return(
        <nav className="App-nav">
            <ul>
                <li><a href="http://localhost:3000/">Home</a></li>
                <li><a href="http://localhost:3000/profile">Profile</a></li>
                <li><a href="http://localhost:3000/login">Login</a></li>
                <li><a href="http://localhost:3000/signin">Sign In</a></li>
                <li><a href="http://localhost:3000/cart"><img src={myKeranjang} alt="" /></a></li>
            </ul>
        </nav>
    );
}