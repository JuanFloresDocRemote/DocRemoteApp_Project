import React,{Component} from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, TextInput, TouchableOpacity, Button} from 'react-native';

import styles from './Styles'
import logo from '../../assets/images/DocRemoteLogo.png'
import virus from '../../assets/images/virus.png'

import PhoneInput from "react-native-phone-number-input";
import ModalNumber from '../ModalNumber/ModalNumber';



class LogIn extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      number: '',
      numberModal: false
    }
  }

 handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }

 handleNumber = (text) => {
  this.setState({ number: text })
}

login = (email, pass) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(reg.test(email) === false) {
    alert("Email Incorrecto")
  }
  else{
    if(pass.length <8){
      alert("La contraseña no es segura"+"\n"+"Introduzca como mínimo 8 caracteres")
    }
    else{
      alert('email: ' + email +"\n"+ 'password: ' + pass)
    }
    
  }
  
}

signin = (number) => {
    var reg = new RegExp('^[0-9]+$');

    console.log(number)
    console.log(number.length)
    if(reg.test(number)=== true && number.length == 9) {
      alert("Número Correcto")
    }
    else{

        alert("Número Incorrecto")
      
    }
    
}

_handleButtonPress = () => {
  this.setState({ numberModal: true })
};
    
    render(){
        //const [text, setText] = useState('');

        return(
                <View style={{backgroundColor: '#7DE0C5', flex: 1, justifyContent: 'center', alignItems:'center', padding: 20}}>
                    
                    <TouchableOpacity style={{backgroundColor: '#BEDED8', minWidth: 150, minHeight: 30, justifyContent: 'center', borderRadius: 30, marginBottom: 10, flexDirection: 'row', alignItems: 'center',margin: 0}}><Image source={virus} style={{height: 17, width: 17, marginRight: 8 }}></Image><Text style={{textAlign: 'center', fontSize: 14, color: '#2E7467', fontWeight: 'bold'}}>DATOS COVID</Text></TouchableOpacity>
                    <Image source={logo} style={{height: 160, width: 160 }}></Image>
                    <TextInput placeholder="EMAIL" placeholderTextColor="#55A798" onChangeText={this.handleEmail} style={styles.textInput}></TextInput>
                    <TextInput placeholder="CONTRASEÑA" placeholderTextColor="#55A798" onChangeText = {this.handlePassword} secureTextEntry={true} style={styles.textInput}></TextInput>
                    <TouchableOpacity style={{margin: 5}}><Text style={{color: 'white', fontSize:14}}>¿OLVIDASTE TU CONTRASEÑA?</Text></TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.login(this.state.email, this.state.password)} style={styles.LogInButton}><Text style={styles.LogInText}>ACCEDER</Text></TouchableOpacity>
                    <View style={{borderWidth: 1, borderStyle: 'dotted', borderColor: '#BEDED8', minWidth: 300, margin: 10}}></View>
                    <View style={{margin: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={this._handleButtonPress} style={styles.SignInButton}><Text style={styles.SignInText}>REGISTRARSE</Text></TouchableOpacity>
                    </View>
                </View>
                
        );
    }
}

export default LogIn;