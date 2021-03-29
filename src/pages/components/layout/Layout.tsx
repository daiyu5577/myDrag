import React, { useEffect, useState, FC } from "react"
import Head from "./Head"


interface LayoutPageProps {
}

const Layout: FC<LayoutPageProps> = (props) => {

  return (
    <div>
      <Head />
    </div>
  );
}

export default Layout
