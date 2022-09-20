import {useEffect, useState} from "react";
import {User} from "../user/user";

import {getUsers} from "../../service/user.service";

const Users = () => {
    const [users, setUsers] = useState([]);
    let [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value);
            });
    }, []);

    let userAppDate = (user) => {
        if (user === userDetails) {
            setUserDetails(null);
        } else {
            setUserDetails(user);
        }
    }


    return (
        <div>
            <hr/>
            {userDetails? <div>
                <h1>id - {userDetails.id} <br/> name - {userDetails.name}</h1>
                <p>Username - {userDetails.username} </p>
                <p>Email - {userDetails.email}</p>
                <p>Phone - {userDetails.phone}</p>
                <p>Address - street {userDetails.address.street}</p>
                <p>Address - suite {userDetails.address.suite}</p>
                <p>Address - city {userDetails.address.city}</p>
                <p>Address - zipcode {userDetails.address.zipcode}</p>
            </div>: <h3>Error???</h3>
            }
            <hr/>
            {users.map(value => <User user={value} userAppDate={userAppDate} key={value.id}/>)}
        </div>
    );
};

export {Users};