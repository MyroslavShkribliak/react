import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error:null
};

const userSplice = createSlice({
    name: 'userSplice',
    initialState,
    reducers: {
        getAll:(state, action)=>{
            state.users = action.payload
        }
    }
});

const {reducers:userReducer, action:{getAll}} = userSplice;

const userActions = {
    getAll
};

export {
    userReducer,
    userActions
};