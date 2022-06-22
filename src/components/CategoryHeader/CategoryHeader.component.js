import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const CategoryHeader = (props) => {
  return (
    <Box maxWidth="1000px" m="auto">
      <Typography
        variant="h3"
        textAlign="center"
        mt="15px"
        pt="15px"
        borderBottom="2px solid #000"
        fontWeight="700"
      >
        XUẤT BẢN
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
        {props.map((cate) => (
          <Link to="/" key={cate.id}>
            {cate.title}
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default CategoryHeader
