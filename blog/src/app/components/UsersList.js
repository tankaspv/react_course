import React from 'react';
import axios from 'axios';
import User from '../components/User';

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }


    render() {

        if (!this.state.users.length) {
            return null;
        }

        const users = this.state.users.map((user, index) => {
            return <User key={index} {...user} />
        })

        return (
            <React.Fragment>
                <h1>Пользователи</h1>
                {users}
            </React.Fragment>
        );
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => {
            this.setState({users: response.data})
        });
    }
}