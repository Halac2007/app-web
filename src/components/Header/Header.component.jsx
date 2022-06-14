import React, { useState } from 'react'
import { AppBar, Toolbar, Container, IconButton, Box, Popper, Fade } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuLists from './MenuList'
import Searchs from './Search'
import SubMenus from './Submenus'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CloseIcon from '@mui/icons-material/Close'

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'transition-popper' : undefined

  return (
    <>
      <AppBar position="static" sx={{ background: '#fff', borderBottom: '1px solid #ede7f6', height: 50 }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ marginLeft: 10, marginRight: 10 }}>
            <img src="https://static-znews.zadn.vn/images/logo-zing-home.svg" alt="" width={'8%'} />

            <MenuLists />
            <div>
              <Box aria-describedby={id} type="text" onClick={handleClick} color="#444444">
                {open === false ? <MoreHorizIcon /> : <CloseIcon />}
              </Box>

              <Popper id={id} open={open} anchorEl={anchorEl} transition sx={{ width: '100%' }}>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={1200}>
                    <Box>
                      <SubMenus />
                    </Box>
                  </Fade>
                )}
              </Popper>
            </div>

            <Searchs />

            <IconButton size="large" color="default">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
