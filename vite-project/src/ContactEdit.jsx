import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import './styles/ContactEdit.css'

const CONTACTS_API = "http://localhost:3000/contacts";

export const ContactEdit = () => {
    const [contacts, setContacts] = useState(null);
    const {id} = useParams();
    const [number, setNumber] = useState("");
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        axios.get(`${CONTACTS_API}/${id}`)
            .then(response => {
                setContacts(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    if (!contacts) {
        return <div>Loading...</div>
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatePhone = {...contacts, number};

        axios.put(`${CONTACTS_API}/${id}`, updatePhone)
            .then(response => {
                setContacts(response.data);
                setEdit(false);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="container">
            <div className="header_Home">
                <h1 className="header_Home-text">Edit</h1>
            </div>
            <div className="EditForm">
                <p className="EditForm_head">Name: <span>{contacts.name}</span></p>

                <p className="EditForm_head">Mobile: <span>{contacts.number}</span></p>

            </div>
            {edit ? (
                <form onSubmit={handleSubmit}
                className="form_Edit">
                    <input
                        className="name_Form"
                        value={number}
                        type="tel"
                        onChange={(data) => setNumber(data.target.value)}/>
                    <button
                        type="submit"
                        className="SubmitBtn"
                    >Submit
                    </button>
                    <div onClick={() => setEdit(false)}></div>
                </form>
            ) : (
                <div>
                    <button
                        onClick={() => setEdit(true)}
                        className="EditBtn"
                    >Edit
                    </button>
                    <Link
                        to="/"
                        className="BackBtn"
                    >Back
                    </Link>
                </div>
            )}
        </div>
    )
}
