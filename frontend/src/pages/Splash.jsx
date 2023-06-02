import React from 'react'
import '../styles/Splash.css'

//! assignment
import { Card, Grid, Box, Typography, CardMedia, CardContent } from '@mui/material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu"

function Splash({userLogin, setUserLogin}) {

	function goToSignUp() {
		window.location.href = '/sign-up';
	}
	function goToSignIn() {
		window.location.href = '/sign-in';
	}

  return (
	<>
		<Grid
			container
			direction="row"
			style={{ maxHeight: '928px', overflowY: "auto" }}
		>
			<Grid item xs={12} className='gridItem1' style={{height: '400px' }} >
				<Box
					// bgcolor="red"
					display="flex"
					justifyContent="space-between"
					width="100%"
					height="20%"
					sx={{
						display:{xs: "inline-block", md: "none"}
					}}
				>
					<button className='signUpS' onClick={goToSignUp} > Sign Up</button>
					<button className='signInS' onClick={goToSignIn} > Sign In </button>
				</Box>
				<Box
					// bgcolor="red"
					display="flex"
					justifyContent="space-between"
					width="100%"
					height="20%"
					borderBottom={0.5}
					sx={{
						display:{xs: "none", md: "inline-block"},
					}}
				>
					<button className='signUpL' onClick={goToSignUp} > Sign Up</button>
					<button className='signInL' onClick={goToSignIn} > Sign In </button>
				</Box>



				<Box
					component='img'
					sx={{
						width: 306,
						marginTop: '150px',
						display:{xs: "inline-block", md: "none"}
					}}
					alt="Logo"
					src="/src/assets/splashLogo.svg"
				/>

				<Box
					component='img'
					sx={{
						width: 618,
						marginTop: '80px',
						display:{xs: "none", md: "inline-block"}
					}}
					alt="Logo"
					src="/src/assets/splashLogo.svg"
				/>
			</Grid>


			<Grid item xs={12} className='gridItem2' style={{height: '542px'}} >
				<Box sx={{ height: 500, display:{xs: "inline-block", md: "none"}, }} >
					<Box className='h1-S'>
						<h1>Stay Organized.</h1>
					</Box>
					<Box sx={{ margin: 3 }} className='h3-S' >
						<h3>Collect Your Discoverd Stories,</h3>
						<h3>Interests, and Studies.</h3>
					</Box>
					<button className='getStarted-S' onClick={goToSignUp} > Get Started !</button>
					<Box className='lineS'></Box>
				</Box>

				<Box sx={{ height: 500, display:{xs: "none", md: "inline-block"}, }} >
					<Box className='h1-L'>
						<h1>Stay Organized.</h1>
					</Box>
					<Box sx={{ margin: 3 }} className='h3-L' >
						<h3>Collect Your Discoverd Stories,</h3>
						<h3>Interests, and Studies.</h3>
					</Box>
					<button className='getStarted-L' onClick={goToSignUp} > Get Started !</button>
					<Box className='lineL'></Box>
				</Box>

			</Grid>
		</Grid>
	</>
  )
}

export default Splash
