import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ModalBlank.scss';

/**
 * This class is the ModalBlank component will render a container
 * for a custom modal also when there's no children will display a
 * modal to inform it
 */
export default class ModalBlank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.children) {
            return (
                <div id='modal-target'>
                    {this.props.children}
                </div>
            );
        } else {
            return (
                <div id='modal-target' className='modal-blank_noPropsLoaded'>
                    <p>Seems like you forgot the add children for type blank :(</p>
                </div>
            );
        }
    }
}

ModalBlank.defaultProps = {
    children: false,
}

ModalBlank.propTypes = {
    // Children from parent required for blank type
    children: PropTypes.oneOfType([
        PropTypes.shape(),
        PropTypes.bool,
    ]),
}