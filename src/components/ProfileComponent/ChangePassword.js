import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid, InputAdornment } from '@mui/material';
import CustomTextfield from '../CommonComponet/CustomTextfield';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other} fontWeight="bold" style={{ fontFamily: 'DM Sans' }}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};



const ChangePassword = (props) => {
    const { openSet, setOpenSet, userid } = props;
    const handleClose = () => {
        setOpenSet(false);
    };

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [otp, setOtp] = useState(false)
    const [otpValue, setOtpValue] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleToggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handlePasswordChangeOld = (event) => {
        setusername(event.target.value);
    };
    const handlePasswordChangeNew = (event) => {
        setpassword(event.target.value);
    };
    const handlePasswordChangeConfirm = (event) => {
        setconfirmPassword(event.target.value);
    };

    const handleResendOtp = async () => {
        try {
            let res = await fetch('http://localhost:7000/resendcode',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    body: JSON.stringify({ username: username })
                }
            );
            if (res.ok) {
                const result = await res.json();
                console.log(result);
            } else {
                const { error } = await res.json();
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleOtpSubmit = async () => {
        console.log(otpValue);
        try {
            let res = await fetch('http://localhost:7000/confirmresetpassword',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    body: JSON.stringify({ username: username, newPassword: password, otp: otpValue })
                }
            );
            if (res.ok) {
                const result = await res.json();
                setOtp(false)
                setOpenSet(false)
                console.log(result);
            } else {
                const { error } = await res.json();
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            alert("New Password doesn't match with Confirm Password");
        } else {
            try {
                let res = await fetch('http://localhost:7000/resetpassword',
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify({ username: username })
                    }
                );
                if (res.ok) {
                    const result = await res.json();
                    setOtp(true)
                    console.log(result);
                } else {
                    const { error } = await res.json();
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
            }
            // axios
            //     .put(`http://localhost:4000/login/${userid}`, { password: password })
            //     .then((response) => {
            //         console.log('Password updated successfully');
            //         handleClose();
            //     })
            //     .catch((error) => {
            //         alert('Failed to update password');
            //         console.log('Failed to update password');
            //     });
        }
    };

    return (
        <div>
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openSet}>
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {otp ? "Enter OTP" : "Change Password"}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    {otp ? <Grid item xs={12} container spacing={1}>
                        <Grid item xs={12}>
                            <CustomTextfield
                                size="small"
                                id="otp-input"
                                placeholder="Enter OTP"
                                fullWidth
                                variant="outlined"
                                type={'text'}
                                value={otpValue}
                                onChange={(e) => { setOtpValue(e.target.value) }}
                            />
                        </Grid>
                        <Grid variant='G16' item container>
                            <Button variant="B9" onClick={handleResendOtp}>Resend OTP</Button>
                            <Button variant="B9" onClick={handleOtpSubmit}>
                                Submit
                            </Button>
                            <Button variant="B9" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                        :
                        <Grid item xs={12} container spacing={1}>
                            <Grid item container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" fontWeight="bold" color="#344357" sx={{ fontSize: '15px', marginTop: '10px' }}>
                                        Your Username
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextfield
                                        size="small"
                                        id="old-password-input"
                                        placeholder="Enter your username"
                                        fullWidth
                                        variant="outlined"
                                        type={'text'}
                                        value={username}
                                        onChange={handlePasswordChangeOld}
                                    // InputProps={{
                                    //     endAdornment: (
                                    //         <InputAdornment position="end">
                                    //             <IconButton onClick={handleToggleShowPassword}>
                                    //                 {showPassword ? <VisibilityOff fontSize="small" sx={{ height: '100%' }} /> : <Visibility fontSize="small" sx={{ height: '100%' }} />}
                                    //             </IconButton>
                                    //         </InputAdornment>
                                    //     ),
                                    // }}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" fontWeight="bold" color="#344357" sx={{ fontSize: '15px', marginTop: '10px' }}>
                                        New Password*
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextfield
                                        size="small"
                                        id="new-password-input"
                                        placeholder="Enter new password"
                                        fullWidth
                                        variant="outlined"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handlePasswordChangeNew}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleToggleShowPassword}>
                                                        {showPassword ? <VisibilityOff fontSize="small" sx={{ height: '100%' }} /> : <Visibility fontSize="small" sx={{ height: '100%' }} />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" fontWeight="bold" color="#344357" sx={{ fontSize: '15px', marginTop: '10px' }}>
                                        Confirm New Password*
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextfield
                                        size="small"
                                        id="confirm-password-input"
                                        placeholder="Confirm new password"
                                        fullWidth
                                        variant="outlined"
                                        type={showPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={handlePasswordChangeConfirm}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleToggleShowPassword}>
                                                        {showPassword ? <VisibilityOff fontSize="small" sx={{ height: '100%' }} /> : <Visibility fontSize="small" sx={{ height: '100%' }} />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            <Grid variant='G16' item container>
                                <Button variant="B9" onClick={handleSubmit}>
                                    Submit
                                </Button>
                                <Button variant="B9" onClick={handleClose}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    }
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

export default ChangePassword;