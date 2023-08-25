import { Grid } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginFooter = () => {
	const Navigate = useNavigate()
	return (
		<>
			<Grid container>
				<Grid item xs>
					<Link href="#" variant="body2">
						Forgot password?
					</Link>
				</Grid>
				<Grid item sx={{cursor:'pointer'}}>
			
					<Link to={'/singup'} variant="body2">
						
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default LoginFooter;
