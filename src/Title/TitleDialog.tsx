import * as React from 'react';
import { Link }  from 'react-router-dom';
import { Col, Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class TitleDialog extends React.Component {
    render() {
        return (
            <div className="static-modal">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>选择你的角色</Modal.Title>
              </Modal.Header>
        
              <Modal.Body>
                <ListGroup>
                    <LinkContainer to="/master">
                        <ListGroupItem>KP</ListGroupItem>
                    </LinkContainer>

                    <LinkContainer to="/slave">
                        <ListGroupItem>OB</ListGroupItem>
                    </LinkContainer>

                    <ListGroupItem href="http://vps.acgn.us:3000">Developer</ListGroupItem>
                </ListGroup>
              </Modal.Body>
        
              <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
              </Modal.Footer>
        
            </Modal.Dialog>
          </div>
        );
    }
    render2() {
        return (
            <Col xs={4} xsOffset={4}>
                <Link to="/master">
                    Master
                </Link>
                <Link to="/slave">
                    slave
                </Link>
                <Link to="/developer">
                    developer
                </Link>
            </Col>
        );
    }
}

export default TitleDialog;