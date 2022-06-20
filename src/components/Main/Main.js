import { Route, Routes } from 'react-router-dom'
import ChuyenMuc from '../../pages/ChuyenMuc'
import Home from '../../pages/Home'
import Lienhe from '../../pages/LienHe'
import Quangcao from '../../pages/QuangCao'
import Tuyendung from '../../pages/TuyenDung'

const links = [
  { id: '1', path: '/', e: <Home /> },
  { id: '2', path: '/lien-he', e: <Lienhe /> },
  { id: '3', path: '/quang-cao', e: <Quangcao /> },
  { id: '4', path: '/tuyen-dung', e: <Tuyendung /> },
  { id: '5', path: '/chuyen-muc/:name/', e: <ChuyenMuc /> },
]
const Main = () => {
  return (
    <Routes>
      {links.map((link) => (
        <Route key={link.id} path={link.path} element={link.e}></Route>
      ))}
    </Routes>
  )
}
export default Main
