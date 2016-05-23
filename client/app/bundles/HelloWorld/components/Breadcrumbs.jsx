import React from 'react';
import classnames from 'classnames';

export default class Breadcrumbs extends React.Component {
  render(){
    const { currentSection } = this.props;

    return (
      <div className='breadcrumbs'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <Crumb title='1 Basic Info' highlight={currentSection == 1 ? 'highlight' : null}/>
              <Crumb title='2 Tax Info' highlight={currentSection == 2 ? 'highlight' : null}/>
              <Crumb title='3 Sign Docs' highlight={currentSection == 3 ? 'highlight' : null}/>
              <Crumb title='4 Sign Docs' highlight={currentSection == 4 ? 'highlight' : null}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Crumb extends React.Component {
  render(){
    return (
      <div className={classnames('crumb-box',this.props.highlight)}>
        {this.props.title}
      </div>
    );
  }
}