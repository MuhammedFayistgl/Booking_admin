import { Grid, Link } from "@mui/material";
import React from "react";

const LoginFooter = () => {
	return (
		<>
			<Grid container>
				<Grid item xs>
					<Link href="#" variant="body2">
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link href="#" variant="body2">
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default LoginFooter;
