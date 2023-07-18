import ContactForm from "./components/ContactForm.jsx";
import './styles/NewContact.css'

const NewContact = () => {
    return (
        <div className="container">
            <div className="header_New">
                <h1 className="header_New-text">New Contact</h1>
            </div>
            <div className="input_New">
                <ContactForm/>
            </div>

        </div>
    )
}

export default NewContact;