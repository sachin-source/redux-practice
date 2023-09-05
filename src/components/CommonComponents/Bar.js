import { Typography, Grid } from '@mui/material'
import React from 'react'

const Bar = ({ ComponentName }) => {
    return (
        <Grid xs={6} >
            <Typography variant='P2' >{ComponentName}</Typography>
        </Grid>
    )
}

export default Bar
