import { Box, Grid, Stack, Item } from '@mui/material'
import { fontWeight } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ChuyenMuc = () => {
  const [cates, setCates] = useState([])
  const { name } = useParams()
  useEffect(() => {
    axios
      .get(
        'https://api.escuelajs.co/api/v1/products?fbclid=IwAR2R8gN288AvUTnAGHr6rhU36vrz1xAF_F7bWgOP83U2RmHSyk_D3qmXc_Q'
      )
      .then((res) => {
        const data = res.data.slice(0, 2).map((item) => ({
          title: item.title,
          sapo: item.description,
          image: item.images[0],
        }))
        console.log(data)
        setCates(data)
      })
  }, [name])

  return (
    <>
      <Box maxWidth="1400px" m="auto">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <img src={cates[1]?.image} width="100%" height="800px" alt="" />
            <Box>{cates[1]?.title}</Box>
            <Box>{cates[0]?.sapo}</Box>
          </Grid>

          <Grid item xs={4}>
            {cates.map((item) => (
              <Grid item xs={12}>
                <img src={item.image} width="100%" height="300px" alt="" />
                <Box>{item.title}</Box>
                <Box>{item.sapo}</Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ChuyenMuc
