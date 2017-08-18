import * as React from 'react';
import EireiTab from './EireiTab';
import './EireiBar.css';

class EireiBar extends React.Component {

  render() {
    var bar = [];
    for (var i = 0; i < 7; i++) {
      bar.push(<EireiTab id={i + 1} />);
    }
    return (
      <div id="EireiBar">
        {bar}
      </div>
    );
  }

}

export default EireiBar;
