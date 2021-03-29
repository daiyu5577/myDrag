import React, { useEffect, useState, FC } from "react"
import { Menu } from 'antd';
import { HomeOutlined, FolderOutlined, FolderOpenOutlined, FolderAddOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

interface HeadPageProps {
}

type MenuListItem = Partial<{
  key: string,
  title: string,
  icon: any,
  href: string,
  childrens: Array<MenuListItem>
}>

const menuList: Array<MenuListItem> = [
  {
    key: 'home',
    title: '首页',
    icon: HomeOutlined,
    href: '',
    childrens: []
  },
  {
    key: 'source',
    title: '资源',
    icon: FolderOutlined,
    href: '',
    childrens: [
      {
        key: 'allSource',
        title: '所有资源',
        icon: FolderOpenOutlined,
        href: '',
      },
      {
        key: 'sourceUpload',
        title: '上传资源',
        icon: FolderAddOutlined,
        href: '',
      }
    ]
  },
]

function renderSubMenuItem(item: MenuListItem) {
  return (
    <SubMenu key={item.key} title={item.title} icon={<item.icon />}>
      {
        item.childrens!.map((subItem: MenuListItem) => {
          if (!subItem.childrens || !subItem.childrens.length) {
            return (<Menu.Item key={subItem.key} title={subItem.title} icon={<subItem.icon />}>{subItem.title}</Menu.Item>)
          }
          return renderSubMenuItem(subItem)
        })
      }
    </SubMenu>
  )
}

const Head: FC<HeadPageProps> = (props) => {

  let [current, setCurrent] = useState<string>('home')

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {
        menuList.map(item => {
          if (!item.childrens || !item.childrens.length) {
            return (<Menu.Item key={item.key} title={item.title} icon={<item.icon />}>{item.title}</Menu.Item>)
          }
          return renderSubMenuItem(item)
        })
      }
    </Menu>
  );
}

export default Head
