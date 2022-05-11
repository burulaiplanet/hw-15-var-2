import React, { useState, useEffect, useReducer } from 'react'
import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

//debouncing, debounce

const emailReducer = (prevState, action) => {
	if (action.type === 'USER INPUT') {
		return {
			value: action.emailValue,
			isValid: action.emailValue.includes('@'),
		}
	}
	if (action.type === 'INPUT_BLUR') {
		return {
			value: prevState.value,
			isValid: prevState.value.includes('@'),
		}
	}
  return{
    value:'',
    isValid:false,
  }
}
const passwordReducer = (prevState, action) => {
	if (action.type === 'USER_PASSWORD') {
		return {
			value: action.passwordValue,
			isValid: action.passwordValue.trim().length > 6,
		}
	}
	if (action.type === 'PASSWORD_BLUR') {
		return {
			value: prevState.value,
			isValid: prevState.value.trim().length > 6,
		}
	}
  return{
    value:'',
    isFinite:false,
  }
}



const Login = (props) => {
	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		isValid: undefined,
		value: '', 
	})

	const [passwordState,dispachPasswordState]=useReducer(passwordReducer ,{
		isValid:undefined,
		value:''
	})
	
	const [formIsValid, setFormIsValid] = useState(false) 

	useEffect(() => {
		const timer = setTimeout(() => {
			setFormIsValid(
				emailState.value.includes('@') &&
				passwordState.value.trim().length > 6,
			)
			console.log('changed')
		}, 3000)
		// clean up function
		return () => {
			clearTimeout(timer) 
		}
	}, [emailState.value, passwordState.value]) 

	const emailChangeHandler = (event) => {
		
		dispatchEmail({ type: 'USER INPUT', emailValue: event.target.value })
	}

	const passwordChangeHandler = (event) => {
	
		dispachPasswordState({type:'USER_PASSWORD',passwordValue:event.target.value})
	}

	const validateEmailHandler = () => {
		
		dispatchEmail({ type: 'INPUT_BLUR' })
	}

	const validatePasswordHandler = () => {
	
		dispachPasswordState({type:'PASSWORD_BLUR'})
	}

	const submitHandler = (event) => {
		event.preventDefault()
		props.onLogin(passwordState)
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler} 
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid=== false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={ passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler} 
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type='submit'
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}
export default Login
