import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import NewContact from "./NewContact.jsx";
import {ContactEdit} from "./ContactEdit.jsx";
import ContactDetail from "./ContactDetail.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/new-contact' element={<NewContact/>}/>
                <Route path="/edit/:id" element={<ContactEdit/>}/>
                <Route path="/contact/:id" element={<ContactDetail/>}/>
            </Routes>
        </>
    )
}

export default App
