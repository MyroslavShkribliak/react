import {simpsons} from './components/data'
import Components from "./components/Components";
import Simson from "./components/Simson";

function App() {
    return (
        <div>
            {
                simpsons.map(value => (<Simson key={value.name} item={value}/>))
            }
            <Components/>
        </div>
    );
}

export default App;