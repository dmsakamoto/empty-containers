

'use strict';

// import fs from 'fs';
import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';

import Map from './components/Map.jsx';
import Controls from './components/Controls.jsx';

// import nodesFile from './lib/nodes.csv';

class EmptyContainerApp extends React.Component {

  constructor() {
    super();
    // this.parseCSV(NODES_PATH, (data) => { this.state.nodes = data; });
    // this.parseCSV(EDGES_PATH, (data) => { this.state.edges = data; });
  }

  parseCSV(fileName, callback) {
    fs.readFile(fileName, (err, data) => {
      if (err) console.err(err);
      let rawData = data.toString().split('\n');
      let items = [];
      let props = rawData[0].split(',');
      for (let i = 1; i < rawData.length - 1; i++) {
        let row = rawData[i].split(',');
        let item = {};
        for (let j = 0; j < row.length; j++) {
          item[props[j]] = row[j];
        }
        items.push(item);
      }
      callback(items);
    });
  }

  render() {
    return (
      <div>
        <Controls />
        <Map />
      </div>
    );
  }

}

ReactDOM.render(<EmptyContainerApp />, document.getElementById('root'));
