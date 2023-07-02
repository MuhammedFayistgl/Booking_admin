import { Box } from "@mui/material";
import React, { useState } from "react";

import LoginPassword from "./LoginPassword";
import LoginRemember from "./LoginRemember";
import LoginBTN from "./LoginBTN";
import LoginFooter from "./LoginFooter";
import LoginEmail from "./LoginEmail";

const LoginAdminForm = () => {
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	const data = new FormData(event.currentTarget);
	// 	console.log({
	// 		email: data.get("email"),
	// 		password: data.get("password"),
	// 	});
	// };
	const [formValues, setFormValues] = useState();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: {
				...formValues[name],
				value,
			},
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		const formFields = Object.keys(formValues);
		let newFormValues = { ...formValues };

		for (let index = 0; index < formFields.length; index++) {
			const currentField = formFields[index];
			const currentValue = formValues[currentField].value;

			if (currentValue === "") {
				newFormValues = {
					...newFormValues,
					[currentField]: {
						...newFormValues[currentField],
						error: true,
					},
				};
			}
		}

		setFormValues(newFormValues);
	};
	return (
		<>
			<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
				<LoginEmail />
				<LoginPassword />
				<LoginRemember />
				<LoginBTN />
				<LoginFooter />
			</Box>
		</>
	);
};

export default LoginAdminForm;
