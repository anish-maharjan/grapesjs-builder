import React, {Fragment, Component} from 'react';
import grapejs from 'grapesjs';
import gjsTable from "grapesjs-table";
import "grapesjs-blocks-basic";
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs/dist/grapes.min.js';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js';
import 'grapesjs-table/dist/grapesjs-table.min.js';

class App extends Component {
  componentDidMount() {
   
    const editor = grapejs.init({
      container : '#gjs',
      fromElement: true,
      storageManager:  {
        type: 'indexeddb',
      },
      plugins: ['gjs-preset-webpage',"gjs-blocks-basic", gjsTable],
      pluginsOpts: { 'grapesjs-blocks-table' : { 'containerId' : '#gjs' } },
    })
  }

  render(){
    return (
      <Fragment>
        <div id="gjs"></div>
      </Fragment>
    )
  }
}

export default App;