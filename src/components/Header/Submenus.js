import React from 'react'
import {
  Box,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  List,
  ListItem,
} from '@mui/material'
import '../../App.css'

const catemenus = [
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

const SubMenus = () => {
  return (
    <MenuList sx={{ display: 'flex' }}>
      {catemenus.map((catemenu) => (
        <MenuItem>
          {catemenu.title}
          <Box>
            {catemenus.map((catemenu) => (
              <ListItemText>{catemenu.chilren.childtitle}</ListItemText>
            ))}
          </Box>
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default SubMenus
