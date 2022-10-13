import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error:null
};

const getAll = createAsyncThunk(
    'userSplice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await userService.getALL();
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const userSplice = createSlice({
    name: 'userSplice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
});

const {reducer: userReducer, actions: {setCurrentUser}} = userSplice;

const userActions = {
    getAll,
    setCurrentUser
};

export {
    userReducer,
    userActions
};