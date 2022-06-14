import React, { useState } from 'react'
import { Box, ListItemText, MenuItem, MenuList, Paper, Stack, List, ListItem } from '@mui/material'
import '../../App.css'

const SubMenus = () => {
  return (
    <>
      <Stack>
        <Paper
          sx={{
            backgroundColor: '#141329',
            color: '#ddd',
            maxWidth: '100%',
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '16%', marginRight: '22%', marginTop: '1%', marginBottom: '1%' }}>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Xã hội</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Đô thị</ListItemText>
                <ListItemText>Giao thông</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Thế giới</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Tư liệu</ListItemText>

                <ListItemText>Phân tích</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Kinh doanh</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Bất động sản</ListItemText>

                <ListItemText>Tiền của tôi</ListItemText>

                <ListItemText>Tiêu dùng</ListItemText>

                <ListItemText>Kinh tế số</ListItemText>

                <ListItemText>Thông tin doanh nghiệp</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Công nghệ</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Blockchain</ListItemText>

                <ListItemText>Mobile</ListItemText>

                <ListItemText>Gadget</ListItemText>

                <ListItemText>Internet</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Xuất bản</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Tin tức xuất bản</ListItemText>

                <ListItemText>Sách hay </ListItemText>

                <ListItemText>Tác giả </ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Đời sống</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Giới trẻ</ListItemText>

                <ListItemText>Xu hướng</ListItemText>

                <ListItemText>Sống đẹp</ListItemText>

                <ListItemText>Sự kiện</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Sức khỏe</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Hậu Covid-19</ListItemText>

                <ListItemText>Khỏe đẹp</ListItemText>

                <ListItemText>Khỏe đẹp</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Thể thao</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Bóng đá Việt Nam</ListItemText>

                <ListItemText>Bóng đá Anh</ListItemText>

                <ListItemText>Võ thuật</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Giải trí</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Sao</ListItemText>

                <ListItemText>Âm nhạc</ListItemText>

                <ListItemText>Phim ảnh</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Xe</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Ô tô </ListItemText>

                <ListItemText>EV</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Du lịch</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Địa điểm du lịch</ListItemText>

                <ListItemText>Kinh nghiệm du lịch</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Giáo dục</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Đô thị</ListItemText>

                <ListItemText>Giao thông</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Lifestyle</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Đô thị</ListItemText>

                <ListItemText>Giao thông</ListItemText>
              </Box>
            </MenuList>
            <MenuList className="category-menu">
              <MenuItem className="cate-menu">Pháp Luật</MenuItem>
              <Box className="sub-menu">
                <ListItemText>Đô thị</ListItemText>

                <ListItemText>Giao thông</ListItemText>
              </Box>
            </MenuList>
          </Box>
          <Box>
            <List sx={{ display: 'flex', background: '#333240', paddingLeft: 15, paddingRight: 20 }}>
              <ListItem>
                <img src="https://static-znews.zadn.vn/images/channels/longform-logo-white_1.svg" alt="" />
              </ListItem>
              <ListItem>
                <img src="https://static-znews.zadn.vn/images/channels/longform-logo-white_1.svg" alt="" />
              </ListItem>
              <ListItem>
                <img src="https://static-znews.zadn.vn/images/channels/story-logo-white.svg" alt="" />
              </ListItem>
              <ListItem>
                <img src="	https://static-znews.zadn.vn/images/channels/lens-logo-white_1.svg" alt="" />
              </ListItem>
              <ListItem>
                <img src="https://static-znews.zadn.vn/images/channels/interactive-logo-white.svg" alt="" />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Stack>
    </>
  )
}

export default SubMenus
