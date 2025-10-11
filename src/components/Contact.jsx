import "./Contact.css"

function Contact() {
    return(
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            <p>N'hésitez pas à me contacter via ce formulaire :</p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Votre nom" required />
                <input type="text" placeholder="Votre email" required />
                <textarea placeholder="Votre message" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
}

export default Contact;