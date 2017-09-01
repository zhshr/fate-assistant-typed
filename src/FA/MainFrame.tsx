import * as React from 'react';
import './MainFrame.css';
// import EireiFrame from './Eirei/EireiFrame';
import * as EireiData from './Eirei/EireiData/EireiData';
import Map from './Map/Map';
import LatencyDisplay from './SynchronizeUtils/LatencyDisplay';
import { AppState } from '../App';
import RenderHelper from './RenderHelper';
import { GridTile } from 'material-ui/GridList';
import { MapsMap }  from 'material-ui/svg-icons';

import { Paper } from 'material-ui/Paper';
import * as ReactGridLayout from 'react-grid-layout';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import { match } from 'react-router';

export interface MainFrameParams {
  masterKey: string;
}

export interface MainFrameProps {
  onChange: (value: AppState) => void;
  match?: match<MainFrameParams>;
  master: boolean;
}

interface MainFrameState {
  layout: ReactGridLayout.Layout[];
}

export class MainFrame extends React.Component<MainFrameProps, MainFrameState> {

  constructor() {
    super();
    this.state = {
      layout: [],
    };
    this.state.layout.push({i: 'a', x: 0, y: 0, w: 25, h: 20});
  }

  render() {
    let s = 'abc';
    if (this.props.match !== undefined) {
      console.log(this.props.match.params);
      s = this.props.match.params.masterKey;
    }
    let map = (
      <Card style={{margin: 'auto'}}>
        <CardHeader 
          title={<span><MapsMap />Interactive Map</span>} 
          titleStyle={{textAlign: 'center'}}
          
          actAsExpander={true}
        />
        <CardMedia expandable={true}>
          <Map master={true} />
        </CardMedia>
      </Card>
    );
    return (
      <ReactGridLayout 
        layout={this.state.layout}
        cols={30}
        rowHeight={30}
        width={900}
        style={{margin: 'auto', width: '90%'}}
      >
      <div className="gridTile" key="a">{map}</div>
      </ReactGridLayout>
    );
  }
  // render() {
    
  //   let components = [];
  //   components.push(
  //     RenderHelper.gridTileWrapper(
  //     12, 12, 5, [(<Map master={this.props.master} />)])
  //   );
  //   return RenderHelper.defaultGridWrapper(components);       
  // }
}
