import {Heder, Posts, Users} from "./components";

const App = () => {
    return (
        <div>
            <Heder/>
            <div>
                <Users/>
                <Posts/>
            </div>
        </div>
    );
};

export {App};