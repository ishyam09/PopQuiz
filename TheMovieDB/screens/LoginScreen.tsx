import React, {useEffect, useState} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import axios from 'axios';

export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTcyZDFkYmU3OTI1ZGNjODY1ODQ5MjYyOTI5MDIzOSIsInN1YiI6IjVjMWU1NGZhMGUwYTI2NGRlMWViNDhlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6sUMp8hZtD87JFjh2Gex1L0eD78jT_f-tzdN8lNDrVw'
            }
        };

        try {
            const tokenResponse = await axios.get(
                `https://api.themoviedb.org/3/authentication/token/new`, 
                options
            ).then(res => {
                console.log('when res Token Response:', res.data);

                if(res.data.success) {
                    validateLogin(username, password, res.data.request_token)
                } else {
                    Alert.alert("Some thing wrong with the token")
                }
            })
            
        } catch (error) {
            Alert.alert(`Token request went wrong: ${error}`)
        }
    };

    const validateLogin = async (loginName: String, loginPassword: String, loginToken: String) => {
        console.log(`validateLogin: ${loginName} and ${loginPassword} and ${loginToken}`)

        const loginOptions = {
            method: 'POST',
            url: 'https://api.themoviedb.org/3/authentication/token/validate_with_login',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTcyZDFkYmU3OTI1ZGNjODY1ODQ5MjYyOTI5MDIzOSIsInN1YiI6IjVjMWU1NGZhMGUwYTI2NGRlMWViNDhlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6sUMp8hZtD87JFjh2Gex1L0eD78jT_f-tzdN8lNDrVw'
            },
            body: JSON.stringify({
              username: loginName,
              password: loginPassword,
              request_token: loginToken
            })
        }

        fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login', loginOptions)
        .then(response => response.json())
        .then(response => {
            console.log(`Print login response ${response.success}`)

            if(response.success) {
                navigation.navigate('Home');
            }

        })
        .catch(err => console.error(err));
    }

    return (
        <SafeAreaView style={styles.statusBarStyle}>
            <View style={styles.container}>
                <Text style={styles.textShadow}>The Movie {'\n'} Data Base</Text>
                <TextInput style={styles.textInputStyle}
                    placeholder='username' value={username}
                    autoCapitalize='none'
                    onChangeText={(text) => setUsername(text)}
                />

                <TextInput style={styles.textInputStyle}
                    placeholder='password' value={password}
                    autoCapitalize='none' secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    statusBarStyle: {
        flex:1, 
        marginTop:StatusBar.currentHeight
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInputStyle: {
        width: '80%', 
        height: 40, 
        paddingHorizontal: 10, 
        backgroundColor: "white",
        borderWidth: 1, 
        borderColor: 'gray', 
        borderRadius: 5, 
        marginBottom: 5,
        bottom:10
    },
    button: {
      width: '80%',
      backgroundColor: '#007aff', // Background color of the button
      borderRadius: 5,
      paddingVertical: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    textShadow: {
        fontSize:30,
        fontWeight: 'bold',
        textShadowColor: 'red',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius : 5,
        bottom:100
    }
});
