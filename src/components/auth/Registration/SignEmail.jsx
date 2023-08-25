import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../../redux/Slices/AdminSignSlice";
import { useNavigate } from "react-router-dom";

const SignEmail = () => {
	const Navigate = useNavigate()
	const FormData = useSelector((state) => state.adminSignup); //username email  password
	if(FormData?.register?.status){
		Navigate('/')
	}
	const Dispatch = useDispatch();
	return (
		<>
			<TextField
				onChange={(e) =>
					Dispatch(
						setEmail({
							name: e.target.name,
							value: e.target.value,
						})
					)
				}
				margin="normal"
				required
				fullWidth
				id="email"
				error={FormData?.error?.email}
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
			/>
		</>
	);
};

export default SignEmail;
