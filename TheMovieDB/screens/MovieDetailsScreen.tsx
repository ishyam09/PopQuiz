import React from "react";
import { View, SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";

export default function MovieDetailsScreen() {
    return (
        <SafeAreaView style={styles.statusBarStyle}>
            <View>
                <Text>Hello MoreDetailsScreen</Text>
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
      backgroundColor: '#007aff',
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