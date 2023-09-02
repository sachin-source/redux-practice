import React, { useEffect, useState } from "react";
import "./VideoPopUp.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


function VideoPopUp(props){

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

  const [open, setOpen] = React.useState(true);
  const [view, setView] = useState(true)
  const [movieName, setMovieName] = useState("")
  const [videoURL, setVideoURL] = useState("")

  useEffect(()=>{
    setOpen(props.view)
    setMovieName(props.movieName)
    setVideoURL(props.videoURL)
  },[open])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setView(false);
    props.updateState();
  };

  return (
    <div className="video-popup">
      { view &&
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="css-overriding"
      >
        <DialogTitle sx={{ m: 0, p: 1 , color: "white"}} id="customized-dialog-title">
          {movieName.toUpperCase()}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: 'white',
            position: 'absolute',
            right: 0,
            top: 5
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers className="video-popup-content">
             {/* <video controls className="video-popup-iframe" src={videoURL}/> */}
             <iframe className="video-popup-iframe" src={videoURL}/>
        </DialogContent>
      </BootstrapDialog> }

    </div>
  );
}


    
    // return (
    //     <>
    //         {view &&
    //         <div className="video-popup">
                // <Card sx={{background: "black"}}>
                //     <CardActions sx={{justifyContent:"end",margin: 0}}>
                //         <Button size="large" sx={{fontSize: 20, color: "white",borderRadius: 50,padding:0}}>&#10005;</Button>
                //     </CardActions>
                //     <CardContent sx={{ height: 400, width: 800,padding:0}}>
                //         <iframe height={500}className="video-popup-iframe" src="https://www.youtube.com/embed/bUR_FKt7Iso?si=J_-iuvXuurp4rBwn"/>
                //     </CardContent>
                // </Card>
    //         </div>}
    //     </>
    // )

export default VideoPopUp;