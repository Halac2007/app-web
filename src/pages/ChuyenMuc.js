import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import '../styles/slick-theme.min.css'
import '../styles/slick.min.css'

const categorylinks = [
  { id: '1', title: 'TIN TỨC XUẤT BẢN' },
  { id: '1', title: 'SÁCH HAY' },
  { id: '1', title: 'TÁC GIẢ' },
]

const ChuyenMuc = () => {
  const [cates, setCates] = useState([])
  const { name } = useParams()
  useEffect(() => {
    axios
      .get(
        'https://api.escuelajs.co/api/v1/products?fbclid=IwAR2R8gN288AvUTnAGHr6rhU36vrz1xAF_F7bWgOP83U2RmHSyk_D3qmXc_Q'
      )
      .then((res) => {
        const data = res.data.slice(0, 11).map((item) => ({
          title: item.title,
          sapo: item.description,
          image: item.images[0] || item.category.image,
        }))
        setCates(data)
      })
  }, [name])

  // Tạo thêm state

  const [catetest, setCatetests] = useState([])
  const { second } = useParams()
  useEffect(() => {
    axios
      .get(
        'https://api.escuelajs.co/api/v1/products?fbclid=IwAR2R8gN288AvUTnAGHr6rhU36vrz1xAF_F7bWgOP83U2RmHSyk_D3qmXc_Q'
      )
      .then((res) => {
        const data = res.data.slice(0, 4).map((item) => ({
          title: item.title,
          sapo: item.description,
          image: item.images[0] || item.category.image,
        }))
        setCatetests(data)
      })
  }, [second])

  //
  const ref = useRef({})

  const next = () => {
    ref.current.slickNext()
  }

  const previous = () => {
    ref.current.slickPrev()
  }
  //

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  //

  const sets = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Box maxWidth="1000px" m="auto">
        <Typography
          variant="h3"
          textAlign="center"
          mt="15px"
          pt="15px"
          borderBottom="2px solid #000"
          fontWeight="700"
        >
          XUẤT BẢN
        </Typography>
        <Box
          textAlign="center"
          m="10px"
          borderBottom="1px solid #ddd"
          sx={{
            '& a': {
              m: '10px',
              fontSize: '0.9rem',
              color: '#444',
            },
            '& a:hover': {
              color: 'red',
            },
          }}
        >
          {categorylinks.map((cate) => (
            <Link to="/" key={cate.id}>
              {cate.title}
            </Link>
          ))}
        </Box>
      </Box>
      <Box maxWidth="1000px" m="auto">
        <Grid
          container
          spacing={3}
          sx={{ paddingBottom: '20px', marginBottom: '20px' }}
        >
          <Grid item xs={8}>
            {cates.slice(0, 1).map((item) => (
              <Box key={item.title}>
                <img src={item.image} width="100%" height="426px" alt="" />
                <Box sx={{ typography: 'h4', textAlign: 'center' }}>
                  {item.title}
                </Box>
                <Box sx={{ color: '#888', textAlign: 'center' }}>
                  {item.sapo}
                </Box>
              </Box>
            ))}
          </Grid>

          <Grid item xs={4}>
            {cates.slice(1, 3).map((item) => (
              <Box key={item.title}>
                <img src={item.image} width="100%" height="212px" alt="" />
                <Box sx={{ fontWeight: 'bold' }}>{item.title}</Box>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ borderTop: '1px solid #eee' }}>
          {cates.slice(3, 7).map((item) => (
            <Grid key={item.id} item xs={3}>
              <img src={item.image} width="100%" height="156px" alt="" />
              <Box>{item.title}</Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ m: '10px', p: '10px' }}>
          <Typography
            variant="h5"
            mt="10px"
            pb="15px"
            mb="15px"
            fontWeight="700"
            position="relative"
            borderBottom="1px solid #eee"
            sx={{
              '&::after': {
                content: '""',
                position: 'absolute',
                height: '15px',
                width: '5px',
                bgcolor: 'red',
                top: '8px',
                left: '-12px',
                transform: 'skew(-25deg)',
              },
            }}
          >
            XUẤT BẢN
          </Typography>
          <Grid container spacing={2} sx={{ borderTop: '1px solid #eee' }}>
            {cates.slice(7, 11).map((itemtwo) => (
              <Grid key={itemtwo.id} item xs={3}>
                <img src={itemtwo.image} width="100%" height="156px" alt="" />
                <Box>{itemtwo.title}</Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ m: '10px', p: '10px' }}>
          <Typography
            variant="h5"
            mt="10px"
            pb="15px"
            mb="15px"
            fontWeight="700"
            position="relative"
            borderBottom="1px solid #eee"
            sx={{
              '&::after': {
                content: '""',
                position: 'absolute',
                height: '15px',
                width: '5px',
                bgcolor: 'red',
                top: '8px',
                left: '-12px',
                transform: 'skew(-25deg)',
              },
            }}
          >
            XUẤT BẢN 2 SỬ DỤNG STATE
          </Typography>
          <Grid container spacing={2} sx={{ borderTop: '1px solid #eee' }}>
            {catetest.map((catetest) => (
              <Grid key={catetest.id} item xs={3}>
                <img src={catetest.image} width="100%" height="156px" alt="" />
                <Box>{catetest.title}</Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Typography
            variant="h5"
            mt="10px"
            pb="15px"
            mb="15px"
            fontWeight="700"
            position="relative"
            borderBottom="1px solid #eee"
            sx={{
              '&::after': {
                content: '""',
                position: 'absolute',
                height: '15px',
                width: '5px',
                bgcolor: 'red',
                top: '8px',
                left: '-12px',
                transform: 'skew(-25deg)',
              },
            }}
          >
            Slider
          </Typography>
          <Slider {...settings}>
            {cates.map((cate) => (
              <Box key={cate.id}>
                <img src={cate.image} width="100%" height="300px" alt="" />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box>
          <Typography
            variant="h5"
            mt="10px"
            pb="15px"
            mb="15px"
            fontWeight="700"
            position="relative"
            borderBottom="1px solid #eee"
            sx={{
              '&::after': {
                content: '""',
                position: 'absolute',
                height: '15px',
                width: '5px',
                bgcolor: 'red',
                top: '8px',
                left: '-12px',
                transform: 'skew(-25deg)',
              },
            }}
          >
            Slider 2
          </Typography>
          <Slider ref={ref} {...sets}>
            {cates.slice(5, 11).map((cate) => (
              <Box key={cate.id}>
                <img src={cate.image} width="100%" height="300px" alt="" />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  )
}

export default ChuyenMuc
