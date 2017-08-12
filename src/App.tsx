import * as React from 'react';
import './App.css';
import MainFrame from "./FA/MainFrame";


class App extends React.Component<{}, {}> {
  state: {
    value: string;
  }

  constructor() {
    super();
    this.state = {value: "0"};
  }

  onChange(newValue: string) {
    this.state.value = newValue;
  }

  render() {
    return (
      <MainFrame value={this.state.value} onChange={this.onChange.bind(this)}/>
    );
  }
}

export default App; 
