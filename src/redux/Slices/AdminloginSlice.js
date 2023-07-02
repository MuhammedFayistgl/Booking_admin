import { createSlice } from "@reduxjs/toolkit";
const state = {
    input:{}
}
const LoginAdmin = createSlice({
    name: "AdminLogin",
    initialState: state,
    reducers: {
        loginhandleChange: (state, action) => {
            const { name, value } = action.payload

            state.input = {
                ... state.input,
                [name]: {
                    ... state.input[name],
                    value,
                },
            }
        },
       loginhandleSubmit: (state, action) => {

        },

    },
    extraReducers: {

    },
});

export const { loginhandleChange, loginhandleSubmit } = LoginAdmin.actions;
export default LoginAdmin.reducer;
