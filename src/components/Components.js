// import {Component} from "react";
//
// export default class Ccomponents extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };
//     }
//
//     componentDidMount() {
//         fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')
//             .then(value => value.json())
//             .then(
//                 (result) => {
//                     this.setState({
//                         isLoaded: true,
//                         items: result.results
//                     });
//                 },
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     })
//                 }
//             )
//     }
//
//     render() {
//         const {error, isLoaded, items} = this.state;
//         if (error) {
//             return <p>Error {error.message}</p>
//         } else if (!isLoaded) {
//             return <p>Loading...</p>
//         } else {
//             return (
//                 <div>
//                     {
//                         items.map(item => (<div key={item.id}>
//                             <h2>{item.id} . {item.name} status - {item.status} species -  {item.species} gender - {item.gender}</h2>
//                             <img src={item.image} alt=""/>
//                         </div>))
//                     }
//                 </div>
//             )
//         }
//     }
// }

import {useState} from "react";

export default function Components() {
    let [users, setUsers] = useState([])
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')
        .then(value => value.json())
        .then(value => {
            setUsers(value)
            console.log(value)
        })
    return (
        <div>
            {
                users.map(item => (
                    <div key={item.id}>
                        <h2>{item.id}. {item.name} status - {item.status} species - {item.species} gender
                            - {item.gender}</h2>
                        <img src={item.image} alt=""/>
                    </div>

                ))
            }
        </div>
    )
}