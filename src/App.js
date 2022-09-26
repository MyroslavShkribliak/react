import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom"
import Home from "./components/home/Home";
import Albums from "./components/albums/Albums";
const App = () => {
    return (
        <div>
            <h2>
                <ul>
                    <Link to={'/'}>Home</Link>
                </ul>
                <ul>
                    <Link to={'/album'}>album</Link>
                </ul>
                <ul>
                    <Link to={'/todos'}>Todo</Link>
                </ul>
            </h2>

            <hr/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'Album'} element={<Albums/>}/>
            </Routes>
            <hr/>
        </div>
    );
};

export default App;

/// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.
