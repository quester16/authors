import React, { Component } from 'react';
import './parts.css'

class AuthorBg extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { author } = this.props
    return (
      <>
        <div className="author">
          <img src={author.right} alt="" />
        </div>
        <div className="author-left">
          <img src={author.left} alt="" />
        </div>
      </>
    );
  }
}

export default AuthorBg;