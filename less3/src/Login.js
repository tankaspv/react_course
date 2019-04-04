import React from 'react';

class Login extends React.Component {
    render() {
        let formStyle = {
            width: '300px',
            padding: '10px',
            position: 'relative',
            background: 'linear-gradient(#eeefef, #ffffff 10%)',
            borderRadius: '5px',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0.3), 0 3px 7px rgba(0, 0, 0, 0.3), inset 0 1px rgba(255,255,255,1), inset 0 -3px 2px rgba(0,0,0,0.25)',
            color: '#777'
        }
        let divStyle = {
            display: 'block',
            marginBottom: '10px'
        }
        let inputStyle = {
            width: '220px',
            padding: '10px 18px 10px 45px',
            border: 'none',
            boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1), inset 0 3px 2px rgba(0,0,0,0.1)',
            borderRadius: '3px',
            background: '#f9f9f9',
            color: '#777',
            transition: 'color 0.3s ease-out'
        }
        let buttonStyle = {
            display: 'block',
            width: '200px',
            height: '45px',
            margin: '0 auto',
            border: 'none',
            borderRadius: '5px',
            background: 'linear-gradient(#52cfeb, #42A2BC)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.35), inset 0 3px 2px rgba(255,255,255,0.2), inset 0 -3px 2px rgba(0,0,0,0.1)',
        }

        return (
            <form method="post" action="/login/" style={formStyle}>
                <div style={divStyle}>
                    <label htmlFor="loginField">Логин</label>
                    <input id="loginField" type="text" name="login" style={inputStyle} />
                </div>
                <div style={divStyle}>
                    <label htmlFor="passwordField">Пароль</label>
                    <input id="passwordField" type="password" name="password" style={inputStyle}/>
                </div>
                <div style={divStyle}>
                    <input type="submit" value="Войти" style={buttonStyle}/>
                </div>
            </form>
        );
    }
}

export default Login;