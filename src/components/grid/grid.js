/**
 * Created by pthirumurugan on 4/10/17.
 */

import React, {Component} from 'react';
import {GridBody, GridHeader} from './gridCompo';
import './grid.css';

export default class Grid extends Component {
  render() {
    return (
      <div className="tableWrapper">
        <GridHeader requiredFields={this.props.requiredFields} config={this.props.config}/>
        <GridBody requiredFields={this.props.requiredFields} config={this.props.config} data={this.props.data}/>
      </div>
    );
  }
}
