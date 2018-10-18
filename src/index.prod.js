import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import App from './App';
import 'antd/dist/antd.css';
const renderDom = Component => {
    render(
          <Component />,
        document.getElementById('app')
    );
};
renderDom(App);