import React, { useEffect, useState, FC } from "react"
import CommonLayout from "@/pages/components/layout/commonLayout"

interface IndexPageProps {
  history: History;
}


const IndexPage: FC<IndexPageProps> = (props) => {

  return (
    <CommonLayout>
      {props.children}
    </CommonLayout>
  );
}

export default IndexPage
