import { ListItemIcon, MenuItem } from "@mui/material";
import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogOut = ({ handleClose }) => {
	return (
		<MenuItem onClick={handleClose}>
			<ListItemIcon>
				<BiLogOut fontSize={20} />
			</ListItemIcon>
			Logout
		</MenuItem>
	);
};

export default LogOut;
