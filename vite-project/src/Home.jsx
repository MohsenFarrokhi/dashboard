import ContactList from "./components/ContactsList.jsx";
import './styles/Home.css'
import {useNavigate} from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/new-contact");
    }
    return (
        <div className="container">
            <div className="header_Home">
                <h1 className="header_Home-text">Dashboard</h1>
                <button
                    className="btn_Home"
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