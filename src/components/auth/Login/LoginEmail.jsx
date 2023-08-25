import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setloginEmail } from "../../../redux/Slices/AdminloginSlice";
import { useNavigate } from "react-router-dom";

const LoginEmail = () => {
	const Navigate = useNavigate()
	const FormData = useSelector((state) => state.adminLogin); // email  password
	const Dispatch = useDispatch();
	if(FormData?.login?.loginstatus){
		Navigate('/')
	}
	return (
		<>
			<TextField
				onChange={(e) =>
					Dispatch(
						setloginEmail({
							name: e.target.name,
							value: e.target.value,
						})
					)
				}
				margin="normal"
				required
				fullWidth
				error={FormData?.error?.email}
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
