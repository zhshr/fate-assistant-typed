import * as React from 'react';
import ServantData from './ServantData';
// import { DragSource } from 'react-dnd';
// import {ItemTypes} from './DnDConstants';

interface ChessProps {
    data: ServantData;
    isHighlighted: boolean;
    toggleHighlight: () => void;
}

// const servantSource = {
//   beginDrag(props:any) {
//     return {};
//   }
// }

// function collect(
//   connect: __ReactDnd.DragSourceConnector, 
//   monitor: __ReactDnd.DragSourceMonitor) {
//     return {
//       connectDragSource: connect.dragSource,
//       isDragging: monitor.isDragging(),
//     }
// }

// @DragSource(ItemTypes.SERVANT, servantSource, collect)
class Chess extends React.Component<ChessProps, {}> {
  getStyle(isHighlighted: boolean): React.CSSProperties {
    return {
      backgroundColor: isHighlighted?"red":"",
      width: "auto",
      textAlign: "middle"
    };
  }
  public render() {
    let style: React.CSSProperties = {
      width: "40px",
      height: "40px",
    };
    return (
      <div style={this.getStyle(this.props.isHighlighted)}>
        <img 
          src={this.props.data.image} 
          style={style} 
          onClick={this.props.toggleHighlight}
        />
      </div>
    );
  }
}

export default Chess;