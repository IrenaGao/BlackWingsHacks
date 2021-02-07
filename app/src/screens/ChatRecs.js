import React, { Component } from 'react';
import { getUserInfo } from '../services/UserService';
import Tree from '../assets/tree.png';
import Bird from '../assets/bird.png';
import Raindrop from '../assets/drop.png';
import Horse from '../assets/horse.png';
import Pebble from '../assets/hot-stones.png';
import Cloud from '../assets/cloud.png';

export default class Quiz extends Component {
    

    getInfo() {
        getUserInfo();
    }

    render() {
        return (
            <div style={{paddingBottom: '3%', paddingTop: '4%'}}>
            <p style={{marginTop: '1%', fontSize: '30px', marginBottom: '3%', textAlign: 'center', color: '#1F497D'}}>Here are several recommended chat rooms based on your responses :)</p>
            <div style={{backgroundColor: "#3F3151", width: '70%', marginLeft: '15%', marginBottom: '1%', paddingTop: '2%', paddingBottom: '3%', borderRadius: '50px'}}>
                <div onClick={this.getInfo} style={{background: "white", borderRadius: '50%', width: '200px', height: '200px', textAlign: 'center', marginLeft: '10%'}}><p style={{paddingTop: '43%', color: '#506028', fontSize: '20px'}}>tree branch</p><img src={Tree} style={{width: '25%'}}/></div>
                <div onClick={this.getInfo} style={{position: 'absolute', marginLeft: '28%', marginTop: '-13.5%', background: "white", borderRadius: '50%', width: '200px', height: '200px', textAlign: 'center', }}><p style={{paddingTop: '33%', color: '#506028', fontSize: '20px'}}>blue bird</p><img src={Bird} style={{width: '25%'}}/></div>
                <div onClick={this.getInfo} style={{background: "white", marginLeft: '70%', marginTop: '-21%', borderRadius: '50%', width: '200px', height: '200px', textAlign: 'center', }}><p style={{paddingTop: '40%', color: '#506028', fontSize: '20px'}}>white cloud</p><img src={Cloud} style={{width: '25%'}}/></div>
                <div onClick={this.getInfo} style={{marginLeft: '10%', marginTop: '4%', background: "white", borderRadius: '50%', width: '200px', height: '200px', textAlign: 'center', }}><p style={{paddingTop: '45%', color: '#506028', fontSize: '20px'}}>rain drop</p><img src={Raindrop} style={{width: '25%'}}/></div>
                <div onClick={this.getInfo} style={{background: "white", marginLeft: '40%', marginTop: '-21%', borderRadius: '50%', width: '200px', height: '200px', textAlign: 'center', }}><p style={{paddingTop: '40%', color: '#506028', fontSize: '20px'}}>small pebble</p><img src={Pebble} style={{width: '25%'}}/></div>
                <div onClick={this.getInfo} style={{background: "white", marginLeft: '70%', marginTop: '-22%', borderRadius: '50%', width: '200px', height: '200px', textAlign: 'center', }}><p style={{paddingTop: '40%', color: '#506028', fontSize: '20px'}}>running horse</p><img src={Horse} style={{width: '25%'}}/></div>
            </div>
            </div>
        )
    }
}
