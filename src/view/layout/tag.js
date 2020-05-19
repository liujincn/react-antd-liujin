import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import menus from '@/router/menus';
import { addTag, closeTag, closeAllTag, closeLeftTag } from '@/redux/actions/tag';
import {
  CloseOutlined,
} from '@ant-design/icons';

class Tag extends Component {
  state = {
    visible: false,
    left: 0,
    top: 0,
    position: 0

  }


  onContextMenu = (e, index, item) => {
    e.preventDefault();
    this.setState({ position: index })
    if (index === 0) {
      return false
    }

    this.setState({ visible: true, left: e.clientX - 200, top: e.clientY })

  }

  closeAllTag () {
    this.setState({ visible: false })
    this.props.closeAllTag([])
    this.props.history.replace('/');
  }
  closeLeftTag () {
    this.props.tagList.splice(1, this.state.position - 1)
    this.setState({ visible: false })
  }
  closeRightTag () {
    this.props.tagList.splice(this.state.position + 1)
    this.setState({ visible: false })
    this.props.history.replace(this.props.tagList[this.state.position].path);
  }

  closeTag (path) {
    /* eslint-disable */
    const { tagList } = this.props;
    const newTag = tagList.filter((item) => {
      if (item.path !== path) {
        return item
      }
    })
    this.props.closeTag(newTag)
    if (path === newTag[newTag.length - 1].path) {
      this.props.history.replace(newTag[newTag.length - 2].path);
    } else {
      this.props.history.replace(newTag[newTag.length - 1].path);
    }
  }
  //  根据路由增加
  searchPath = (menus, pathname) => {
    const res = []
    const flatData = (menus) => {
      menus.forEach(item => {
        res.push(item)
        /* eslint-disable */
        item.children && item.children.length > 0 ? flatData(item.children) : ''
      })
    }
    flatData(menus)
    res.forEach(item => {
      if (item.path == pathname) {
        this.props.addTag({ title: item.title, path: item.path })
      }
    })
  }

  componentDidMount () {
    const pathname = this.props.location.pathname
    this.searchPath(menus, pathname)
  }

  render () {
    const { tagList, location } = this.props;
    const { visible, left, top, position } = this.state;

    return (
      <div>
        <div className="tag">
          <ul>
            {tagList.map((item, index) =>
              <li key={item.path} className={location.pathname === item.path ? 'is-active' : ''} onContextMenu={e => this.onContextMenu(e, index, item)}>

                <Link to={item.path}>{item.title}</Link>{index > 0 &&
                  <CloseOutlined onClick={() => this.closeTag(item.path)} style={{ fontSize: 12 }} />}
              </li>
            )
            }
          </ul>
        </div>
        {visible ?
          <ul className="menuBox" style={{ left, top }}>
            <li onClick={() => this.closeAllTag()}>关闭所有</li>
            <li onClick={() => this.closeLeftTag()}>关闭左边</li>
            <li onClick={() => this.closeRightTag()}>关闭右边</li>
          </ul> : null}
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addTag: data => {
    dispatch(addTag(data));
  },
  closeTag: data => {
    dispatch(closeTag(data));
  },
  closeAllTag: data => {
    dispatch(closeAllTag(data));
  },
  closeLeftTag: data => {
    dispatch(closeLeftTag(data));
  },
  closeRightTag: data => {
    dispatch(closeRightTag(data));
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Tag));
