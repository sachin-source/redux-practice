import CloseIcon from '@mui/icons-material/Close';
import { Card, CardMedia, Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProjectId } from '../../redux/projectSlice';
import { useDispatch } from "react-redux";
import PlayerTab from '../CampaignsComponet/PlayerTab';


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
};



const VppPlayer = (props) => {
    const { openPlayer, setOpenPlayer, selectedProject } = props;
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const projectIdForNavigate = projectId;

    // const handelNavigate = (id) => {
    //     navigate('/VppMain');
    //     dispatch(addProjectId(id))
    // }

    const handleClose = () => {
        setOpenPlayer(false);
    };



    if (!selectedProject) {
        return null;

    }

    console.log('selected project object', selectedProject)


    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openPlayer}
                maxWidth="lg"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
                    Video Player & Information
                </BootstrapDialogTitle>
                <DialogContent dividers >
                    <Grid container spacing={2} sx={{ minWidth: 1000, maxWidth: 1000 }}>
                        <Grid variant="G12" item xs={4} ml={-2}>
                            <Grid item xs={12} sx={{ borderBottom: "1px solid #dbdfea" }}>
                                <Card sx={{ maxWidth: '100%', margin: "15px", marginTop: "0px" }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={selectedProject?.thumbnail}

                                        alt="thumb"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} sx={{ margin: "15px", marginTop: "0px" }}>
                                <Grid variant='G14' item xs={12}>
                                    Project Title
                                </Grid>
                                <Grid variant="G15" item xs={12}>
                                    {selectedProject?.projectTitle}
                                </Grid>
                                {/* {project?.season !== 'none' && project?.episode !== 'none' && ( */}
                                <Grid container direction='row'>
                                    <Grid item xs={6}>
                                        <Grid variant='G14'>
                                            Start Time
                                        </Grid>
                                        <Grid variant="G15">
                                            {selectedProject?.startTime}
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Grid variant='G14'>
                                            End Time
                                        </Grid>
                                        <Grid variant="G15">
                                            {selectedProject?.endTime}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* )} */}


                                <Grid container direction='row'>
                                    {/* <Grid item xs={6}>
                                        <Grid variant='G14'>
                                            Catagory
                                        </Grid>
                                        <Grid variant="G15">
                                            {project?.genres.map((genre, index) => (
                                                <span key={index}>
                                                    {genre}
                                                    {index !== project.genres.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </Grid>
                                    </Grid> */}

                                    <Grid item xs={6}>
                                        <Grid variant='G14'>
                                            Catagory
                                        </Grid>
                                        <Grid variant="G15">
                                            {selectedProject?.catagory}
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Grid variant='G14'>
                                            Stage
                                        </Grid>
                                        <Grid variant="G15">

                                        </Grid>
                                    </Grid>
                                </Grid>


                                <Grid item xs={12} variant='G14'>
                                    Embedded Ad Inventory Seconds
                                </Grid>
                                <Grid item xs={12} variant="G15">

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid item xs={12} >
                                <PlayerTab />
                                <Grid variant="G13"
                                    item
                                    container
                                    sx={{ height: "90px", }}
                                >
                                    <Button variant="B8"
                                        // onClickCapture={() => {
                                        //     navigate('/VppMain');
                                        //     dispatch(addProjectId(projectIdForNavigate));
                                        // }}
                                        // onClick={() => { handelNavigate(projectIdForNavigate) }}

                                        sx={{ marginRight: '15px' }}>Submit</Button>
                                    <Button variant="B8" onClick={handleClose} >Cancel</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

export default VppPlayer;
