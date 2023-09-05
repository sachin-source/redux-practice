import React, { useState, useEffect } from 'react'
import { Grid, Stack, CircularProgress, Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setShowAnalysis } from '../../redux/analysisSlice';

const ProgressBar = () => {

    const dispatch = useDispatch()

    const showAnalysis = useSelector((state) => state.analysis.showAnalysis);
    console.log(showAnalysis, 'state of analysis')

    // const [analysis, setAnalysis] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (showAnalysis) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 1;
                    if (newProgress >= 100) {
                        clearInterval(timer);
                    }
                    return newProgress;
                });
            }, 600);
            return () => {
                clearInterval(timer);
            };
        } else {

            setProgress(0);
        }
    }, [showAnalysis]);

    return (

        <Stack alignItems="center" spacing={2} direction="row">
            {showAnalysis &&
                <Grid display='flex' alignItems='center' justifyContent='space-around' sx={{ height: "45px", width: "170px", boxShadow: '0px 0.5px 2.5px #526484', background: "", borderRadius: "8px" }}
                    onClick={() => { dispatch(setShowAnalysis(false)); }}>
                    <Typography variant="C10" >Project Status</Typography>
                    <Box position="relative" >
                        <CircularProgress variant="determinate" sx={{ "& .MuiCircularProgress-circle": { color: progress === 100 ? "#4caf50" : "#ff9800" }, marginTop: '8px' }} value={progress} />
                        <Typography position="absolute" variant="C4" color={progress === 100 ? "#4caf50" : "#ff9800"} sx={{ top: "51%", left: "50%", transform: "translate(-50%, -50%)" }}>{progress}%</Typography>
                    </Box>
                </Grid>
            }
        </Stack>

    )
}

export default ProgressBar
