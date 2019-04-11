import React from 'react';
import axios from 'axios';
import Comment from '../components/Comment';

export default class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }


    render() {

        if (!this.state.comments.length) {
            return null;
        }

        const comments = this.state.comments.map((comment, index) => {
            return <Comment key={index} {...comment} />
        })

        return (
            <React.Fragment>
                <h1>Комментарии</h1>
                {comments}
            </React.Fragment>
        );
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            this.setState({comments: response.data})
        });
    }
}