'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DeliciousFoodDrawerScreen extends Component {
    static navigationOptions = ({navigation})=>({
        drawerLabel: '美食',
        drawerIcon: ({ tintColor }) => (
            <Icon name="apple" size={25} color={tintColor} />
        )
    });

    render(){
        return(
            <View style={{flex:1}}>

                <View style={{height:54,backgroundColor:'#00f',flexDirection:'row',alignItems:'center',}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DrawerOpen')}} style={{marginLeft:20}}>
                        <Icon name="user-circle" size={25} color="#fff" />
                    </TouchableOpacity>

                    <View style={{flex:1,alignItems:'center',}}>
                        <Text style={{color:'#fff'}}>美食</Text>
                    </View>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'space-around'}}>
                    <Text>美食</Text>
                </View>
            </View>

        )
    }

}

export default DeliciousFoodDrawerScreen;