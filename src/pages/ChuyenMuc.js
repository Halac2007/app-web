import { Box, Grid, Stack, Item, Typography, Breadcrumbs } from '@mui/material'
import { fontWeight } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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
        const data = res.data.slice(0, 4).map((item) => ({
          title: item.title,
          sapo: item.description,
          image: item.images[0],
        }))
        setCates(data)
      })
  }, [name])

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
            <img src={cates[3]?.image} width="100%" height="426px" alt="" />
            <Box sx={{ typography: 'h4', textAlign: 'center' }}>
              {cates[3]?.title}
            </Box>
            <Box sx={{ color: '#888', textAlign: 'center' }}>
              {cates[3]?.sapo}
            </Box>
          </Grid>

          <Grid item xs={4} container spacing={4}>
            <Grid item xs={12}>
              <img src={cates[0]?.image} width="100%" height="212px" alt="" />
              <Box sx={{ fontWeight: 'bold' }}>{cates[0]?.title}</Box>
            </Grid>
            <Grid item xs={12}>
              <img src={cates[2]?.image} width="100%" height="212px" alt="" />
              <Box sx={{ fontWeight: 'bold' }}>{cates[2]?.title}</Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ borderTop: '1px solid #eee' }}>
          {cates.map((item) => (
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
            {cates.map((itemtwo) => (
              <Grid key={itemtwo.id} item xs={3}>
                <img src={itemtwo.image} width="100%" height="156px" alt="" />
                <Box>{itemtwo.title}</Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default ChuyenMuc
