import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState, useContext } from "react";
import { AxiosError } from "axios"
import Axios from "axios";

const ImageCard = ({ url }) => {
	const [previewData, setPreviewData] = useState(null);

	useEffect(() => {
		const fetchPreviewData = async () => {
			try {
				const response = await Axios.get(`http://localhost:8000/link-preview?url=${url}`,);
				if (response.data) {
					console.log("Sending is success");
					setPreviewData(response.data);
				}
			} catch (error) {
				console.error('Error fetching link preview data:', error.response.data.error);
			}
		};
		fetchPreviewData();
	}, []);

	return (
		<Box
			width={"80%"}
			height={"180px"}
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			borderRadius={"15px"}
			boxShadow={"-4px 4px 4px rgba(0, 0, 0, 0.5)"}
			justifyContent={"center"}
			bgcolor={"white"}
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
							alt="Click to go to the Link"
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
	)
}

export default ImageCard
