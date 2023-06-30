import { configureStore } from "@reduxjs/toolkit";
import DeatelsSlice from '../Slices/Detals'
import UplodeSlice from "../Slices/UplodeSlice";
import TrasheSlice from '../Slices/TrashSlice'
import BookingGetadmin from '../Slices/GetUserBooking'

export const store = configureStore({
    reducer:{
        DETAILS:DeatelsSlice,
        UplodeData:UplodeSlice,
        DeleteState : TrasheSlice,
        Booking:BookingGetadmin
    }
})