import React, { useState } from 'react'
import { Chip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, Grid, } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { addProjectId } from '../../redux/projectSlice';
import { useDispatch } from "react-redux";

const ProjectCard = ({ projectTitle, season, episodes, genrec, pValue, NoOfVop, thumbnail, projectId, handelonClick, contentType, price, vppFreamNo, label, color, completeDate }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(projectId , 'Project card id in vpp')

    return (
        <Card sx={{
            minWidth: 272, maxWidth: 272, margin: "1rem",
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
                {projectTitle && (
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
                )}
                {pValue && (
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
                )}

                {price && (
                    <Grid xs={12} display='flex' justifyContent='flex-start' alignItems='center' mt={0.6} >
                        <Typography
                            variant="P13"
                        >
                            Price :
                        </Typography>
                        <Typography
                            variant="P14"
                        >
                            &nbsp; ${price}
                        </Typography>
                    </Grid>
                )}
                {completeDate && (
                    <Grid xs={12} display='flex' justifyContent='flex-start' alignItems='center' mt={0.6} >
                        <Typography
                            variant="P13"
                        >
                            Complete Date :
                        </Typography>
                        <Typography
                            variant="P14"
                        >
                            &nbsp; {completeDate}
                        </Typography>
                    </Grid>
                )}
                {genrec && (
                    <Grid xs={12} display='flex' justifyContent='flex-start' alignItems='center' mt={0.8}>
                        <Typography
                            variant="P13"
                        >
                            Genre :
                        </Typography>
                        <Typography
                            variant="P14"
                        >
                            &nbsp; {genrec}
                        </Typography>
                    </Grid>
                )}
            </CardContent>
            <CardActions>


                <Grid container mt={-5} spacing={2} style={{ padding: '0.5rem' }}>
                    {season && (
                        <Grid item container xs={3}>
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
                        </Grid>)}
                    {episodes && (
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
                        </Grid>)}
                    {NoOfVop && (
                        <Grid item container xs={5}>
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
                        </Grid>)}
                    {vppFreamNo && (
                        <Grid item container xs={5}>
                            <Grid item xs={12}>
                                <Typography fontSize={'0.8rem'} fontWeight={'bold'}>
                                    {'VPP No'}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} mt={0.5}>
                                <Typography style={{
                                    fontSize: '0.8rem',
                                    color: "#8094ae"
                                }}>
                                    {vppFreamNo}
                                </Typography>
                            </Grid>
                        </Grid>)}
                    {label && (
                        <Grid item container xs={6}>
                            <Grid item xs={12}>
                                <Typography fontSize={'0.8rem'} fontWeight={'bold'}>
                                    {'Status'}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} mt={0.5}>
                                <Typography style={{
                                    fontSize: '0.8rem',
                                    color: "#8094ae"
                                }}>
                                    <Chip
                                        label={label}
                                        color={color}
                                        variant="outlined"
                                        size="small"
                                        sx={{ width: '100px', height: '30px' }}
                                    />
                                </Typography>
                            </Grid>
                        </Grid>)}
                </Grid>
            </CardActions>

        </Card>


    )
}

export default ProjectCard
