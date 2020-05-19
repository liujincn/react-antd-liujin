import React from 'react';
import { Layout } from 'antd';
import MainContent from './content'
import SiderMenu from './sider'
import TopHeader from './header'
import FooterBtm from './footer'
import './style.css'
class Index extends React.Component {




  UNSAFE_componentWillMount () {
    console.log('进来了')
  }

  render () {
    return (
      <div className="layout">
        <Layout style={{ minHeight: '100vh' }}>
          <SiderMenu></SiderMenu>
          <Layout>
            <TopHeader></TopHeader>
            <MainContent></MainContent>
            <FooterBtm></FooterBtm>
          </Layout>
        </Layout>
      </div>


    );
  }
}

export default Index
