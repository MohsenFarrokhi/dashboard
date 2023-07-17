import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    placeholder="name"
                    value={name}
                    name="name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    placeholder="phone number"
                    value={number}
                    name="number"
                    onChange={handleChange}/>
            </div>
            <div>
                <button
                    type="submit">Add
                </button>
            </div>
        </form>
    )
}

export default ContactForm;