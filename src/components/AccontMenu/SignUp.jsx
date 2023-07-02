import { ListItemIcon, MenuItem } from "@mui/material";
import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const Navigate = useNavigate();
	return (
		<MenuItem onClick={() => Navigate("/singup")}>
			<ListItemIcon>
				<SiGnuprivacyguard fontSize={20} />
			</ListItemIcon>
			SignUp
		</MenuItem>
	);
};

export default SignUp;
