import './App.css';
import {Route, Routes} from "react-router-dom";
import Episodes from "./Component/Episodes/Episodes";


function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<Episodes/>}/>
            </Routes>
        </div>
    );
}

export default App;
