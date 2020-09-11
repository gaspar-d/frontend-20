import React from "react";
import styled from "styled-components";

import useForm from "../../hooks/useForm";

const Container = styled.div`
	display: flex;
`;

const ImageContainer = styled.div`
	height: 100vh;
	width: 60%;
	background-image: url(https://source.unsplash.com/random);
	background-repeat: no-repeat;
	background-size: cover;
`;

const SignUpContainer = styled.div`
	height: 100vh;
	width: 40%;

	display: flex;
	justify-content: center;
	align-items: center;

	form {
		width: 80%;

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

const SignUpPage = () => {
	const { form, onChange } = useForm({
		nome: "",
		nick: "",
		email: "",
		password: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		onChange(name, value);
	};

	return (
		<Container>
			<ImageContainer />
			<SignUpContainer>
				<form>
					<label>
						Nome
						<input
							type="text"
							name="nome"
							value={form.nome}
							placeholder="Nome"
							required
							onChange={handleInputChange}
						/>
					</label>

					<label>
						Nick
						<input
							type="text"
							name="nick"
							value={form.nick}
							placeholder="Nick"
							required
							onChange={handleInputChange}
						/>
					</label>

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
					<ButtonStyle type="submit" value="SIGNUP" />
				</form>
			</SignUpContainer>
		</Container>
	);
};

export default SignUpPage;
