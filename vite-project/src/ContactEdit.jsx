import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

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


    return (
        <div>
            <div className="header">
                <h1>Edit</h1>
            </div>

            {edit ? (
                <form>
                    <input
                        value={number}
                        type="tel"
                        onChange={(e) => setNumber(e.target.value)}/>
                    <button type="submit"></button>
                    <div onClick={() => setEdit(false)}></div>
                </form>
            ) : (
                <div>
                    <button onClick={() => setEdit(true)}>
                        Edit
                    </button>
                    <Link to="/">Back</Link>
                </div>
            )}
        </div>
    )
}
