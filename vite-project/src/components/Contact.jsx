import '../styles/Contact.css'
import {Link} from "react-router-dom";

const Contact = ({name, number, id, onDelete}) => {
    return (
        <div className="ContactCard">
            <Link to={`/contact/${id}`} className="ContactLink">
                <p>Name : {name}</p>
                <p>Phone Number : {number}</p>
            </Link>
            <div className="ContactBtn">
                <button
                    onClick={onDelete}
                    className="DeleteBtn">
                    Delete
                </button>
                <Link to={`/edit/${id}`}>
                    <button
                        className="EditBtn"
                    >Edit
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Contact;