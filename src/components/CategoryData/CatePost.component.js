import { Grid } from '@mui/material'
import { Box } from '@mui/system'

const CatePost = (props) => {
  return (
    <Grid container spacing={2} sx={{ borderTop: '1px solid #eee' }}>
      {props.catepost.map((itemtwo) => (
        <Grid key={itemtwo.id} item xs={3}>
          <img src={itemtwo.image} width="100%" height="156px" alt="" />
          <Box>{itemtwo.title}</Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default CatePost
