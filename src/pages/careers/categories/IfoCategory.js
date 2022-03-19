import React, { Component } from 'react';
import { categories } from '../../../utilities/datas';
import './IfoCategory.scss'

class IfoCategory extends Component {
  state = {
    data: categories
  }
  render() {
    const { subheader, header, description } = this.props
    return (
      <div className="category-executive">
        <span className='subheader'>{subheader}</span>
        <h3 className='mt-3'>{header}</h3>
        <p className='about mt-4'>{description}</p>
        <div className="apply-here">
          <button className="cta mt-4">
            <span className="hover-underline-animation"> APPLY HERE </span>
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default IfoCategory