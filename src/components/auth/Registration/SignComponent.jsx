import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SingHeader from "./SignHeader";
import SingAdminForm from "./SignAdminForm";
import SingCopy from "./SignCopy";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const SignComponent = () => {


	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<SingHeader/>
						<SingAdminForm/>
					</Box>
					<SingCopy />
				</Container>
			</ThemeProvider>
		</>
	);
};

export default SignComponent;
