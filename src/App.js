import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className="App">
            <div className={"UpBlock"}>
                <Users/>
                <Posts/>
            </div>

            <div className={"DownBlock"}>
                <Comments/>
            </div>
        </div>
    );
}

export default App;
