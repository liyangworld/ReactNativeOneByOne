'use strict';
/**
 * Created by liyang on 2017-07-12.
 */

import React,{Component} from 'react';
import {StyleSheet,View,Text,Button,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class BookStoreTabScreen extends Component {
    static navigationOptions = ({navigation})=>({
        headerTitle:'书城',
        tabBarLabel:'书城',
        tabBarIcon:({tintColor}) => (
            <Icon name="book" size={25} color={tintColor}/>
        ),
    });
    render(){
        return (
        <View style={{flex:1}}>
            <View style={{height:54,backgroundColor:'#00f',flexDirection:'row',alignItems:'center',}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DrawerOpen')}} style={{marginLeft:20}}>
                    <Icon name="user-circle" size={25} color="#fff" />
                </TouchableOpacity>
                <View style={{flex:1,alignItems:'center'}}>
                    <Text style={{color:'#fff'}}>书城</Text>
                </View>
            </View>

            <View style={{flex:1,alignItems:'center',justifyContent:'space-around'}}>
                <Text>书城</Text>
                <Button title={'跳到测试页面'} onPress={()=>{this.props.navigation.navigate('TestPage')}} />
            </View>
        </View>
        )
    }
}

export default BookStoreTabScreen ;