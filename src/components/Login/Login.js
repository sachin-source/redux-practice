import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AppBar, Button, Grid, IconButton, InputAdornment, Paper, styled, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { FcGoogle } from 'react-icons/fc'
// import axios from 'axios';
// import { addUserId } from '../redux/loginSlice';
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logoTopC.jpg';
import CustomTextfield from "../CommonComponents/CustomTextField";
// import { setShowLoader } from '../redux/loaderSlice';

const Media = styled("img")({
    width: "300px",
    height: "180px",
});


const Login = ({ setIsAuthenticated, setUserType, setUserId }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const selectedCircle = location.state?.selectedCircle || null;

    console.log(selectedCircle)

    const [userName, SetUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleUserNameChange = (event) => {
        SetUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // dispatch(setShowLoader(true));

        // try {
        //     const response = await axios.get('http://localhost:3000/User');
        //     const userData = response.data;
        //     const name = userName;
        //     const key = password;
        //     // Perform login check by filtering the userData array
        //     const user = userData.find((user) => user.userName === name && user.password === key);

        //     if (user) {
        //         setIsAuthenticated((prev) => !prev);
        //         setUserType(user.userType);
        //         setUserId(user.id);
        //         dispatch(addUserId(user.id));
                // dispatch(setShowLoader(false));
        //     } else {
        //         alert('Invalid UserName or Password details');
                // dispatch(setShowLoader(false));
        //     }
        // } catch (error) {
        //     console.error(error);
        //     alert('An error occurred during login');
            // dispatch(setShowLoader(false));
        // }
    };


    const handleNavigate = () => {
        navigate('/SignUp');
    };


    return (
        <>
            <div className="centered" >
            <Grid
                variant='Login' xs={12}
            >
                {/* <AppBar variant="A2" position="static" color="transparent" elevation={0}>
                    <Toolbar variant="dense" >
                        <Typography >
                            <Media src={Logo} alt="" />
                        </Typography>

                    </Toolbar>
                </AppBar> */}
                <div className="centered">
                            <img className="login-page-logo" src={Logo} alt="" />
                </div>
                <Grid xs={12} display='flex' justifyContent='center' alignItems="center" style={{ height: "30px" }} mt={-5} mb={4}>
                    <Typography variant="P0">
                        {/* ({selectedCircle}) */}
                    </Typography>
                </Grid>
                <Paper
                    variant={"outlined"}
                    sx={{
                        border: "1px solid #DBDFEA",
                        width: "30rem",
                        padding: "2rem",
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <Typography
                                variant={"h5"}
                                fontSize={"1.3rem"}
                                textAlign={"center"}
                                fontWeight={"bold"}
                                fontFamily={"DM Sans"}
                            >
                                {"Sign-In"}
                            </Typography>
                            {/* <Typography
                                variant={"subtitle2"}
                                textAlign={"center"}
                                color={"#526484"}
                                mt={1}
                            >
                                {"Access the anantadi panel using your email and passcode."}
                            </Typography> */}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            spacing={1}
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <Typography
                                    variant={"subtitle1"}
                                    fontWeight={"bold"}
                                    color={"#344357"}
                                >
                                    {"User Name"}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <CustomTextfield
                                    size={"small"}
                                    id={"user-email-input"}
                                    placeholder={"Enter user name"}
                                    fullWidth
                                    variant={"outlined"}
                                    onChange={handleUserNameChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            spacing={1}
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <Typography
                                    variant={"subtitle1"}
                                    fontWeight={"bold"}
                                    color={"#344357"}
                                >
                                    {"Password"}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <CustomTextfield
                                    size={"small"}
                                    id={"user-password-input"}
                                    placeholder={"Enter password"}
                                    fullWidth
                                    variant={"outlined"}
                                    type={showPassword ? "text" : "password"}
                                    onChange={handlePasswordChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleToggleShowPassword}>
                                                    {showPassword ? (
                                                        <VisibilityOff fontSize={"small"} sx={{ height: "100%" }} />
                                                    ) : (
                                                        <Visibility fontSize={"small"} sx={{ height: "100%" }} />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                        >
                            <Button
                                fullWidth
                                type="submit"
                                variant="B6"
                                color="primary"
                                size="large"
                                onClick={handleSubmit}
                            >
                                Sign in
                            </Button>

                            <Button
                                fullWidth
                                type="submit"
                                variant="B7"
                                color="primary"
                                size="large"
                                onClick={handleSubmit}
                            >
                                <FcGoogle fontSize='large' style={{ background: 'white' }} />&nbsp;&nbsp; Login With Google
                            </Button>


                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <Typography
                                variant={"subtitle2"}
                                textAlign={"center"}
                                color={"#526484"}
                            >
                                {"Don't have an account?"}
                                <span style={{ fontWeight: "bold", color: "black", cursor: "pointer" }} onClick={handleNavigate}>{" Sign up"}</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            </div>
        </>
    );
};

export default Login;
