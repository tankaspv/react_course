import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

React.createClass = createReactClass;

const App = React.createClass({
    render() {
        return <div>Синтаксис2</div>
    }
})

ReactDOM.render(<App/>, document.querySelector('#root'));