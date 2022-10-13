import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const userService = {
    getALL: () =>axiosService.get(urls.users)
}

export {
    userService
}