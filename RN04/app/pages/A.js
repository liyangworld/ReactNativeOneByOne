'use strict';
/**
 * Created by liyang on 2017-07-22.
 */

import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

import {autobind} from 'core-decorators';
import {observable, computed, action} from "mobx";
import {inject,observer} from 'mobx-react/native';

@autobind @inject("LoginStore","TestStore") @observer
class A extends Component {
    static navigationOptions = ({navigation})=>({
        headerTitle:'A'
    });

    @observable str = 'a';
    @observable isShowStr = true;

    @action toggle_isShowStr(){
        this.isShowStr = !this.isShowStr;
    }

    constructor(props){
        super(props);
        this.str += 'a';
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{textAlign:'center'}}>
                   全局 item 的 值为：{this.props.TestStore.item}
                </Text>
                {
                    this.isShowStr && (
                        <Text style={{textAlign:'center',marginTop:10,}}>
                            局部变量 str 的 值为：{this.str}
                        </Text>
                    )
                }
                <View style={{marginTop:20,}}>
                    <Button color={'#f60'} title={this.isShowStr?'隐藏局部变量str':'显示局部变量str'} onPress={()=>{this.toggle_isShowStr()}}/>
                </View>
                <View style={{marginTop:20,}}>
                    <Button title={'去B页面'} onPress={()=>{this.props.navigation.navigate('B')}}/>
                </View>
                <View style={{marginTop:20,}}>
                    <Button color={'#f00'} title={'退出登陆'} onPress={()=>{this.props.LoginStore.set_isAuthenticated(false)}}/>
                </View>
            </View>
        )
    }
}

export default A;