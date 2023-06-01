import React from 'react'
import { Box, Typography, TextField, } from '@mui/material'
import "../styles/SignIn.css"
import {useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from '../share/GlobalContext';
import Cookies from 'js-cookie';

import { AxiosError } from "axios";
import Axios from '../share/AxiosInstance';


function Login() {
	const { user, setUser } = useContext(GlobalContext);
	const { status, setStatus } = useContext(GlobalContext);
	const { isAuthorize, setIsAuthorize } = useContext(GlobalContext)

	const [username, setUsername] = useState('')
	const [usernameError, setUsernameError] = useState('')

	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const navigate = useNavigate();

	const handleSubmit = async () => {
		if (!validateForm()) return;
		try {
			const response = await Axios.post('/login', {
				username,
				password,
			});
			// console.log(response.data.success)

			// ! new
			if (response.data.success) {
				setUser(response.data.data)
				setIsAuthorize(true)
				console.log(user)
				console.log(response.data.data)
				setStatus({
				  msg: 'Login successful',
				  severity: 'success'
				});
				navigate('/home');
			  }
			  else {
				setPassword('')
				setStatus({
				  msg: 'Incorrect username or password',
				  severity: 'error'
				});
			  }

			// ! old
			// if (response.data.success) {
			// 	console.log(response.data.user.username)
			// 	setIsAuthorize(true)

			// 	// ! here
			// 	setUser({
			// 		username: response.data.user.username,
			// 	});

			// 	// Cookies.set('userToken', response.user.token);
			// 	// ! here
			// 	Cookies.set('userToken', response.data.token);

			// 	if (user) {
			// 		console.log(response.data.user.username)
			// 	}
			// 	setStatus({
			// 		msg: 'Login successful',
			// 		severity: 'success'
			// 	});
			// 	navigate('/home');
			// }

		} catch (e) {
			setUsername('');
			setPassword('');
			if (e instanceof AxiosError) {
				if (e.response)
					return setStatus({
						msg: e.response.data.error,
						severity: 'error',
					});
			}
			return setStatus({
				msg: e.message,
				severity: 'error',
			});
		}
	};

	const validateForm = () => {
		let isValid = true;
		if (!username) {
			setUsernameError('Username is required');
			isValid = false;
		}
		if (!password) {
			setPasswordError('Password is required');
			isValid = false;
		}
		return isValid;
	};

	return (
		<>
			<Box className='formS' sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }} marginTop={2.5}  >
				<Box className='h1-S' sx={{ display: { xs: "flex", md: "none" } }} > <h1>Sign In</h1> </Box>
				<Box className='h1-L' sx={{ display: { xs: "none", md: "flex" } }} > <h1>Sign In</h1> </Box>
				<Box sx={{ display: "flex", width: '40%' }}
					flexDirection={"column"}
					alignItems={"center"}
					justifyContent={"flex-start"}
				>
					<TextField
						className='textfield'
						// type={"text"}
						value={username}
						variant="outlined"
						sx={{ width: "100%", height: "55px", marginBottom: "30px", marginTop: "5px", backgroundColor: "white", borderRadius: "15px" }}
						label='Username'
						onChange={(e) => setUsername(e.target.value)}
						error={usernameError !== ''}
						helperText={usernameError}
						required
					/>
					<TextField
						className='textfield'
						type={"password"}
						value={password}
						sx={{ width: "100%", height: "55px", marginBottom: "30px", backgroundColor: "white", borderRadius: "15px" }}
						autoComplete="current-password"
						label='Password'
						onChange={(e) => setPassword(e.target.value)}
						error={passwordError !== ''}
						helperText={passwordError}
						required
					/>
					<Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: 'center', width: "100%", }}>
						<button className='getStarted-S' onClick={handleSubmit} > Get Started !</button>
					</Box>
					<Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: 'center', width: "100%", marginTop: "20px" }}>
						<button className='getStarted-L' onClick={handleSubmit} > Get Started !</button>
					</Box>
				</Box>
			</Box>

		</>
	)
}

export default Login
