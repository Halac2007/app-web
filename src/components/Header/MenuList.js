import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const menus = [
  { id: 1, title: 'Xuất bản', url: '/xuat-ban' },
  { id: 2, title: 'Xã hội', url: '/xa-hoi' },
  { id: 3, title: 'Thế giới', url: '/the-gioi' },
  { id: 4, title: 'Kinh doanh', url: '/kinh-doanh' },
  { id: 5, title: 'Công nghệ', url: '/cong-nghe' },
  { id: 6, title: 'Sức khỏe', url: '/suc-khoe' },
  { id: 7, title: 'Thể thao', url: '/the-thao' },
  { id: 8, title: 'Giải trí', url: '/giai-tri' },
  { id: 9, title: 'Đời sống', url: '/doi-song' },
  { id: 20, title: 'Du lịch', url: '/du-lich' },
  { id: 21, title: 'Lifestyle', url: '/lifestyle' },
]
const MenuLists = () => {
  return (
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
        <Link to={menu.url} key={menu.id}>
          <Typography
            className="Duy Boe"
            variant="body2"
            color={'#000'}
            sx={{
              '&:hover': {
                bgcolor: '#333',
                color: '#fff',
              },
              padding: '5px',
              borderRadius: '5px',
              transition: 'all .3s',
            }}
          >
            {menu.title}
          </Typography>
        </Link>
      ))}
    </Box>
  )
}

export default MenuLists
