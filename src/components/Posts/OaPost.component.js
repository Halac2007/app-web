import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const OaPost = (props) => {
  return (
    <Grid container spacing={2} sx={{ borderTop: '1px solid #eee' }}>
      {props.oapost.map((item) => (
        <Grid key={item.id} item xs={3}>
          <img src={item.image} width="100%" height="156px" alt="" />
          <Box>{item.title}</Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default OaPost
