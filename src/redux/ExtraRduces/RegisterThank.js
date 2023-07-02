import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SignUphandleSubmit = createAsyncThunk('SignUphandleSubmit',
    async (data) => {
        const res = await axios.post('', data)
            .then((response) => { return response.data })
            .catch((error) => { console.error('SignUphandleSubmitERR', error); })
        return res

    }
)