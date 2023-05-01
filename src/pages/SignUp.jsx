import React from 'react'
import '../styles/SignUp.css'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


import { Card, Grid, Box, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';

function SignUp({userLogin, setUserLogin}) {
	// ใช้เวลากดยอมรับ agreement
	// const handleLogin = () => setUserLogin(true)
	// const handleLogout = () => setUserLogin(false)

	//! new
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
		// setUserLogin(true);
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
					<Link to="/">
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
					</Link>

					<Link to="/">
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
					</Link>
				</Box>

				<Grid item xs={12} className='gridItem1' style={{height: '70%', display: 'block'}} >
					<Box  height={"30px"} style={{width: '100%' }}>
						<Link to="/">
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
						</Link>
						<Link to="/" >
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
						</Link>
					</Box>

					<Box className='formS' sx={{ display:{xs: "flex", md: "none"}, flexDirection: 'column', alignItems: 'center' }} marginTop={2.5}  >
						<Box className='h1-S'> <h1>Sign Up</h1> </Box>
						<Box sx={{ display:{xs: "block", md: "none"}, width: '100%', maxWidth: 297 }}
							alignItems={"center"}
							justifyContent={"flex-start"}
						>
							<TextField
								className='textfield'
								type={"email"}
								value={email}
								variant="outlined"
								sx={{width: "297px", height: "55px", marginBottom: "25px", backgroundColor: "white", borderRadius: "15px"}}
								label='Gmail'
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								className='textfield'
								type={"password"}
								value={password}
								sx={{width: "297px", height: "55px",marginBottom: "25px", backgroundColor: "white", borderRadius: "15px"}}
								autoComplete="current-password"
								label='Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
							<TextField
								className='textfield'
								type={"text"}
								value={username}
								sx={{width: "297px", height: "55px", marginBottom: "18px", backgroundColor: "white", borderRadius: "15px"}}
								label='Username'
								onChange={(e) => setUsername(e.target.value)}
							/>
							<FormControlLabel
								sx={{float: "left", marginBottom:"20px"}}
								control={<Checkbox checked={isChecked} onChange={handleCheck} />}
								// label="I agree to the terms and conditions."
								label={ <Typography sx={{ fontSize: 13 }}>I agree to the terms and conditions.</Typography>} />
							<Box sx={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
								<button className='getStarted-S' disabled={!isChecked} onClick={handleSignUpClick} > Get Started !</button>
							</Box>
						</Box>
					</Box>

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
