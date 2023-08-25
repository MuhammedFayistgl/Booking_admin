import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignFooter = () => {
	return (
		<>
			<Grid container>
				<Grid item xs>
					<Link href="#" variant="body2">
						terms and condition.
					</Link>
				</Grid>
				<Grid item>
					<Link to={"/login"}>
						{`  Have already an account ? Login here`}
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default SignFooter;
