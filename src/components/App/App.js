import React from 'react';
import s from './App.scss';

import DataHooks from './DataHooks';

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

const colors = [
  { id: 0, value: 'Red' },
  { id: 1, value: 'Blue' },
  { id: 2, value: 'Green' },
  { id: 3, value: 'Yellow' },
  { id: 4, value: 'Pink' },
];

const getColorItemById = (id) => colors.find((color) => color.id === id);

const ActionsBar = ({ disabled, onClearClicked, onSubmitClicked }) => (
  <Box>
    <Box marginRight="12px">
      <Button
        dataHook={DataHooks.CLEAR_BUTTON}
        priority="secondary"
        onClick={onClearClicked}
      >
        Clear
      </Button>
    </Box>
    <Button
      dataHook={DataHooks.SUBMIT_BUTTON}
      disabled={disabled}
      onClick={onSubmitClicked}
    >
      Submit
    </Button>
  </Box>
);

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      // ...this.getClearedFormState(),
      submittedValues: null,
    }
  }

  render() {
    return (
      <Page height ="100vh">
        <Page.Header
              title="WSR Form"
              actionsBar={
                <ActionsBar
                      // onClearClicked={this.clearForm}
                      // onSubmitClicked={this.submitForm}
                      // disabled={!this.isFormValid()}
                />
              }
        />
      </Page>
    );
  }
}
