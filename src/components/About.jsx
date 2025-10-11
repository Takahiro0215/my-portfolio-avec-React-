import photo from '../assets/photo-about.jpeg'
import './About.css'

function About() {
    return(
        <section id="about" className="about-section">
            <h2>À propos</h2>
            <img src={photo} alt="my photo" />
            <p>
                Bonjour ! Je m'appelle Takahiro Asami, Je viens du Japon et J'habite à Montréal.<br />
                Je suis passionné par le développement front-end, tout en ayant également des connaissances en back-end.<br />
                Travailleur et motivé, j'ai toujours envie d'apprendre de nouvelles compétances et je suis ouvert à la collaboration avec les autres.
            </p>
        </section>
    );
}

export default About;