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

    let userDetailsFn = (user) => {
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
                <h3>Username - {userDetails.username} </h3>
                <h3>Email - {userDetails.email}</h3>
                <h3>Phone - {userDetails.phone}</h3>
                <h3>Address - street {userDetails.address.street}</h3>
                <h3>Address - suite {userDetails.address.suite}</h3>
                <h3>Address - city {userDetails.address.city}</h3>
                <h3>Address - zipcode {userDetails.address.zipcode}</h3>
            </div>: <h3>Loading...</h3>
            }
            <hr/>
            {users.map(value => <User user={value} userDetailsFn={userDetailsFn} key={value.id}/>)}
        </div>
    );
};

export {Users};