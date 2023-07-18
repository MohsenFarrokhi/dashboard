import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactDetail = () => {
    const [contact, setContact] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`${CONTACTS_API}/${id}`)
            .then(response => {
                setContact(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <>
            <div className="container">
                <div className="header_Home">
                    <h1 className="header_Home-text">Contact Detail</h1>
                </div>
                <div className="EditForm">
                    <p className="EditForm_head">Name: <span>{contact.name}</span></p>

                    <p className="EditForm_head">Mobile: <span>{contact.number}</span></p>
                    <p className="EditForm_head">Detail: <span>{contact.detail} ...</span></p>
                </div>
                <Link
                    to="/"
                    className="BackBtn"
                >Go to contacts</Link>
            </div>
        </>
    )
}

export default ContactDetail