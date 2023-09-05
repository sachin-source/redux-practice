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



const VideoPlayer = (props) => {
    const { openPlayer, setOpenPlayer, projectDetail, projectId, project, onClose } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const projectIdForNavigate = projectId;

    const handelNavigate = (id) => {
        navigate('/VppMain');
        dispatch(addProjectId(id))
    }

    



    if (!projectDetail) {
        return null;

    }

    console.log('Video URl', projectDetail?.VideoUrl)


    return (
        <div>
            <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={openPlayer}
                maxWidth="lg"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose} >
                    Video Player & Information
                </BootstrapDialogTitle>
                <DialogContent dividers >
                    <Grid container spacing={2} sx={{ minWidth: 1000 }}>
                        <Grid variant="G12" item xs={4} ml={-2} >
                            <Grid item xs={12} sx={{ borderBottom: "1px solid #dbdfea" }}>
                                <Card sx={{ minWidth: 282, margin: "15px", marginTop: "0px" }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={projectDetail?.videoThumbnail}
                                        alt="thumb"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} sx={{ margin: "15px", marginTop: "0px" }}>
                                <Grid variant='G14' item xs={12}>
                                    Project Title
                                </Grid>
                                <Grid variant="G15" item xs={12}>
                                    {project?.title}
                                </Grid>
                                {project?.season !== 'none' && project?.episode !== 'none' && (
                                    <Grid container direction='row'>
                                        <Grid item xs={6}>
                                            <Grid variant='G14'>
                                                Season
                                            </Grid>
                                            <Grid variant="G15">
                                                {project?.season}
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Grid variant='G14'>
                                                Episode
                                            </Grid>
                                            <Grid variant="G15">
                                                {project?.episode}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )}


                                <Grid container direction='row'>
                                    <Grid item xs={6}>
                                        <Grid variant='G14'>
                                            Genre
                                        </Grid>
                                        <Grid variant="G15">
                                            {project?.genres.map((genre, index) => (
                                                <span key={index}>
                                                    {genre}
                                                    {index !== project.genres.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Grid variant='G14'>
                                            Stage
                                        </Grid>
                                        <Grid variant="G15">
                                            -
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container direction='row'>
                                    <Grid item xs={6}>
                                        <Grid variant='G14'>
                                            Predicted Audience
                                        </Grid>
                                        <Grid variant="G15">
                                            -
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Grid variant='G14'>
                                            Distribution Channel
                                        </Grid>
                                        <Grid variant="G15">
                                            -
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} variant='G14'>
                                    Placement
                                </Grid>
                                <Grid item xs={12} variant="G15">
                                    -
                                </Grid>
                                <Grid item xs={12} variant='G14'>
                                    Embedded Ad Inventory Seconds
                                </Grid>
                                <Grid item xs={12} variant="G15">
                                    -
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid item xs={12} >
                                <Card sx={{ maxWidth: "100%", marginLeft: "10px", display: "flex", justifyContent: "center" }}>
                                    <video
                                        width='100%'
                                        controls
                                        style={{ minWidth: 710, minHeight: 420, maxHeight: 420, background: "black" }}
                                    >
                                        <source
                                            src={projectDetail?.VideoUrl}
                                            // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                                            
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video tag.
                                    </video>

                                </Card>
                                <Grid variant="G13"
                                    item
                                    container
                                    sx={{ height: "90px" }}
                                >
                                    <Button variant="B8"
                                        // onClickCapture={() => {
                                        //     navigate('/VppMain');
                                        //     dispatch(addProjectId(projectIdForNavigate));
                                        // }}
                                        onClick={() => { handelNavigate(projectIdForNavigate) }}

                                        sx={{ marginRight: '15px' }}>VPP Inventory</Button>
                                    <Button variant="B8" onClick={onClose} >Cancel</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

export default VideoPlayer;
