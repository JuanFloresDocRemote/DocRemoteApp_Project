import React,{Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import styles from './Styles'
import logo from '../../assets/images/DocRemoteLogo.png'

class UserType extends Component {
    render(){
        return(
                <View style={{backgroundColor: '#7DE0C5', flex: 1, justifyContent: 'center', alignItems:'center', padding: 20, paddingTop: -80}}>
                    <Image source={logo} style={{height: 240, width: 240 }}></Image> 
                    <TouchableOpacity style={styles.container}><Text style={{textAlign: 'center', fontSize: 16, color: '#2E7467', fontWeight: 'bold'}}>PARTICULAR</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.container}><Text style={{textAlign: 'center', fontSize: 16, color: '#2E7467', fontWeight: 'bold'}}>EMPRESA</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.container}><Text style={{textAlign: 'center', fontSize: 16, color: '#2E7467', fontWeight: 'bold'}}>SANIDAD</Text></TouchableOpacity>
                </View>
        );
    }
}

export default UserType;