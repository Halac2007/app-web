import React, { useState } from 'react'
import { Box, Input, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import '../../App.css'

const Searchs = () => {
  const [open, setOpen] = useState(false)
  const clickToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Box sx={{ zIndex: '9999', position: 'relative' }}>
        <IconButton size="large" aria-label="display more actions" edge="end" color="default" onClick={clickToggle}>
          {open === true ? <Input type="text" id="serch-key" placeholder="Nhập nội dung cần tìm"></Input> : ''}
          <SearchIcon></SearchIcon>
        </IconButton>
      </Box>
    </>
  )
}

export default Searchs
