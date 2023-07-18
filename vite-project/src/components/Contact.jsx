import '../styles/Contact.css'
import {Link} from "react-router-dom";

const Contact = ({name, number, id, onDelete}) => {
    return (
        <div className="card">
            <Link to={`/contact/${id}`}>
                <p>Name : {name}</p>
                <p>Phone Number : {number}</p>
            </Link>
            <button onClick={onDelete}>Delete</button>
            <Link to={`/edit/${id}`}>
                <button>Edit</button>
            </Link>
        </div>
    )
}
export default Contact;