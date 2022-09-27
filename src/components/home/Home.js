import {Outlet} from "react-router-dom";
import Headers from "../headers/Headers";

const Home = () => {
    return (
        <div>
            <Headers/>

            <Outlet/>
        </div>
    );
};

export default Home;