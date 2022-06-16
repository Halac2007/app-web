import AccountCircle from '@mui/icons-material/AccountCircle'
import CloseIcon from '@mui/icons-material/Close'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import {
  AppBar,
  Box,
  Container,
  Fade,
  IconButton,
  Popper,
  Toolbar,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuLists from './MenuList'
import Searchs from './Search'
import SubMenus from './Submenus'

const menus = [
  { id: 1, title: 'Xuất bản', url: '/chuyen-muc/xuat-ban' },
  { id: 2, title: 'Xã hội', url: '/chuyen-muc/xa-hoi' },
  { id: 3, title: 'Thế giới', url: '/chuyen-muc/the-gioi' },
  { id: 4, title: 'Kinh doanh', url: '/chuyen-muc/kinh-doanh' },
  { id: 5, title: 'Công nghệ', url: '/chuyen-muc/cong-nghe' },
  { id: 6, title: 'Sức khỏe', url: '/chuyen-muc/suc-khoe' },
  { id: 7, title: 'Thể thao', url: '/chuyen-muc/the-thao' },
  { id: 8, title: 'Giải trí', url: '/chuyen-muc/giai-tri' },
  { id: 9, title: 'Đời sống', url: '/chuyen-muc/doi-song' },
  { id: 20, title: 'Du lịch', url: '/chuyen-muc/du-lich' },
  { id: 21, title: 'Lifestyle', url: '/chuyen-muc/lifestyle' },
]

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

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'transition-popper' : undefined

  return (
    <AppBar
      position="static"
      sx={{ background: '#fff', borderBottom: '1px solid #ede7f6', height: 50 }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Link to="/">
            <img
              src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
              alt=""
              height={'30px'}
            />
          </Link>

          <MenuLists menus={menus} />
          <Box type="text" onClick={handleClick} color="#444444">
            {open === false ? <MoreHorizIcon /> : <CloseIcon />}
          </Box>

          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            transition
            sx={{ width: '100%' }}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={500}>
                <Box>
                  <SubMenus categoryMenus={categoryMenus} imgcates={imgcates} />
                </Box>
              </Fade>
            )}
          </Popper>

          <Searchs />

          <IconButton size="large" color="default">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
