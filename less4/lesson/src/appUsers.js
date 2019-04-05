import React from 'react';
import ReactDOM from 'react-dom';
import Users from './app/components/Users';


const USERS = ['Anna', 'Victor', 'Olga', 'Anton'];

ReactDOM.render(<Users items={USERS}/>, document.querySelector('#root'));