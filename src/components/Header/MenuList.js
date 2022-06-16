import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const MenuLists = ({ menus }) => {
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
