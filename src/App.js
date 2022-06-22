import { Grid, Paper, Typography, useMediaQuery } from '@mui/material'
import './App.css'
import Footer from './components/Footer/Footer.component'
import Header from './components/Header/Header.component'
import Main from './components/Main/Main'

function App() {
  // xs width>=0px
  // sm width>=600px
  // md width>=900px
  const matches = useMediaQuery('(max-width:450px)')
  console.log(matches)
  return (
    <>
      {/* <Grid
        container
        spacing={2}
        bgcolor={{ xs: 'red', sm: 'blue', md: 'green' }}
      >
        <Grid item xs={12} sm={12} md={8}>
          <Paper sx={{ height: '100%' }}>
            <Typography>Title 1</Typography>
            <Typography>Sapo 1</Typography>
          </Paper>
        </Grid>
        <Grid item container xs={12} sm={12} md={4} spacing={2}>
          <Grid item xs={12} sm={6} md={12}>
            <Paper>
              <Typography>Child Title 2</Typography>
              <Typography>Child Sapo 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <Paper>
              <Typography>Child Title 3</Typography>
              <Typography>Child Sapo 3</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid> */}
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
