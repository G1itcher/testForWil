import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Matrix from './Matrix/Matrix';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Matrix />, document.getElementById('root'));
registerServiceWorker();
