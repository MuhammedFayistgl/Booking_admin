import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginHeader from "./LoginHeader";
import LoginAdminForm from "./LoginAdminForm";
import LoginCopy from './LoginCopy'

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const LoginComponent = () => {


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
						<LoginHeader />
						<LoginAdminForm/>
					</Box>
					<LoginCopy />
				</Container>
			</ThemeProvider>
		</>
	);
};

export default LoginComponent;
