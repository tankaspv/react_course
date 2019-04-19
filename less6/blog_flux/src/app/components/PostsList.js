import React from 'react';
import PostItem from '../components/PostItem';

export default class PostsList extends React.Component {
    render() {

        if (!this.props.posts.length) {
            return null;
        }

        const posts = this.props.posts.map((post, index) => {
            return <PostItem key={index} {...post} />
        })

        return (
            <React.Fragment>
                <h1>Посты</h1>
                <div>
                    {posts}
                </div>
            </React.Fragment>
        );
    }
}