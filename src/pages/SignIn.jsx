import React from 'react'
import { Card, Grid, Box, Button, Typography, TextField, FormControlLabel,  Checkbox } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/SignIn.css"


function SignIn() {
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
		<Box className="bod" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Sign Up
			</Typography>
			<Box sx={{ width: '100%', maxWidth: 400 }}>
				<TextField
				fullWidth
				label="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				margin="normal"
				variant="outlined"
				/>
				<TextField
				fullWidth
				label="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				margin="normal"
				variant="outlined"
				/>
				<TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<FormControlLabel
					control={<Checkbox checked={isChecked} onChange={handleCheck} />}
					label="I agree to the terms and conditions."
				/>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						variant="contained"
						color="primary"
						disabled={!isChecked}
						onClick={handleSignUpClick}
					>
						Sign Up
					</Button>
				</Box>
			</Box>
    	</Box>
  )
}

export default SignIn
