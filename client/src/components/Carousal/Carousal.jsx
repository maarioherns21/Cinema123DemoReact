import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, CardMedia } from '@mui/material'
import { useEffect } from 'react'
import useFetch from '../useFetch/useFetch'

import Avangers from "../../components/assests/Avangers3.jpg"
import Thor from "../../components/assests/Thor3.jpg"
import Wakanda1  from "../../components/assests/wakanda.jpg"
import { Container, Mediacard } from '@mui/system'
const Carousal = () => {

    const  carousel = [ 
        {id:1  , images: Thor },
        {id:2  , images: Avangers },
      
    ]

    

    return (
      <Grid sm={8} xs={12} lg={4}>
        <Carousel>
          {carousel.map((movie) => (
            <Grid key={movie._id}>
              <CardMedia
                component="img"
                alt={movie.name}
                maxHeight="750"
                image={movie.images}
              />
            </Grid>
          ))}
        </Carousel>
      </Grid>
    );
}

export default Carousal


