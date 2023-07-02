import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Typography } from "@mui/material";
const LoginHeader = () => {
	return (
		<>
			<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Log in Admin
			</Typography>
		</>
	);
};

export default LoginHeader;
