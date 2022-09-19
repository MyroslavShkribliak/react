import {useEffect, useState} from "react";
import {User} from "../User/User";
import {getUsers} from "../../services/users.api.services";


export function Users() {

    let [users, setUsers] = useState([]);
    let [userDetails, setuserDetails] = useState(null);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value);
            });
    }, [])

    let userDetailsFn = (user) => {
        if (user === userDetails) {
            setuserDetails(null);
        } else {
            setuserDetails(user);
        }
    }




    return (
        <div>
            <hr/>
            {userDetails? <div>
                <h2>id - {userDetails.id} <br/> name - {userDetails.name}</h2>
                <p>Username - {userDetails.username} <br/>
                    Email - {userDetails.email} <br/>
                    Phone - {userDetails.phone} <br/></p>
            </div>: <h2>Loading...</h2>
            }
            <hr/>



            {users.map(value => <User user={value} userDetailsFn={userDetailsFn} key={value.id}/>)}

        </div>
    );

}