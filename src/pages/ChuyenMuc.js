import { Box, Stack } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ChuyenMuc = () => {
  const [cates, setCates] = useState([])
  const { name } = useParams()
  useEffect(() => {
    axios
      .get(
        'https://api.escuelajs.co/api/v1/products?fbclid=IwAR2R8gN288AvUTnAGHr6rhU36vrz1xAF_F7bWgOP83U2RmHSyk_D3qmXc_Q'
      )
      .then((res) => {
        const data = res.data.slice(0, 3).map((item) => ({
          title: item.title,
          sapo: item.description,
          image: item.images[0],
        }))
        console.log(data)
        setCates(data)
      })
  }, [name])

  return (
    <Box>
      {cates.map((item) => (
        <Stack key={item.title}>
          <Box>{item.title}</Box>
          <Box>{item.sapo}</Box>
          <img src={item.image} width="100px" alt="" />
        </Stack>
      ))}
    </Box>
  )
}

export default ChuyenMuc
