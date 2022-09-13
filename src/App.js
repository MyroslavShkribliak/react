// import logo from './logo.svg';
import './App.css';
import {simpsons} from './components/data'
// import Ccomponents from "./components/Components";
import Components from "./components/Components";
import Simson from "./components/Simson";

function App() {
    return (
        <div>
            {
                simpsons.map(value => (<Simson item={value}/>))
            }
            <Components/>
        </div>
    );
}

export default App;
