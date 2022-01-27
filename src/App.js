import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import Episodes from "./Component/Episodes/Episodes";
import Header from "./Component/Header/Header";


function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index element={<Navigate to={'episodes/1'}/>}/>
                    <Route path={'episodes/:id'} element={<Episodes/>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
