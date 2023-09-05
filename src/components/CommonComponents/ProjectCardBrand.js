import React, { useState } from 'react'
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, Grid, } from "@mui/material";



const ProjectCard = ({ projectTitle, season, episodes, genres, pValue, NoOfVop, thumbnail, projectId, handelonClick, contentType }) => {

    return (
        <Card sx={{
            maxWidth: 282, margin: "1rem",
        }}>
            <CardActionArea sx={{
                '&:focus': {
                    outline: 'none',
                }
            }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={thumbnail}
                    alt="green iguana"
                    onClick={() => { handelonClick(projectId) }}
                />

            </CardActionArea>
            <CardContent>
                <Grid xs={12} display='flex' justifyContent='space-between' alignItems='center' mt={-0.5}>
                    <Typography
                        variant="body2"
                        color="#526484"
                        fontWeight={'500'}
                    >
                        {contentType}
                    </Typography>
                </Grid>
                <Grid xs={12} display='flex' justifyContent='flex-start' alignItems='center' mt={0.5}>
                    <Typography
                        variant="P13"
                    >
                        Title :
                    </Typography>
                    <Typography
                        variant='P11'
                    >
                        &nbsp; {projectTitle}
                    </Typography>
                </Grid>

                <Grid xs={12} display='flex' justifyContent='flex-start' alignItems='center' mt={0.6} >
                    <Typography
                        variant="P13"
                    >
                        Potential Value :
                    </Typography>
                    <Typography
                        variant="P14"
                    >
                        &nbsp; ${pValue}
                    </Typography>
                </Grid>
                <Grid xs={12} display='flex' justifyContent='flex-start' alignItems='center' mt={0.8}>
                    <Typography
                        variant="P13"
                    >
                        Genre :
                    </Typography>
                    <Typography
                        variant="P14"
                    >
                        &nbsp; {Array.isArray(genres) && genres.length > 0 ? genres.join(', ') : 'N/A'}

                    </Typography>
                </Grid>

            </CardContent>
            <CardActions>


                <Grid container mt={-5} spacing={2} style={{ padding: '0.5rem' }}>
                    <Grid item container xs={4}>
                        <Grid item xs={12}>
                            <Typography fontSize={'0.8rem'} fontWeight={'bold'}>
                                {'Seasons'}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item xs={12} mt={0.5}>
                                <Typography style={{
                                    fontSize: '0.8rem',
                                    color: "#8094ae"
                                }}>
                                    {season}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={4}>
                        <Grid item xs={12}>
                            <Typography fontSize={'0.8rem'} fontWeight={'bold'}>
                                {'Episodes'}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} mt={0.5}>
                            <Typography style={{
                                fontSize: '0.8rem',
                                color: "#8094ae"
                            }}>
                                {episodes}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={4}>
                        <Grid item xs={12}>
                            <Typography fontSize={'0.8rem'} fontWeight={'bold'}>
                                {'No of VPOs'}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} mt={0.5}>
                            <Typography style={{
                                fontSize: '0.8rem',
                                color: "#8094ae"
                            }}>
                                {NoOfVop}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardActions>
            {/* <VPPDialog open={openDialog} onClose={handleClose} ActiveID={projectId} /> */}
        </Card>

    )
}

export default ProjectCard
