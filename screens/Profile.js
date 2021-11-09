import React from "react"
import { Component } from "react";
import { View,Text,StyleSheet,ImageBackground } from "react-native";

export default class Profile extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <ImageBackground>
                    
                </ImageBackground>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    }

})
   