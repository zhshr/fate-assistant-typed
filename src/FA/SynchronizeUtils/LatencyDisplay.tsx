import * as React from 'react';
import './LatencyDisplay.css';
import SynchronizeUtils from './SynchronizeUtils';

interface LatencyDisplayProps {}

interface LatencyDisplayState {
    latency: number;
}

class LatencyDisplay extends React.Component<LatencyDisplayProps, LatencyDisplayState> {
    constructor() {
        super();
        this.state = {latency: 0};
        this.testLatency = this.testLatency.bind(this);
        this.testLatency();
    }

    testLatency() {
        let tick = Date.now();
        SynchronizeUtils.heartbeat(
            () => {
                let tock = Date.now();
                this.setState({
                    latency: (tock - tick),
                });
                setTimeout(this.testLatency, 2000);
            }
        );
        // SynchronizeUtils.receive(
        //     '/heartbeat',
        //     (response) => {
        //         let tock = Date.now();
        //         this.setState({
        //             latency: (tock - tick),
        //         });
        //         setTimeout(this.testLatency, 2000);
        //     },
        //     (error) => {
        //         setTimeout(this.testLatency, 2000);
        //     });
    }

    padNumber(value: number, length: number): string {
        let ns = value.toString();
        for (let i = ns.length; i < length; i++) {
            ns = '\xa0' + ns;
        }
        return ns;
    }

    dotStyle(): React.CSSProperties {
        let greenThreshold = 200;
        let redThreshold = 1000;
        let red = 0;
        let green = 0;
        if (this.state.latency >= redThreshold) {
            red = 255;
        } else if (this.state.latency <= greenThreshold) {
            green = 255;
        } else {
            red = 255 * (this.state.latency - greenThreshold) / (redThreshold - greenThreshold);
            green = 255 * (redThreshold - this.state.latency) / (redThreshold - greenThreshold);
        }
        return {
            color: 'rgb(' + red + ',' + green + ',0)'
        };
    }
    render() {
        return (
            <span id="LatencyDisplay">
                Latency: {'\xa0'}
                <span>{this.padNumber(this.state.latency, 6)}ms </span>
                <span className="dot" style={this.dotStyle()}>{'\u2B24'}</span>
            </span>
        );
    }
}

export default LatencyDisplay;