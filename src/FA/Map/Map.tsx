import * as React from 'react';
import './Map.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import MapSection from './MapSection';
const CampusMap = require('./CampusMap.png');

interface MapProps {}

interface MapState {
  mouseX: number;
  mouseY: number;
}

interface Point {
  x: number;
  y: number;
}

class Coordinates {
  points: Array<Point>;

  constructor() {
    this.addPoint = this.addPoint.bind(this);
    this.points = [];
  }

  addPoint(mouseX: number, mouseY: number) {
    this.points.push({x: mouseX, y: mouseY});
  }
}

class Map extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
    this._onMouseMove = this._onMouseMove.bind(this);
    this.state = {mouseX: 0, mouseY: 0};
  }

  getDefaultMapCoordinates(): Coordinates {
    let result = new Coordinates;
    result.addPoint(320, 440);
    result.addPoint(190, 430);
    result.addPoint(255, 390);
    result.addPoint(400, 385);
    result.addPoint(300, 320);
    result.addPoint(385, 275);
    result.addPoint(295, 235);
    return result;
  }
  _onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    this.setState({
      mouseX: e.nativeEvent.offsetX,
      mouseY: e.nativeEvent.offsetY,
    });
  }

  public render() {
    let cord = this.getDefaultMapCoordinates();
    let mapSections = [];
    for (let point of cord.points) {
      mapSections.push(
        <MapSection x={point.x} y={point.y} chess={[]}/>
      );
    }
    return (
      <div id="Map" onMouseMove={this._onMouseMove}> 
        <img src={CampusMap} />
        {mapSections}
        <br/>
        <span>{this.state.mouseX} , {this.state.mouseY}</span>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Map);