import React from "react"
import Toolbar from "@/pages/home/components/toolbar/index"
import Sidebar from "@/pages/home/components/sidebar/index"
import * as style from "./index.less"

interface HomeProps {
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className={style.home}>
      <Toolbar />
      <div className="content">
        <Sidebar />
      </div>
    </div >
  );
}

export default Home
