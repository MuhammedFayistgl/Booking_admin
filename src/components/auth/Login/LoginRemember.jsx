import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const LoginRemember = () => {
	return (
		<>
			<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
		</>
	);
};

export default LoginRemember;
