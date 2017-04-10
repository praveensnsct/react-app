import React, {Component} from 'react';
import Grid from './components/grid/grid';
import GridData from './components/grid/gridData'
import Config from './config/fieldsConfig'
import './App.css';

const REQ_FIELDS = ['fileKey', 'receivedTime', 'processedFileName', 'originalFileName', 'processedTime', 'importStatus'];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Creating a Grid Component Using React
        </p>
        <Grid data={GridData.gridData} config={Config.fieldsConfig} requiredFields={REQ_FIELDS}/>
      </div>
    );
  }
}
