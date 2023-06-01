import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function DeleteAccount({ closeModal }) {
  return (
	<Box  sx={{width: "100%", height: "900px", bgcolor: "rgba(255, 255,255, 0.5)", position: "fixed", display: "flex", alignItems: "center", justifyContent: "center" }}>
		{/* small */}
		<Box
			sx={{display:{xs: "flex", md: "none"}}}
			width={"324px"}
			height={"187px"}
			bgcolor={"white"}
			borderRadius={"15px"}
			boxShadow={"-10px 4px 9px rgba(0, 0, 0, 0.25)"}
			border={"7px solid #333333"}
			flexDirection={"column"}
			alignItems={"center"} justifyContent={"center"}
		>
			<Typography sx={{ fontFamily: "Quantico", fontWeight: "bold", fontSize: "20px", color: "#333333"}}>Delete Your Account?</Typography>
			<Box display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={"10px"} marginBottom={"20px"} >
				<Typography sx={{ fontFamily: "Quantico", fontWeight: "bold", fontSize: "12px", color: "#333333"}}>Your account will be </Typography>
				<Typography sx={{ fontFamily: "Quantico", fontWeight: "bold", fontSize: "12px", color: "#ff0000", marginLeft: "5px", }}>deleted permanently !</Typography>
			</Box>
			<Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={3}>
				<Button
					onClick={() => closeModal(false)}
					variant="outline"
					size="small"
					sx={{ color: "#ff0000", fontFamily: "Quantico", fontWeight: "bold", fontSize: "12px", borderRadius: "12px", border: "2px solid #ff0000"}}
					style={{ color: "#ff0000" }}
				>
					cancel
				</Button>
				<Button
					variant="contained"
					size="medium"
					sx={{ backgroundColor: "#ff0000", color: "#fff", fontFamily: "Quantico", fontWeight: "bold", fontSize: "12px", borderRadius: "15px", }}
					style={{ color: "white" }}
				>
					delete
				</Button>
			</Box>
		</Box>

		{/* large */}
		<Box
			sx={{display:{xs: "none", md: "flex"}}}
			width={"540px"}
			height={"313px"}
			bgcolor={"white"}
			borderRadius={"15px"}
			boxShadow={"-10px 4px 9px rgba(0, 0, 0, 0.25)"}
			border={"7px solid #333333"}
			flexDirection={"column"}
			alignItems={"center"} justifyContent={"center"}
		>
			<Typography sx={{ fontFamily: "Quantico", fontWeight: "bold", fontSize: "32px", color: "#333333"}}>Delete Your Account?</Typography>
			<Box display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={"20px"} marginBottom={"50px"} >
				<Typography sx={{ fontFamily: "Quantico", fontWeight: "bold", fontSize: "18px", color: "#333333"}}>Your account will be </Typography>
				<Typography sx={{ fontFamily: "Quantico", fontWeight: "bold", fontSize: "18px", color: "#ff0000", marginLeft: "5px", }}>deleted permanently !</Typography>
			</Box>
			<Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={5}>
				<Button
				onClick={() => closeModal(false)}
					variant="outline"
					size="large"
					sx={{ color: "#ff0000", fontFamily: "Quantico", fontWeight: "bold", fontSize: "16px", borderRadius: "15px", border: "3px solid #ff0000"}}
					style={{ color: "#ff0000" }}
				>
					cancel
				</Button>
				<Button
					variant="contained"
					size="large"
					sx={{ backgroundColor: "#ff0000", color: "#fff", fontFamily: "Quantico", fontWeight: "bold", fontSize: "16px", borderRadius: "15px", }}
					style={{ color: "white" }}
				>
					delete
				</Button>
			</Box>
		</Box>
	</Box>
  )
}

export default DeleteAccount
