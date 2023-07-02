import { ListItemIcon, MenuItem } from "@mui/material";
import PersonAdd from '@mui/icons-material/PersonAdd';
import React from "react";

const Addanotheraccount = ({handleClose}) => {
	return (
		<MenuItem onClick={handleClose}>
			<ListItemIcon>
				<PersonAdd fontSize="small" />
			</ListItemIcon>
			Add another account
		</MenuItem>
	);
};

export default Addanotheraccount;
