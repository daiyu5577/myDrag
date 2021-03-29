import React, { useEffect, useState, FC } from "react"
import { History } from 'umi';
import Layout from "@/pages/components/layout/Layout"

interface IndexPageProps {
  history: History;
}


const IndexPage: FC<IndexPageProps> = (props) => {
  const { history } = props

  const toLogin = function () {
    history.push('/login')
  }

  return (
    <Layout></Layout>
  );
}

export default IndexPage
