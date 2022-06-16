import { Box, Container, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ChuyenMuc = () => {
  const [cates, setCate] = useState([])
  const { name } = useParams()
  useEffect(() => {
    axios
      .get(
        'https://api.escuelajs.co/api/v1/products?fbclid=IwAR2R8gN288AvUTnAGHr6rhU36vrz1xAF_F7bWgOP83U2RmHSyk_D3qmXc_Q'
      )
      .then((res) => {
        setCate(res.data.slice(0, 3).map((t) => t.title))
        console.log(res.data.slice(0, 3).map((t) => t.title))
      })
  }, [name])

  return (
    <Container maxWidth="sm">
      {cates.map((cate) => (
        <Box key={cate.id}>{cate.title}</Box>
      ))}
      <Stack></Stack>
    </Container>
  )
}

export default ChuyenMuc
