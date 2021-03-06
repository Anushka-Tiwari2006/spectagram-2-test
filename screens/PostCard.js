import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";
import {Text,View,StyleSheet,Image} from "react-native";
import { Component } from "react";

export default class PostCard extends Component{
    render(){
        return(
            <View style = {styles.container}>
              <View style = {styles.cardContainer}>
                  <View style = {styles.authorContainer}>
                      <View style = {styles.authorImageContainer}>
                          <Image source={require("../assets/profile_img.png")}
                                 style ={styles.authorImage}>
                                 </Image>                               
                      </View>
                      <View style = {styles.authorNameContainer}>
                          <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
                      </View>
                  </View>
                  <Image source={require("../assets/post.jpeg")}
                style = {styles.postImage}></Image>
                <View style = {styles.captionContainer}>
                    <Text style = {styles.captionText}>{this.props.post.caption}</Text>
                </View>
                <View style = {styles.actionContainer}>
                    <View style = {styles.likeButton}>
                        <Ionicons
                        name = {"heart"}
                        size={RFValue(30)}
                        color = {"white"}/>
                        <Text style = {styles.likeText}> 12k </Text>
                    </View>
                </View>
                  </View>  
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