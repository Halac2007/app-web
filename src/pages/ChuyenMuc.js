import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CatePost from '../components/CategoryData/CatePost.component'
import HeaderTops from '../components/CategoryData/HeaderTop.component'
import HeaderTopChilds from '../components/CategoryData/HeaderTopChild.component'
import MainPosts from '../components/CategoryData/MainPosts.component'
import OaPost from '../components/CategoryData/OaPost.component'
import SidePosts from '../components/CategoryData/SidePost.component'
import CustomerSlider from '../components/CustomerSlider/CustomerSlider.component'

const menuHeads = [
  {
    title: 'XUẤT BẢN',
    chilren: [
      {
        childtitle: 'TIN TỨC XUẤT BẢN',
        url: '/tin-tuc-xuat-ban',
      },
      {
        childtitle: 'SÁCH HAY',
        url: '/sach-hay',
      },
      {
        childtitle: 'TÁC GIẢ',
        url: '/tac-gia',
      },
    ],
  },
  {
    title: 'XÃ HỘI',
    chilren: [
      {
        childtitle: 'ĐÔ THỊ',
      },
      {
        childtitle: 'GIAO THÔNG',
      },
    ],
  },
  {
    title: 'THẾ GIỚI',
    chilren: [
      {
        childtitle: 'BẤT ĐỘNG SẢN',
      },
      {
        childtitle: 'TÀI CHÍNH',
      },
      {
        childtitle: 'TIỀN CỦA TÔI',
      },
    ],
  },
  {
    title: 'KINH DOANH',
    chilren: [
      {
        childtitle: 'TIỀN CỦA TÔI',
      },
      {
        childtitle: 'KINH TẾ SỐ',
      },
      {
        childtitle: 'THÔNG TIN DOANH NGHIỆP',
      },
    ],
  },
  {
    title: 'CÔNG NGHỆ',
    chilren: [
      {
        childtitle: 'MOBILE',
      },
      {
        childtitle: 'SMARTPHONE',
      },
      {
        childtitle: 'PC',
      },
    ],
  },
  {
    title: 'SỨC KHỎE',
    chilren: [
      {
        childtitle: 'KHỎE ĐẸP',
      },
      {
        childtitle: 'DINH DƯỠNG',
      },
      {
        childtitle: 'HẬU COVID-19',
      },
    ],
  },
  {
    title: 'THỂ THAO',
    chilren: [
      {
        childtitle: 'TRONG NƯỚC',
      },
      {
        childtitle: 'QUỐC TẾ',
      },
      {
        childtitle: 'FAIRPLAY',
      },
    ],
  },
  {
    title: 'GIẢI TRÍ',
    chilren: [
      {
        childtitle: 'XEM NGHE ĐỌC',
      },
      {
        childtitle: 'CHUYỆN SAO',
      },
      {
        childtitle: 'PHIM HAY',
      },
    ],
  },
  {
    title: 'ĐỜI SỐNG',
    chilren: [
      {
        childtitle: 'GIỚI TRẺ',
      },
      {
        childtitle: 'XU HƯỚNG',
      },
      {
        childtitle: 'SỐNG ĐẸP',
      },
    ],
  },
  {
    title: 'DU LỊCH',
    chilren: [
      {
        childtitle: 'ĐỊA ĐIỂM DU LỊCH',
      },
      {
        childtitle: 'KING NGHIỆM DU LỊCH',
      },
    ],
  },
  {
    title: 'Lifestyle',
    chilren: [
      {
        childtitle: 'TREND',
      },
      {
        childtitle: 'BEST',
      },
      {
        childtitle: 'LIVING',
      },
    ],
  },
]

