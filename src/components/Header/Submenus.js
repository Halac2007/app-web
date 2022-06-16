import { Box, Grid, List, ListItem, Stack, Typography } from '@mui/material'
import '../../App.css'

const SubMenu = ({ categoryMenus, imgcates }) => {
  return (
    <>
      <Stack>
        <Box
          sx={{
            backgroundColor: '#141329',
          }}
        >
          <Grid
            container
            sx={{ color: '#fff', maxWidth: '1050px', margin: 'auto', py: 3 }}
          >
            {categoryMenus.map((category) => (
              <Grid item xs={2.4} key={category.title}>
                <Box
                  mb={0.5}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      height: '13px',
                      width: '5px',
                      bgcolor: 'red',
                      top: '5px',
                      left: '-12px',
                      transform: 'skew(-25deg)',
                    },
                  }}
                >
                  <Typography fontWeight={'bold'} color="#ddd">
                    {category.title}
                  </Typography>
                </Box>
                {category.chilren.map((item) => (
                  <Box key={item.childtitle}>
                    <Typography fontSize={'13px'} color="#bbb" lineHeight={2}>
                      {item.childtitle}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>

      <Box>
        <List
          sx={{
            display: 'flex',
            background: '#333240',
            paddingLeft: 15,
            paddingRight: 20,
          }}
        >
          {imgcates.map((imgcate) => (
            <ListItem key={imgcate.id}>
              <img src={imgcate.URL} alt="" />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}

export default SubMenu
