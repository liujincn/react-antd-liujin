import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import menus from '@/router/menus';
import { addTag } from '@/redux/actions/tag';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';


class BreadCrumb extends Component {
  handClickTag (route) {
    if (!route.children) {
      this.props.addTag({ path: route.path, title: route.title })
    }
  }

  createBreadCrumbData = (menus, pathname) => {
    let isGet = false;
    const result = [{
      title: '首页',
      path: '/home',
    }];
    const deepSearch = (menus, pathname) => {
      for (let item of menus) {
        if (pathname === item.path || isGet) {
          isGet || (result.push({ title: item.title, path: item.path }));
          isGet = true;
          break;
        }
        if (item.children && item.children.length > 0) {
          for (let el of item.children) {
            if (el.path === pathname) {
              result.push(item)
            }
          }
          deepSearch(item.children, pathname);
        }
      }
    }
    deepSearch(menus, pathname);
    return result;
  }

  render () {
    const pathname = this.props.location.pathname
    const routes = this.createBreadCrumbData(menus, pathname);
    if (!routes.length) return null;
    const itemRender = (route, params, routes, paths) => {
      if (routes[routes.length - 1].path === '/home') {
        routes.splice(routes.length - 1, 1)
      }
      const last = routes.indexOf(route) === routes.length - 1;
      return last ? <span>{route.title}</span> :
        <Link to={route.path} onClick={() => this.handClickTag(route)}>{route.title}</Link>;
    };
    return (
      <Breadcrumb routes={routes} itemRender={itemRender} />
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addTag: data => {
    dispatch(addTag(data));
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BreadCrumb))
