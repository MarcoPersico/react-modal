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

    this.state = { isVisibleAlert: false, isVisibleBlank: false };
    this.updateIsVisibleStatus = this.updateIsVisibleStatus.bind(this);
    this.updateIsVisibleStatusBlank = this.updateIsVisibleStatusBlank.bind(this);
  }

  renderModalAlert() {
    if (this.state.isVisibleAlert) {
      return <Modal
        type='alert'
        onModalClose={this.updateIsVisibleStatus}
      >
      </Modal>;
    }
    return null;
  }

  renderModalBlank() {
    if (this.state.isVisibleBlank) {
      return <Modal
        type='blank'
        onModalClose={this.updateIsVisibleStatusBlank}
      >
        <div className='modal-blank_noPropsLoaded'>
          dsadsa
        </div>
      </Modal>;
    }
    return null;
  }

  updateIsVisibleStatus(value) {
    this.setState({ isVisibleAlert: value });
  }

  updateIsVisibleStatusBlank(value) {
    this.setState({ isVisibleBlank: value });
  }

  render() {
    return (
      <div className='app'>
        <div>
          <button onClick={
            () => this.updateIsVisibleStatus(!this.state.isVisibleAlert)
          }>
            Click Me Alert Type
          </button>
          <button onClick={
            () => this.updateIsVisibleStatusBlank(!this.state.isVisibleBlank)
          }>
            Click Me Blank Type
          </button>
        </div>
        {this.renderModalBlank()}
        {this.renderModalAlert()}
      </div>
    );
  }
}
