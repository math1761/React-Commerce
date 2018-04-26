import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {history} from './store';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <App/>
                </div>
            </ConnectedRouter>
        </Provider>
    )
};


ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
