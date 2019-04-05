import React from 'react';

export default class LifeCycleUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('1. constructor()');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('1. getDerivedStateFromProps(props, state)');
        return null;
    }

    shouldComponentUpdate() {
        console.log('2. shouldComponentUpdate()');
        return true;
    }

    render() {
        console.log('3. render()');
        return (
            <div>
                {this.state.count}
                <button onClick={() => {
                    this.setState({count: this.state.count + 1})
                }}>Увеличить счётчик</button>
            </div>
        );
    }

    getSnapshotBeforeUpdate() {
        console.log('4. getSnapshotBeforeUpdate()');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('5. componentDidUpdate()');
    }
}