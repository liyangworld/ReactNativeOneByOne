'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React,{Component} from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CustomTabScreen extends Component {

    static navigationOptions = ({navigation})=>({
        headerTitle:'自定义',
        tabBarLabel:'自定义',
        tabBarIcon:({tintColor})=>(
            <Icon name="user-circle" color={tintColor} size={25}/>
        )
    });

    render(){
        return(
            <View style={{flex:1}}>
                <Text>自定义页面</Text>
            </View>
        )
    }
}

export default CustomTabScreen;