import './App.css';
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";



function App() {
    return (
        <div className="App">
            <div className={"UpBlock"}>
                <Users/>
                <Form/>
            </div>
        </div>
    );
}

export default App;
