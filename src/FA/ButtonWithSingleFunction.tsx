import * as React from 'react';

class ButtonWithSingleFunction extends React.Component {
  props : {
    name: string;
    value: string,
    onClick: (value: string) => void;
  }

  constructor(props: any) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    this.props.onClick(this.props.value + 1);
  }

  render() {
    return (<input type="Button" value={this.props.name} onClick={this.click}/>);
  }

}

export default ButtonWithSingleFunction;
