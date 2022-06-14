import React, { useState } from 'react'
import { Box } from '@mui/material'

const MenuLists = () => {
  const [menus] = useState([
    { id: 1, title: 'Xuất bản' },
    { id: 2, title: 'Xã hội' },
    { id: 3, title: 'Thế giới' },
    { id: 4, title: 'Kinh doanh' },
    { id: 5, title: 'Công nghệ' },
    { id: 6, title: 'Sức khỏe' },
    { id: 7, title: 'Thể thao' },
    { id: 8, title: 'Giải trí' },
    { id: 9, title: 'Đời sống' },
    { id: 20, title: 'Du lịch' },
    { id: 21, title: 'Lifestyle' },
  ])
  return (
    <>
      <Box
        sx={{
          flexGrow: 0.6,
          display: { xs: 'flex', md: '1' },
          justifyContent: 'space-evenly',
          color: '#444444',
          fontWeight: 'bold',
          fontSize: 13,
          marginLeft: 1,
        }}
      >
        {menus.map((menu) => (
          <p key={menu.id}>{menu.title}</p>
        ))}
      </Box>
    </>
  )
}

export default MenuLists
