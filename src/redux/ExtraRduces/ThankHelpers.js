import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const getDataHelper = createAsyncThunk(
  "data/fetchDaa",

  async () => {
    const response = await axios.get("http://localhost:5000/admin/getallDeteals")
      .then((responce) => {
        return responce.data.data;
      });
    return response;
  }
);

export const postDataHelper = createAsyncThunk(
  "postDataHelper",
  async (inputdata) => {

    try {
      const response = await axios.post("http://localhost:5000/admin/uplodehotelDeteals", inputdata)
        .then((responce) => {
          return responce.data;
        });
      return response;
    } catch (error) {
      toast.error(error);
    }
  }


);
