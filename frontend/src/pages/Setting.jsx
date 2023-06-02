import React from 'react'
import "../styles/Setting.css"
import { useNavigate, Link } from 'react-router-dom';
import { Card, Grid, Box, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material'
import DeleteAccount from '../components/DeleteAccount';
import { useState, useContext } from 'react';
import NavBar from '../components/NavBar';
import Cookies from 'js-cookie';
import GlobalContext from '../share/GlobalContext';

function Setting() {
	const { user, setUser } = useContext(GlobalContext);
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();
	const logout = () => {
		setUser();
		Cookies.remove('UserToken');
		navigate("/");
	};

  return (
	<Box width="100%" height="900px" style={{maxHeight: '928px', overflowY: "auto" }} sx={{ backgroundColor: "white"}} >
		{openModal && <DeleteAccount closeModal={setOpenModal} />}
		<NavBar />
		<Box  height={"30px"} style={{width: '100%' }}>
			<Link to="/home">
				<Box
					className='backS'
					component='img'
					sx={{
						flex: 'right',
						width: 24,
						display:{xs: "inline-block", sm: "none"},
						marginTop: 4
					}}
					alt="Logo"
					src="/src/assets/backS.png"
				/>
			</Link>
			<Link to="/home" >
				<Box
					className='backL'
					component='img'
					sx={{
						width: 107,
						display:{xs: "none", sm: "inline-block"},
						marginTop: 4
					}}
					alt="Logo"
					src="/src/assets/backL.svg"
				/>
			</Link>
		</Box>


		{/* body - S */}
		<Box  margin={"0 auto"} marginTop={7} justifyContent={"center"} width={"297px"} sx={{ display:{xs: "block", md: "none"}}}>
			<Typography variant='h1' sx={{fontFamily: "Quantico", fontWeight: "bold", fontSize: "25px", color: "#333333", textAlign: "left"}} marginBottom={3}>Account Setting</Typography>
		</Box>
		<Box marginTop={5} sx={{ display:{xs: "flex", md: "none"}, flexDirection: 'column', alignItems: 'center'}} >
			{/* 1 */}
			<Box
				bgcolor={"#ff731d"}
				width={"297px"}
				height={"64px"}
				borderRadius={"15px"}
				boxShadow={"-6px 7px 0px rgba(102, 102, 102, 0.5)"}
				display={'flex'}
				alignItems={"center"}
				justifyContent={"center"}
				marginBottom={2}
				sx={{
					cursor: 'pointer',
					'&:hover': {
						transform: 'scale(1.1)',
						transition: 'all 0.1s ease-in-out',
					}
				}}
			>
				<Box
					bgcolor={"white"}
					width={"280px"}
					height={"46px"}
					borderRadius={"15px"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					gap={7}
				>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "bold", fontSize: "12px", color: "#333333"}} >Email Address</Typography>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "medium", fontSize: "10px", color: "#333333"}}>abcd1234@gmail.com</Typography>
				</Box>
			</Box>

			{/* 2 */}
			<Box
				onClick={logout}
				bgcolor={"#ff731d"}
				width={"297px"}
				height={"64px"}
				borderRadius={"15px"}
				boxShadow={"-6px 7px 0px rgba(102, 102, 102, 0.5)"}
				display={'flex'}
				alignItems={"center"}
				justifyContent={"center"}
				marginBottom={2}
				sx={{
					cursor: 'pointer',
					'&:hover': {
						transform: 'scale(1.1)',
						transition: 'all 0.1s ease-in-out',
					}
				}}
			>
				<Box
					bgcolor={"white"}
					width={"280px"}
					height={"46px"}
					borderRadius={"15px"}
					display={"flex"}
					alignItems={"center"}
				>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "bold", fontSize: "12px", color: "#ff0000", marginLeft: "19px"}} >Sign Out</Typography>
				</Box>
			</Box>

			{/* 3 */}
			<Box
				onClick={() => {setOpenModal(true)}}
				bgcolor={"#ff731d"}
				width={"297px"}
				height={"64px"}
				borderRadius={"15px"}
				boxShadow={"-6px 7px 0px rgba(102, 102, 102, 0.5)"}
				display={'flex'}
				alignItems={"center"}
				justifyContent={"center"}
				marginBottom={2}
				sx={{
					cursor: 'pointer',
					'&:hover': {
						transform: 'scale(1.1)',
						transition: 'all 0.1s ease-in-out',
					}
				}}
			>
				<Box
					bgcolor={"white"}
					width={"280px"}
					height={"46px"}
					borderRadius={"15px"}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"flex-start"}
				>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "bold", fontSize: "12px", color: "#ff0000", marginLeft: "19px", marginTop: "7px"}} >Delete Account</Typography>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "medium", fontSize: "10px", color: "#333333", marginLeft: "19px"}}>permanently delete your account and content</Typography>
				</Box>
			</Box>
		</Box>


		{/* body - L */}
		<Box  margin={"0 auto"} marginTop={7} justifyContent={"center"} width={"550px"} sx={{ display:{xs: "none", md: "block"}}}>
			<Typography variant='h1' sx={{fontFamily: "Quantico", fontWeight: "bold", fontSize: "30px", color: "#333333", textAlign: "left"}} marginBottom={3}>Account Setting</Typography>
		</Box>
		<Box marginTop={4} sx={{ display:{xs: "none", md: "flex"}, flexDirection: 'column', alignItems: 'center'}} >
			<Box
				bgcolor={"#ff731d"}
				width={"550px"}
				height={"100px"}
				borderRadius={"15px"}
				boxShadow={"-6px 7px 0px rgba(102, 102, 102, 0.5)"}
				display={'flex'}
				alignItems={"center"}
				justifyContent={"center"}
				marginBottom={2}
				sx={{
					cursor: 'pointer',
					'&:hover': {
						transform: 'scale(1.1)',
						transition: 'all 0.1s ease-in-out',
					}
				}}
			>
				<Box
					bgcolor={"white"}
					width={"520px"}
					height={"68px"}
					borderRadius={"15px"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					gap={25}
				>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "bold", fontSize: "16px", color: "#333333"}} >Email Address</Typography>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "medium", fontSize: "14px", color: "#333333"}}>abcd1234@gmail.com</Typography>
				</Box>
			</Box>

			{/* 2 */}
			<Box
			onClick={logout}
				bgcolor={"#ff731d"}
				width={"550px"}
				height={"100px"}
				borderRadius={"15px"}
				boxShadow={"-6px 7px 0px rgba(102, 102, 102, 0.5)"}
				display={'flex'}
				alignItems={"center"}
				justifyContent={"center"}
				marginBottom={2}
				sx={{
					cursor: 'pointer',
					'&:hover': {
						transform: 'scale(1.1)',
						transition: 'all 0.1s ease-in-out',
					}
				}}
			>
				<Box
					bgcolor={"white"}
					width={"520px"}
					height={"68px"}
					borderRadius={"15px"}
					display={"flex"}
					alignItems={"center"}
				>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "bold", fontSize: "16px", color: "#ff0000", marginLeft: "35px"}} >Sign Out</Typography>
				</Box>
			</Box>

			{/* 3 */}
			<Box
				onClick={() => {setOpenModal(true)}}
				bgcolor={"#ff731d"}
				width={"550px"}
				height={"100px"}
				borderRadius={"15px"}
				boxShadow={"-6px 7px 0px rgba(102, 102, 102, 0.5)"}
				display={'flex'}
				alignItems={"center"}
				justifyContent={"center"}
				marginBottom={2}
				sx={{
					cursor: 'pointer',
					'&:hover': {
						transform: 'scale(1.1)',
						transition: 'all 0.1s ease-in-out',
					}
				}}
			>
				<Box
					bgcolor={"white"}
					width={"520px"}
					height={"68px"}
					borderRadius={"15px"}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"flex-start"}
				>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "bold", fontSize: "16px", color: "#ff0000", marginLeft: "35px", marginTop: "10px"}} >Delete Account</Typography>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "medium", fontSize: "14px", color: "#333333", marginLeft: "35px"}}>permanently delete your account and content</Typography>
				</Box>
			</Box>
		</Box>
	</Box>

  )
}

export default Setting
