import { useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

import GlobalContext from '../share/GlobalContext';
import Axios from '../share/AxiosInstance';

import GlobalContext from '../share/GlobalContext';
import Axios from '../share/AxiosInstance';

// ! when click edit => edit dialog show up
const LinkEditModal = ({ note = {}, open = false, handleClose = () => { }, setNotes = () => { } }) => {
	const [newNote, setNewNote] = useState(note);
	const [error, setError] = useState({});
	const { setStatus } = useContext(GlobalContext);

	useEffect(() => {
		setNewNote(note);
	}, [note]);

	const validateForm = () => {
		const error = {};
		if (!newNote.title) error.title = 'Title is required';
		if (!newNote.description) error.description = 'Description is required';
		setError(error);

		if (Object.keys(error).length) return false;
		return true;
	}

	const submit = async () => {
		// TODO: Implement update note
		// 1. validate form
		if (!validateForm()) return;
		try {
			// 2. call API to update note
			const userToken = Cookies.get('UserToken');
			const response = await Axios.patch('/note', {
				title: newNote.title,
				description: newNote.description,
				noteId: newNote.id,
			},
				{
					headers: { Authorization: `Bearer ${userToken}` },
				});
			// 3. if successful, update note in state and close modal
			if (response.data.success) {
				setStatus({
					severity: 'success',
					msg: 'Update note successfully'
				});
				setNotes((prev) => prev.map((n) => (n.id === newNote.id ? response.data.data : n)));
				resetAndClose();
			}
		} catch (e) {
			// 4. if update note failed, check if error is from calling API or not
			if (error instanceof AxiosError && error.response) {
				setStatus({
					severity: 'error',
					msg: error.response.data.error
				});
			} else {
				setStatus({
					severity: 'error',
					msg: error.message
				});
			}
		}
	};

	const resetAndClose = () => {
		setTimeout(() => {
			setNewNote(note);
			setError({});
		}, 500);
		handleClose();
	};

	const handleChange = (e) => {
		setNewNote({
			...newNote,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Box
			onClose={resetAndClose}
			bgcolor={"#ffc7a5"}
			// bgcolor={"#ff731d"}
			marginTop={"30px"}
			width={"85%"}
			height={"3000px"}
			borderRadius={"15px"}
			boxShadow={"-6px 7px 1px rgba(255, 155, 29, 1)"}
			display={'flex'}
			flexDirection={"row"}
			padding={2.5}
			marginBottom={1}
			sx={{
				gap: "20px", height: 280,
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
				{/*  1.) */}
				<TextField
					required
					size="small"
					className='textfieldCreate'
					id="title"
					name="title"
					label="Title"

					variant="outlined"
					sx={{ color: "red", width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
					value={newLink.title}
					onChange={handleChange}
					error={!!error.title}
					helperText={error.title}
				/>
				{/*  2.) */}
				<TextField
					required
					className='textfieldCreate'
					id="url"
					name="url"
					label="url"

					variant="outlined"
					sx={{ width: "100%", height: "50px", marginBottom: "10px", backgroundColor: "white", borderRadius: "15px" }}
					value={newLink.url}
					onChange={handleChange}
					error={!!error.url}
					helperText={error.url}
				/>
				{/*  3.) */}
				<TextField
					multiline
					rows={4}
					className='textfieldCreate'
					id="description"
					name="description"
					label="description"

					variant="outlined"
					sx={{ width: "100%", height: "180px", marginBottom: "30px", backgroundColor: "white", borderRadius: "15px" }}
					value={newLink.description}
					onChange={handleChange}
					error={!!error.description}
					helperText={error.description}
				/>
			</Box>


			{/* right */}
			<Box
				bgcolor={"#ffc7a5"}
				// bgcolor={"white"}
				width={"40%"}
				height={"90%"}
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
			>
				<Box sx={{ marginTop: "20px" }}  >

					<Button
						onClick={resetAndClose}
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
							marginRight: "30px",
							'&:hover': {
								backgroundColor: "red"
							}
						}}
						style={{ color: "white" }}
					>
						cancel
					</Button>
					<Button
						onClick={submit}
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
						submit
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default LinkEditModal;
