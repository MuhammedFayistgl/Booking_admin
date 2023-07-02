import { Avatar, MenuItem } from "@mui/material";
import React from "react";

const Profile = ({handleClose}) => {
	return (
		<MenuItem onClick={handleClose}>
			<Avatar /> Profile
		</MenuItem>
	);
};

export default Profile;
