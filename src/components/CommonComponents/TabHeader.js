import React, { useState } from 'react'
import { Grid, Button } from '@mui/material'
import Live from '../CampaignsComponetBrand/Live'
import Completed from '../CampaignsComponetBrand/Completed'
import InProgress from '../CampaignsComponetBrand/InProgress'
import Rejected from '../CampaignsComponetBrand/Rejected'

const TabHeader = () => {
    const [activeButton, setActiveButton] = useState(1);


    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };


    return (
        <>
            <Grid xs={11.7} ml={2} variant='G21' >
                <Button variant='Tab'
                    sx={{
                        marginLeft: '6px', borderLeft: '1px solid black',
                        color: activeButton === 1 ? 'white' : 'black',
                        background: activeButton === 1 ? '#657195' : 'white',
                    }} onClick={() => handleButtonClick(1)}
                >Live</Button>

                <Button variant='Tab'
                    sx={{
                        color: activeButton === 2 ? 'white' : 'black',
                        background: activeButton === 2 ? '#657195' : 'white',
                    }} onClick={() => handleButtonClick(2)}
                >In Progress</Button>

                <Button variant='Tab'
                    sx={{
                        color: activeButton === 3 ? 'white' : 'black',
                        background: activeButton === 3 ? '#657195' : 'white',
                    }} onClick={() => handleButtonClick(3)}
                >Completed</Button>

                <Button variant='Tab'
                    sx={{
                        color: activeButton === 4 ? 'white' : 'black',
                        background: activeButton === 4 ? '#657195' : 'white',
                    }} onClick={() => handleButtonClick(4)}
                >Rejected</Button>

            </Grid>
            <Grid xs={12} ml={2} container mt={2}>
                {activeButton === 1 && <Live />}
                {activeButton === 2 && < InProgress />}
                {activeButton === 3 && < Completed />}
                {activeButton === 4 && <Rejected />}
            </Grid>
        </>
    )
}

export default TabHeader
