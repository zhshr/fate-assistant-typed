import * as React from 'react';
import "./MainFrame.css";
import ButtonWithSingleFunction from "./ButtonWithSingleFunction";
import EireiFrame from './Eirei/EireiFrame';
import * as EireiData from './Eirei/EireiData/EireiData';

class MainFrame extends React.Component {

  state: {
    testEirei: EireiData.baseData;
  }

  props: {
    value: string;
    onChange: (value: string) => void;
  }

  render() {
    return (
      <div id="MainFrame">
        {this.props.value}
        <ButtonWithSingleFunction
          name="test"
          value={this.props.value}
          onClick={this.props.onChange}/>
        <EireiFrame />
      </div>
    );
  }
}

export default MainFrame;
