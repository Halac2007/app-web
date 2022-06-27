import { Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import '../../App.css'

const links = [
  { idlink: 1, titlelink: 'Liên hệ', url: '/lien-he' },
  { idlink: 2, titlelink: 'Tuyển dụng', url: '/tuyen-dung' },
  { idlink: 3, titlelink: 'Quảng cáo', url: '/quang-cao' },
]

const data = links.map((l) => l.titlelink)

const infowebs = [
  { id: 1, title: 'Tạp chí điện tử Tri thức trực tuyến' },
  { id: 2, title: 'Cơ quan chủ quản: Hội Xuất bản Việt Nam' },
  {
    id: 3,
    title:
      'Giấy phép báo chí: số 75/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020',
  },
  { id: 4, title: 'Phó tổng biên tập phụ trách: Lâm Quang Hiếu' },
  { id: 5, title: '© Toàn bộ bản quyền thuộc Tri thức trực tuyến' },
]

const copyrights = [
  {
    idcpr: 1,
    titlecpr: 'Tòa soạn: Tầng 7, D29 Phạm Văn Bạch, Quận Cầu Giấy, Hà Nội',
  },
  { idcpr: 2, titlecpr: 'Hotline: 0931.222.666 - Email: toasoan@zing.vn' },
]

const Footer = () => {
  return (
    <Box sx={{ background: '#f7f7f7', paddingTop: 2 }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          lineHeight: 1.5,
        }}
      >
        <Box>
          <img
            src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
            alt=""
            height={'30px'}
          />
          {infowebs.map((infoweb) => (
            <Typography variant="body2" key={infoweb.id}>
              {infoweb.title}
            </Typography>
          ))}
        </Box>
        <Box>
          {copyrights.map((copyright) => (
            <Typography variant="body2" key={copyright.idcpr}>
              {copyright.titlecpr}
            </Typography>
          ))}
          <Typography
            variant="body2"
            sx={{
              '& a': {
                color: '#555',
                fontSize: '13px',
              },
            }}
          >
            {links.map((link) => (
              <Link to={link.url} key={link.idlink}>
                {link.titlelink} |{' '}
              </Link>
            ))}
          </Typography>
        </Box>
      </Toolbar>
    </Box>
  )
}

export default Footer
