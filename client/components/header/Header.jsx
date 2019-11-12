import React from 'react';
import threeEntryPoint from './threejs/threeEntryPoint';

class Header extends React.Component {

  componentDidMount() {
    threeEntryPoint(this.threeRootElement)
  }

  render () {
    return (
      <div className="header-header" ref={ element => this.threeRootElement = element }></div>
    )
  }

}

export default Header;