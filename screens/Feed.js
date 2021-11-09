import React from "react"
import { Component } from "react";
import { View,Text,StyleSheet,SafeAreaView,Platform,StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "./PostCard"

 let posts = require("./temp_posts.json");


 export default class Feed extends Component{
     constructor(props){
         super(props)
     }
    renderItem = ({ item: posts }) => {
        return <PostCard posts={posts} />;
      };
    
      keyExtractor = (item, index) => index.toString();
    
     render(){
         return(
             <View style = {styles.container}>
                 <SafeAreaView style={styles.droidSafeArea}/>
                 <View style = {styles.appTittle}>
                     <View style = {styles.appIcon}>
                         <Image source={require("../assets/logo.png")}
                         style = {styles.iconImage}>
                         </Image>
                     </View>
                     <View style = {styles.appTittleTextContainer}>
                         <Text style = {styles.appTittleText}> Spectagram </Text>
                     </View>
                 </View>
                 <View styles = {styles.cardContainer}>
                     <FlatList
                     keyExtractor={this.keyExtractor}
                     data={posts}
                     renderItem={this.renderItem}
                     />
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
   