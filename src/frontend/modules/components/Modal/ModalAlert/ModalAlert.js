import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ModalAlert.scss';

/**
 * This class is the ModalAlert component will render a Modal
 * to display Alerts suchs success messages or error messages
 */
export default class ModalAlert extends React.Component {
	constructor(props) {
		super(props);

		this.closeModal = this.closeModal.bind(this);
		this.state = { currentElementClicked: null }
	}

	/**
	 * Callback function to close modal
	 */
	closeModal() {
		this.props.onButtonClicked(false);
	}

	render() {
		const {
			defaultStyles,
			modalBodyStyles,
			modalFooterStyles,
			modalContainerStyles,
			message,
			buttonLabel
		} = this.props;

		const MODAL_CONTAINER = defaultStyles ? 'modal-alert_container' : modalContainerStyles;
		const MODAL_BODY = defaultStyles ? 'modal-alert_body' : modalBodyStyles;
		const MODAL_FOOTER = defaultStyles ? 'modal-alert_footer' : modalFooterStyles;

		return (
			<div id='modal-target' className={MODAL_CONTAINER}>
				<div className={MODAL_BODY}>
					<p>
						{message}
					</p>
				</div>
				<div className={MODAL_FOOTER}>
					<button onClick={() => this.closeModal()}>
						{buttonLabel}
					</button>
				</div>
			</div>
		);
	}
}

ModalAlert.defaultProps = {
	defaultStyles: true,
	modalContainerStyles: null,
	modalBodyStyles: null,
	modalFooterStyles: null,
}

ModalAlert.propTypes = {
	// Callback function to CloseModal
	onButtonClicked: PropTypes.func.isRequired,
	// String message to set into modal body
	message: PropTypes.string.isRequired,
	// String message to set into modal button
	buttonLabel: PropTypes.string.isRequired,
	// To display the default styles or custom ones (true by default)
	defaultStyles: PropTypes.bool,
	// Custom Styles
	modalContainerStyles: PropTypes.string,
	modalBodyStyles: PropTypes.string,
	modalFooterStyles: PropTypes.string,
}