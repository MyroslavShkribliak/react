
import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";


const userService = {
    getAll: () => axiosService.get(urls.albums)

}
const userSel = {
    getAll: () => axiosService.get(urls.todos)
}

const userInt = {
    getAll: () => axiosService.get(urls.comments)
}


export {userService , userSel, userInt}