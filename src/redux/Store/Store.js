import { configureStore } from "@reduxjs/toolkit";
import DeatelsSlice from '../Slices/Detals'
import UplodeSlice from "../Slices/UplodeSlice";
import TrasheSlice from '../Slices/TrashSlice'
import BookingGetadmin from '../Slices/GetUserBooking'
import LoginAdmin from '../Slices/AdminloginSlice'
import { loginMiddleware } from "../Middlwer/Middilwer";
import SignUpAdmin from '../Slices/AdminSignSlice'

export const store = configureStore({
    reducer: {
        DETAILS: DeatelsSlice,
        UplodeData: UplodeSlice,
        DeleteState: TrasheSlice,
        Booking: BookingGetadmin,
        adminLogin: LoginAdmin,
        adminSignup: SignUpAdmin
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loginMiddleware)

})