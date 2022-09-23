import {urls} from "../configs";
import {axiosService} from "./axios.service";


const userService = {
    getAll: () => axiosService.get(urls.users),
    create: (user) => axiosService.post(urls.users, user)
}

export {userService}