import React from 'react';

// Styles
import './ModalAlert.scss';

export default class ModalAlert extends React.Component {
	constructor(props) {
		super(props);

		this.closeModal = this.closeModal.bind(this);
	}

	componentDidMount() {
		const body = document.body;
		body.style.height = '100vh';
		body.style.overflowY = 'hidden';
	}

	componentWillUnmount() {
		const body = document.body;
		body.style.height = 'auto';
		body.style.overflowY = 'scroll';		
	}
 
	closeModal() {
		this.props.onButtonClicked(false);
	}

	render() {
		return (
			<div className='modal-alert'>
				<div className='modal-alert_container'>
					<div className='modal-alert_body'>
						<p className='modal-alert_message'>
							{this.props.message}
						</p>
					</div>
					<div className='modal-alert_footer'>
						<button onClick={() => this.closeModal()}>
							{this.props.buttonLabel}
						</button>
					</div>
				</div>
			</div>
		);
	}
}