import * as React from 'react';
import './Map.css';
import MapSection from './MapSection';
import ServantData from './ServantData';
import RenderHelper from '../RenderHelper';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';

import { Paper } from 'material-ui';
import { GridList, GridTile } from 'material-ui/GridList';

import SynchronizeUtils from '../SynchronizeUtils/SynchronizeUtils';

const CampusMap = require('./CampusMapNew.jpg');

/*************DND Start */

/*************DND Stop */
interface MapProps {
  master: boolean;
}

interface MapState {
  coord: Coordinates;
  mouseX: number;
  mouseY: number;
  Servants: Array<ServantData>;
  ServantLocations: Array<number>;
  highlighted: number;
  expand: boolean;
}

interface Point {
  x: number;
  y: number;
}

const mapScaleFactor = 1.5;
class Coordinates {
  points: Array<Point>;

  constructor() {
    this.addPoint = this.addPoint.bind(this);
    this.points = [];
  }

  addPoint(mouseX: number, mouseY: number) {

    this.points.push({x: mouseX * mapScaleFactor, y: mouseY * mapScaleFactor});
  }
}

class Map extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
    this._onMouseMove = this._onMouseMove.bind(this);
    this.state = {
      coord: this.getDefaultMapCoordinates(),
      mouseX: 0, 
      mouseY: 0, 
      Servants: [], 
      ServantLocations: [],
      highlighted: -1,
      expand: true,
    };
    this.initialServants = this.initialServants.bind(this);
    this.pushChess = this.pushChess.bind(this);
    this.setHighlight = this.setHighlight.bind(this);
    this.onClick = this.onClick.bind(this);
    this.updateStateFromServer = this.updateStateFromServer.bind(this);
    this.initialServants(); 

    if (!this.props.master) {
      this.updateStateFromServer();
    } else {
      SynchronizeUtils.send(
        'mapStatus', 
        this.state.ServantLocations, () => {
          //
        },
        () => {
          //
        }
      );
    }
  }

  updateStateFromServer() {
    SynchronizeUtils.receive(
      'mapStatus', 
      (response) => {
        let data = JSON.parse(response.data);
        this.setState(
          {
            ServantLocations: data,
          }
        );
        setTimeout(this.updateStateFromServer, 3000);
      },
      () => {/**/}
    );
  }

  setHighlight(i: number) {
    this.setState(
      {highlighted: this.state.highlighted === i ? -1 : i}
    );
  }

  getDefaultMapCoordinates(): Coordinates {
    let result = new Coordinates;
    result.addPoint(320, 440);
    result.addPoint(190, 430);
    result.addPoint(255, 390);

    result.addPoint(400, 385);
    result.addPoint(300, 320);
    result.addPoint(385, 275);

    result.addPoint(295, 205);
    result.addPoint(220, 170);
    result.addPoint(140, 285);

    result.addPoint(90, 190);
    result.addPoint(80, 65);
    result.addPoint(150, 130);

    result.addPoint(265, 45);
    result.addPoint(365, 150);
    result.addPoint(220, 250);

    result.addPoint(34, 340);
    return result;
  }
  _onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    this.setState({
      mouseX: e.nativeEvent.offsetX,
      mouseY: e.nativeEvent.offsetY,
    });
  }

  initialServants() {
    let defaultLocation = 16;
    this.pushChess(new ServantData('Test', 'Saber'), defaultLocation);
    this.pushChess(new ServantData('Test', 'Archer'), defaultLocation);
    this.pushChess(new ServantData('Test', 'Lancer'), defaultLocation);
    this.pushChess(new ServantData('Test', 'Rider'), defaultLocation);
    this.pushChess(new ServantData('Test', 'Berserker'), defaultLocation);
    this.pushChess(new ServantData('Test', 'Assassin'), defaultLocation);
    this.pushChess(new ServantData('Test', 'Caster'), defaultLocation);
    this.pushChess(new ServantData('Test', 'Ruler'), defaultLocation);
  }

  pushChess(servant: ServantData, location: number) {
    this.state.Servants.push(servant);
    this.state.ServantLocations.push(location);
  }

  onClick(i: number) {
    if (this.state.highlighted !== -1) {
      let newLocations = this.state.ServantLocations;
      newLocations[this.state.highlighted] = i + 1;
      this.setState(
        {
          highlighted: -1,
          ServantLocations: newLocations
        }
      );
      if (this.props.master) {
        SynchronizeUtils.send(
          'mapStatus',
          this.state.ServantLocations, () => {
            //
          },
          () => {
            //
          }
        );
      }
    }
  }

  getStyle(): React.CSSProperties {
    return {
      // width: mapScaleFactor * 500 + 'px',
      // height: mapScaleFactor * 500 + 'px',
    };
  }

  public render() {
    let mapSections = [];
    // tslint:disable-next-line:forin
    for (let pointId in this.state.coord.points) {
      let chessAtHere: Array<ServantData> = [];
      for (let servantId in this.state.ServantLocations) {        
        if (this.state.ServantLocations[servantId] - 1 === (Number)(pointId)) {          
          chessAtHere[servantId] = this.state.Servants[servantId];
        }
      }

      let point = this.state.coord.points[pointId];
      mapSections.push(
        <MapSection 
          x={point.x - 20} 
          y={point.y - 15} 
          chess={chessAtHere} 
          area_id={Number(pointId) + 1}
          highlighted={this.state.highlighted}
          toggleHighlight={this.setHighlight}
          onClick={() => this.onClick((Number)(pointId))}
        />
      );
    }
    let test = (
      <div id="Map">
        <img src={CampusMap} className="MapBackground" style={this.getStyle()} />
        {mapSections}
      </div>
    );

    return test;
  }
}

export default Map;