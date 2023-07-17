import ContactList from "./components/ContactsList.jsx";
import './styles/Home.css'
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/new-contact");
    }
    return (
        <div>
            <div className="header">
                <h1>Dashboard</h1>
                <button
                    className="btn"
                    onClick={handleClick}
                >Add
                </button>
            </div>
            <div>
                <ContactList/>
            </div>
        </div>
    )
}

export default Home;