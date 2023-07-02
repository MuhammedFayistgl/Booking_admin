import { createSlice } from "@reduxjs/toolkit";
import validator from "email-validator";
import { SignUphandleSubmit } from "../ExtraRduces/RegisterThank";
const state = {
    input: {
        username: '',
        email: '',
        password: '',

    },
    error: {
        username: false,
        email: false,
        password: false
    }

}
const SignUpAdmin = createSlice({
    name: "AdminSingUp",
    initialState: state,
    reducers: {
        setUsername: (state, action) => {
            const { name, value } = action.payload
            const stringregExp = /^[a-zA-Z]+[a-zA-Z\s]*?[^0-9]$/;

            state.input = {
                ...state.input, [name]: value,
            }
            if (!stringregExp.test(value)) {
                state.error.username = true
            } else { state.error.username = false }
        },
        setEmail: (state, action) => {
            const { name, value } = action.payload
            state.input = { ...state.input, [name]: value }
            if (!validator.validate(value)) {
                state.error.email = true
            } else {
                state.error.email = false
            }


        }, setPassword: (state, action) => {
            const { name, value } = action.payload
            state.input = { ...state.input, [name]: value }

        },


    },
    extraReducers: {
        [SignUphandleSubmit.fulfilled]: () => {

        }
    },
});

export const { setUsername, setEmail, setPassword, } = SignUpAdmin.actions;
export default SignUpAdmin.reducer;
