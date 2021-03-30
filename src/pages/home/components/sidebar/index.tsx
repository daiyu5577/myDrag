import React from "react"
import { Button, Space } from 'antd';
import { useDispatch } from 'umi'
import * as style from "./index.less"

interface SidebarProps {
}

export type BtnListItem = {
  type: string,
  title: string
}

const btnList: Array<BtnListItem> = [
  {
    type: 'img',
    title: '图片',
  },
  {
    type: 'txt',
    title: '文字',
  },
]

const Sidebar: React.FC = (props: SidebarProps) => {

  const dispatch = useDispatch()

  const handlerDragStart: React.DragEventHandler = (e) => {
    e.stopPropagation()
    const { target } = e
    e.dataTransfer.setData('index', target.dataset.index)
    console.log('抓取开始', target.dataset.index)
  }

  return (
    <div className={style.sidebar} onDragStart={handlerDragStart}>
      <Space size="middle" wrap>
        {btnList.map((v, i) => (<Button draggable key={i} data-index={i}>{v.title}</Button>))}
      </Space>
    </div>
  )
}

export default Sidebar