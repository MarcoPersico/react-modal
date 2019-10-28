import React from 'react';

// App Config
import AppConfiguration from './services/AppConfiguration';
import frontendConfig from '../../config/frontend/frontend.config';
import { Modal } from './modules/components/Modal';

// Component style
import './app.scss';

// Set app config
AppConfiguration.setConfig(frontendConfig);

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isVisible: false };
    this.updateIsVisibleStatus = this.updateIsVisibleStatus.bind(this);
  }

  renderModal() {
    if (this.state.isVisible) {
      return <Modal
        type='alert'
        message='The operation was a Success!'
        buttonLabel='Ok'
        onModalClose={this.updateIsVisibleStatus}
      />;
    }
    return null;
  }

  updateIsVisibleStatus(value) {
    this.setState({ isVisible: value });
  }

  render() {
    return (
      <div className='app'>
        <div>
          <button onClick={
            () => this.updateIsVisibleStatus(!this.state.isVisible)
          }>Click Me</button>
        </div>
        {this.renderModal()}
      </div>
    );
  }
}
