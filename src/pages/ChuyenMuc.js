import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ChuyenMuc = () => {
  const { name } = useParams()
  useEffect(() => {
    console.log(`Lay du lieu tuy theo name ${name}`)
  }, [name])

  return (
    <Box>
      <Box>Chuyên mục {name}</Box>
      <Box>Chuyên mục con {name}</Box>
      <Box>Bài viết {name}</Box>
    </Box>
  )
}

export default ChuyenMuc
