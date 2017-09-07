import * as React from 'react';
import './App.css';
import { MainFrame, MainFrameParams } from './FA/MainFrame';
import { BrowserRouter as Router, Route, Redirect, match, Link, Switch } from 'react-router-dom';
import TitleDialog from './FA/Title/TitleDialog';
import AppBar from 'material-ui/AppBar';
// import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
// import FontIcon from 'material-ui/FontIcon';
import { ToolbarGroup } from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';

import { MuiThemeProvider } from 'material-ui-next/styles';
import { createMuiTheme } from 'material-ui-next/styles';
import { green } from 'material-ui-next/colors/';

import LegacyMuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Icon from 'material-ui-next/Icon';
import Button from 'material-ui-next/Button';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const muiTheme = createMuiTheme({
  fontFamily: '微软雅黑',
});

// const bg = green[50];

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

    this.notFound = this.notFound.bind(this);
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

  masterComponent(props?: match<MainFrameParams>) {
    console.log(props);
    if (this.state.masterKey) {
      return (
        <MainFrame onChange={this.onChange} master={true} match={props}/>
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

  notFound() {
    return <Redirect to="/"/>;
  }

  appBarRight() {
    let buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white'
    };
    return (
      <div>
        <Button style={buttonStyle}/>
        <Button  style={buttonStyle}/>
      </div>
    );
  }

  appBarRight2() {
    return (
      <Button />
    );
  }

  appBarLeft() {
    return (
      <IconButton>
        <Icon>Delete</Icon>
      </IconButton>
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
    let containerStyle = {height: '100vh', width: '100vw'};
    
    return (
      <LegacyMuiThemeProvider>
        <MuiThemeProvider theme={muiTheme}>
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
              <Switch>
                <Route exact={true} path="/" component={this.titleComponent} />
                  <Route 
                    path="/master/:masterKey" 
                    component={
                      (props) => 
                        <MainFrame onChange={this.onChange} master={true} {...props} />
                    }
                  />
                <Route path="/slave" component={this.slaveComponent} />
                <Route component={this.notFound}/>
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider> 
      </LegacyMuiThemeProvider>
    );
  }
}
export default App; 
