import React, { useState } from 'react'
import '../../App.css'
import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'

const Footers = () => {
  const [infowebs] = useState([
    { id: 1, title: 'Tạp chí điện tử Tri thức trực tuyến' },
    { id: 2, title: 'Cơ quan chủ quản: Hội Xuất bản Việt Nam' },
    { id: 3, title: 'Giấy phép báo chí: số 75/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020' },
    { id: 4, title: 'Phó tổng biên tập phụ trách: Lâm Quang Hiếu' },
    { id: 5, title: '© Toàn bộ bản quyền thuộc Tri thức trực tuyến' },
  ])

  const [copyrights] = useState([
    { idcpr: 1, titlecpr: 'Tòa soạn: Tầng 7, D29 Phạm Văn Bạch, Quận Cầu Giấy, Hà Nội' },
    { idcpr: 2, titlecpr: 'Hotline: 0931.222.666 - Email: toasoan@zing.vn' },
  ])

  const [links] = useState([
    { idlink: 1, titlelink: 'Liên hệ' },
    { idlink: 2, titlelink: 'Tuyển dụng' },
    { idlink: 3, titlelink: 'Quảng cáo' },
  ])
  return (
    <>
      <Box sx={{ height: 240, background: '#f7f7f7', left: 0, paddingTop: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between', marginLeft: 20, marginRight: 20, lineHeight: 1.3 }}>
          <Box>
            <img src="https://static-znews.zadn.vn/images/logo-zing-home.svg" alt="" width={'15%'} />
            {infowebs.map((infoweb) => (
              <p key={infoweb.id}>{infoweb.title}</p>
            ))}
          </Box>
          <Box>
            {copyrights.map((copyright) => (
              <p key={copyright.idcpr}>{copyright.titlecpr}</p>
            ))}
            <p className="links">
              {links.map((link) => (
                <a href="/" key={link.idlink}>
                  {link.titlelink} |{' '}
                </a>
              ))}
            </p>
          </Box>
        </Toolbar>
      </Box>
    </>
  )
}

export default Footers
