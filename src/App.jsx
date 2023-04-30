import { useState } from 'react'
import './App.css'
import { Container, Grid, Box, ListItemIcon } from '@mui/material'
import {Route, Routes, NavLink, useParams} from 'react-router-dom'
import Splash from "./pages/Splash";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"


function App() {
	const [userLogin, setUserLogin] = useState(false)

  return (
    <Box>
		<Routes>
			{/* Splash   SignUp   SignIn   Home   Setting  */}

			<Route exect path="/" element={<Splash userLogin={userLogin} setUserLogin={setUserLogin} />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="/home/:id" element={<Home />} />
			{/* <Route path="/account" element={<Account userLogin={userLogin} setUserLogin={setUserLogin} />} /> */}
			{/* <Route path="/*" element={<Error />} /> */}
		</Routes>
	</Box>
  )
}

export default App
