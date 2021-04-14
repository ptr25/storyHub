import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Image,Alert,KeyboardAvoidingView,ToastAndroid,FlatList} from 'react-native';
import db from '../config.js';


export default class ReadStoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allStories:[],
        }}
        componentDidMount=async()=>{
            const query = await db.collection('stories').get()
            query.docs.map((doc)=>{
                this.setState({
                    allStories:doc,
                })
            })
        }
        render(){
            return(
        <View>
        <Text>this.state.allStories</Text>
        </View>
        )
    }
    }