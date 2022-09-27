import {useEffect, useState} from "react";
import Todo from "../todo/dota";
import {userSel} from "../../service/user.service";

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

export default Dot;