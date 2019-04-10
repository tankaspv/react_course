import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="post">
                    <h1 className="postTitle">{this.props.title}</h1>
                    <p className="postBody">{this.props.postBody}</p>
                    <p className="postAuthor">{this.props.postAuthor}</p>
                </section>
            </React.Fragment>
        )
    }
}