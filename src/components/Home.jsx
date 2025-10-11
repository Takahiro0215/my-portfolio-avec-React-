import './Home.css';
import photo from '../assets/photo.jpeg';

function Home() {
    return(
        <section id="home" className="home-section">
            <div className="home-left">
                <h2>Bonjour, je suis</h2>
                <h1 className='typing-effect'>Takahiro Asami</h1>
                <h3>Un <span  className='highlight-yellow'>développeur web créatif</span> du <span className='highlight-red'>Japon</span></h3>
                <p>Je suis un développeur créatif basé à Montreal, passionné et dévoué à mon travail.</p>
            </div>
            <div className="home-right">
                <img src={photo} alt="myself" />
            </div>
        </section>
    )
}

export default Home;