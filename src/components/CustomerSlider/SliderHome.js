import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Slider from 'react-slick'
const SliderHome = ({ postslider }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <>
      <Slider {...settings}>
        {postslider.map((post) => (
          <Grid
            key={post.id}
            px={1}
            border=" 1px solid #dddddd;"
            height="200px"
          >
            <img
              src={post.image}
              alt=""
              width={'100%'}
              style={{ objectFit: 'cover' }}
            />
            <Box>{post.title}</Box>
          </Grid>
        ))}
      </Slider>
    </>
  )
}

export default SliderHome
