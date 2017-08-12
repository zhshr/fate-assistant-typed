import * as React from 'react';
import Chess from './Chess';

interface MapSectionProps {
    x: number;
    y: number;
    chess: Array<Chess>;
}

interface MapSectionState {}

class MapSection extends React.Component<MapSectionProps, MapSectionState> {
    getStyle(x: number, y: number): React.CSSProperties {
        return {
            position: 'absolute',
            left: x,    // computed based on child and parent's height
            top: y   // computed based on child and parent's width
          };
    }
    public render() {
        let divElement  = (
            <div style={this.getStyle(this.props.x, this.props.y)} className="MapSection">
                abc
            </div>
            );
        return divElement;
    }
}

export default MapSection;