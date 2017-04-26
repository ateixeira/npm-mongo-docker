import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';

import './styles/bootstrap.scss'

render(
    <Root />
    , document.getElementById('container')
);