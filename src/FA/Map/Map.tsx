import * as React from 'react';
import './Map.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import MapSection from './MapSection';
import ServantData from './ServantData';

const CampusMap = require('./CampusMap.png');

/*************DND Start */

/*************DND Stop */
interface MapProps {}

interface MapState {
  coord: Coordinates;
  mouseX: number;
  mouseY: number;
  Servants: Array<ServantData>;
  ServantLocations: Array<number>;
  highlighted: number;
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
      Servants:[], 
      ServantLocations:[],
      highlighted: -1,
    };
    this.initialServants = this.initialServants.bind(this);
    this.pushChess = this.pushChess.bind(this);
    this.setHighlight = this.setHighlight.bind(this);
    this.onClick = this.onClick.bind(this);
    this.initialServants();    
  }

  setHighlight(i: number) {
    this.setState(
      {highlighted: this.state.highlighted == i? -1 : i}
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
    result.addPoint(170, 285);

    result.addPoint(90, 190);
    result.addPoint(80, 65);
    result.addPoint(150, 130);

    result.addPoint(265, 45);
    result.addPoint(365, 150);

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
    let defaultLocation=15;
    this.pushChess(new ServantData("Test", "Saber"), defaultLocation);
    this.pushChess(new ServantData("Test", "Archer"), defaultLocation);
    this.pushChess(new ServantData("Test", "Lancer"), defaultLocation);
    this.pushChess(new ServantData("Test", "Rider"), defaultLocation);
    this.pushChess(new ServantData("Test", "Berserker"), defaultLocation);
    this.pushChess(new ServantData("Test", "Assassin"), defaultLocation);
    this.pushChess(new ServantData("Test", "Caster"), defaultLocation);
    this.pushChess(new ServantData("Test", "Avenger"), defaultLocation);
  }

  pushChess(servant: ServantData, location: number) {
    this.state.Servants.push(servant);
    this.state.ServantLocations.push(location);
  }

  onClick(i: number) {
    if (this.state.highlighted != -1) {
      let newLocations = this.state.ServantLocations;
      newLocations[this.state.highlighted] = i + 1;
      console.log(this.state.ServantLocations);
      console.log(newLocations);
      this.setState(
        {
          highlighted: -1,
          ServantLocations: newLocations
        }
      );
    }
  }

  getStyle(): React.CSSProperties {
    return {
      width: mapScaleFactor * 100 + "%",
      height: mapScaleFactor * 100 + "%",
    };
  }

  public render() {
    let mapSections = [];
    for (let point_id in this.state.coord.points) {
      let chessAtHere: Array<ServantData> = [];
      for (let servant_id in this.state.ServantLocations) {        
        if (this.state.ServantLocations[servant_id] - 1 == (Number)(point_id)) {          
          chessAtHere[servant_id]=this.state.Servants[servant_id];
        }
      }

      let point = this.state.coord.points[point_id];
      mapSections.push(
        <MapSection 
          x={point.x - 20} 
          y={point.y - 15} 
          chess={chessAtHere} 
          area_id={Number(point_id)+1}
          highlighted={this.state.highlighted}
          toggleHighlight={this.setHighlight}
          onClick={()=>this.onClick((Number)(point_id))}
        />
      );
    }

    return (
      <div id="Map" onMouseMove={this._onMouseMove}> 
        <img src={CampusMap} className="MapBackground"/>
        {mapSections}
        <br/>
        <span>{this.state.mouseX} , {this.state.mouseY}</span>
        {/* <Chess 
          name="test" 
          image={ClassIconProvider.get("Archer","")}
          /> */}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Map);