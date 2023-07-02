import { Grid, Link } from "@mui/material";
import React from "react";

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
					<Link href="#" variant="body2">
						{`  Have already an account ? Login here`}
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default SignFooter;
