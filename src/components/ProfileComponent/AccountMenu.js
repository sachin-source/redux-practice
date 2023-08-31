import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { FiLogOut } from 'react-icons/fi';
import { GrLock } from 'react-icons/gr';
import { RxPerson } from 'react-icons/rx';
import ChangePassword from './ChangePassword';
import { useNavigate } from 'react-router-dom';
import { AvatarWrapper } from '../../ThemeProvider/style'


export default function AccountMenu(props) {
    const navigate = useNavigate();
    const [openSet, setOpenSet] = useState(false);

    const handleClickOpen = () => {
        setOpenSet(true);
    };

    const handleClose = () => {
        props.setAnchorEl(null);
    };

    const handleNavigate = () => {
        navigate('/Profile');
    };

    const userid = props.userId;

    const handleLogout = async () => {
        try {
            let res = await fetch('http://localhost:7000/logout',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        authorization: "eyJraWQiOiJtRm0zbGxcL09lWTMrcHVVS3NBSFI0ejV5QzJsNklYaVJRN3N1Z29VUzRxVT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjYzk0NWU2ZC02MDhiLTQ1NzQtOGFlOS0zYTI1MDU0MjY3M2IiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2NOT0hucmdYayIsImNsaWVudF9pZCI6IjR0NGtka3BzODdiZnE5ZWw0c2J0NGdjNTlpIiwib3JpZ2luX2p0aSI6ImJlYTE1MmU1LTEwZGYtNDI5Ni04MWU3LTYwZmU1ZTFkOGVmYSIsImV2ZW50X2lkIjoiYTM3MTRhMzgtYWM0Yi00MzkxLTkzNzktNjdjY2Q0NmRjNjc4IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY4OTU3OTIzOSwiZXhwIjoxNjg5NTgyODM5LCJpYXQiOjE2ODk1NzkyMzksImp0aSI6IjQ0YmY5NmM3LWFiOWYtNGYyZS1hMWJhLWNiYzA1NmU0MTIwNCIsInVzZXJuYW1lIjoic2hpdmFtIn0.jBopJs6uNSty_lewmaGZfcPonBTKfoBoJcDpPUeEiUl2IgjxZa8y4m5X0vHVQnWEVR4WdY4XtapfT_AXKS7LThbGUkNwqOsroEbIMIQ_47i9ehVSj0VLtg18v5mcWZ3bwf7h6WX-n9L4JFuSgPdUyNUONQp3RnqMNfMXOsxpdMEx3AxoUp8ttyuwBN-91gohGEN7M9oSF-DoqfF2dDi_pfO4fSfqZFS2PoSlupMxCw6wgY3JkRwjoYvAFuMG1q2JIOLDZLPLXrtjmqLeq_wG_S5ebckpjxFbByXd9WzkMspBFrsRCENbBhhE9HCZiD4kQ4AIZ6QQKNo5Rk5SXNA_ug"
                    },
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
    }

    // const handleLogout = async () => {
    //     props.setIsAuthenticated(false);
    //     handleClose();
    // };

    return (
        <>
            <Menu
                anchorEl={props.anchorEl}
                id="account-menu"
                open={props.open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {props.userData && (
                    <MenuItem variant='M1' onClick={handleClose}>
                        <AvatarWrapper>
                            <Avatar src={props.userData.imgUrl} sx={{ width: 38, height: 38 }}></Avatar>
                        </AvatarWrapper>
                        <div>
                            <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', color: 'black' }}>
                                {props.userData.name}
                            </Typography>
                            <br />
                            <Typography variant="body1" component="span" sx={{ color: '#526484', fontSize: '14px' }}>
                                {props.userData.email}
                            </Typography>
                        </div>
                    </MenuItem>
                )}
                <MenuItem variant='M2' onClick={handleNavigate}>
                    <ListItemIcon>
                        <RxPerson fontSize="small" />
                    </ListItemIcon>
                    View Profile
                </MenuItem>
                <MenuItem variant='M2' onClick={handleClickOpen}>
                    <ListItemIcon>
                        <GrLock fontSize="small" style={{ color: '#8094AE' }} />
                    </ListItemIcon>
                    Change Password
                </MenuItem>
                <MenuItem variant='M2' sx={{ borderTop: '1px solid #e5e9f2' }} onClick={handleLogout}>
                    <ListItemIcon>
                        <FiLogOut fontSize="small" />
                    </ListItemIcon>
                    Sign out
                </MenuItem>
            </Menu>
            <ChangePassword setOpenSet={setOpenSet} openSet={openSet} userid={userid} />
        </>
    );
}
