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

          <MenuLists />
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
                  <SubMenus />
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
