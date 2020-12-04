import React, { Component } from 'react';
import {
  Modal,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'


import PhoneInput from "react-native-phone-number-input";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    closeButton: {
        backgroundColor: '#2E7467',
        width: 150,
        height: 50,
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
        margin: 5
    },
    SignInText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    ModalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20
    }
});

class ModalNumber extends Component {
    constructor(props){
        super(props)
        this.state = {
          number: '',
          modalVisible: true,
          wrongNumber: false
        }
      }

      handleNumber = (text) => {
        this.setState({ number: text })
      }

      signin = (number) => {
        var reg1 = new RegExp('^[0-9]+$');
    
        console.log(number)
        console.log(number.length)
        if(reg1.test(number)=== true) {
          alert("Número Correcto")
          this.setState({wrongNumber: false})
        }
        else{
            this.setState({wrongNumber: true})
        }
        
    }
      
      _handleButtonPress = () => {
        this.setModalVisible(true);
      };
    
      setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
      }
      
      render() {
        var modalBackgroundStyle = {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        };
        return (
          <View style={styles.container}>
          <Modal
              animationType='fade'
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => this.setModalVisible(false)}
              >
              <View style={[styles.container, modalBackgroundStyle]}>
                <View style={styles.ModalContainer}>
                <PhoneInput ref='phone' defaultCode='ES' placeholder='Introduce teléfono' onChangeText={this.handleNumber}/>
                {this.state.wrongNumber ? (
                    <View>
                    <Text style={{color:'red', textAlign: 'center', marginTop: 20}}>* El número introducido no es correcto</Text>
                    </View>
                ): null
                }
                
                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                  <TouchableOpacity onPress = {() => this.signin(this.state.number)} style={styles.closeButton}><Text style={styles.SignInText}>Aceptar</Text></TouchableOpacity>
                  <TouchableOpacity title='close' style={styles.closeButton}
                    onPress={() => Actions.pop()}><Text style={styles.SignInText}>Cerrar</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          
          </View>
        );
      }
}

export default ModalNumber;