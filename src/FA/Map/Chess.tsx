import * as React from 'react';

interface ChessProps {
    name: string;
    image: Element;
}

class Chess extends React.Component<ChessProps, {}> {
  public render() {
    return (
      <span>Body</span>
    );
  }
}

export default Chess;