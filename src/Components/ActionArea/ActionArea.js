import React, { Component } from 'react';
import Button from '../Button/Button';
import Slider from '../Slider/Slider';
import './ActionArea.css';

class ActionArea extends Component {

    updateValue = (value, answer) => {
        let newEntityType = this.props.entityType;

        newEntityType.user.answer.value = value;
        newEntityType.user.answer.answer = answer;

        this.props.updateStateValue(newEntityType);
        this.props.displayActionArea(false);
    }

    render() {
        const { entityType } = this.props;

        return (
            <div className='action-area'>
                {entityType.type === 'button' ?
                    entityType.user.options.map(option =>
                      this.props.isActionAreaVisible &&
                        <div key={option.answer} style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <Button text={option.answer} primary={option.primary} returnValue={option.value} onClick={this.updateValue} />
                        </div>
                    )
                    :
                    this.props.isActionAreaVisible &&
                    <Slider sliderData={entityType} updateValue={this.updateValue} />
                }
            </div>
        );
    }
}

export default ActionArea;
