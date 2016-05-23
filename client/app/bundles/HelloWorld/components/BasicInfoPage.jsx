import React from 'react';
import Form from './Form';
import TextField from './TextField';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import classnames from 'classnames';

export default class BasicInfoPage extends React.Component {
  render() {
    const { onSubmit, previousPage } = this.props;
    return (
      <div className='form-wrapper'>
        <div className='container'>
          <Form onSubmit={onSubmit}>
            <div className='row'>
              <div className='col-xs-8'>
                <FormGroup>
                  <ControlLabel>First Name</ControlLabel>
                  <FormControl
                    type='text'
                  />
                </FormGroup>
                <FormControl.Feedback />
              </div>
              <div className='col-xs-4'>
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
              <div className='col-xs-12'>
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
              <div className='col-xs-12'>
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
              <div className='col-xs-12'>
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
              <div className='col-xs-12'>
                <FormGroup>
                  <ControlLabel>Address Line 2</ControlLabel>
                  <FormControl
                    type='text'
                  />
                </FormGroup>
                <FormControl.Feedback />
              </div>
            </div>
            <div className='row'>
              <div className='button-row'>
                <div className='col-xs-6'>
                  <button type="submit" className={classnames('btn', 'btn-default')}>
                    Back
                  </button>
                </div>
                <div className='col-xs-6'>
                  <button type="submit" className={classnames('btn', 'btn-primary')}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}