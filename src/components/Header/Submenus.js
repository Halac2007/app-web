import {
  Box,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Stack,
} from '@mui/material'
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
  const gettitle = categoryMenus.map((c) => c.chilren.map((s) => s.childtitle))
  console.log(gettitle)
  return (
    <>
      <Stack>
        <Paper
          sx={{
            backgroundColor: '#141329',
            color: '#ddd',
            maxWidth: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              marginLeft: '16%',
              marginRight: '22%',
              marginTop: '1%',
              marginBottom: '1%',
            }}
          >
            <MenuList sx={{ display: 'flex' }}>
              {categoryMenus.map((m) => (
                <MenuItem>
                  {m.title}
                  <Box>
                    <MenuList>
                      {categoryMenus.map((c) =>
                        c.chilren.map((ch) => (
                          <ListItem>{ch.childtitle}</ListItem>
                        ))
                      )}
                    </MenuList>
                  </Box>
                </MenuItem>
              ))}
            </MenuList>
          </Box>
        </Paper>
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
            <ListItem>
              <img src={imgcate.URL} alt="" />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}

export default SubMenu
