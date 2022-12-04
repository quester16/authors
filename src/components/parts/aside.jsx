import React, { Component } from 'react';

import './parts.css'


class Aside extends Component {
  state = {}
  render() {
    return (
      <aside>
        <div className="logo">
        </div>
        <div className="child child-1">?</div>
        <div className="child child-2">?</div>
        <div className="child child-3">?</div>
        <div className="child child-1">?</div>
        <div className="child child-2">?</div>
        <div className="child child-3">?</div>
      </aside>
    );
  }
}

export default Aside;