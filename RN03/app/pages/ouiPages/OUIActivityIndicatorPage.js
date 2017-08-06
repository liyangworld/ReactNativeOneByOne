'use strict';
/**
 * Created by liyang on 2017-07-14.
 */


import React,{Component} from 'react';
import {StyleSheet,View,Text,} from 'react-native';

class OUIActivityIndicatorPage extends Component {
    static navigationOptions = ({navigation})=>({
        headerTitle:'View'
    });

    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{lineHeight:26,}}>      View 是创建UI时最基础的组件，它是一个支持 Flexbox 布局、样式、一些触摸处理、和一些无障碍功能的容器，类似于 div 标签。
                    {'\n'}      注意：View 没有 onPress 属性，Touchable 组件和 Text 组件 有 onPress 属性。
                    {'\n'}      View的设计初衷是和StyleSheet搭配使用。
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layoutWrap:{
        marginTop:10,
        backgroundColor:'#fff',
        paddingVertical:10,
        paddingHorizontal:5,
        flexDirection:'row'
    },
    item:{
        height:100,
        flex:1,
        marginHorizontal:5
    }
});

export default OUIActivityIndicatorPage;