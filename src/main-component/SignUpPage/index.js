import React, {useRef, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, useNavigate} from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase/firebase';
import { doc, setDoc } from "firebase/firestore"; 
import './style.scss';

const SignUpPage = (props) => {

    const { signUp, currentUser } = useAuth();    
    const push = useNavigate();
    //const passwordConfirmRef = useRef()
    const [error, setError] = useState('');
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const [value, setValue] = useState({});

    const changeHandler = (e) => {
        console.log({...value, [e.target.name]: e.target.value});
        setValue({
            ...value,
            [e.target.name]: e.target.value});
            textValidator.showMessages();
    };

    const [textValidator] = React.useState(new SimpleReactValidator({className: 'errorMessage'}));

    const passwordMatch = () => {
        if(value.password !== value.confirm_password){
            return toast.error('Password do not match');
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();
        passwordMatch();
        /*if (validator.allValid()) {
            setValue({
                email: '',
                full_name: '',
                password: '',
                confirm_password: '',
            });*/
            //validator.hideMessages();
            //success
            try{
                if (textValidator.allValid()) {               
                setError('');
                setButtonVisibility(true);
                console.log('passed email ' + value.email + 'passed password ' + value.password)
                let specialuuId = await signUp(value.email, value.password);
                console.log('auth created');
                console.log('SignUp currentUser.uid#### ' + specialuuId);
                await setDoc(doc(db, "usersCollection", specialuuId ), {
                    email: value.email,
                    first_name: value.first_name,
                    last_name: value.last_name
                  });
                console.log('db linked');
                setValue({
                    first_name: '',
                    last_name_name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                });
                toast.success('Registration Complete successfully!');             
                push('/login');           
                }
                } catch {
                    toast.error('Failed to create an account');               
            }
            setButtonVisibility(false);
        }

    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                {currentUser && currentUser.email}
                <h2>Signup</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="First Name"
                                value={value.first_name}
                                variant="outlined"
                                name="first_name"
                                label="First Name"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {textValidator.message('First Name', value.first_name, 'required|alpha')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Last Name"
                                value={value.last_name}
                                variant="outlined"
                                name="last_name"
                                label="Last Name"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {textValidator.message('First Name', value.last_name, 'required|alpha')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {textValidator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                label="Password"
                                type="password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {textValidator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                value={value.confirm_password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                type="password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {textValidator.message('confirm password', value.confirm_password, `in:${value.confirm_password}`)}
                        </Grid>
                        {/*This is the main Button begins*/}
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button disable={buttonVisibility} fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Sign Up</Button>
                            </Grid>
                            {/*This is the main Button Ends*/}
                            <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid>
                            <p className="noteHelp">Already have an account? <Link to="/login">Return to Sign In</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
            </Grid>
        </Grid>
    )
};

export default SignUpPage;