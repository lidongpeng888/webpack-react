import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import 'antd/dist/antd.css';
import App from './App'
const renderDom = Component =>{
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
}
renderDom(App)
/**不知道是什么意思  */
if (module.hot) {
    module.hot.accept('./App', () => {
        const App = require('./App').default;
        renderDom(App);
    })
} 