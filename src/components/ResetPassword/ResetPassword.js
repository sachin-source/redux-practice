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
import { Link } from "react-router-dom";
// import { setShowLoader } from '../redux/loaderSlice';

const Media = styled("img")({
    width: "300px",
    height: "180px",
});


const ResetPassword = ({ setIsAuthenticated, setUserType, setUserId }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleToggleShowPassword = (event) => {
        setShowNewPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleToggleShowConfirmPassword = (event) => {
        setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(newPassword,confirmPassword) 
    };
    const backButton = () => {
        window.history.back()
    };


    return (
        <>
            <div className="centered" >
            <Grid
                variant='Login' xs={12}
            >
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
                                {"Reset Password"}
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
                            >
                                <Typography
                                    variant={"subtitle1"}
                                    fontWeight={"bold"}
                                    color={"#344357"}
                                >
                                    {"New Password"}
                                </Typography>
                            </Grid>
                        <Grid
                                item
                                xs={12}
                            >
                                <CustomTextfield
                                    size={"small"}
                                    id={"user-password-input"}
                                    placeholder={"Enter New Password"}
                                    fullWidth
                                    variant={"outlined"}
                                    type={showNewPassword ? "text" : "password"}
                                    onChange={handleNewPasswordChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" >
                                                <IconButton  onClick={handleToggleShowPassword}>
                                                    {showNewPassword ? (
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
                                    {"Confirm New Password"}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <CustomTextfield
                                    size={"small"}
                                    id={"user-password-input"}
                                    placeholder={"Confirm New Password"}
                                    fullWidth
                                    variant={"outlined"}
                                    type={showConfirmPassword ? "text" : "password"}
                                    onChange={handleConfirmPasswordChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton  onClick={handleToggleShowConfirmPassword}>
                                                    {showConfirmPassword ? (
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
                                sx={{
                                    color: "white",
                                    background: "black",
                                    "&:hover": {backgroundColor: "#212120" }
                                }}
                                size="large"
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>

                           <Typography 
                            className="centered"
                            sx={{
                                padding: "10px",
                                cursor: "pointer",
                            }}
                            onClick={backButton}
                            >Back
                           </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            </div>
        </>
    );
};

export default ResetPassword;
