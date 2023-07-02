import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const SignRemember = () => {
	return (
		<>
			<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
		</>
	);
};

export default SignRemember;
