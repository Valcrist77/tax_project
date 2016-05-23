import React from 'react';
import _ from 'lodash';
import BasicInfoPage from './BasicInfoPage'
import IncomePage from './IncomePage'
import PaymentsCreditsTaxPage from './PaymentsCreditsTaxPage'
import NavBar from './NavBar';
import Breadcrumbs from './Breadcrumbs';
import classnames from 'classnames';

export default class WizardForm extends React.Component {
  constructor(props){
    super(props)

    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage(e) {
    e.preventDefault();
    this.setState({ page: this.state.page + 1 })
  }

  previousPage(e) {
    e.preventDefault();
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    let steps = {
      1: () => <BasicInfoPage onSubmit={this.nextPage}/>,
      2: () => <IncomePage previousPage={this.previousPage} onSubmit={this.nextPage}/>,
      3: () => <PaymentsCreditsTaxPage previousPage={this.previousPage} onSubmit={onSubmit}/>
    }
    return (
      <div>
        <NavBar title='Taxes.'/>
        <SectionTitle sectionTitle='Basic Info'/>
        <Breadcrumbs currentSection={this.getCurrentSection()}/>
        {steps[page]()}
      </div>
    );
  }

  getCurrentSection(){
    if (this.state.page==1) {
      return 1;
    } else if (this.state.page==2) {
      return 2;
    } else {
      return null;
    }
  }
}

export class SectionTitle extends React.Component {
  render(){
    return (
      <div className='container'>
        <div className={classnames('center-text', 'section-title')}>
          {this.props.sectionTitle}
        </div>
      </div>
    )
  }
}