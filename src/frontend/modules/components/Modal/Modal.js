import React from 'react';

import { ModalAlert } from './ModalAlert';

export default class Modal extends React.Component {
	constructor(props) {
		super(props);

	}

	closeModal(value) {
		this.props.onModalClose(value)
	}
	
	render() {
		const { type, message, buttonLabel } = this.props;

		if (type === 'alert') {
			return (
				<ModalAlert
					onButtonClicked={() => this.closeModal()}
					buttonLabel={buttonLabel}
					message={message}
				/>
			);
		}
		return null;
	}
} 