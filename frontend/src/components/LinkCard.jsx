import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import { useEffect, useState, useContext } from "react";
import { AxiosError } from "axios"
import Axios from "axios";
import GlobalContext from '../share/GlobalContext';
import Cookies from 'js-cookie';


//! หน้าตา card ที่แสดง
const LinkCard = ({ id, title, url, description, deadline, setLink }) => {
	// const formattedDeadline = new Date(deadline).toLocaleDateString();
	const { status, setStatus } = useContext(GlobalContext);
	const [previewData, setPreviewData] = useState(null);

	useEffect(() => {
		const fetchPreviewData = async () => {
			try {
				const response = await Axios.get('http://localhost:8000/link-preview', {
					params: {
						id: id,
						url: url,
					},
				});
				if (response.data) {
					console.log("Sending is success");
					setPreviewData(response.data);
				}
			} catch (error) {
				console.log("Something is wrong");
				// console.error('Error fetching link preview data:', error);
				// console.log("Error fetching link preview data:", error.message);
				console.error('Error fetching link preview data:', error.response.data.error);
			}
		};

		fetchPreviewData();
	}, []);

	// ! 4.) delete
	const handleDelete = async () => {
		try {
			const userToken = Cookies.get('UserToken');
			const response = await Axios.delete('http://localhost:8000/deleteLink', {
				headers: { Authorization: `Bearer ${userToken}` },
				data: { id: id }
			});
			if (response.data.success) {
				setStatus({
					msg: 'List Card has been delete',
					severity: 'success'
				});
				setLink((link) => link.filter((l) => l.id !== link.id));
			}
			else {
				console.log(response.data.error)
				setStatus({
					msg: response.data.error,
					severity: 'error'
				});
			}
		} catch (e) {
			if (e instanceof AxiosError)
				if (e.response)
					return setStatus({
						msg: e.response.data.error,
						severity: 'error',
					});
			return setStatus({
				msg: e.message,
				severity: 'error',
			});
		}
	}

	return (

		<Box
			bgcolor={"#ff731d"}
			marginTop={"10px"}
			width={"100%"}
			borderRadius={"15px"}
			boxShadow={"-6px 4px 4px rgba(0, 0, 0, 0.25)"}
			display={'flex'}
			flexDirection={"row"}
			padding={2.5}
			sx={{
				gap: "20px", height: { xs: 200, md: 280 },
			}}
		>
			{/* left */}
			< Box
				// bgcolor={"white"}
				width={"60%"}
				height={"100%"}
				display={"flex"}
				flexDirection={"column"}
			>
				<Box
					bgcolor={"white"}
					width={"100%"}
					height={"50px"}
					display={"flex"}
					alignItems={"center"}
					borderRadius={"15px"}
					marginBottom={0.5}
					sx={{
						overflowX: "scroll",
						overflowY: "hidden",
						whiteSpace: "nowrap",
					}}
				>
					<Typography
						sx={{
							fontFamily: "Ubuntu",
							fontWeight: "bold",
							fontSize: "18px",
							color: "#333333",
							marginLeft: "30px",
						}}
					>
						{title}
					</Typography>
				</Box>
				<Box
					bgcolor={"white"}
					width={"100%"}
					height={"50px"}
					display={"flex"}
					alignItems={"center"}
					borderRadius={"15px"}
					marginBottom={1}
					sx={{
						overflowX: "scroll",
						overflowY: "hidden",
						whiteSpace: "nowrap",
					}}
				>
					<Typography
						sx={{
							fontFamily: "Ubuntu",
							fontWeight: "bold",
							fontSize: "12px",
							color: "#333333",
							marginLeft: "30px",
						}}
					>
						{url}
					</Typography>
				</Box>

				<Box
					bgcolor={"white"}
					width={"100%"}
					height={"130px"}
					display={"block"}
					alignItems={"center"}
					flexDirection={"column"}
					borderRadius={"15px"}
					paddingY={2}
					paddingX={3.5}
					sx={{ overflowY: "auto" }}
				>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "bold", fontSize: "14px", color: "#333333", textAlign: "left", marginBottom: "5px" }} >Description:</Typography>
					<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "light", fontSize: "11px", color: "#333333", textAlign: "left" }} >{description}</Typography>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"row"}

				>
					<Typography
						sx={{
							fontFamily: "Ubuntu",
							fontWeight: "medium",
							fontSize: "16px",
							color: "#ffffff",
							textAlign: "left",
							textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
							marginTop: "20px",
							marginLeft: "10px",
							alignSelf: "flex-end"
						}} >
						Reminder: 23/04/2023
					</Typography>

					<Box sx={{ marginLeft: "auto", marginTop: "20px" }}  >

						<Button
							onClick={handleDelete}
							variant="contained"
							size="medium"
							sx={{
								backgroundColor: "#ff731d",
								color: "#fff",
								fontFamily: "Quantico",
								fontWeight: "bold",
								fontSize: "12px",
								borderRadius: "15px",
								border: "2px solid #ffcbaa",
								marginRight: "15px",
								'&:hover': {
									backgroundColor: "red"
								}
							}}
							style={{ color: "white" }}
						>
							delete
						</Button>
						<Button
							// onClick={() => closeModal(false)}
							variant="contained"
							size="medium"
							sx={{
								width: "80px",
								backgroundColor: "white",
								fontFamily: "Quantico",
								fontWeight: "bold",
								fontSize: "12px",
								borderRadius: "12px",
								border: "2px solid #FF6100",
								marginRight: "10px",
								'&:hover': {
									border: "2px solid red",
									backgroundColor: "white"
								}
							}}
							style={{ color: "#ff731d" }}
						>
							edit
						</Button>
					</Box>
				</Box>

			</Box>


			{/* right */}

			<Box
				bgcolor={"white"}
				width={"40%"}
				height={"100%"}
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				borderRadius={"15px"}
				sx={{
					cursor: 'pointer',
					'&:hover': {
						transform: 'scale(1.02)',
						transition: 'all 0.1s ease-in-out',
					}
				}}
			>
				{previewData && (
					<div
						style={{
							width: "100%",
							height: "100%",
							overflow: "auto",
							borderRadius: "15px"
						}}
					>
						<a href={url} target="_blank" >
							<img
								src={previewData.image}
								alt="Preview"
								style={{ width: "100%", height: "auto", objectFit: "cover" }}
							/>
						</a>
						<div
							style={{
								padding: "20px"
							}}
						>
							<Typography sx={{ fontWeight: "bold", marginBottom: "10px", fontSize: "15px" }} >{previewData.title}</Typography>
							<Typography sx={{ fontSize: "13px", color: "#666666" }} >{previewData.description}</Typography>
						</div>
					</div>
				)}
			</Box>

		</Box>
	);
};

export default LinkCard;
