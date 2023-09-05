import { Grid, Typography } from '@mui/material'
import React from 'react'
import { NoDataImg } from '../../ThemeProvider/style'
import empty from '../../assets/images/empty.jpg'

const NoData = () => {
    return (
        <Grid display='flex' flexDirection='column' xs={12} mt={4} justifyContent='center' alignItems='center' mb={4}>
            <NoDataImg src={empty} alt="No Data" />
            <Typography variant='P12'>No Data Found !!!</Typography>
            <Typography variant=''>Please use filters and more for Data</Typography>
        </Grid>
    )
}

export default NoData
