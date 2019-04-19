import React from 'react';

export default class Contacts extends React.Component {
    render() {
        console.log(this);
        return(
            <div >
                <h1>Контакты</h1>
                <p>Email: blabla@blabla.ru</p>
                <p>Phone: +7(921)0000000</p>
                <p>Номер офиса: {this.props.match.params.number}</p>
            </div>
        )
    }
}