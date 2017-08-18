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
        SynchronizeUtils.receive(
            '/heartbeat',
            (response) => {
                let tock = Date.now();
                this.setState({
                    latency: (tock - tick),
                });
                setTimeout(this.testLatency, 2000);
            },
            (error) => {
                setTimeout(this.testLatency, 2000);
            });
    }

    render() {
        return (
            <div id="LatencyDisplay">
                <div id="LatencyBox"/>
                {this.state.latency}ms
            </div>
        );
    }
}

export default LatencyDisplay;