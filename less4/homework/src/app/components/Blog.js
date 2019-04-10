import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <Post key={index} title={item.title} postBody={item.postBody} postAuthor={item.postAuthor}/>
        })
        return (
            <div>
                <h1>{this.props.blogTitle}</h1>
                {items}
            </div>
        )
    }
    
}