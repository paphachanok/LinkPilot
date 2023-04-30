import React from 'react'
import '../styles/Splash.css'

//! assignment
import { Card, Grid, Box, Typography, CardMedia, CardContent } from '@mui/material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu"

function Splash({userLogin, setUserLogin}) {

	//! assignment
	// const handleLogin = () => setUserLogin(true)
	// const handleLogout = () => setUserLogin(false)

	// ! new
	function goToSignUp() {
		window.location.href = '/sign-up';
	}
	function goToSignIn() {
		window.location.href = '/sign-in';
	}

  return (
	<>
		{/* <AppBar sx={{backgroundColor:"#20232a"}} >
			<Toolbar sx={{display:"flex", justifyContent:"space-between"}} >
				จะไม่แสดง icon จนกว่าหน้าจอจะเล็ก
				<IconButton
					color="inherit"
					edge="start"
					sx={{ mr: 2, display:{sm: "block", md: "none"}}}
				>
					<MenuIcon />
				</IconButton>

				<Box sx={{display:{xs: "none", md: "block"}}} >
					<Box>
						{navItems.map((e) => (
							<Button key={e} sx={{color: "#fff" }} >
								{e}
							</Button>
						))}
					</Box>
				</Box>
				<Button></Button>
			</Toolbar>
		</AppBar> */}

		<Grid
			container
			direction="row"
			style={{ height: '100vh' }}
		>
			<Grid item xs={12} className='gridItem1' style={{height: '50%' }} >
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


			<Grid item xs={12} className='gridItem2' style={{}} >
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

		{/* //! assignment */ }
		{/* {userLogin ? (
			<button className='login' onClick={handleLogout} >Logout</button>
		) : (
			<button className='login' onClick={handleLogin} >Login</button>
		)} */}
	</>
  )
}

export default Splash
