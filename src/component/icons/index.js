import React, { Component } from 'react';
import { ReactSVG } from 'react-svg'
import Svgs from '@/icons';
import './style.css';

class SvgIcon extends Component {
  render () {
    const iconName = Svgs[this.props.iconName]
    return (
      <ReactSVG className='svg-icon' src={iconName} />
    )
  }
}
export default SvgIcon;
