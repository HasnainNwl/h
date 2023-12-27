import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id:'1', name:'Amanda', email: 'amanda@gmail.com'},
    {id:'2', name:'James', email: 'james@gmail.com'}
];
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser: (state, action) => {
            state.push(action.payload)

        }
    }
})
export const {addUser} = userSlice.actions
export default userSlice.reducer