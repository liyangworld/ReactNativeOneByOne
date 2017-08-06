'use strict';
/**
 * Created by liyang on 2017-07-22.
 */

import React, {Component} from 'react';
import {View, Text,Button} from 'react-native';

import {autobind} from 'core-decorators';
import {inject, observer} from 'mobx-react/native';

@autobind @inject("LoginStore") @observer
class Login extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle:'Login'
    });

    render() {
        return (
            <View style={{flex: 1,justifyContent:'center'}}>
                <Button title="去注册" onPress={()=>{this.props.navigation.navigate('Singup')}}/>
                <View style={{marginVertical:20,}}>
                    <Button color={'#f00'} title="登陆成功" onPress={()=>{this.props.LoginStore.set_isAuthenticated(true)}}/>
                </View>
            </View>
        )
    }
}

export default Login;