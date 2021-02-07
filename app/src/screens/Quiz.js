import React, { Component } from 'react';
import { Button, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { createUser } from '../services/UserService';
import Rating from '@material-ui/lab/Rating';

export default class Quiz extends Component {

    constructor(props){
        super(props);
        this.state={
          name: '',
          password: '',
          anxiety: 0,
          depression: 0,
          eating: 0,
          psychosis: 0,
          personality: 0
        }

    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeAnxiety = this.onChangeAnxiety.bind(this);
        this.onChangeDepression = this.onChangeDepression.bind(this);
        this.onChangeEating = this.onChangeEating.bind(this);
        this.onChangePsychosis = this.onChangePsychosis.bind(this);
        this.onChangePersonality = this.onChangePersonality.bind(this);
    }
    
      onChangeName(event){
        this.setState({name : event.target.value});
      }
    
      onChangePassword(event){
        this.setState({password : event.target.value});
      }

      onChangeAnxiety(event){
        this.setState({anxiety : event.target.value});
      }
    
      onChangeDepression(event){
        this.setState({depression : event.target.value});
      }

      onChangeEating(event){
        this.setState({eating : event.target.value});
      }
    
      onChangePsychosis(event){
        this.setState({psychosis : event.target.value});
      }

      onChangePersonality(event){
        this.setState({personality : event.target.value});
      }
    
      handleSubmit(event){
        event.preventDefault();
        const profile = {
          name: this.state.name,
          password: this.state.password,
          anxiety: this.state.anxiety,
          depression: this.state.depression,
          eating: this.state.eating,
          psychosis: this.state.psychosis,
          personality: this.state.personality
        }

        createUser(profile)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        }).then(() => window.open('/ChatRecs/'));
    }

    render() {
        return (
            <div>
            <p style={{marginTop: '5%', fontSize: '30px', marginBottom: '1%', textAlign: 'center', color: '#1F497D'}}>Tell us about yourself.</p>
                <Form onSubmit={this.handleSubmit} style={{marginLeft: '15%', paddingTop: '5%'}}>
                <div style={{backgroundColor: 'white', paddingLeft: '15%', paddingTop: '4%', paddingBottom: '4%', width: '70%', borderRadius: '20px', boxShadow: '20px 20px #000000, -20px -20px #000000, 20px -20px #000000, -20px 20px #000000'}}>
                    <div style={{marginTop: '3%', marginBottom: '1%', color: '#1F497D', fontSize: '20px'}}>What's your name?</div>
                    <input type="text" value={this.state.name} onChange={this.onChangeName} placeholder='Name' />
                    <div style={{marginTop: '4%', marginBottom: '1%', color: '#1F497D', fontSize: '20px'}}>What's your password?</div>
                    <input type="password" value={this.state.password} onChange={this.onChangePassword} placeholder='Password' />
                </div>
                <div style={{backgroundColor: 'white', paddingLeft: '15%', paddingTop: '4%', marginTop: '8%', paddingBottom: '4%', width: '70%', borderRadius: '20px', boxShadow: '20px 20px #000000, -20px -20px #000000, 20px -20px #000000, -20px 20px #000000'}}>
                    <div style={{marginTop: '4%', marginBottom: '1%', color: '#1F497D', fontSize: '20px'}}>Rate your anxiety on a scale of 1-5.</div>
                    <Rating
                        defaultValue={2}
                        precision={0.5}
                        value={this.state.anxiety}
                        onChange={(event) => {
                            this.setState({anxiety : event.target.value});
                        }}
                    />
                    <div style={{marginTop: '4%', marginBottom: '1%', color: '#1F497D', fontSize: '20px'}}>Rate how often you feel distressed on a scale of 1-5.</div>
                    <Rating
                        defaultValue={2}
                        precision={0.5}
                        value={this.state.depression}
                        onChange={(event2) => {
                            this.setState({depression : event2.target.value});
                            console.log(this.state.depression);
                        }}
                    />
                    <div style={{marginTop: '4%', marginBottom: '1%', color: '#1F497D', fontSize: '20px'}}>Rate how often you worry about your eating habits on a scale of 1-5.</div>
                    <Rating
                        defaultValue={2}
                        precision={0.5}
                        value={this.state.eating}
                        onChange={this.onChangeEating}
                    />
                    <div style={{marginTop: '4%', marginBottom: '1%', color: '#1F497D', fontSize: '20px'}}>Rate how often you use your imagination to block out reality on a scale of 1-5.</div>
                    <Rating
                        defaultValue={2}
                        precision={0.5}
                        value={this.state.psychosis}
                        onChange={this.onChangePsychosis}
                    />
                    <div style={{marginTop: '4%', marginBottom: '1%', color: '#1F497D', fontSize: '20px'}}>Rate how often you have problems with other people on a scale of 1-5.</div>
                    <Rating
                        defaultValue={2}
                        precision={0.5}
                        value={this.state.personality}
                        onChange={this.onChangePersonality}
                    />
                    <div style={{marginTop: '4%', marginBottom: '1%', color: '#1F497D', fontSize: '20px'}}>What hobbies do you have?</div>
                    <input type="text" placeholder='Hobbies' />
                    <input style={{marginLeft: '20%', marginTop: '5%', display: 'block', backgroundColor: '#4AACC6', fontWeight: 'bold', borderColor: '#94B0DA', borderRadius: '17px', padding: '14px', color: 'white', fontSize: ''}} type='submit' value='Find me Like-Minded People!' />
                    </div>
                </Form>
              
            </div>
        )};
}
