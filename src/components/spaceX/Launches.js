import {useEffect, useState} from "react";
import {Launch} from "./Launch";
import {getLaunchesAxios} from "../../services/axios.service";


export function Launches() {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunchesAxios().then(value => {
            setLaunches(value.data);
        })

    }, []);




    return (
        <div>
            {launches.filter(value => value.launch_year !== '2020').map(value => <Launch launch={value} key={value.flight_number}/>)}
        </div>
    );



}