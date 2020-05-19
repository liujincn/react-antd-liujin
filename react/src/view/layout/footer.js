import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';

const { Footer } = Layout;


class FooterBtm extends Component {



  render () {
    const isCollapsed = this.props.collapse.isCollapsed;
    return (
      <Footer>isCollapsed:{isCollapsed === true ? 'true' : 'false'}</Footer>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(FooterBtm);
