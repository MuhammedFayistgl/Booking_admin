import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../../redux/Slices/AdminSignSlice";

const SignEmail = () => {
	const FormData = useSelector((state) => state.adminSignup); //username email  password
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
