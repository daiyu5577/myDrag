import React from "react"
import Toolbar from "@/pages/home/components/toolbar/index"
import Sidebar from "@/pages/home/components/sidebar/index"
import Center from "@/pages/home/components/center/index"
import * as style from "./index.less"

interface HomeProps {
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className={style.home}>
      <Toolbar />
      <div className="content">
        <Sidebar />
        <Center />
      </div>
    </div >
  );
}

export default Home
