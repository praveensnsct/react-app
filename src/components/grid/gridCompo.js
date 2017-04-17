/**
 * Created by pthirumurugan on 4/10/17.
 */

import React, {Component} from 'react';

export class GridSearch extends Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}

export class GridHeader extends Component {
    render() {
        return (
            <div className="grid__header">
                <table>
                    <tbody>
                    <TableRows clickIt={this.props.clickIt} fields={this.props.requiredFields}
                               config={this.props.config}
                               type="header"
                               className="table__header_text"/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export class GridBody extends Component {
    render() {
        return (
            <div className="grid__body">
                <table>
                    <tbody>
                    {this.props.data.map((data, idx) => <TableRows key={idx} fields={this.props.requiredFields}
                                                                   config={this.props.config}
                                                                   data={data} type="body"
                                                                   className="table__data_text"/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRows extends Component {
    render() {
        if (this.props.type === 'header') {
            return (
                <tr>
                    {this.props.fields.map((field, idx) => <td
                        onClick={() => this.props.clickIt(field, 'asc', this.props.config[field].grid.type)} id={field}
                        className={this.props.className} key={idx}
                        style={{width: this.props.config[field].grid.width || 150}}>
                        {this.props.config[field].label}
                    </td>)}
                </tr>
            )
        } else if (this.props.type === 'body') {
            return (
                <tr>
                    {this.props.fields.map((field, idx) => <td className={this.props.className} key={idx}
                                                               style={{width: this.props.config[field].grid.width || 150}}>
                        {this.props.data[field]}
                    </td>)}
                </tr>
            )
        }
    }
}