import React from 'react';

export default class Contacts extends React.Component {
    render() {

        console.log(this.props.params.number);
        return(
            <div >
                <h1>Контакты</h1>
                <p>Email: blabla@blabla.ru</p>
                <p>Phone: +7(921)0000000</p>
                <p>Office number: {this.props.params.number}</p>
            </div>
        )
    }
}