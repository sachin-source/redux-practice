import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function CarouselContainer({ items })
{

    return (
        <Carousel animation='slide'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item({ item : { name, description, video : { src, time, duration } } })
{
    return (
        <Paper>
            {/* <h2>{name}</h2>
            <p>{description}</p> */}

            <video  controls controlsList="nofullscreen nodownload" height='100%' width='100%'>
              <source src={src + `#t=${time},${time+duration}` } type="video/mp4" />
          </video>
            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}

export default CarouselContainer;