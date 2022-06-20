import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const TopTile = ({ headtop, headchild }) => {
  return (
    <>
      <Typography
        variant="h3"
        textAlign="center"
        mt="15px"
        pt="15px"
        borderBottom="2px solid #000"
        fontWeight="700"
      >
        {headtop}
      </Typography>
      <Box
        textAlign="center"
        m="10px"
        borderBottom="1px solid #ddd"
        sx={{
          '& a': {
            m: '10px',
            fontSize: '0.9rem',
            color: '#444',
          },
          '& a:hover': {
            color: 'red',
          },
        }}
      >
        <Typography>
          {headchild.map((item) => (
            <Link key={item.childtitle} to={'/'}>
              {item.childtitle}
            </Link>
          ))}
        </Typography>
      </Box>
    </>
  )
}

export default TopTile
