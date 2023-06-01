import { useState, useMemo } from 'react'
import './App.css'
import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Splash from "./pages/Splash";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"
import Setting from "./pages/Setting"
import Error from './pages/Error';
import GlobalContext from "./share/GlobalContext"
import SnackBarMessage from './components/SnackBarMessage';
import NavBar from './components/NavBar';
import Login from './components/Login';
import LinkCreateModal from './components/LinkCreateModal';
import LinkCard from './components/LinkCard';


function App() {
	const [status, setStatus] = useState('');
	const [user, setUser] = useState(null);
	const [appear, setAppear] = useState(false);
	const [isAuthorize, setIsAuthorize] = useState(false)
	const generatekey = () => {
		return Math.random();
	};

	// * The memoization ensures that the value is only recomputed when the user variable changes.
	const globalContextValue = useMemo(() => {
		return {
			user,
			setUser,
			status,
			setStatus,
			isAuthorize,
			setIsAuthorize
		};
	}, [user]);

	const theme = createTheme({
		palette: {
			primary: {
				main: "#ff731d",
			},
			secondary: {
				main: '#333333',
			},
		},
	});



	return (
		<GlobalContext.Provider value={globalContextValue} >
			<ThemeProvider theme={theme}>
				<Routes>
					<Route exect path="/" element={<Splash />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/sign-in" element={<SignIn />} />
					{/* <Route path="/sign-in" element={<Login />} /> */}
					<Route path="/home" element={<Home />} />
					{/* <Route path="/home" element={<NavBar />} />
					<Route path="/home" element={<LinkCreateModal />} />
					<Route path="/setting" element={<Setting />} /> */}
					<Route path="/*" element={<Error />} />
				</Routes>

				{status ? (
					<SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
				) : null}

				{appear ? (
					<div>
						<Splash />
						<SignUp />
						<SignIn />
						<Login />
						<Home />
						<NavBar />
						<LinkCard />
						<LinkCreateModal />
						<Setting />
						<Error />
					</div>
				) : null}
			</ThemeProvider>
		</GlobalContext.Provider>
	)
}

export default App
