import React, { Component } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setCollapse } from '@/redux/actions/setting';
import BreadCrumb from './breadCrumb'
import Tag from './tag'

class TopHeader extends Component {
  toggle = () => {
    this.props.setCollapse({ isCollapsed: !this.props.collapse.isCollapsed });
  };

  render () {
    return (
      <div className="top">
        <div className="header">
          {React.createElement(this.props.collapse.isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.toggle,
          })}
          <BreadCrumb />
        </div>
        <Tag />
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setCollapse: data => {
    dispatch(setCollapse(data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopHeader);
