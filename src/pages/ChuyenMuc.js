import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CatePost from '../components/Posts/CatePost.component'
import MainPosts from '../components/Posts/MainPosts.component'
import OaPost from '../components/Posts/OaPost.component'
import SidePosts from '../components/Posts/SidePost.component'
import CustomerSlider from '../components/CustomerSlider/CustomerSlider.component'
import TopTile from '../components/TopTitle/TopTile.component'
import { menuHeads } from '../utils'

const ChuyenMuc = () => {
  const [mainPosts, setMainPosts] = useState([])
  const [sidePosts, setSidePosts] = useState([])
  const [oaPosts, setOaPosts] = useState([])
  const [featurePosts, setFeaturePosts] = useState([])

  const { name } = useParams()

  useEffect(() => {
    const url = `https://duy-boe-api.herokuapp.com/${name}`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
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

  const headerValue = menuHeads.filter((item) => item.url === name)[0].title
  const headerChildren = menuHeads.filter((item) => item.url === name)[0]
    .chilren
  return (
    <>
      <Box maxWidth="1000px" m="auto">
        <TopTile headtop={headerValue} headchild={headerChildren} />
      </Box>

      <Box maxWidth="1000px" m="auto">
        <Grid
          container
          spacing={3}
          sx={{ paddingBottom: '20px', marginBottom: '20px' }}
        >
          <MainPosts mainpost={mainPosts} />

          <SidePosts side={sidePosts} />
        </Grid>

        <OaPost oapost={oaPosts} />

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
          <CatePost catepost={featurePosts} />
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
