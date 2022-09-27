import {Outlet} from "react-router-dom";

import {Headers} from "../headers/Headers";

const Home = () => {
    return (
        <div>
            <Headers/>
            <h3>Info</h3>
            <Outlet/>
        </div>
    );
};

export {Home};