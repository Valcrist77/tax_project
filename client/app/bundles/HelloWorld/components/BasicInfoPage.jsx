import React from 'react';
import Form from './Form';
import TextField from './TextField';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class BasicInfoPage extends React.Component {
  render() {
    const { onSubmit, previousPage } = this.props;
    return (
      <div className='container'>
        <Form onSubmit={onSubmit}>
          <div className='row'>
            <div className='col-md-4'>
              <FormGroup>
                <ControlLabel>First Name</ControlLabel>
                <FormControl
                  type='text'
                />
              </FormGroup>
              <FormControl.Feedback />
            </div>
            <div className='col-md-2'>
              <FormGroup>
                <ControlLabel>Middle Initial</ControlLabel>
                <FormControl
                  type='text'
                />
              </FormGroup>
              <FormControl.Feedback />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <FormGroup>
                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                  type='text'
                />
              </FormGroup>
              <FormControl.Feedback />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <FormGroup>
                <ControlLabel>Social Security Number</ControlLabel>
                <FormControl
                  type='text'
                />
              </FormGroup>
              <FormControl.Feedback />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <FormGroup>
                <ControlLabel>Address Line 1</ControlLabel>
                <FormControl
                  type='text'
                />
              </FormGroup>
              <FormControl.Feedback />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <FormGroup>
                <ControlLabel>Address Line 2</ControlLabel>
                <FormControl
                  type='text'
                />
              </FormGroup>
              <FormControl.Feedback />
            </div>
          </div>
          <button type="submit">
            Next
          </button>
        </Form>
      </div>
    );
  }
}