import { Link, Typography } from "@mui/material";
import React from "react";

const LoginCopy = () => {
	function Copyright(props) {
		return (
			<Typography variant="body2" color="text.secondary" align="center" {...props}>
				{"Copyright © "}
				<Link color="inherit" href="#">
					Your Website
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		);
	}
	return (
		<>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</>
	);
};

export default LoginCopy;
