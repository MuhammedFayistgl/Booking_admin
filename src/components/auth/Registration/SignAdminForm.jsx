import { Box, FormControl } from "@mui/material";
import React, { useState } from "react";
import SingPassword from "./SignPassword";
import SingRemember from "./SignRemember";
import SingBTN from "./SignBTN";
import SingFooter from "./SignFooter";
import SingEmail from "./SignEmail";
import SingUserName from "./SignUserName";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { SignUphandleSubmit } from "../../../redux/ExtraRduces/RegisterThank";


const SignAdminForm = () => {
	const FormData = useSelector((state) => state.adminSignup); //username email  password

	const Dispatch = useDispatch();
	const SumitHandler = (e) => {
		e.preventDefault();
		if (FormData?.error?.username || FormData.input.username == "") {
			toast.error("username not allowed special characters or invalid username");
		}
		else if (FormData?.error?.email || FormData.input.email == "") {
			toast.error("Please enter a valid email");
		}
		else if (FormData?.error?.password || FormData.input.password == "") {
			toast.error("Please enter a valid password");
		} else {
			const NewData = FormData.input;

			Dispatch(SignUphandleSubmit(NewData));
		}
		
	};
	return (
		<>
			<Box component="form" onSubmit={SumitHandler} noValidate sx={{ mt: 1 }}>
				<SingUserName />
				<SingEmail />
				<SingPassword />
				<SingRemember />
				<SingBTN />
				<SingFooter />
			</Box>
		</>
	);
};

export default SignAdminForm;
