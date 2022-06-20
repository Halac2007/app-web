import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SidePosts = (props) => {
  return (
    <Grid item xs={4}>
      {props.side.map((item) => (
        <Box key={item.id}>
          <img src={item.image} width="100%" height="212px" alt="" />
          <Box sx={{ fontWeight: 'bold' }}>{item.title}</Box>
        </Box>
      ))}
    </Grid>
  )
}

export default SidePosts
