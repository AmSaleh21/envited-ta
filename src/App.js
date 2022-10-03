import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import CreateEvent from "./Create/CreateEvent";
import Event from "./Event/Event";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/create'} element={<CreateEvent/>}/>
                <Route path={'/event'} element={<Event/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
