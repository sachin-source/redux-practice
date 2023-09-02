import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Avatar, Grid, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material';
import { BsThreeDotsVertical, BsFillFilePersonFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import ChangePassword from './ChangePassword';
import UpdateProfile from './UpdateProfile';
import { Name, Email, Info, Row } from '../../ThemeProvider/style'
import TopBar from '../VppComponet/TopBar';

const Profile = () => {

    const ComponentName = 'Profiel';

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const userid = useSelector((state) => state.login.userId);

    const [loginData, setLoginData] = useState(null);
    const [error, setError] = useState(null);
    const [openSet, setOpenSet] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

    const handleClickUpdate = () => {
        setOpenUpdate(true);
    };

    const handleClickOpen = () => {
        setOpenSet(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const fetchLoginData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/User/${userid}`);
                setLoginData(response.data);
            } catch (error) {
                setError(error.response?.data?.error || 'An error occurred');
            }
        };
        fetchLoginData();
    }, [userid]);

    return (
        <Grid container xs={11.5} ml={9} mt={7}>
            <TopBar ComponentName={ComponentName} />
            <Grid container xs={12} variant='G1' mt={3}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item container xs={12} spacing={2}>
                        <Grid container item xs={12}>
                            <Paper variant="outlined" style={{ width: '100%', boxShadow: '0px 1px 3px #364A6305', minHeight: '70vh' }}>
                                {loginData ? (
                                    <Grid container spacing={2}>
                                        <Grid variant='PG1' item xs={3.4} mt={2}>
                                            <Grid variant='PG2' item xs={12}>
                                                <Stack direction="row" spacing={3} ml={5}>
                                                    <Avatar alt="P" src={loginData.imgUrl} sx={{ width: 56, height: 56 }} />
                                                    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        <Name>{loginData.name}</Name>
                                                        <Email>{loginData.email}</Email>
                                                    </Grid>
                                                </Stack>
                                                <Grid mr={5}>
                                                    <button onClick={handleMenuClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                                        <BsThreeDotsVertical size={25} color="#526484" />
                                                    </button>
                                                </Grid>
                                            </Grid>
                                            <Grid variant='PG3' item xs={12}>
                                                <Stack direction="row" spacing={3} ml={5}>
                                                    <BsFillFilePersonFill size={25} color="#526484" />
                                                    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Profile</Typography>
                                                    </Grid>
                                                </Stack>
                                                <Grid mr={5}>
                                                    <IoIosArrowForward size={20} color="#526484" />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={8.5}>
                                            <Grid item xs={12}>
                                                <Grid mt={5} ml={2}>
                                                    <Typography
                                                        sx={{
                                                            color: '#526484',
                                                            font: 'normal normal bold 24px/30px DM Sans',
                                                        }}
                                                    >
                                                        Profile
                                                    </Typography>
                                                </Grid>
                                                <Grid mt={3} ml={2}>
                                                    <Info>
                                                        <Typography ml={2}>BASICS INFO</Typography>
                                                    </Info>
                                                </Grid>
                                                <Grid mt={3} ml={2} style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Row>
                                                        <Typography variant='C6' ml={2}>Name</Typography>
                                                        <Typography variant='C7' ml={2} width="80%">
                                                            {loginData.name}
                                                        </Typography>
                                                    </Row>
                                                    <Row>
                                                        <Typography variant='C6' ml={2}>Email</Typography>
                                                        <Typography variant='C7' ml={2} width="80%">
                                                            {loginData.email}
                                                        </Typography>
                                                    </Row>
                                                    <Row>
                                                        <Typography variant='C6' ml={2}>User Name</Typography>
                                                        <Typography variant='C7' ml={2} width="80%">
                                                            {loginData.userName}
                                                        </Typography>
                                                    </Row>
                                                    <Row>
                                                        <Typography variant='C6' ml={2}>Mobile Number</Typography>
                                                        <Typography variant='C7' ml={2} width="80%">
                                                            {loginData.mobileNumber}
                                                        </Typography>
                                                    </Row>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem variant='M3' onClick={handleClickUpdate}>Edit Profile</MenuItem>
                <MenuItem variant='M3' onClick={handleClickOpen}>Change Password</MenuItem>
            </Menu>
            <ChangePassword setOpenSet={setOpenSet} openSet={openSet} userid={userid} />
            <UpdateProfile openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} userid={userid} loginData={loginData} />
        </Grid>
    )
}

export default Profile