const ChuyenMuc = () => {
  const [mainPosts, setMainPosts] = useState([])
  const [sidePosts, setSidePosts] = useState([])
  const [oaPosts, setOaPosts] = useState([])
  const [featurePosts, setFeaturePosts] = useState([])

  const [headTops, setHeadTops] = useState([])
  const [headTopChilds, setHeadTopChilds] = useState([])
  const { name } = useParams()

  useEffect(() => {
    //alert(name)

    const getXuatban = 'https://duy-boe-api.herokuapp.com/xuat-ban'
    const getThegioi = 'https://duy-boe-api.herokuapp.com/the-gioi'
    const getXahoi = 'https://duy-boe-api.herokuapp.com/xa-hoi'
    const getKinhdoanh = 'https://duy-boe-api.herokuapp.com/kinh-doanh'
    const getCongnghe = 'https://duy-boe-api.herokuapp.com/cong-nghe'
    const getSuckhoe = 'https://duy-boe-api.herokuapp.com/suc-khoe'
    const getThethao = 'https://duy-boe-api.herokuapp.com/the-thao'
    const getGaitri = 'https://duy-boe-api.herokuapp.com/giai-tri'
    const getDoisong = 'https://duy-boe-api.herokuapp.com/doi-song'
    const getDulich = 'https://duy-boe-api.herokuapp.com/du-lich'
    const getLifestyle = 'https://duy-boe-api.herokuapp.com/lifestyle'

    // eslint-disable-next-line default-case
    switch (name) {
      case 'xuat-ban':
        axios.get(getXuatban).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })

        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'xa-hoi':
        axios.get(getXahoi).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'the-gioi':
        axios.get(getThegioi).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'kinh-doanh':
        axios.get(getKinhdoanh).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'cong-nghe':
        axios.get(getCongnghe).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'suc-khoe':
        axios.get(getSuckhoe).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'the-thao':
        axios.get(getThethao).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'giai-tri':
        axios.get(getGaitri).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'doi-song':
        axios.get(getDoisong).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'du-lich':
        axios.get(getDulich).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'lifestyle':
        axios.get(getLifestyle).then((res) => {
          const data = res.data.map((item) => ({
            id: item.id,
            title: item.title,
            sapo: item.description,
            image: item.images[0] || item.category.image,
          }))
          setMainPosts(data.slice(0, 1))
          setSidePosts(data.slice(1, 3))
          setOaPosts(data.slice(3, 7))
          setFeaturePosts(data.slice(7, 11))
        })
        break
    }
  }, [name])

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (name) {
      case 'xuat-ban':
        const data = menuHeads.map((menu) => menu.title)

        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )
        console.log(datachild)
        setHeadTopChilds(datachild.slice(0, 1))
        setHeadTops(data.slice(0, 1))

        // const datachild = data.chilren.map((item) => item.childtitle)
        // console.log(datachild)

        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'xa-hoi':
        const data = menuHeads.map((menu) => menu.title)
        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTops(data.slice(1, 2))
        setHeadTopChilds(datachild.slice(1, 2))
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'the-gioi':
        const data = menuHeads.map((menu) => menu.title)
        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTops(data.slice(2, 3))
        setHeadTopChilds(datachild.slice(2, 3))
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'kinh-doanh':
        const data = menuHeads.map((menu) => menu.title)
        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTopChilds(datachild.slice(3, 4))
        setHeadTops(data.slice(3, 4))
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'cong-nghe':
        const data = menuHeads.map((menu) => menu.title)
        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTopChilds(datachild.slice(4, 5))
        setHeadTops(data.slice(4, 5))
        break
    }

    // eslint-disable-next-line default-case
    switch (name) {
      case 'suc-khoe':
        const data = menuHeads.map((menu) => menu.title)
        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTopChilds(datachild.slice(5, 6))
        setHeadTops(data.slice(5, 6))
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'the-thao':
        const data = menuHeads.map((menu) => menu.title)
        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTopChilds(datachild.slice(6, 7))
        setHeadTops(data.slice(6, 7))
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'giai-tri':
        const data = menuHeads.map((menu) => menu.title)

        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTopChilds(datachild.slice(7, 8))
        setHeadTops(data.slice(7, 8))
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'doi-song':
        const data = menuHeads.map((menu) => menu.title)
        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTopChilds(datachild.slice(8, 9))
        setHeadTops(data.slice(8, 9))
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'du-lich':
        const data = menuHeads.map((menu) => menu.title)
        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTopChilds(datachild.slice(9, 10))
        setHeadTops(data.slice(9, 10))
        break
    }
    // eslint-disable-next-line default-case
    switch (name) {
      case 'lifestyle':
        const data = menuHeads.map((menu) => menu.title)
        const datachild = menuHeads.map((menu) =>
          menu.chilren.map((item) => item.childtitle)
        )

        setHeadTopChilds(datachild.slice(10, 11))
        setHeadTops(data.slice(10, 11))
        break
    }
  }, [name])

  return (
    <>
      <Box maxWidth="1000px" m="auto">
        <HeaderTops headtop={headTops} />
        <HeaderTopChilds headchild={headTopChilds} />
      </Box>

      <Box maxWidth="1000px" m="auto">
        <Grid
          container
          spacing={3}
          sx={{ paddingBottom: '20px', marginBottom: '20px' }}
        >
          <MainPosts mainpost={mainPosts} />

          <SidePosts side={sidePosts} />
        </Grid>

        <OaPost oapost={oaPosts} />

        <Box sx={{ m: '10px', p: '10px' }}>
          <Typography
            variant="h5"
            mt="10px"
            pb="15px"
            mb="15px"
            fontWeight="700"
            position="relative"
            borderBottom="1px solid #eee"
            sx={{
              '&::after': {
                content: '""',
                position: 'absolute',
                height: '15px',
                width: '5px',
                bgcolor: 'red',
                top: '8px',
                left: '-12px',
                transform: 'skew(-25deg)',
              },
            }}
          >
            XUẤT BẢN
          </Typography>
          <CatePost catepost={featurePosts} />
        </Box>

        <Box>
          <Typography
            variant="h5"
            mt="10px"
            pb="15px"
            mb="15px"
            fontWeight="700"
            position="relative"
            borderBottom="1px solid #eee"
            sx={{
              '&::after': {
                content: '""',
                position: 'absolute',
                height: '15px',
                width: '5px',
                bgcolor: 'red',
                top: '8px',
                left: '-12px',
                transform: 'skew(-25deg)',
              },
            }}
          >
            Slider
          </Typography>
          <CustomerSlider posts={featurePosts} />
        </Box>
      </Box>
    </>
  )
}

export default ChuyenMuc
