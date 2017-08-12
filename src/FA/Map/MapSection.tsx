import * as React from 'react';
import ServantData from './ServantData';
import Chess from './Chess';
import './MapSection.css';

interface MapSectionProps {
    area_id: number;
    x: number;
    y: number;
    chess: Array<ServantData>;
    highlighted: number;
    toggleHighlight: (i: number) => void;
    onClick: () => void;
}

interface MapSectionState {}

class MapSection extends React.Component<MapSectionProps, MapSectionState> {
    getStyle(x: number, y: number): React.CSSProperties {
        return {
            left: x,    // computed based on child and parent's height
            top: y   // computed based on child and parent's width
            };
    }
    public render() {
        let servants = [];
        for (let servant_id in this.props.chess) {                      
            servants.push(
                <Chess 
                    data={this.props.chess[servant_id]} 
                    isHighlighted={(Number)(servant_id) == this.props.highlighted ? true : false}
                    toggleHighlight= {
                        ()=>this.props.toggleHighlight((Number)(servant_id))
                    }
                />
            );
        }
        let divElement  = (
            <div 
                style={this.getStyle(this.props.x, this.props.y)} 
                className="MapSection"
                onClick={this.props.onClick}
            >
                #{this.props.area_id}
                <div className="ServantContainer">
                    {servants}
                </div>
            </div>
            );
        return divElement;
    }
}

export default MapSection;