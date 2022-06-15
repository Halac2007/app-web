import { Box, ListItemText, MenuItem, MenuList } from '@mui/material'
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

const SubMenu = () => {
  return (
    <MenuList sx={{ display: 'flex' }}>
      {categoryMenus.map((catemenu) => (
        <MenuItem>
          {catemenu.title}
          <Box>
            {categoryMenus.map((catemenu) => (
              <ListItemText>{catemenu.chilren.childtitle}</ListItemText>
            ))}
          </Box>
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default SubMenu
