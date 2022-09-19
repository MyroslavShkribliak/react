import {useEffect, useState} from "react";

import {getLaunches} from "../../services/SpaceX.api/axios.services";
import {SpaceX} from "./spaceX";
import {getLaunchesAxios} from "../../services/SpaceX.api/axios.service";


export function SpaceX1() {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunches().then(value => {
            setLaunches(value);
        })

        getLaunchesAxios().then(value => {
            setLaunches(value.data);
        })
    }, []);


    return (
        <div>
            {launches.length? launches.filter(value => value.launch_year !== '2020').map(value => <SpaceX launch={value} key={value.flight_number}/>):<h1>...second</h1>}
        </div>
    );



}