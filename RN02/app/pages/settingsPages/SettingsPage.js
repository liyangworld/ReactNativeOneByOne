'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React,{Component} from 'react';
import {View,Text} from 'react-native';

class SettingsPage extends Component {

    static navigationOptions = ({navigation})=>({
        headerTitle:'设置页面'
    });

    render(){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>这是设置页面</Text>
            </View>
        )
    }
}

export default SettingsPage;