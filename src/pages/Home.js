import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useEffect, useState, ReactDOM } from 'react'
import SliderHome from '../components/CustomerSlider/SliderHome'

const headMedium = [
  {
    id: '1',
    title: 'MULTIMEDIA',
    child: [
      { id: '1', titlechild: 'Video' },
      { id: '2', titlechild: 'PODCAST' },
      { id: '3', titlechild: ' LONGFORM' },
      { id: '4', titlechild: ' STORY' },
    ],
  },
]

const getData = (url) => {
  return axios.get(url).then((res) => {
    const data = res.data.map((item) => ({
      id: item.id,
      title: item.title,
      sapo: item.description,
      image: item.images[0] || item.category.image,
    }))
    return data
  })
}

const Home = () => {
  const [dataLeft, setdataLeft] = useState([])
  const [dataTop, setdataTop] = useState([])
  const [dataRight, setdataRight] = useState([])
  const [dataBox, setdataBox] = useState([])
  const [dataSlider, setdataSlider] = useState([])

  useEffect(() => {
    getData('https://duy-boe-api.herokuapp.com/xuat-ban').then((data) => {
      setdataLeft(data.slice(1, 6))
      setdataBox(data.slice(1, 5))
    })
  }, [])

  useEffect(() => {
    getData('https://duy-boe-api.herokuapp.com/the-thao').then((data) => {
      setdataLeft(data.slice(1, 6))
      setdataBox(data.slice(1, 5))
      setdataTop(data.slice(0, 1))
    })
  }, [])

  useEffect(() => {
    getData('https://duy-boe-api.herokuapp.com/the-gioi').then((data) => {
      setdataLeft(data.slice(1, 6))
      setdataBox(data.slice(1, 5))
      setdataRight(data.slice(1, 3))
    })
  }, [])
  useEffect(() => {
    getData('https://duy-boe-api.herokuapp.com/xa-hoi').then((data) => {
      setdataSlider(data.slice(0, 10))
    })
  }, [])
  return (
    <>
      <Grid container spacing={2} maxWidth="1000px" m="auto">
        <Grid item xs={12} sm={2} md={3}>
          {dataLeft.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                padding: '10px',
                borderBottom: '1px solid #dedede',
              }}
            >
              <img src={item.image} alt="" height="70px" />
              <Typography marginLeft="10px">{item.title}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          {dataTop.map((item) => (
            <Box key={item.id}>
              <img src={item.image} alt="" height="360px" />
              <Typography marginLeft="10px">{item.title}</Typography>
              <Typography marginLeft="10px">{item.sapo}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item container xs={12} sm={2} md={3}>
          {dataRight.map((item) => (
            <Grid item key={item.id} xs={12}>
              <Box>
                <img src={item.image} alt="" width="100%" />
                <Typography marginLeft="10px">{item.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        maxWidth="1000px"
        m="auto"
        p="10px"
        sx={{ backgroundColor: '#ffde76', padding: '20px' }}
      >
        <Grid item xs={12} display="flex" m="2px">
          {headMedium.map((item) => (
            <Box key={item.id} display="flex">
              <Typography marginLeft="12px">{item.title}</Typography>
              {item.child.map((m) => (
                <Typography key={m.id} marginLeft="12px">
                  {m.titlechild}
                </Typography>
              ))}
            </Box>
          ))}
        </Grid>
        <Grid item xs={6}>
          {dataTop.map((item) => (
            <Box key={item.id}>
              <img src={item.image} alt="" height="350px" />
              <Typography>{item.title}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item container xs={6}>
          {dataBox.map((item) => (
            <Grid key={item.id} item xs={6}>
              <img src={item.image} alt="" height="170px" />
              <Typography>{item.title}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Box maxWidth="1000px" m="auto">
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
          BOOK
        </Typography>
        <SliderHome postslider={dataSlider} />
      </Box>
      <Grid container maxWidth="1000px" m="auto" p="10px">
        <Grid item xs={8.5} paddingRight="15px">
          {dataSlider.map((item) => (
            <Box
              sx={{
                display: 'flex',
                padding: '10px 0px',
                borderBottom: '1px solid #dddd',
              }}
            >
              <img src={item.image} alt="" height="150px"></img>
              <Box sx={{ paddingLeft: '15px' }}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body1">{item.sapo}</Typography>
              </Box>
            </Box>
          ))}
          <Box></Box>
        </Grid>
        <Grid item xs={3.5} paddingLeft="15px">
          <Box
            sx={{
              border: '1px solid #dddd',
              padding: '10px',
              fontSize: '2rem',
              marginBottom: '10px',
            }}
          >
            <Typography variant="h5">Đọc nhiều</Typography>
            {dataLeft.map((item) => (
              <Box
                sx={{
                  display: 'flex',
                  padding: '10px 0px',
                }}
              >
                <img src={item.image} alt="" height="50px"></img>
                <Typography sx={{ paddingLeft: '15px' }}>
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              background: '#2f2f3f',
              padding: '20px 25px 0px',
              color: '#fff',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <img
                src="	https://static-znews.zadn.vn/images/logo_podcast_white.png"
                width="120px"
              ></img>
            </Box>

            {dataTop.map((item) => (
              <>
                <img src={item.image} alt="" width="100%"></img>
                <Typography sx={{ textAlign: 'center' }}>
                  {item.title}
                </Typography>
              </>
            ))}
          </Box>
          <Box
            sx={{
              background: '#2f2f3f',
              color: '#fff',
              padding: '20px 15px 15px 10px',
              marginBottom: '10px',
            }}
          >
            {dataBox.map((item) => (
              <Box
                sx={{
                  display: 'flex',
                  paddingBottom: '10px',
                  paddingTop: '10px',
                  borderBottom: '1px solid #dddddd21',
                }}
              >
                <img src={item.image} alt="" height="50px"></img>
                <Typography sx={{ paddingLeft: '15px' }}>
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
