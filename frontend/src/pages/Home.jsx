import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Card, Grid, Box, Typography, Tab, Tabs, Container } from '@mui/material'
import { useState, useEffect, useContext } from 'react'
import LinkCard from '../components/LinkCard';
import LinkCreateModal from "../components/LinkCreateModal"
import NavBar from '../components/NavBar';
import ImageCard from "../components/ImageCard"

import Cookies from 'js-cookie';
import { AxiosError } from "axios"
import Axios from '../share/AxiosInstance';
import GlobalContext from "../share/GlobalContext"


function Home() {
	const { user, setUser } = useContext(GlobalContext);
	const { status, setStatus } = useContext(GlobalContext);

	const [link, setLink] = useState([]);

	const [showFirstBox, setShowFirstBox] = useState(true);
	const [showSecondBox, setShowSecondBox] = useState(false);

	useEffect(() => {
		Axios.get("/getAllLink")
			.then((response) => {
				const responseData = response.data;
				if (responseData.success) {
					setLink(responseData.data);
				} else {
					// Handle unsuccessful response
				}
			})
			.catch((error) => {
				// Handle the error
				console.error(error);
			});
	}, []);

	//! 1.)  Note Create Modal
	const handleFirstBoxClick = () => {
		if (!user) {
			setStatus({
				msg: 'You must login to create note',
				severity: 'error',
			});
		} else {
			setShowFirstBox(false);
			setShowSecondBox(true);
		}

		setTimeout(() => setStatus(), 1000);
	};

	const handleSecondBoxSubmit = () => {
		setShowFirstBox(true);
		setShowSecondBox(false);
	};


	// //! for category
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};


	return (
		<Box width="100%" height={"100%"} style={{ overflowY: "auto" }} sx={{ backgroundColor: "white" }} >
			<NavBar />

			<Box width={"100%"} height={"100vh"} display={"flex"} flexDirection={"row"} >
				<Box bgcolor={""} sx={{ width: { xs: "90%", md: "70%" }, height: "100%", }} marginLeft={"5%"}  >
					<Box sx={{ display: { xs: "block", md: "none" }, maxWidth: 300, bgcolor: 'white' }} marginTop={2} >
						<Tabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons="auto"
						>
							<Tab label="ALL" />
							<Tab label="Category A" />
							<Tab label="Category B" />
							<Tab label="Category C" />
							<Tab label="Category D" />
						</Tabs>
					</Box>
					<Box sx={{ display: { xs: "none", md: "block" }, maxWidth: 700, bgcolor: 'white' }} marginTop={2} >
						<Tabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons="auto"
						>
							<Tab label="ALL" />
							<Tab label="Category A" />
							<Tab label="Category B" />
							<Tab label="Category C" />
							<Tab label="Category D" />
						</Tabs>
					</Box>




					{/* new link */}
					{showFirstBox && (
						<Box
							onClick={handleFirstBoxClick}
							bgcolor={"#ffc7a5"}
							width={"85%"}
							height={"73px"}
							borderRadius={"15px"}
							boxShadow={"-6px 5px 1px rgba(255, 155, 29, 1)"}
							display={'flex'}
							alignItems={"center"}
							paddingLeft={"3%"}
							marginTop={3}
							marginBottom={2}
							sx={{
								cursor: 'pointer',
								'&:hover': {
									transform: 'scale(1.05)',
									transition: 'all 0.1s ease-in-out',
								}
							}}
						>
							<Box
								bgcolor={"white"}
								width={"60%"}
								height={"46px"}
								borderRadius={"15px"}
								display={"flex"}
								alignItems={"center"}
							>
								<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "bold", fontSize: "16px", color: "#666666", marginLeft: "19px" }} >New Link</Typography>
							</Box>
						</Box>
					)}

					{showSecondBox && (
						<LinkCreateModal handleSubmit={handleSecondBoxSubmit} />
						//  <LinkCreateModal open={openCreate} handleClose={handleLinkCreateClose} setLink={setLink} />
					)}


					<Box width={"85%"} height={"100%"} display={"flex"} flexDirection={"column"}  >
						{link.map((links) => (
							<LinkCard
								key={links.link_id} // Add key prop
								id={links.link_id}
								title={links.title}
								url={links.url}
								description={links.description}
								setLink={setLink}
							/>
						))}
					</Box>
				</Box>


				{/* right */}
				<Box
					sx={{
						width: "30%",
						height: "auto",
						display: { xs: "none", md: "flex" },
						bgcolor: "#fff7e9",
						flexDirection: "column",
						alignItems: "flex-start",
						paddingTop: "30px",
						gap: 1,
						position: "relative"
					}}
				>
					<Typography sx={{ marginLeft: "50px", fontWeight: "bold" }} >Visit Today</Typography>
					<Box
						sx={{
							display: {
								xs: "none", sm: "block", width: "75%",
								borderTop: "2px solid #666666",
								marginLeft: "50px",
								boxShadow: "0px 2px 3px rgba(102, 102, 102, 0.25)"
							}
						}}
					>
					</Box>
					<Box
						sx={{
							width: "100%",
							height: "auto",
							display: { xs: "none", md: "flex" },
							flexDirection: "column",
							alignItems: "center",
							paddingTop: "30px",
							gap: 4,
						}}
					>
						{link.map((links) => (
							<ImageCard
								key={links.link_id} // Add key prop
								id={links.link_id}
								title={links.title}
								url={links.url}
								description={links.description}
							/>
						))}
					</Box>
				</Box>
			</Box>

		</Box>


	)
}

export default Home
