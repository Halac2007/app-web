import { Box, Grid, List, ListItem, Stack, Typography } from '@mui/material'
import '../../App.css'

const categoryMenus = [
  {
    title: 'Xã hội',
    chilren: [
      {
        childtitle: 'Đô thị',
      },
      {
        childtitle: 'Giao thông',
      },
    ],
  },
  {
    title: 'Thế giới',
    chilren: [
      {
        childtitle: 'Tư liệu',
      },
      {
        childtitle: 'Phân tích',
      },
      {
        childtitle: 'Người Việt 4 phương',
      },
      {
        childtitle: 'Tầm nhìn',
      },
    ],
  },
  {
    title: 'Trang chủ',
    chilren: [
      {
        childtitle: 'Chi tiết',
      },
      {
        childtitle: 'Chuyên mục',
      },
    ],
  },
  {
    title: 'Trang chủ 1',
    chilren: [
      {
        childtitle: 'Chi tiết 1',
      },
      {
        childtitle: 'Chuyên mục 1',
      },
    ],
  },
  {
    title: 'Trang chủ 2',
    chilren: [
      {
        childtitle: 'Chi tiết 2',
      },
      {
        childtitle: 'Chuyên mục 2',
      },
    ],
  },
]

const imgcates = [
  {
    id: '1',
    URL: 'https://static-znews.zadn.vn/images/channels/podcast_logo_white.svg',
  },
  {
    id: '2',
    URL: 'https://static-znews.zadn.vn/images/channels/longform-logo-white_1.svg',
  },
  {
    id: '3',
    URL: 'https://static-znews.zadn.vn/images/channels/story-logo-white.svg',
  },
  {
    id: '4',
    URL: 'https://static-znews.zadn.vn/images/channels/lens-logo-white_1.svg',
  },
  {
    id: '5',
    URL: 'https://static-znews.zadn.vn/images/channels/longform-logo-white_1.svg',
  },
]

const SubMenu = () => {
  return (
    <>
      <Stack>
        <Box
          sx={{
            backgroundColor: '#141329',
          }}
        >
          <Grid
            container
            sx={{ color: '#fff', maxWidth: '1050px', margin: 'auto', py: 3 }}
          >
            {categoryMenus.map((category) => (
              <Grid item xs={2.4} key={category.title}>
                <Box
                  mb={0.5}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      height: '13px',
                      width: '5px',
                      bgcolor: 'red',
                      top: '5px',
                      left: '-12px',
                      transform: 'skew(-25deg)',
                    },
                  }}
                >
                  <Typography fontWeight={'bold'} color="#ddd">
                    {category.title}
                  </Typography>
                </Box>
                {category.chilren.map((item) => (
                  <Box key={item.childtitle}>
                    <Typography fontSize={'13px'} color="#bbb" lineHeight={2}>
                      {item.childtitle}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>

      <Box>
        <List
          sx={{
            display: 'flex',
            background: '#333240',
            paddingLeft: 15,
            paddingRight: 20,
          }}
        >
          {imgcates.map((imgcate) => (
            <ListItem key={imgcate.id}>
              <img src={imgcate.URL} alt="" />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}

export default SubMenu
