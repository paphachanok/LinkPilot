import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Card, Grid, Box, Typography, Tab, Tabs, Container } from '@mui/material'
import { useState, useEffect, useContext } from 'react'
import LinkCard from '../components/LinkCard';
import LinkCreateModal from "../components/LinkCreateModal"
import NavBar from '../components/NavBar';

import Cookies from 'js-cookie';
import { AxiosError } from "axios"
import Axios from '../share/AxiosInstance';
import GlobalContext from "../share/GlobalContext"
// import LinkEditModal from "../components/LinkEditModal"
// import LinkDetailModal from "../components/LinkDetailModal"



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
		<Box width="100%" height={"100vh"} style={{ overflowY: "auto" }} sx={{ backgroundColor: "white" }} >
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
								deadline={links.deadline}
								setLink={setLink}
							/>
						))}
					</Box>

					{/* senior */}
					{/* {user ? (
						link.length === 0 ? (
							<Typography textAlign="center" fontSize={18} color="white" fontWeight={300} marginTop={8}>
								No note to show... <br />
								Let's create a new note.
							</Typography>
						) : (
							<Box width={"85%"} height={"100%"} display={"flex"} flexDirection={"column"}  >
								<LinkCard name={"Google"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
								<LinkCard name={"Google"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
								<LinkCard name={"Google"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
								{link.map((link) => (
										<LinkCard name={link.name} deadline={link.deadline} />
								))}
							</Box>
						)
					) : (
						<Typography textAlign="center" fontSize={18} color="white" fontWeight={300} marginTop={8}>
							No note to show... <br />
							Please login to create a new note.
						</Typography>
					)} */}
				</Box>


				{/* right */}
				<Box sx={{ width: "30%", height: "100%", display: { xs: "none", md: "flex" } }} bgcolor={"#fff7e9"} >

				</Box>
			</Box>

		</Box>


	)
}

export default Home
