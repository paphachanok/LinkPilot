import React from 'react'
import { Card, Grid, Box, Button, Typography, TextField, FormControlLabel,  Checkbox } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/SignIn.css"


function SignIn() {
	const [formValues, setFormValues] = useState({
		username: '',
		password: '',
		confirmPassword: '',
		agreeToTerms: false,
	});

	const [allFieldsFilled, setAllFieldsFilled] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setFormValues({ ...formValues, [name]: checked });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Send sign-up request to server
		// Navigate to home page
	};

	// Check if all required fields are filled out
	React.useEffect(() => {
		const { username, password, confirmPassword } = formValues;
		if (username && password && confirmPassword) {
			setAllFieldsFilled(true);
		} else {
			setAllFieldsFilled(false);
		}
	}, [formValues]);


	return (
		<form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formValues.username} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formValues.password} onChange={handleInputChange} />
      </label>
      <label>
        Confirm password:
        <input type="password" name="confirmPassword" value={formValues.confirmPassword} onChange={handleInputChange} />
      </label>
      <label>
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formValues.agreeToTerms}
          onChange={handleCheckboxChange}
          disabled={!allFieldsFilled}
        />
        I agree to the terms and conditions
      </label>
	  <label>
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formValues.agreeToTerms}
          onChange={handleCheckboxChange}
          disabled={!allFieldsFilled}
        />
        I agree to the terms and conditions
      </label>
      <button type="submit" disabled={!allFieldsFilled}>
        Sign up
      </button>
    </form>
  )
}

export default SignIn
