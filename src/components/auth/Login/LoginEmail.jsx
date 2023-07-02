import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { loginhandleSubmit } from "../../../redux/Slices/AdminloginSlice";

const LoginEmail = () => {
	const Dispatch = useDispatch();
	return (
		<>
			<TextField
				onChange={(e) =>
					Dispatch(
						loginhandleSubmit({
							name: e.target.name,
							value: e.target.value,
						})
					)
				}
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
			/>
		</>
	);
};

export default LoginEmail;
