import React from 'react'
import GlobalContext from '../share/GlobalContext';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { AxiosError } from "axios"
import Axios from '../share/AxiosInstance';
import { useEffect, useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";


function NavBar() {
	const { user, setUser } = useContext(GlobalContext);
	const { isAuthorize, setIsAuthorize } = useContext(GlobalContext)
	const navigate = useNavigate()

	useEffect(() => {
		const userToken = Cookies.get("userToken");
		if (userToken) {
			Axios.get("/getUser", {
				headers: { Authorization: `Bearer ${userToken}` },
			})
				.then((response) => {
					const responseData = response.data;
					if (responseData.success) {
						setUser(responseData.data);
						setIsAuthorize(true);
					} else {
						// Handle unsuccessful response
					}
				})
				.catch((error) => {
					console.log("error", error);
					// Handle error
				});
		}
	}, []);

	const refreshPage = () => {
		window.location.reload();
	};

	const handleLogout = () => {
		Cookies.remove("userToken");
		setIsAuthorize(false);
		navigate('/')
		refreshPage()
	};

	// const getUserData = () => {
	// 	Axios.get('/getUser')
	// 	  .then((response) => {
	// 		const responseData = response.data;
	// 		if (responseData.success) {
	// 		  setUser(responseData.data.username);
	// 		} else {
	// 		  // Handle unsuccessful response
	// 		}
	// 	  })
	// 	  .catch((error) => {
	// 		// Handle the error
	// 		console.error(error);
	// 	  });
	//   };

	//   useEffect(() => {
	// 	getUserData();
	//   }, []); // Empty dependency array to run the effect only once

	// useEffect(() => {
	// 	Axios.get("/getUser")
	// 	.then((response) => {
	// 	  const responseData = response.data;
	// 	  if (responseData.success) {
	// 		console.log(responseData.data.username);
	// 		setUser(responseData.data.username);
	// 	  } else {
	// 		// Handle unsuccessful response
	// 	  }
	// 	})
	// 	.catch((error) => {
	// 	  // Handle the error
	// 	  console.error(error);
	// 	});

	// }, []);


	const logout = () => {
		setUser();
		Cookies.remove('UserToken');
	};

	return (
		<>
			<Box
				bgcolor="white"
				className='topBar'
				display="grid"
				gridTemplateColumns={"auto 1fr auto"}
				width="100%"
				style={{ height: '80px' }}
			>
				<Box sx={{ marginRight: "auto", display: "flex", flexDirection: "column" }}>
					<Link to="/">
						<Box
							component='img'
							className='logoTopS'
							sx={{
								width: 136,
								marginTop: '20px',
								marginLeft: '30px',
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
								// width: 20%,
								width: 236,
								marginTop: '20px',
								marginLeft: '58px',
								display: { xs: "none", md: "inline-block" }
							}}
							alt="Logo"
							src="/src/assets/miniLogo.svg"
						/>
					</Link>
				</Box>

				<Box bgcolor={""} sx={{ marginLeft: "auto", display: "flex", flexDirection: "row", }} >

					{isAuthorize ? (
						<Box sx={{ display: {xs: "none", sm: "flex"}, alignItems: 'center', gap: '2rem' }}>
							<Typography variant="body1" sx={{ fontWeight: 'bold', color: "#ff731d" }}>
								Welcome, &nbsp; {user}
							</Typography>
							<Button
								onClick={handleLogout}
								variant="contained"
								size="small"
								sx={{
									// marginTop: "5px",
									height: "40px",
									backgroundColor: "#ff731d",
									color: "#fff",
									fontFamily: "Quantico",
									fontWeight: "bold",
									fontSize: "12px",
									borderRadius: "15px",
									border: "2px solid #ffcbaa",
									marginRight: "30px",
									'&:hover': {
										backgroundColor: "red"
									}
								}}
								style={{ color: "white" }}
							>
								Log out
							</Button>
						</Box>
					) : (
						<Link to="/sign-in" >
							<Button
								variant="contained"
								size="small"
								sx={{
									marginTop: "20px",
									height: "40px",
									backgroundColor: "#ff731d",
									color: "#fff",
									fontFamily: "Quantico",
									fontWeight: "bold",
									fontSize: "12px",
									borderRadius: "15px",
									border: "2px solid #ffcbaa",
									marginRight: "30px",
									'&:hover': {
										backgroundColor: "red"
									}
								}}
								style={{ color: "white" }}
							>
								Sign in
							</Button>
						</Link>
					)}

					<Box
						component={Link}
						to="/setting"
						sx={{
							width: 36,
							height: 36,
							marginTop: '15px',
							marginRight: "30px",
							display: { xs: "inline-block", sm: "none" }
						}}
					>
						<img
							alt="Logo"
							src="/src/assets/account.svg"
							style={{ width: '100%', height: '100%' }}
						/>
					</Box>


					<Box
						component={Link}
						to="/setting"
						sx={{
							width: 46,
							height: 46,
							marginTop: '15px',
							marginRight: "30px",
							display: { xs: "none", sm: "inline-block" }
						}}
					>
						<img
							alt="Logo"
							src="/src/assets/account.svg"
							style={{ width: '100%', height: '100%' }}
						/>
					</Box>

				</Box>
			</Box>

			<Box
				sx={{
					display: {
						xs: "none", sm: "block", width: "65%",
						borderTop: "1px solid #666666",
						margin: "0px 0",
						boxShadow: "0px 3px 3px rgba(102, 102, 102, 0.25)"
					}
				}}
			>
			</Box>
		</>
	)
}

export default NavBar
