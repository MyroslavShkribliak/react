import {Users} from "./components/Users/Users";
import {Launches} from "./components/spaceX/Launches";

const App = () => {
    return (
        <div>
            <Launches/>
            <Users/>
        </div>
    );
};

export default App;