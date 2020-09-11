import React from "react";
import styled from "styled-components";

import useForm from "../../hooks/useForm";

const SignUpContainer = styled.div`
	height: 100vh;
	width: 100wh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	form {
		width: 30%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	label {
		padding: 8px;
		width: 80%;
		line-height: 28px;

		display: flex;
		flex-direction: column;
	}

	input {
		border-radius: 4px;
		padding: 8px;
	}
`;

const ButtonStyle = styled.input`
	width: 75%;
	padding: 8px;

	font-size: 1em;
	margin: 16px;
	margin-top: 28px;
	border-radius: 4px;
	color: #ffffff;
	background-color: #000000;
`;

const LoginPage = () => {
	const { form, onChange } = useForm({
		email: "",
		password: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		onChange(name, value);
	};

	return (
		<SignUpContainer>
			<form>
				<label>
					Email
					<input
						type="email"
						name="email"
						value={form.email}
						placeholder="Email"
						required
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Senha
					<input
						type="text"
						name="password"
						value={form.password}
						placeholder="Password"
						required
						onChange={handleInputChange}
					/>
				</label>
				<ButtonStyle type="submit" value="LOGIN" />
			</form>
		</SignUpContainer>
	);
};

export default LoginPage;
