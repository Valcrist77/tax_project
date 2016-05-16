import ReactOnRails from 'react-on-rails';
import HelloWorldApp from './HelloWorldAppClient';
import WizardFormApp from './WizardFormAppClient';

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ HelloWorldApp, WizardFormApp });

