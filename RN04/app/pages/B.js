'use strict';
/**
 * Created by liyang on 2017-07-22.
 */

import React, {Component} from 'react';
import {View, Text,TextInput,Button} from 'react-native';

import {autobind} from 'core-decorators';
import {observable, computed, action} from "mobx";
import {inject, observer} from 'mobx-react/native';


@autobind @inject("TestStore") @observer
class B extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle:'B'
    });

    @observable editingFlag = false;
    @action toggle_editingFlag(){
        this.editingFlag = !this.editingFlag;
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1,justifyContent:'center'}}>
                <Text style={{marginVertical:20,textAlign:'center'}}>当前全局 item 的值为：{this.props.TestStore.item}</Text>
                {
                    this.editingFlag && (
                        <View style={{paddingHorizontal:20,marginHorizontal:10,borderWidth:1,borderColor:'#ccc'}}>
                            <TextInput autoFocus={true} value={this.props.TestStore.item}
                                       onChangeText={(value)=>{this.props.TestStore.set_item(value)}}
                                       style={{padding:0,}} underlineColorAndroid={'transparent'}
                            />
                        </View>
                    )
                }
                <View style={{marginTop:20,paddingHorizontal:10,}}>
                    <Button color={'#f60'} title={this.editingFlag?'隐藏编辑':'编辑item'} onPress={()=>{this.toggle_editingFlag()}}/>
                </View>
                <View style={{marginTop:20,paddingHorizontal:10,}}>
                    <Button title={'返回A页面'} onPress={()=>{this.props.navigation.goBack()}}/>
                </View>

            </View>
        )
    }
}

export default B;