import * as React from 'react';
import "./EireiCard.css";
import * as EireiData from "../EireiData/EireiData";
import AttributeCard from "./AttributeCard";
import SkillCard from "./SkillCard";

const avatarImage = require("../../images/avatar.jpg");

class EireiCard extends React.Component {
  props: {
    name: string;
    data: EireiData.baseData;
  }

  render() {
    let attribute: Array<JSX.Element> = [];
    for (let attr in this.props.data.attributes) {
      attribute.push(
        <AttributeCard name={attr} value={this.props.data.attributes[attr]} />
      );
    }
    let skills: Array<JSX.Element> = [];
    for (let skill_id in this.props.data.skills) {
      skills.push(
        <SkillCard
          skill={this.props.data.skills[skill_id]}
          onInvoke={this.props.data.skills[skill_id].invoke}/>
      );
    }
    return (
      <div id="EireiCard">
        <div id="avatar">
          <img src={avatarImage} id="avatar"/>
          <div id="EireiName">{this.props.name}</div>
        </div>
        <div id="Attributes">{attribute}</div>
        <div id="Skills">{skills}</div>
      </div>
    );
  }
}

export default EireiCard;
