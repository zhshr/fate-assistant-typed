import * as React from 'react';
import EireiBar from './EireiBar';
import EireiCard from './EireiCard/EireiCard';
import "./EireiFrame.css";
import * as EireiData from './EireiData/EireiData';

class EireiFrame extends React.Component {


  getTestEireiData(): EireiData.baseData {
    var result: EireiData.baseData;
    result = new EireiData.baseData();
    result.name = "test";
    result.attributes = [];
    result.attributes["力量"] = "E";
    result.attributes["敏捷"] = "A";

    result.skills = [];
    result.addSkill("StarburstStream", 24);
    return result;
  }

  render() {
    return (
      <div id="EireiFrame">
        <EireiBar />
        <EireiCard
          name="test"
          data={this.getTestEireiData()}
        />
      </div>
    );
  }
}

export default EireiFrame;
