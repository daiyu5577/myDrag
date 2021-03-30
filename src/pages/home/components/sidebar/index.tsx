import React from "react"
import * as style from "./index.less"

interface SidebarProps {
}

const Sidebar: React.FC = (props: SidebarProps) => {
  return (
    <div className={style.sidebar}>
      侧边栏
    </div>
  )
}

export default Sidebar