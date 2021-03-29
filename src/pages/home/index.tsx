import React from "react"
import Toolbar from "@/pages/home/components/Toolbar"
import * as style from "./index.less"

interface HomeProps {
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className={style.home}>
      <Toolbar />
      home 页面
    </div >
  );
}

export default Home
