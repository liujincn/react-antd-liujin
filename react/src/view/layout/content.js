import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { routes } from '@/router/routes';
const { Content } = Layout;

class MainContent extends React.Component {
  render () {
    return (
      <Content className="site-layout-background"
        style={{
          margin: '100px 16px 24px',
          padding: 24,
          minHeight: 680,
        }}>
        <Switch>
          {routes.map(ele => <Route render={() => <ele.component />} key={ele.path} path={ele.path} />)}
          <Redirect from="/" exact to="/home" />
          <Redirect from="/message" exact to="/message/records" />
          <Redirect from="/manage" exact to="/manage/mute" />
        </Switch>
      </Content>
    );
  }
}
export default MainContent
