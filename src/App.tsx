import * as React from 'react';
import './App.css';
import MainFrame from './FA/MainFrame';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import TitleDialog from './FA/Title/TitleDialog';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
// import FontIcon from 'material-ui/FontIcon';
import { ToolbarGroup } from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconButton from 'material-ui/IconButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green50 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  fontFamily: '微软雅黑',
});

export interface AppState {
  drawerOpened: boolean;
  masterKey?: string;
}

export class App extends React.Component<{}, AppState> {

  constructor() {
    super();
    this.state = {
      drawerOpened: false,
    };

    this.titleComponent = this.titleComponent.bind(this);
    this.masterComponent = this.masterComponent.bind(this);
    this.slaveComponent = this.slaveComponent.bind(this);

    this.onChange = this.onChange.bind(this);
  }

  onChange(test: AppState) {
    this.setState(test);
  }

  titleComponent() {
    return (
      <TitleDialog onChange={this.onChange}/>
    );
  }

  masterComponent() {
    if (this.state.masterKey) {
      return (
        <MainFrame onChange={this.onChange} master={true} masterKey={this.state.masterKey}/>
      );
    } else {
      return (
        <Redirect to="/" />
      );
    }
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
    let buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white'
    };
    return (
      <div>
        <FlatButton label="Button1" style={buttonStyle}/>
        <FlatButton label="Button2" style={buttonStyle}/>
      </div>
    );
  }

  appBarRight2() {
    return (
      <FlatButton label="Button1"/>
    );
  }
  appBarLeft() {
    return (
      <IconButton iconClassName="material-menu" />
    );
  }
  appBarTitle() {
    return (
        <ToolbarGroup firstChild={true}>
          <DropDownMenu >
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu>
        </ToolbarGroup>
        
    );
  }
  render() {
    let containerStyle = {height: '100vh', width: '100vw', backgroundColor: green50};
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div style={containerStyle}>
            <AppBar
              title={this.appBarTitle()}
              onLeftIconButtonTouchTap={() => this.setState({ drawerOpened: !this.state.drawerOpened })}
              iconElementRight={this.appBarRight2()}
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
