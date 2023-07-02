import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setUsername } from "../../../redux/Slices/AdminSignSlice";

const SignUserName = () => {
	const FormData = useSelector((state) => state.adminSignup); //username email  password input.error.username
	const Dispatch = useDispatch();
	return (
		<>
			<TextField
				onChange={(e) => {
					const regExp = /^[a-zA-Z]+[a-zA-Z\s]*?[^0-9]$/;
					Dispatch(
						setUsername({
							name: e.target.name,
							value: e.target.value,
						})
					);
				}}
				id="outlined-basic"
				label="User Name"
				variant="outlined"
				margin="normal"
				required
				error={FormData?.error.username }
				fullWidth
				name="username"
				autoComplete="username"
				autoFocus
			/>
		</>
	);
};

export default SignUserName;
