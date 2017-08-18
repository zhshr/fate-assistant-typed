import * as React from 'react';
import './MainFrame.css';
import EireiFrame from './Eirei/EireiFrame';
import * as EireiData from './Eirei/EireiData/EireiData';
import Map from './Map/Map';
import LatencyDisplay from './SynchronizeUtils/LatencyDisplay';

class MainFrame extends React.Component {

  state: {
    testEirei: EireiData.BaseData;
  };

  props: {
    value: string;
    onChange: (value: string) => void;
    master: boolean;
  };

  render() {
    return (
      <div id="MainFrame">
        {this.props.master ? 'Master App' : 'Slave App'}
        <EireiFrame />
        <Map master={this.props.master}/>
        <LatencyDisplay />
      </div>
    );
  }
}

export default MainFrame;
