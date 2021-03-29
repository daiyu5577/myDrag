import React, { useEffect, useState, FC } from "react"
import CommonHeader from "@/pages/components/layout/commonHeader"
import * as style from "./index.less"
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


interface LayoutPageProps {
}

const LayoutCommon: FC<LayoutPageProps> = (props) => {

  return (
    <Layout className={style.commonLayout}>
      <Header>
        <CommonHeader />
      </Header>

      <Content>
        <div className="layout-content">{props.children}</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Created by D_Y、</Footer>

    </Layout>
  );
}

export default LayoutCommon
