import * as React from 'react';
import "./EireiTab.css";

class EireiTab extends React.Component {
  props: {
    id: number
  }
  render() {
    return (
      <div className="EireiTab">英灵#{this.props.id}</div>
    );
  }

}

export default EireiTab;
