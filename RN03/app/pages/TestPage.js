'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React,{Component} from 'react';
import {View,Text} from 'react-native';

class TestPage extends Component {

    static navigationOptions = ({navigation})=>({
        headerTitle:'测试'
    });

    render(){
        return(
            <View style={{flex:1}}>
                <Text>测试页面</Text>
            </View>
        )
    }
}

export default TestPage;