import React from "react";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import Profile from "./Profile";
import Myaccount from "./Myaccount";
import MenuSettings from "./MenuSettings";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import MenuAvatar from "./MenuAvatar";
import Addanotheraccount from "./Addanotheraccount";
import LogOut from "./Logout";

const MenuComponent = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<React.Fragment>
				<MenuAvatar open={open} handleClick={handleClick} />
				<Menu
					anchorEl={anchorEl}
					id="account-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: "visible",
							filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
							mt: 1.5,
							"& .MuiAvatar-root": {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							"&:before": {
								content: '""',
								display: "block",
								position: "absolute",
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: "background.paper",
								transform: "translateY(-50%) rotate(45deg)",
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: "right", vertical: "top" }}
					anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				>
					<Profile handleClose={handleClose} />
					<Myaccount handleClose={handleClose} />

					<Divider />
					<Addanotheraccount handleClose={handleClose} />
					<MenuSettings handleClose={handleClose} />
					<LogOut handleClose={handleClose} />
					<LogIn handleClose={handleClose} />
					<SignUp handleClose={handleClose} />
				</Menu>
			</React.Fragment>
		</>
	);
};

export default MenuComponent;
