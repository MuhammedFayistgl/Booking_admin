import { createSlice } from "@reduxjs/toolkit";
import validator from "email-validator";
import { LoginhandleSubmit } from "../ExtraRduces/LoginThank";
import swal from "sweetalert2";


const state = {

    input: {
        email: '',
        password: '',

    },
    error: {
        email: false,
        password: false
    }

}
const LoginAdmin = createSlice({
    name: "AdminLogin",
    initialState: state,
    reducers: {
        setloginEmail: (state, action) => {
            const { name, value } = action.payload
            state.input = { ...state.input, [name]: value }
            if (!validator.validate(value)) {
                state.error.email = true
            } else {
                state.error.email = false
            }

        },
        setloginPasswerd: (state, action) => {
            const { name, value } = action.payload
            state.input = { ...state.input, [name]: value }
        },

    },
    extraReducers: {
        [LoginhandleSubmit.fulfilled]: (state, action) =>{
            state.login = action.payload
            if (state.login.status) {
                state.login.loginstatus = true
                new swal("Confirmed!", action.payload.message, "success");
            }
            else {
                state.login.loginstatus = false
            }
        }
    },
});

export const { setloginEmail, setloginPasswerd } = LoginAdmin.actions;
export default LoginAdmin.reducer;
