import * as React from 'react';
// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './TitleDialog.css';
import RenderHelper from '../RenderHelper';
import Snackbar from 'material-ui/Snackbar';

import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
// import FlatButton from 'material-ui/FlatButton';

import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';

import { AppState } from '../../App';
import { List, ListItem, Divider, RaisedButton, FlatButton } from 'material-ui';
import { ActionRecordVoiceOver, HardwareComputer, HardwareHeadset, HardwareMemory } from 'material-ui/svg-icons';

enum Character {
    KP = 1,
    Master = 2,
    Observer = 3,
    Developer = 4,
}

interface TitleDialogProps {
    message?: string;
    onChange: (value: Partial<AppState>) => void;
}
interface TitleDialogState {
    step: number;
    isOpened?: boolean;
    loading?: boolean;
    role?: Character;
}
class TitleDialog extends React.Component<TitleDialogProps, TitleDialogState> {

    constructor() {
        super();
        this.state = { step: 0, isOpened: false };
        this.getExpansion = this.getExpansion.bind(this);
        this.getAdditional = this.getAdditional.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);

        this.getThirdPageBasedOnCharacter = this.getThirdPageBasedOnCharacter.bind(this);

        this.dummyAsync = this.dummyAsync.bind(this);
        // this.back = this.back.bind(this);
        // this.modalBody2 = this.modalBody2.bind(this);
    }

    dummyAsync = (cb: () => void) => {
        this.setState({ loading: true }, () => {
            setTimeout(cb, 500);
        });
    }

    onClick(value: number) {
        this.setState({ step: value });
    }

    handleNext() {
        let current = this.state.step;
        this.dummyAsync(() => {
            this.setState({ loading: false, step: current + 1 });
        });
    }

    handleStepOne(char: Character) {
        switch (char) {
            case Character.KP:
                this.props.onChange({ masterKey: 'testKey' });
                break;
            default:
        }
        this.dummyAsync(() => {
            this.setState({ loading: false, step: 1, role: char });
        });
    }

    handlePrev() {
        let current = this.state.step;
        this.dummyAsync(() => {
            this.setState({ loading: false, step: current - 1 });
        });
    }

    getSecondPageBasedOnCharacter() {
        return (
            <div />
        );
    }

    getThirdPageBasedOnCharacter() {
        let path = '';
        switch (this.state.role) {
            case Character.KP:
                path = '/master/testKey';
                break;
            default:
        }
        return (
            <div>
                <LinkContainer to={path}>
                    <FlatButton label="back" />
                </LinkContainer>
            </div>
        );
    }

    getStepContent(stepIndex: number) {
        let stepOne = (
            <List>
                <Divider />
                <ListItem
                    primaryText="我是游戏的中心——KP！"
                    leftIcon={<HardwareMemory />}
                    onClick={() => this.handleStepOne(Character.KP)}
                />
                <Divider />
                <ListItem
                    primaryText="我是激情参战的MASTER"
                    leftIcon={<ActionRecordVoiceOver />}
                    onClick={() => this.handleStepOne(Character.Master)}
                />
                <Divider />
                <ListItem
                    primaryText="我是默默围观的OB"
                    leftIcon={<HardwareHeadset />}
                    onClick={() => this.handleStepOne(Character.Observer)}
                />
                <Divider />
                <ListItem
                    primaryText="我是黑幕开发组......"
                    leftIcon={<HardwareComputer />}
                    onClick={() => this.handleStepOne(Character.Developer)}
                />
                <Divider />
            </List>
        );
        switch (stepIndex) {
            case 0:
                return stepOne;
            case 1:
                return this.getSecondPageBasedOnCharacter();
            case 2:
                return this.getThirdPageBasedOnCharacter();
            default:
                return (<p>default</p>);
        }

    }

    getStepper() {
        return (
            <Stepper activeStep={this.state.step}>
                <Step>
                    <StepLabel>Select your character</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Create/Enter Crendential</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Create an ad</StepLabel>
                </Step>
            </Stepper>
        );
    }

    getFooterButtons(step: Number) {
        switch (step) {
            case 0:
                return (<div />);
            case 1:
                return (
                    <div>
                        <FlatButton
                            label="Back"
                            onClick={this.handlePrev}
                            style={{ marginRight: 12 }}
                        />
                        <RaisedButton
                            label={step === 2 ? 'Finish' : 'Next'}
                            primary={true}
                            onClick={this.handleNext}
                        />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <FlatButton
                            label="Back"
                            onClick={this.handlePrev}
                            style={{ marginRight: 12 }}
                        />
                        <RaisedButton
                            label={step === 2 ? 'Finish' : 'Next'}
                            primary={true}
                            onClick={this.handleNext}
                        />
                    </div>
                );
            default:
                return (<div />);
        }
    }

    getExpansion() {
        return (
            <ExpandTransition loading={this.state.loading} open={true}>
                <div style={{ margin: '0 16px', overflow: 'hidden' }}>
                    {this.getStepContent(this.state.step)}
                    {this.getFooterButtons(this.state.step)}
                </div>
            </ExpandTransition>
        );
    }

    getAdditional() {
        return (
            <RaisedButton primary={true} onClick={this.handleNext} />
        );
    }

    renderDialog() {
        let snackBar = this.props.message !== undefined
            ? (
                <Snackbar
                    autoHideDuration={4000}
                    message={this.props.message}
                    open={true}
                />)
            : <div />;
        return RenderHelper.gridTileWrapper(
            1, 
            1, 
            5,
            [(            
                <Card>
                    <CardHeader
                        title="角色选择"
                        // subtitle="Subtitle"
                        actAsExpander={false}
                        showExpandableButton={false}
                    />
                    <CardMedia expandable={false} style={{ padding: '10px' }}>
                        {this.getStepper()}
                        {this.getExpansion()}
                        {/* {this.getAdditional()} */}
                    </CardMedia>
                </Card>
            ),
            snackBar]
        );
    }

    render() {
        return RenderHelper.gridWrapper(800, 500, 1, 1, [this.renderDialog()]);
    }
}

export default TitleDialog;