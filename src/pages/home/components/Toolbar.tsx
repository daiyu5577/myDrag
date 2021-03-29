import React, { useState, useMemo } from "react"
import { Button, InputNumber } from 'antd';
import { connect, useStore, useSelector } from 'umi';
import { GlobalModelState } from "@/models/toolbar"
import * as style from "./toolbar.less"

interface ToolbarProps {
}

function SetSize() {

  const [width, setWidth] = useState<number>(2481)
  const [height, setHeight] = useState<number>(3508)

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

  const toolbarModel = useSelector((state: { toolbar: GlobalModelState }) => (state.toolbar))
  const { btnList } = toolbarModel

  return (
    <div className={style.toolbar}>
      {btnList.map((v, i) => (<Button key={i} style={{ margin: '0 10px 10px 0' }}>{v.title}</Button>))}
      <SetSize />
    </div >
  );
}

export default Toolbar
