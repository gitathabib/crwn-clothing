import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss";
import Button from "../button/button.componet";

const defultFormFeilds = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

function SignUpForm() {
	const [formFeilds, setFormFeilds] = useState(defultFormFeilds);
	const { displayName, email, password, confirmPassword } = formFeilds;

	const resetFields = () => setFormFeilds(defultFormFeilds);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("password do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetFields();
			console.log(user);
		} catch (err) {
			if (err.code === "auth/email-already-in-use") {
				alert("Can not create user, already in use");
			} else {
				console.log("User creation encounted an error: ", err);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFeilds({ ...formFeilds, [name]: value });
		console.log(name);
	};
	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign Up with Your Email and Password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button type="submit">
					Sign Up
				</Button>
			</form>
		</div>
	);
}

export default SignUpForm;
