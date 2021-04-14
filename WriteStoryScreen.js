import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native';
import db from '../config.js';
import firebase from 'firebase';


export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            story1:'',
            story2:'',
            story3:'',
        }
    }
    initiateStory = async ()=>{
        db.collection("stories").add({
          'story':this.state.story3,
        })}

    render(){
        return(
<View>
<Image style={styles.logo} source={require('../assets/image.png')} />
<TextInput
               style= {styles.loginBox}
               placeholder="write story title"
               onChangeText={(text)=>{
                   this.setState({
                       story1:text
                   })
               }}
               />
               <TextInput
               style= {styles.loginBox}
               placeholder="write story author"
               onChangeText={(text)=>{
                   this.setState({
                    story2:text
                   })
               }}
               />
                 <TextInput
               style= {styles.loginBoxTwo}
               placeholder="write story"
               onChangeText={(text)=>{
                   this.setState({
                    story3:text
                   })
               }}
               />
               <TouchableOpacity style= {{height:30,width:90,borderWidth:1,marginLeft:130,paddingTop:5,paddingLeft:20,borderRadius:7}}
                                 onPress={this.initiateStory}>
                   <Text>Submit</Text>
               </TouchableOpacity>
        
        </View>
            )    }
}
const styles = StyleSheet.create({
    loginBox:
    {
      width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin:30,
    paddingLeft:10
    },
    loginBoxTwo:
    {
      width: 300,
    height: 200,
    borderWidth: 1.5,
    fontSize: 20,
    margin:30,
    paddingLeft:10
    },
    logo: {
        margin:10,
        height: 128,
        width: 328,
      }
  })