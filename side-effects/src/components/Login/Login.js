import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: action.val.includes('@') }
  }
  return { value: "", isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_PASSWORD') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'PASSWORD_BLUR') {
    return { value: state.val, isValid: action.val.trim().length > 6 }
  }
  return { value: "", isValid: false }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // const[state, dispatchFn] = useReducer(reducerFn, initialState, initFn) ===> useReducer syntax
  const [emailState, dispatchEmailAction] = useReducer(emailReducer, { value: "", isValid: false });
  const [passwordState, dispatchPasswordAction] = useReducer(passwordReducer, { value: "", isValid: false });

  //object destructuring to extract isValid
  const {isValid: emailStateIsValid} = emailState
  const {isValid: passwordStateIsValid} = passwordState

  //handle side effect, keystrokes, api calls etc, 
  //action that should be executed in response to some other action
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY")
      setFormIsValid(emailState.value.includes('@') && passwordState.value.trim().length > 6) //this code only runs once  //use email && password states which stores the entered values
    }, 500)
    return () => {  //this is a cleanup function(runs before every new side effect function execution)
      console.log("CLEANUP")
      clearTimeout(identifier);
    };
  }, [emailState.value, passwordState.value]);

  const emailChangeHandler = (event) => {
    dispatchEmailAction({ type: 'USER_INPUT', value: event.target.value });
    // setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordAction({ type: 'USER_PASSWORD', value: event.target.value });
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmailAction({ type: 'INPUT_BLUR' });
    // setEmailIsValid(emailState.value.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchPasswordAction({ type: 'PASSWORD_BLUR' });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
