import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./splise";

const rootReducer = combineReducers({
    userReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};

