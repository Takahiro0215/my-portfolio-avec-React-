import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return(
        <div className="nav-bar">
            <ul>
                <li><Link to="/">🏠 Home</Link></li>
                <li><Link to="/about">🧑‍💻 About</Link></li>
                <li><Link to="/skills">💻 Skills</Link></li>
                <li><Link to="/projects">📂 Projects</Link></li>
                <li><Link to="/contact">✉️ Contact</Link></li>
            </ul>
        </div>
    );
}

export default Header;