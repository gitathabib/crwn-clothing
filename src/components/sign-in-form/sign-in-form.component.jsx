import { useState } from "react";
import {
		signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.style.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.componet";

const defultFormFeilds = {
	email: "",
	password: "",
};

function SignInForm() {
	const [formFeilds, setFormFeilds] = useState(defultFormFeilds);
	const { email, password } = formFeilds;

	const resetFields = () => setFormFeilds(defultFormFeilds);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
		await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFields();
		} catch (err) {
			switch (err.code) {
				case "auth/wrong-password":
					alert("Incorrect Password");
					break;
				case "auth/user-not-found":
					alert("User not found");
					break;
				default:
					console.log(err);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFeilds({ ...formFeilds, [name]: value });
	};

	const logGoogleUser = async () => {
		await signInWithGooglePopup();
		
	};
	return (
		<div className="sign-in-container">
			<h2>Alrady have an account?</h2>
			<span>Sign in with Your Email and Password</span>
			<form onSubmit={handleSubmit}>
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

				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType="google"
						onClick={logGoogleUser}
					>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SignInForm;
