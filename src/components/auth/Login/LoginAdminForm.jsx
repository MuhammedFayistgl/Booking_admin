import { Box } from "@mui/material";
import React, { useState } from "react";

import LoginPassword from "./LoginPassword";
import LoginRemember from "./LoginRemember";
import LoginBTN from "./LoginBTN";
import LoginFooter from "./LoginFooter";
import LoginEmail from "./LoginEmail";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { LoginhandleSubmit } from "../../../redux/ExtraRduces/LoginThank";

const LoginAdminForm = () => {
	const Dispatch = useDispatch();
	const FormData = useSelector((state) => state.adminLogin); 

	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (FormData?.error?.email || FormData.input.email == "") {
			toast.error("Please enter a valid email");
		}
		else if (FormData?.error?.password || FormData.input.password == "") {
			toast.error("Please enter a valid password");
		} else {
			const NewData = FormData.input;

			Dispatch(LoginhandleSubmit(NewData));
		}
		
		

		
	};
	return (
		<>
			<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
				<LoginEmail />
				<LoginPassword />
				<LoginRemember />
				<LoginBTN />
				<LoginFooter />
			</Box>
		</>
	);
};

export default LoginAdminForm;
