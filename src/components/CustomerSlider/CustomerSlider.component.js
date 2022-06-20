import { Box } from '@mui/material'
import Slider from 'react-slick'

const CustomerSlider = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <Slider {...settings}>
      {posts.map((post) => (
        <Box key={post.id} px={1}>
          <img
            src={post.image}
            alt=""
            width={'100%'}
            style={{ objectFit: 'cover' }}
          />
        </Box>
      ))}
    </Slider>
  )
}

export default CustomerSlider
