import React, { useState, useMemo } from "react"
import { Button, InputNumber } from 'antd';
import { connect, useStore, useSelector, useDispatch } from 'umi';
import { useGetModel } from "@/utils/useModel"
import * as style from "./toolbar.less"

interface ToolbarProps {
}

// 设置画布大小
function SetSize() {

  const { canvasWidth, canvasHeigth } = useGetModel('toolbar')
  const dispatch = useDispatch()
  const [width, setWidth] = useState<number>(canvasWidth)
  const [height, setHeight] = useState<number>(canvasHeigth)

  return (
    <div className="setSize">
      <span>画布大小&nbsp;</span>
      <InputNumber max={3508} onChange={setWidth} defaultValue={2481} />
      <span>&nbsp;*&nbsp;</span>
      <InputNumber max={3508} onChange={setHeight} defaultValue={3508} />
    </div>
  )
}

const Toolbar: React.FC<ToolbarProps> = (props) => {

  const { btnList } = useGetModel('toolbar')

  return (
    <div className={style.toolbar}>
      {btnList.map((v, i) => (<Button key={i} style={{ margin: '0 10px 10px 0' }}>{v.title}</Button>))}
      <SetSize />
    </div >
  );
}

export default Toolbar
