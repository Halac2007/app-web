import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTops = (props) => {
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
        {props.headtop}
      </Typography>
    </>
  )
}

export default HeaderTops
