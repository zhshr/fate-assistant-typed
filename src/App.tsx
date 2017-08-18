import * as React from 'react';
import './App.css';
import MainFrame from './FA/MainFrame';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component<{}, {}> {
  state: {
    value: string;
  };

  constructor() {
    super();
    this.state = {value: '0'};
    this.masterComponent = this.masterComponent.bind(this);
    this.slaveComponent = this.slaveComponent.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue: string) {
    this.state.value = newValue;
  }

  masterComponent() {
    return (
      <MainFrame value={this.state.value} onChange={this.onChange} master={true}/>
    );
  }
  
  slaveComponent() {
    return (
      <MainFrame value={this.state.value} onChange={this.onChange} master={false}/>
    );
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={this.slaveComponent}/>
          <Route path="/master" component={this.masterComponent}/>
        </div>
      </Router>
    );
  }
}

export default App; 
