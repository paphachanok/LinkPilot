import React from 'react'
import '../styles/SignUp.css'
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Grid, Box, Typography } from '@mui/material'
import CreateAccount from '../components/CreateAccount';
import GlobalContext from '../share/GlobalContext';
import SnackBarMessage from '../components/SnackBarMessage';

function SignUp() {
	//! new
	const [isLogin, setIsLogin] = useState(true);
	const [status, setStatus] = useState('');
	const [user, setUser] = useState('');

	const generatekey = () => {
		return Math.random();
	};
	const handleClick = () => {
		setIsLogin(true)
	}

	return (

		<Grid
			container
			direction="row"
			style={{ maxHeight: '928px', overflowY: "auto" }}
		>
			<Box
				className='topBar'
				display="flex"
				width="100%"
				style={{ height: '88px' }}
			>
				<Link to="/">
					<Box
						component='img'
						className='logoTopS'
						sx={{
							width: 236,
							marginTop: '15px',
							display: { xs: "inline-block", md: "none" }
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
							display: { xs: "none", md: "inline-block" }
						}}
						alt="Logo"
						src="/src/assets/miniLogo.svg"
					/>
				</Link>
			</Box>

			<Grid item xs={12} className='gridItem1' style={{ height: '540px', display: 'block' }} >
				<Box height={"30px"} style={{ width: '100%' }}>
					<Link to="/">
						<Box
							className='backS'
							component='img'
							sx={{
								flex: 'right',
								width: 24,
								display: { xs: "inline-block", md: "none" }
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
								display: { xs: "none", md: "inline-block" }
							}}
							alt="Logo"
							src="/src/assets/backL.svg"
						/>
					</Link>
				</Box>

				<CreateAccount setIsLogin={setIsLogin} />
				{status ? (
					<SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
				) : null}

			</Grid>

			<Box className='gridItem2' sx={{ display: { xs: "flex", md: "none" } }} style={{ height: '314px', width: '100%' }} justifyContent={"center"} >
				<Typography sx={{ fontFamily: 'Ubuntu', fontWeight: 700, fontSize: 14, color: '#666666', marginTop: "32px" }} onClick={handleClick} >Alreaday have an account?</Typography>
				<Typography component={Link} to="/sign-in" sx={{ fontFamily: 'Ubuntu', fontWeight: 700, fontSize: 16, color: '#ff731d', marginTop: "30px", marginLeft: "10px" }} >Sign In</Typography>
			</Box>

			<Box className='gridItem2' sx={{ display: { xs: "none", md: "flex" } }} style={{ height: '314px', width: '100%' }} justifyContent={"center"} >
				<Typography sx={{ fontFamily: 'Ubuntu', fontWeight: 700, fontSize: 18, color: '#666666', marginTop: "32px" }} onClick={handleClick} >Alreaday have an account?</Typography>
				<Typography component={Link} to="/sign-in" sx={{ fontFamily: 'Ubuntu', fontWeight: 700, fontSize: 20, color: '#ff731d', marginTop: "30px", marginLeft: "15px" }} >Sign In</Typography>
			</Box>
		</Grid>

	)
}

export default SignUp
