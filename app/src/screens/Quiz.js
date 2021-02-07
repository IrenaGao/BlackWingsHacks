import React, { Component } from 'react';
import { Button, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { createUser } from '../services/UserService';
import Rating from '@material-ui/lab/Rating';

const state = [
    
]

export default class Quiz extends Component {

    constructor(props){
        super(props);
        this.state={
          name: '',
          password: ''
        }

    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }
    
      onChangeName(event){
        this.setState({name : event.target.value});
      }
    
      onChangePassword(event){
        this.setState({password : event.target.value});
      }
    
      handleSubmit(event){
        event.preventDefault();
        const profile = {
          name: this.state.name,
          password: this.state.password
        }

        console.log(profile);

        createUser(profile)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                {/* <NavBar/> */}
            <div style={{backgroundColor: 'white', paddingBottom: '4%', width: '80%', marginLeft: '10%', borderRadius: '20px', boxShadow: '5px 5px 10px #555555'}}>
                <p style={{marginTop: '5%', paddingTop: '6%', fontSize: '25px', marginBottom: '4%', textAlign: 'center'}}>What qualities are you looking for in a distributor?</p>
                <Form onSubmit={this.handleSubmit} style={{marginLeft: '25%'}}>
                    <div style={{marginTop: '3%', marginBottom: '1%'}}>What's your name?</div>
                    <input type="text" value={this.state.name} onChange={this.onChangeName} placeholder='Name' />
                    <div style={{marginTop: '3%', marginBottom: '1%'}}>What's your password?</div>
                    <input type="text" value={this.state.password} onChange={this.onChangePassword} placeholder='Password' />
                    <div style={{marginTop: '3%', marginBottom: '1%'}}>Rate your anxiety on a scale of 1-5.</div>
                    <input type="text" value={this.state.password} onChange={this.onChangePassword} placeholder='Anxiety' />
                    <Rating
          name="customized-empty"
          defaultValue={2}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
                    <input style={{marginLeft: '20%', marginTop: '5%', display: 'block', backgroundColor: '#94B0DA', borderColor: '#94B0DA', borderRadius: '12px', padding: '12px', color: 'white'}} type='submit' value='Compute my Recommendations!' />
                </Form>
              
            </div>
            </div>
        )};
}
