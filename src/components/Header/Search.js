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
    <Box>
      <IconButton size="large" edge="end">
        <TextField
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 1,
            opacity: open ? 1 : 0,
            width: open ? '250px' : '50px',
            transition: 'all .5s',
            bgcolor: '#444',
            borderRadius: '5px',
          }}
          size="small"
          type="text"
          placeholder="Nhập nội dung cần tìm"
        />

        <SearchIcon
          onClick={clickToggle}
          sx={{ zIndex: 2, color: open ? '#fff' : '#333' }}
        />
      </IconButton>
    </Box>
  )
}

export default Searchs
