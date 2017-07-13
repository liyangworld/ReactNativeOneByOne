'use strict';
/**
 * Created by liyang on 2017-07-13.
 */
import React from 'react';
import {StyleSheet,View,ScrollView,Text,Button,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DrawerItems } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <View style={{height:100,backgroundColor:'#00f',flexDirection:'row',alignItems:'center'}}>
            <View style={{backgroundColor:'#fff',width:60,height:60,borderRadius:30,marginHorizontal:20}}></View>
            <View>
                <Text style={{color:'#fff',marginBottom:5,fontSize:12}}>登陆后可同步书架</Text>
                <Button title={'立即登陆'} color={'#f00'} onPress={()=>{}}/>
            </View>
        </View>
        <DrawerItems {...props} />
        <View style={{borderTopWidth:1,borderColor:'#ccc',paddingVertical:5}}>
            <View>
                <TouchableHighlight activeOpacity={0.6} underlayColor={'#ddd'}
                        onPress={()=>{
                            props.navigation.navigate('DrawerClose');
                            setTimeout(()=>{
                                props.navigation.navigate('SettingsPage')
                            },300);
                        }}>
                    <View style={{flexDirection:'row',alignItems:'center',paddingVertical:10,}}>
                        <Icon name="cog" color="#666" size={25} style={{marginLeft:16,marginRight:32}}/>
                        <Text>设置</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>

    </ScrollView>
);



export default CustomDrawerContentComponent;