import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    textInput: {
        backgroundColor: '#BEDED8',
        minWidth: 280,
        maxWidth: 280,
        borderRadius: 25,
        margin: 10,
        paddingLeft: 20,
        fontSize: 16
    },
    LogInButton: {
        backgroundColor: '#BEDED8',
        width: 170,
        height: 50,
        justifyContent: 'center',
        borderRadius: 30,
        margin: 10
    },
    SignInButton: {
        backgroundColor: '#2E7467',
        width: 170,
        height: 50,
        justifyContent: 'center',
        borderRadius: 30,
        margin: 20
    },
    LogInText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#2E7467',
        fontWeight: 'bold'
    },
    SignInText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#BEDED8',
        fontWeight: 'bold'
    }
})