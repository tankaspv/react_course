import React from 'react';
import ReactDOM from 'react-dom';

// import LifeCycleMount from './app/components/LifeCycleMount';
// import LifeCycleUpdate from './app/components/LifeCycleUpdate';
import LifeCycleUnmount from './app/components/LifeCycleUnmount';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showUnmountComponent: true
        };
    }

    render() {
        return(
            <>
            {this.state.showUnmountComponent ? <LifeCycleUnmount/> : null}
            <button onClick={() => {
                this.setState({showUnmountComponent: false})
            }}>Удалить компонент</button>
            </>
        );

    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));