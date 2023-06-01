import React from 'react'
import '../styles/SignUp.css'
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material'
import GlobalContext from '../share/GlobalContext';
import { AxiosError } from "axios";
import Axios from '../share/AxiosInstance';

function CreateAccount() {
	const { user, setStatus } = useContext(GlobalContext);
	const [username, setUsername] = useState('')
	const [usernameError, setUsernameError] = useState('')

	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState('')

	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const navigate = useNavigate();

	const handleSubmit = async () => {
		if (!validateForm()) return;
		try {
			const response = await Axios.post('/register', {
				email,
				password,
				username
			});
			if (response.data.success) {
				console.log(response.data.success)
				navigate('/home');
				setStatus({
					msg: 'Create account successfully',
					severity: 'success'
				});
			}
		} catch (e) {
			setPassword('');
			if (e instanceof AxiosError)
				if (e.response)
					return setStatus({
						msg: e.response.data.error,
						severity: 'error',
					});
			return setStatus({
				msg: e.message,
				severity: 'error',
			});
		}
	};

	const validateForm = () => {
		let isValid = true;
		//check user
		if (!username) {
			setUsernameError('Username is required');
			isValid = false;
		}
		//check email
		if (!email) {
			setEmailError('Email is required');
			isValid = false;
		}
		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
			setEmailError('Invalid email format');
			isValid = false;
		}
		if (!password) {
			setPasswordError('Password is required');
			isValid = false;
		}
		// Check privacy policy checkbox
		const privacyPolicyChecked = document.querySelector('#privacyPolicyCheckbox').checked;
		if (!privacyPolicyChecked) {
			setStatus({
				msg: 'Please agree to the privacy policy',
				severity: 'error',
			});
			isValid = false;
		}
		return isValid;
	}



	return (
		<>
			<Box className='formS' sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }} marginTop={2.5}  >
				<Box className='h1-S' sx={{ display: {xs: "flex", md: "none"}}} > <h1>Sign Up</h1> </Box>
				<Box className='h1-L' sx={{ display: {xs: "none", md: "flex"}}} > <h1>Sign Up</h1> </Box>
				<Box  sx={{ display: "flex", width: '40%' }}
					flexDirection={"column"}
					alignItems={"center"}
					justifyContent={"flex-start"}
				>
					<TextField
						className='textfield'
						type={"email"}
						value={email}
						variant="outlined"
						sx={{ width: "100%", height: "55px", marginBottom: "25px", backgroundColor: "white", borderRadius: "15px" }}
						label='Email'
						onChange={(e) => setEmail(e.target.value)}
						error={emailError !== ''}
						helperText={emailError}
						required
					/>
					<TextField
						className='textfield'
						type={"password"}
						value={password}
						sx={{ width: "100%", height: "55px", marginBottom: "25px", backgroundColor: "white", borderRadius: "15px" }}
						autoComplete="current-password"
						label='Password'
						onChange={(e) => setPassword(e.target.value)}
						error={passwordError !== ''}
						helperText={passwordError}
						required
					/>
					<TextField
						className='textfield'
						type={"text"}
						value={username}
						sx={{ width: "100%", height: "55px", marginBottom: "28px", backgroundColor: "white", borderRadius: "15px" }}
						label='Username'
						onChange={(e) => setUsername(e.target.value)}
						error={usernameError !== ''}
						helperText={usernameError}
						required
					/>
					<FormControlLabel
						sx={{ float: "left", marginBottom: "5px" }}
						control={<Checkbox id="privacyPolicyCheckbox" />}
						// control={<Checkbox id="privacyPolicyCheckbox" checked={isChecked} />}
						label={<Typography sx={{ fontSize: 13 }}>I agree to the terms and conditions.</Typography>}
					/>
					<Box sx={{ display: {xs: "flex", md: "none"}, justifyContent: 'center', width: "100%" }}>
						{/* <button className='getStarted-S' onClick={handleSignUpClick} > Get Started !</button> */}
						<button className='getStarted-S' onClick={handleSubmit} > Get Started !</button>
					</Box>
					<Box sx={{ display: {xs: "none", md: "flex"}, justifyContent: 'center', width: "100%" }}>
						<button className='getStarted-L' onClick={handleSubmit} > Get Started !</button>
					</Box>
				</Box>
			</Box>


		</>
	)
}

export default CreateAccount
