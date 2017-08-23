import * as React from 'react';
import './App.css';
import MainFrame from './FA/MainFrame';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TitleDialog from './Title/TitleDialog';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import GridList from 'material-ui/GridList';
// import FontIcon from 'material-ui/FontIcon';

//import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

interface AppState {
  drawerOpened: boolean;
}
class App extends React.Component<{}, AppState> {

  constructor() {
    super();
    this.state = {
      drawerOpened: false,
    };

    this.masterComponent = this.masterComponent.bind(this);
    this.slaveComponent = this.slaveComponent.bind(this);
  }

  onChange() {
    //
  }

  titleComponent() {
    return (
      <TitleDialog />
    );
  }

  // tslint:disable-next-line:member-ordering
  static gridWrapper(elements: Array<JSX.Element>) {
    return (
      <GridList
        cols={10}
        cellHeight={100}
        padding={0}
        style={{ width: '1000px', height: '600px' }}
      >
        {elements}
      </GridList>
    );
  }

  masterComponent() {
    return (
      <MainFrame onChange={this.onChange} master={true} />
    );
  }

  // slaveComponent() {
  //   return (
  //     <MainFrame onChange={this.onChange} master={false} />
  //   );
  // }
  slaveComponent() {
    return (
      <div />
    );
  }
  appBarRight() {
    return (
      <div>
        <FlatButton label="Button1" />
        <FlatButton label="Button2" />
      </div>
    );
  }
  appBarLeft() {
    return (
      <IconButton iconClassName="material-menu" />
    );
  }
  render() {
    return (

      <MuiThemeProvider>
        <Router>
          <div>
            <AppBar
              title="Title"
              onLeftIconButtonTouchTap={() => this.setState({ drawerOpened: !this.state.drawerOpened })}
              iconElementRight={this.appBarRight()}
            />
            <Drawer
              docked={false}
              open={this.state.drawerOpened}
              onRequestChange={(open) => this.setState({ drawerOpened: open })}
            >
              abcdefg
            </Drawer>
            <Route exact={true} path="/" component={this.titleComponent} />
            <Route path="/master" component={this.masterComponent} />
            <Route path="/slave" component={this.slaveComponent} />
          </div>

        </Router>
      </MuiThemeProvider> 
    );
  }
}

export default App; 
