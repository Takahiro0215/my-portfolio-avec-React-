import "./Footer.css"

function Footer() {
    return(
        <footer className="footer">
            <p>&copy; 2025 Takahiro Asami | Développeur Front-End | Réalisé avec React</p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/takahiro-asami-76171b293" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Takahiro0215" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="mailto:takahiroasami02@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
        </footer>
    );
}

export default Footer;