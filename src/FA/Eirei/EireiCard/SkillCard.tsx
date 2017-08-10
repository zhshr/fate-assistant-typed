import * as React from 'react';
import "./SkillCard.css";
import * as EireiData from "../EireiData/EireiData";
import ButtonWithSingleFunction from "../../ButtonWithSingleFunction";

class SkillCard extends React.Component {
  props: {
    skill: EireiData.Skill;
    onInvoke: () => void;
  }

  render() {
    return (
      <div className="SkillCard">
        {this.props.skill.name}<br />
        CD:{this.props.skill.cooldown}hrs<br/>
        CD Left:{5 - this.props.skill.cooldown}<br />
        <ButtonWithSingleFunction name="发动"　value="0" onClick={this.props.onInvoke}/>
      </div>
    );
  }
}

export default SkillCard;
