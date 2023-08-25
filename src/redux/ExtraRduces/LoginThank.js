import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginhandleSubmit = createAsyncThunk('LoginhandleSubmit',
    async (data) => {
        const res = await axios.post('http://localhost:5000/admin/loginadmin', data)
            .then((response) => { return response.data })
            .catch((error) => { console.error('LoginhandleSubmitERR', error); })
        return res

    }
)