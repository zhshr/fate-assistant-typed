import * as React from 'react';
import "./AttributeCard.css";

class AttributeCard extends React.Component {
  props: {
    name: string;
    value: string;
  }

  render() {
    return (
      <div className="AttributeCard">{this.props.name} = {this.props.value}</div>
    );
  }
}

export default AttributeCard;
