import React, {Component} from 'react';
import {Link} from 'react-router';

export default class PostItem extends Component {
    render() {
        return(
            <div className="card border-secondary mb-3">
                <h3 className="card-header">
                    <Link to={`/users/${this.props.userId}`}>
                        {this.props.title}
                    </Link>
                </h3>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}