import * as React from 'react';
import ServantData from './ServantData';

interface ServantChessHolderProps {
    ServantChess: ServantData;
}
interface ServantChessHolderState {}

class ServantChessHolder extends React.Component<ServantChessHolderProps, ServantChessHolderState> {
    public render() {
        return (
            <div />
        );
    }
}

export default ServantChessHolder;