'use strict';
/**
 * Created by liyang on 2017-07-12.
 */

import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class BookRankTabScreen extends Component {
    static navigationOptions = ({navigation})=>({
        headerTitle:'排行榜',
        tabBarLabel:'排行榜',
        tabBarIcon:({tintColor}) => (
            <Icon name="signal" size={25} color={tintColor}/>
        )
    });
    render(){
        return (
            <View style={{flex:1}}>
                <View style={{height:54,backgroundColor:'#00f',flexDirection:'row',alignItems:'center',}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DrawerOpen')}} style={{marginLeft:20}}>
                        <Icon name="user-circle" size={25} color="#fff" />
                    </TouchableOpacity>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={{color:'#fff'}}>排行榜</Text>
                    </View>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'space-around'}}>
                    <Text>排行榜</Text>
                </View>
            </View>
        )
    }
}

export default BookRankTabScreen ;