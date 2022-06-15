import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ChuyenMuc = () => {
  const { name } = useParams()
  useEffect(() => {
    console.log(`Lay du lieu tuy theo name ${name}`)
  }, [name])

  return <div>{name}</div>
}

export default ChuyenMuc
