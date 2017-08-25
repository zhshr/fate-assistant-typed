import * as React from 'react';
import { Paper } from 'material-ui';
import { GridList, GridTile } from 'material-ui/GridList';

export default class RenderHelper {
    static defaultGridWrapper(elements: Array<JSX.Element>) {
        return RenderHelper.gridWrapper(50, 50, 32, 20, elements);
    }

    static gridWrapper(
        cellWidth: number, cellHeight: number,
        columnCount: number, rowCount: number, elements: Array<JSX.Element>) {
        return (
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}
            >
                <GridList
                    cols={columnCount}
                    cellHeight={cellHeight}
                    padding={0}
                    style={{
                        width: cellWidth * columnCount + 'px',
                        height: cellHeight * rowCount + 'px',
                        overflowY: 'visible'
                    }}
                >
                    {elements}
                </GridList>
            </div>
        );
    }

    static gridTileWrapper(
        colCount: number, rowCount: number, 
        zDepth: number, elements: Array<JSX.Element>) {
        return (
            <GridTile 
                key={'abbab'}
                cols={colCount} 
                rows={rowCount} 
                style={{height: 'unset', padding: '5px', overflow: 'visible' }}
            >
                {elements}
                <Paper zDepth={zDepth} />
            </GridTile>
        );
    }
}