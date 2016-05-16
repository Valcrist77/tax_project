import React from 'react';
import _ from 'lodash';
import BasicInfoPage from './BasicInfoPage'
import IncomePage from './IncomePage'
import PaymentsCreditsTaxPage from './PaymentsCreditsTaxPage'

export default class WizardForm extends React.Component {
  constructor(props){
    super(props)

    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        {page === 1 && <BasicInfoPage onSubmit={this.nextPage}/>}
        {page === 2 && <IncomePage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <PaymentsCreditsTaxPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    );
  }
}