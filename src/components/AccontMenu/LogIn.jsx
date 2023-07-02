import { ListItemIcon, MenuItem } from "@mui/material";
import React from "react";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
	const Navigate = useNavigate();
	return (
		<MenuItem onClick={() => Navigate("/login")}>
			<ListItemIcon>
				<LoginIcon fontSize="small" />
			</ListItemIcon>
			LogIn
		</MenuItem>
	);
};

export default LogIn;
