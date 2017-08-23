import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import './TitleDialog.css';
// import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';

import { GridTile } from 'material-ui/GridList';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import App from '../App';

interface TitleDialogProps { }
interface TitleDialogState {
    step: number;
}
class TitleDialog extends React.Component<TitleDialogProps, TitleDialogState> {

    constructor() {
        super();
        this.state = { step: 0 };
        // this.back = this.back.bind(this);
        // this.modalBody2 = this.modalBody2.bind(this);
    }
    onClick(value: number) {
        this.setState({ step: value });
    }

    // characterSelectionContent(step: number) {
    //     let className = 'modalBody';
    //     if (step !== 0) {
    //         className += ' myhide';
    //     }
    //     return (
    //         <Modal.Body className={className}>
    //             <ListGroup>
    //                 <LinkContainer to="/master">
    //                     <ListGroupItem>KP</ListGroupItem>
    //                 </LinkContainer>

    //                 <LinkContainer to="/slave">
    //                     <ListGroupItem>OB</ListGroupItem>
    //                 </LinkContainer>

    //                 <ListGroupItem href="http://vps.acgn.us:3000">Developer</ListGroupItem>

    //                 <ListGroupItem onClick={() => this.onClick(1)}>test</ListGroupItem>
    //             </ListGroup>
    //         </Modal.Body>
    //     );
    // }

    // detailForm(step: number) {
    //     let className = 'modalBody';
    //     if (step !== 1) {
    //         className += ' hide';
    //     }
    //     return (
    //         <Modal.Body className={className}>
    //             abc
    //         </Modal.Body>
    //     );
    // }
    // modalBody() {
    //     switch (this.state.step) {
    //         case 0:
    //             return this.characterSelectionContent();
    //         case 1:
    //             return this.detailForm();
    //     }
    //     return (
    //         <Modal.Body>
    //         </Modal.Body>
    //     );
    // }

    // modalBody2() {
    //     let modalBodys = [];
    //     modalBodys.push(this.characterSelectionContent(this.state.step));
    //     modalBodys.push(this.detailForm(this.state.step));
    //     return modalBodys;
    // }

    // back() {
    //     this.setState({step: this.state.step === 0 ? 0 : (this.state.step - 1)});
    // }
    // render() {
    //     return (
    //         <div className="width800">
    //             <Card>
    //                 <CardHeader
    //                     title="Without Avatar"
    //                     subtitle="Subtitle"
    //                     actAsExpander={true}
    //                     showExpandableButton={true}
    //                 />
    //                 <CardActions>
    //                     <FlatButton label="Action1" />
    //                     <FlatButton label="Action2" />
    //                 </CardActions>
    //                 <CardText expandable={true}>
    //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //             Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    //             Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    //             Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    //             </CardText>
    //             </Card>
    //         </div>
    //     );
    // }

    render() {
        return App.gridWrapper([
        (
            <GridTile cols={5} rows={2}>
                <Card>
                    <CardHeader
                        title="Without Avatar"
                        subtitle="Subtitle"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                    <CardText expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                </Card>
            </GridTile>)]
        );
    }

    // render3() {
    //     return (
    //         <div className="static-modal">
    //             <Modal.Dialog>
    //                 <Modal.Header>
    //                     <Modal.Title>选择你的角色</Modal.Title>
    //                 </Modal.Header>

    //                 {this.modalBody2()}

    //                 <Modal.Footer>
    //                     <Button onClick={this.back}>Back</Button>
    //                     <Button bsStyle="primary">Save changes</Button>
    //                 </Modal.Footer>

    //             </Modal.Dialog>
    //         </div>
    //     );
    // }
    // render2() {
    //     return (
    //         <Col xs={4} xsOffset={4}>
    //             <Link to="/master">
    //                 Master
    //             </Link>
    //             <Link to="/slave">
    //                 slave
    //             </Link>
    //             <Link to="/developer">
    //                 developer
    //             </Link>
    //         </Col>
    //     );
    // }
}

export default TitleDialog;