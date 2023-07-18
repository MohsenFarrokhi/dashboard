import axios from "axios";
import {useEffect, useState} from "react";
import Contact from "./Contact.jsx";
import '../styles/ContactList.css'

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const getContacts = async () => {
            try {
                const {data} = await axios.get(CONTACTS_API);
                setContacts(data);
            } catch (error) {
                console.log(error);
            }
        }

        getContacts();
    }, [])

    const deleteContact = (id) => {
        axios.delete(`${CONTACTS_API}/${id}`)
            .then(response => {
                setContacts(contacts.filter((contact) => contact.id !== id));
            })
            .catch(error => {
                console.log(error);
            })
    }



    return (
        <div className="contactList">
            {contacts.map(({id, name, number}) =>
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDelete={() => deleteContact(id)}
                />
            )}

        </div>

    )
}

export default ContactList;