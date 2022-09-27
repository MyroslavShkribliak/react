import {useEffect, useState} from "react";


import {Todo} from "../todo/Dota";
import {userSel} from "../../service";

const Dot = () => {

    let [todo, setTodo] = useState([]);
    useEffect(() => {
        userSel.getAll().then(({data}) => setTodo(data))
    },[])
    return (
        <div>
            {
                todo.map((value, index)=> <Todo key={index} todo={value}/>)
            }
        </div>
    );
};

export {Dot};