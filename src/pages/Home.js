import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = ({ mainpost }) => {
  const [dataLeft, setdataLeft] = useState([])
  const [dataTop, setdataTop] = useState([])
  const [dataRight, setdataRight] = useState([])
  const urlleft = `https://duy-boe-api.herokuapp.com/xuat-ban`
  const urltop = `https://duy-boe-api.herokuapp.com/the-gioi`
  const urlright = `https://duy-boe-api.herokuapp.com/xa-hoi`
  useEffect(() => {
    axios.get(urlleft).then((res) => {
      const data = res.data.map((item) => ({
        id: item.id,
        title: item.title,
        sapo: item.description,
        image: item.images[0] || item.category.image,
      }))

      setdataLeft(data.slice(1, 6))
    })
  }, [])

  useEffect(() => {
    axios.get(urltop).then((res) => {
      const data = res.data.map((item) => ({
        id: item.id,
        title: item.title,
        sapo: item.description,
        image: item.images[0] || item.category.image,
      }))
      setdataTop(data.slice(0, 1))
    })
  }, [])

  useEffect(() => {
    axios.get(urlright).then((res) => {
      const data = res.data.map((item) => ({
        id: item.id,
        title: item.title,
        sapo: item.description,
        image: item.images[0] || item.category.image,
      }))
      setdataRight(data.slice(1, 3))
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
            <Grid key={item.id} item xs={12}>
              <Box>
                <img src={item.image} alt="" height="200px" />
                <Typography marginLeft="10px">{item.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container maxWidth="1000px" m="auto">
        <Grid item xs={6}>
          sdfsdfs
        </Grid>
        <Grid item container xs={6}>
          <Grid item xs={6}>
            sadas
          </Grid>
          <Grid item xs={6}>
            sfdsf
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
