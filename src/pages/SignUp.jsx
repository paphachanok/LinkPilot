import React from 'react'
import '../styles/SignUp.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { Card, Grid, Box, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';

function SignUp({userLogin, setUserLogin}) {
	// ใช้เวลากดยอมรับ agreement
	// const handleLogin = () => setUserLogin(true)
	// const handleLogout = () => setUserLogin(false)

	//! new
	// function goToSignIn() {
	// 	window.location.href = '/sign-in';
	// }
	const goToSignIn = () => {
		navigate('/sign-in');
	}

	const navigate = useNavigate();
	const [isChecked, setIsChecked] = useState(false);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleCheck = () => {
		setIsChecked(!isChecked);
	};

	const handleSignUpClick = () => {
		// Send sign-up request here
		navigate('/home');
	};

	return (
		<>
			<Grid
				container
				direction="row"
				style={{ height: '100vh' }}
			>
				<Box
					// bgcolor="red"
					className='topBar'
					display="flex"
					width="100%"
					style={{height: '10%' }}
				>
					<Box
						component='img'
						className='logoTopS'
						sx={{
							width: 236,
							marginTop: '15px',
							display:{xs: "inline-block", md: "none"}
						}}
						alt="Logo"
						src="/src/assets/miniLogo.svg"
					/>
					<Box
						component='img'
						className='logoTopL'
						sx={{
							width: 236,
							marginTop: '15px',
							display:{xs: "none", md: "inline-block"}
						}}
						alt="Logo"
						src="/src/assets/miniLogo.svg"
					/>
				</Box>

				<Grid item xs={12} className='gridItem1' style={{height: '70%', display: 'block'}} >
					<Box  height={"30px"} style={{width: '100%' }}>
						<Box
							className='backS'
							component='img'
							sx={{
								flex: 'right',
								width: 24,
								display:{xs: "inline-block", md: "none"}
							}}
							alt="Logo"
							src="/src/assets/backS.png"
						/>

						<Box
							className='backL'
							component='img'
							sx={{
								width: 107,
								display:{xs: "none", md: "inline-block"}
							}}
							alt="Logo"
							src="/src/assets/backL.svg"
						/>
					</Box>


					<Box sx={{ height: 500, display:{xs: "block", md: "none"}, }} >
						<Box className='h1-S'>
							<h1>Stay Organized.</h1>
						</Box>
							<form>
								<Box
									display='flex'
									flexDirection={"column"}
									maxwidth={534}
									alignItems={"center"}
									justifyContent={"flex-start"}
									margin={"auto"}
									marginTop={5}

								>
									<Typography variant='h2' padding={3} textAlign={"center"} >Sign Up </Typography>
									<TextField sx={{ width: "500px"}} margin="normal" type={"email"} variant='outlined' label="Gmail" />
									<TextField margin="normal" type={"password"} variant='outlined' placeholder='Password' />
									<TextField margin="normal" type={"text"} variant='outlined' placeholder='Username' />

									<Button></Button>
								</Box>
							</form>
						{/* <button className='getStarted-S' onClick={goToSignUp} > Get Started !</button> */}

					</Box>

					{/* <Box className='formL' sx={{ height: 500, display:{xs: "none", md: "block"}, flexDirection: 'column', alignItems: 'center'  }} > */}
					<Box className='formL' sx={{ display:{xs: "none", md: "flex"}, flexDirection: 'column', alignItems: 'center' }} marginTop={2}  >
						<Box className='h1-L'> <h1>Sign Up</h1> </Box>
						<Box sx={{ display:{xs: "none", md: "block"}, width: '100%', maxWidth: 500 }}
							alignItems={"center"}
							justifyContent={"flex-start"}
						>
							<TextField
								className='textfield'
								type={"email"}
								value={email}
								variant="outlined"
								sx={{width: "500px", height: "55px", marginBottom: "25px", backgroundColor: "white", borderRadius: "15px"}}
								label='Gmail'
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								className='textfield'
								type={"password"}
								value={password}
								sx={{width: "500px", height: "55px",marginBottom: "25px", backgroundColor: "white", borderRadius: "15px"}}
								autoComplete="current-password"
								label='Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
							<TextField
								className='textfield'
								type={"text"}
								value={username}
								sx={{width: "500px", height: "55px", marginBottom: "18px", backgroundColor: "white", borderRadius: "15px"}}
								label='Username'
								onChange={(e) => setUsername(e.target.value)}
							/>
							<FormControlLabel
								sx={{ float: "left", marginBottom:"20px"}}
								control={<Checkbox checked={isChecked} onChange={handleCheck} />}
								label="I agree to the terms and conditions."
							/>
							<Box sx={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
								<button className='getStarted-L' disabled={!isChecked} onClick={handleSignUpClick} > Get Started !</button>
							</Box>
						</Box>
					</Box>
				</Grid>


				<Grid item xs={12} className='gridItem2' style={{height: '25%'}} >

				</Grid>
			</Grid>
		</>
	)
}

export default SignUp
