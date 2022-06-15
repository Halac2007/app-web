import React, { useState } from 'react'
import { Box, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import '../../App.css'

const Searchs = () => {
  const [open, setOpen] = useState(false)
  const clickToggle = () => {
    setOpen(!open)
  }

  return (
    <Box position={'relative'} display="flex" alignItems={'center'}>
      <TextField
        sx={{
          position: 'absolute',
          right: '-5px',
          zIndex: 1,
          opacity: open ? 1 : 0,
          width: open ? '250px' : '50px',
          transition: 'all .5s',
          borderRadius: '5px',
          bgcolor: '#fff',
        }}
        size="small"
        type="text"
        placeholder="Nhập nội dung cần tìm"
      />
      <IconButton size="large" edge="end" onClick={clickToggle}>
        <SearchIcon sx={{ zIndex: 2, color: '#333' }} />
      </IconButton>
    </Box>
  )
}

export default Searchs
