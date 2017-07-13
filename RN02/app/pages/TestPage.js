'use strict';
/**
 * Created by liyang on 2017-07-12.
 */

import React,{Component} from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

class TestPage extends Component {
    static navigationOptions = ({navigation})=>({
        headerTitle:'测试'
    });
    render(){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'space-around'}}>
                <Text>测试</Text>
                <Button title={'跳回首页'} onPress={()=>{this.props.navigation.navigate('Main')}}/>
            </View>
        )
    }
}

export default TestPage ;