import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Typography } from "@mui/material";
const SignHeader = () => {
	return (
		<>
			<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign Up Admin
			</Typography>
		</>
	);
};

export default SignHeader;
