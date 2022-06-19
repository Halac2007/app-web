import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTopChilds = (props) => {
  return (
    <>
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
          <Link to="/">{props.headchild} </Link>
        </Typography>
      </Box>
    </>
  )
}

export default HeaderTopChilds
