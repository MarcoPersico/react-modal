import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Modal.scss';

// Components
import { ModalAlert } from './ModalAlert';
import { ModalBlank } from './ModalBlank';

export default class Modal extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		document.activeElement.blur();
	}

	componentDidMount() {
		// Will block scroll action and set body height to top
		const body = document.body;
		window.scrollBy(0, -1000);
		body.style.height = 'auto';
		body.style.overflowY = 'hidden';
	}

	componentWillUnmount() {
		// Will unblock scroll action
		const body = document.body;
		body.style.height = 'auto';
		body.style.overflowY = 'scroll';
	}

	/**
	 * This method will listen to clicks when component is up and will
	 * make an action when click has made outside of modal-container
	 * element
	 *
	 * @param   {Object}  element  HTML Element
	 *	
	 */
	clickedOutside(element) {
		if (element.target.children.length) {
			if (element.target.children[0].id === 'modal-target') {
				this.closeModal();
			}
		}
	}

	/**
	 * Callback function to close modal
	 *
	 * @param   {Boolean}  value  set by component's children
	 */
	closeModal(value) {
		this.props.onModalClose(value)
	}

	render() {
		const { type, message, buttonLabel } = this.props;

		if (type === 'alert') {
			return (
				<div onClick={() => this.clickedOutside(event)} className='modal'>
					<ModalAlert
						onButtonClicked={() => this.closeModal()}
						buttonLabel={buttonLabel}
						message={message}
					/>
				</div>
			);
		} else if (type === 'blank') {
			return (

				<div onClick={() => this.clickedOutside(event)} className='modal'>
					<ModalBlank>{this.props.children}</ModalBlank>
				</div>
			);
		}
		return null;
	}
}

Modal.defaultProps = {
	message: 'Missing prop for Alert Type :(',
	buttonLabel: 'Missing prop for Alert Type :(',
	children: false,
}

Modal.propTypes = {
	// Type of modal alert type or blank type
	type: PropTypes.string.isRequired,
	// Callback function to Close modal
	onModalClose: PropTypes.func.isRequired,
	// Message will be required for type=Alert
	message: PropTypes.string,
	//  Button Label will be required for type=Alert
	buttonLabel: PropTypes.string,
	// Children will be required for type=Blank
	children: PropTypes.oneOfType([
		PropTypes.shape(),
		PropTypes.bool,
	]),
}