import React from 'react';

export default class PaymentsCreditsTaxPage extends React.Component {
  render() {
    const { onSubmit, previousPage } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <h1>PaymentsCreditsTax Page</h1>
        <div>
          <button type="button" onClick={previousPage}>
            Previous
          </button>
          <button type="submit">
            Next
          </button>
        </div>
      </form>
    );
  }
}