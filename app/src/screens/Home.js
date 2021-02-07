import React, { Component } from 'react';
import Logo from '../assets/softshelllogo.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <p style={{marginTop: '5%', fontSize: '50px', marginBottom: '1%', textAlign: 'center', color: '#1F497D'}}>Welcome to SoftShell</p>
                <img src={Logo} style={{marginLeft: '32%', width: '35%', marginTop: '1%'}} />
                <p style={{textAlign: 'center', color: '#1F497D', padding: '2%', fontSize: '30px'}}>Peer-to-peer therapy at your fingertips. <a href="/Quiz" style={{textDecoration: 'none'}}>Click to enter</a></p>
            </div>
        )
    };
}
