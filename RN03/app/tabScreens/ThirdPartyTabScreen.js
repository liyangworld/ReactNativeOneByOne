'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React,{Component} from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ThirdPartyTabScreen extends Component {

    static navigationOptions = ({navigation})=>({
        headerTitle:'第三方',
        tabBarLabel:'第三方',
        tabBarIcon:({tintColor})=>(
            <Icon name="github" color={tintColor} size={25}/>
        )
    });

    render(){
        return(
            <View style={{flex:1}}>
                <Text>第三方页面</Text>
            </View>
        )
    }
}

export default ThirdPartyTabScreen;