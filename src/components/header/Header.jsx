import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const logoUrl = "https://th.bing.com/th/id/R.54ec51e82f91ee740e5e911c4c4bae67?rik=XY1LsHhcOOjzGw&riu=http%3a%2f%2fchemtime.in%2fassets%2fbanner%2fthumb_0559070207Online_test_series_Logo_web.jpg&ehk=gANVcZo9ygpeIn4F1iXgdAA3MtZ4xzGOnOeo%2fePEtgE%3d&risl=&pid=ImgRaw&r=0";

    return (
        <div className="navContainer">
            <div className="leftPanel">
                <Link to="/">
                    <img src={logoUrl} alt="Logo" width={60} />
                </Link>
            </div>
            <div className="rightPanel">
                <Link to="/">Home</Link>
                <Link to="/testseries">All Test Series</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;
