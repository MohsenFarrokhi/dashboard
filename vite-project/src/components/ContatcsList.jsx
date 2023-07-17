import axios from "axios";
import {useEffect, useState} from "react";


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

    return (
        <div>
            {contacts.map((id, name, number) =>
                <Contact
                    key={id}
                    name={name}
                    number={number}
                />
            )}
        </div>
    )
}

export default ContactList;