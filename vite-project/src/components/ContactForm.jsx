import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import '../styles/ContactForm.css'

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactForm = () => {
    const [contact, setContact] = useState({name: "", number: ""});
    const {name, number} = contact;
    const navigate = useNavigate()
    const handleChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name.trim() === "" || number.trim() === "") {
            alert("All fields are required!");
            return;
        }
        try {
            await axios.post(CONTACTS_API, contact);
            setContact({name: "", number: ""})
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form_Form">
            <div>
                <input
                    className="name_Form"
                    placeholder="name"
                    value={name}
                    name="name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    className="name_Form"
                    placeholder="phone number"
                    value={number}
                    name="number"
                    onChange={handleChange}/>
            </div>
                <button
                    type="submit"
                    className="btn_Form"
                >Add
                </button>
        </form>
    )
}

export default ContactForm;