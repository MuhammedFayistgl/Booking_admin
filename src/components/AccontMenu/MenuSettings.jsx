import { ListItemIcon, MenuItem } from "@mui/material";
import React from "react";
import Settings from "@mui/icons-material/Settings";

const MenuSettings = ({ handleClose }) => {
	return (
		<MenuItem onClick={handleClose}>
			<ListItemIcon>
				<Settings fontSize="small" />
			</ListItemIcon>
			Settings
		</MenuItem>
	);
};

export default MenuSettings;
