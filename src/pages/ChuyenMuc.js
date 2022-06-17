import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CustomerSlider from '../components/CustomerSlider/CustomerSlider.component'

const categorylinks = [
  { id: '1', title: 'TIN TỨC XUẤT BẢN' },
  { id: '2', title: 'SÁCH HAY' },
  { id: '3', title: 'TÁC GIẢ' },
]

const ChuyenMuc = () => {
  const [mainPosts, setMainPosts] = useState([])
  const [sidePosts, setSidePosts] = useState([])
  const [oaPosts, setOaPosts] = useState([])
  const [featurePosts, setFeaturePosts] = useState([])

  const { name } = useParams()
  useEffect(() => {
    alert(name)
    axios
      .get(
        'https://api.escuelajs.co/api/v1/products?fbclid=IwAR2R8gN288AvUTnAGHr6rhU36vrz1xAF_F7bWgOP83U2RmHSyk_D3qmXc_Q'
      )

      .then((res) => {
        const sliceStart = name === 'xuat-ban' ? 0 : 11
        const sliceEnd = name === 'xuat-ban' ? 11 : 22

        const data = res.data.slice(sliceStart, sliceEnd).map((item) => ({
          id: item.id,
          title: item.title,
          sapo: item.description,
          image: item.images[0] || item.category.image,
        }))

        setMainPosts(data.slice(0, 1))
        setSidePosts(data.slice(1, 3))
        setOaPosts(data.slice(3, 7))
        setFeaturePosts(data.slice(7, 11))
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
            {mainPosts.map((item) => (
              <Box key={item.id}>
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
            {sidePosts.map((item) => (
              <Box key={item.id}>
                <img src={item.image} width="100%" height="212px" alt="" />
                <Box sx={{ fontWeight: 'bold' }}>{item.title}</Box>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ borderTop: '1px solid #eee' }}>
          {oaPosts.map((item) => (
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
            {featurePosts.map((itemtwo) => (
              <Grid key={itemtwo.id} item xs={3}>
                <img src={itemtwo.image} width="100%" height="156px" alt="" />
                <Box>{itemtwo.title}</Box>
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
          <CustomerSlider posts={featurePosts} />
        </Box>
      </Box>
    </>
  )
}

export default ChuyenMuc
