import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const OneitemTrash = createAsyncThunk(
    'oneitemDelete',
    async (_id) => {
        const res = await axios.post("http://localhost:5000/admin/deleteoneDeteals", { _id })
            .then((res) => { return res.data })
        return { res}
            // .catch((err) => { toast.error(err) });
    }
)