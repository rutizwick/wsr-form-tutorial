import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '@wix/wix-i18n-config';
import s from './App.scss';

import {
  Page,
  Container,
  Row,
  Col,
  Card,
  Box,
  Input,
  InputArea,
  Dropdown,
  Checkbox,
  Button,
  FormField,
  Text,
} from 'wix-style-react';

class App extends React.Component {
  static propTypes = {
    t: PropTypes.func,
  };

  render() {
    const { t } = this.props;

    return (
      <Page>
        <Page.Header title="WSR Form" />
      </Page>
    );
  }
}

export default withTranslation()(App);
