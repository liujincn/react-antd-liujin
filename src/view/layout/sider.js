import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import menus from '@/router/menus';
import SvgIcon from '@/component/icons';
import { addTag } from '@/redux/actions/tag';

import { connect } from 'react-redux';
const { Sider } = Layout;
const { SubMenu } = Menu;




class SiderMenu extends Component {

  handClickTag (item) {
    const { path, title } = item;
    this.props.addTag({ path, title })
  }

  // 递归渲染菜单
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                {item.icon ? <SvgIcon iconName={item.icon} /> : ''}
                <span>{item.title}</span>
              </span>
            }
          >
            {this.renderMenu(item.children)}
          </SubMenu>

        );
      }
      return (
        <Menu.Item key={item.path}>
          <Link to={item.path} onClick={() => this.handClickTag(item)}>
            {item.icon ? <SvgIcon iconName={item.icon} /> : ''}
            <span>{item.title}</span>
          </Link>
        </Menu.Item>

      );
    });
  };
  render () {
    const isCollapsed = this.props.collapse.isCollapsed;
    const menuSelected = this.props.history.location.pathname;
    const menuOpened = `/${menuSelected.split('/')[1]}`;
    return (
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className="logo"></div>
        <Menu mode="inline" theme="dark" defaultOpenKeys={[menuOpened]}
          defaultSelectedKeys={[menuSelected]} selectedKeys={[menuSelected]}>
          {this.renderMenu(menus)}
        </Menu>
      </Sider>
    );
  }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    addTag: data => {
      dispatch(addTag(data));
    }


  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SiderMenu))
