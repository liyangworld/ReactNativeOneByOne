'use strict';
/**
 * Created by liyang on 2017-07-22.
 */

import React, {Component} from 'react';
import {View, Text,Button} from 'react-native';

import {autobind} from 'core-decorators';
import {inject, observer} from 'mobx-react/native';

@autobind @inject("LoginStore") @observer
class Singup extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle:'Singup'
    });

    render() {
        return (
            <View style={{flex: 1,justifyContent:'center'}}>
                <Button title="注册成功" onPress={()=>{this.props.navigation.goBack()}}/>
            </View>
        )
    }
}

export default Singup;