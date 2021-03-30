import React from "react"
import { useDispatch } from 'umi'
import * as style from "./index.less"

interface CenterProps {
}

const Sidebar: React.FC = (props: CenterProps) => {

  const dispatch = useDispatch()

  const handlerDragOver: React.DragEventHandler = (e) => {
    e.preventDefault()
  }

  const handlerDrop: React.DragEventHandler = (e) => {
    e.stopPropagation()
    const { target } = e
    const dataIndex = e.dataTransfer.getData('index')
    console.log('抓取结束', dataIndex)
  }

  return (
    <div onDragOver={handlerDragOver} onDrop={handlerDrop} className={style.center}>
      内容部分
    </div>
  )
}

export default Sidebar