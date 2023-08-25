import { FormControl, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setloginPasswerd } from "../../../redux/Slices/AdminloginSlice";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPassword = () => {
	const FormData = useSelector((state) => state.adminLogin); // email  password
	const Dispatch = useDispatch();
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	return (
		<>
			<FormControl fullWidth variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
				<OutlinedInput
					onChange={(e) =>
						Dispatch(
							setloginPasswerd({
								name: e.target.name,
								value: e.target.value,
							})
						)
					} 
					id="outlined-adornment-password"
					type={showPassword ? "text" : "password"}
					label="Password"
					margin="normal"
					required
					error={FormData?.error?.password}
					name="password"
					autoComplete="current-password"
					endAdornment={
						<InputAdornment position="end">
							<IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
		</>
	);
};

export default LoginPassword;
