/**
 * Created by pthirumurugan on 4/10/17.
 */

import React, {Component} from 'react';
import {GridBody, GridHeader} from './gridCompo';
import './grid.css';

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
        // This binding is necessary to make `this` work in the callback
        this.sortData = this.sortData.bind(this);
    }

    sortData(key, order, type) {
        let data = this.state.data;
        if (type === 'int') {
            data.sort(function (a, b) {
                if (order === 'asc') {
                    return a[key] ? a[key] : 0 - b[key] ? b[key] : 0;
                } else {
                    return b[key] ? b[key] : 0 - a[key] ? a[key] : 0;
                }
            });
        } else if (type === 'string') {
            data.sort(function (a, b) {
                let x = a[key] ? a[key].toString().toLowerCase() : '';
                let y = b[key] ? b[key].toString().toLowerCase() : '';
                if (order === 'asc')
                    return x < y ? -1 : x > y ? 1 : 0;
                else
                    return x < y ? 1 : x > y ? -1 : 0;
            });
        }
        this.setState({
            data: data
        });
    }

    render() {
        return (
            <div className="tableWrapper">
                <GridHeader clickIt={this.sortData} requiredFields={this.props.requiredFields}
                            config={this.props.config}/>
                <GridBody requiredFields={this.props.requiredFields} config={this.props.config} data={this.props.data}/>
            </div>
        );
    }
}
