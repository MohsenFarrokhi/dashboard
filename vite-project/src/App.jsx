import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import NewContact from "./NewContact.jsx";
function App() {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/new-contact' element={<NewContact/>}/>
        </Routes>
    )
}

export default App
