import { createSlice } from "@reduxjs/toolkit";
import validator from "email-validator";
import { SignUphandleSubmit } from "../ExtraRduces/RegisterThank";

import swal from "sweetalert2";

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
        [SignUphandleSubmit.fulfilled]: (state, action) => {
            state.register = action.payload
            if (state.register.status) {
                state.register.Signup = true
                new swal("Confirmed!", action.payload.message, "success");
            }
            else {
                state.register.Signup = false
            }
        }
    },
});

export const { setUsername, setEmail, setPassword, } = SignUpAdmin.actions;
export default SignUpAdmin.reducer;
