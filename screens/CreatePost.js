import React from "react"
import { Component } from "react";
import { View,Text,StyleSheet } from "react-native";


 export default class CreatePost extends Component{
     render(){
         return(
             <View style = {styles.container}>
                 <Text> Create Post</Text>
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
   