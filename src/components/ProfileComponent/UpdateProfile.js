
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid, MenuItem } from "@mui/material";
import CustomTextfield from "../CommonComponet/CustomTextfield";
import { useState } from 'react';
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
        <DialogTitle sx={{ m: 0, p: 2 }} {...other} fontWeight="bold" style={{ fontFamily: "DM Sans" }}>
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
}

export default function UpdateProfile(props) {
    const { openUpdate, setOpenUpdate, userid, loginData } = props;

    const handleClose = () => {
        setOpenUpdate(false);
    };

  

    const [updatedName, setUpdatedName] = useState(loginData?.name || '');
    const [updatedUserName, setUpdatedUserName] = useState(loginData?.userName || '');
    const [updatedEmail, setUpdatedEmail] = useState(loginData?.email || '');
    const [updatedPhone, setUpdatedPhone] = useState(loginData?.mobileNumber || '');

    const handleUpdateProfile = () => {
        const updatedData = {
            name: updatedName,
            userName: updatedUserName,
            email: updatedEmail,
            mobileNumber: updatedPhone
        };
        axios.put(`http://localhost:3000/User/${userid}`, updatedData)
            .then(response => {
                console.log('Profile updated successfully');
                setOpenUpdate(false);
            })
            .catch(error => {
                console.error('Failed to update profile', error);
            });
    };

    const handleNameChange = (event) => {
        setUpdatedName(event.target.value);
    };

    const handleUserNameChange = (event) => {
        setUpdatedUserName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setUpdatedEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setUpdatedPhone(event.target.value);
    };

    return (

        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={openUpdate}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Scene Finder
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Grid
                    item
                    xs={12}
                    container
                    spacing={1}
                >
                    <Grid
                        item
                        container
                        spacing={2}
                    >
                        <Grid variant='G17'>
                            <img src={loginData?.imgUrl} alt='Profile Pic' width='120' height='120' style={{ borderRadius: "100px" }} />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <Typography
                                variant={"subtitle1"}
                                fontWeight={"bold"}
                                color={"#344357"}
                                sx={{ fontSize: "15px", marginTop: "10px" }}
                            >
                                Name
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <CustomTextfield
                                size="small"
                                value={updatedName}
                                fullWidth
                                variant="outlined"
                                onChange={handleNameChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <Typography
                                variant={"subtitle1"}
                                fontWeight={"bold"}
                                color={"#344357"}
                                sx={{ fontSize: "15px", marginTop: "10px" }}
                            >
                                Username
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <CustomTextfield
                                size="small"
                                value={updatedUserName}
                                fullWidth
                                variant="outlined"
                                onChange={handleUserNameChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <Typography
                                variant={"subtitle1"}
                                fontWeight={"bold"}
                                color={"#344357"}
                                sx={{ fontSize: "15px", marginTop: "10px" }}
                            >
                                Email I'd
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <CustomTextfield
                                size="small"
                                value={updatedEmail}
                                fullWidth
                                variant="outlined"
                                onChange={handleEmailChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <Typography
                                variant={"subtitle1"}
                                fontWeight={"bold"}
                                color={"#344357"}
                                sx={{ fontSize: "15px", marginTop: "10px" }}
                            >
                                Mobile Number
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <CustomTextfield
                                size="small"
                                value={updatedPhone}
                                fullWidth
                                variant="outlined"
                                onChange={handlePhoneChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid variant='G16'
                        item
                        container
                    >
                        <Button variant="B9" onClick={handleUpdateProfile}>Update</Button>
                        <Button variant="B9" onClick={handleClose}>Cancel</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </BootstrapDialog>

    );
}
