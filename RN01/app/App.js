'use strict';
/**
 * Created by liyang on 2017-07-12.
 */

import React,{Component} from 'react';
import {Linking,StyleSheet,StatusBar,View,ScrollView,Text} from 'react-native';

class App extends Component {
    render(){
        const englishWebsite = 'http://facebook.github.io/react-native/docs/getting-started.html' ;
        const chineseWebsite = 'http://reactnative.cn/docs/0.45/getting-started.html' ;
        return (
        <View style={{flex:1,}}>
            <StatusBar hidden={false} backgroundColor={'#00f'}/>
            <ScrollView>
                <Text style={[styles.h1,{textAlign:'center'}]}>项目初始化、调试和发布</Text>
                <View style={{paddingHorizontal:10,paddingBottom:10}}>
                    <Text style={[styles.h2]}>一、开发环境的搭建</Text>
                    <View>
                        <Text>环境的搭建参考 ReactNative 官网：</Text>
                        <Text>
                            1. <Text style={{color:'#00f'}} onPress={()=>{Linking.openURL(englishWebsite)}}>{englishWebsite}</Text>  （英文网）
                        </Text>
                        <Text>
                            2. <Text style={{color:'#00f'}} onPress={()=>{Linking.openURL(chineseWebsite)}}>{chineseWebsite}</Text>     （中文网）
                        </Text>
                    </View>

                    <Text style={[styles.h2]}>二、项目初始化</Text>
                    <View>
                        <Text>在任意目录下使用 react-native-cli 初始化一个新项目。</Text>
                        <ScrollView horizontal={true}>
                            <Text style={[styles.code]}>
                                1. react-native init ProjectName --version 0.45.1{'\n'}
                                2. cd ProjectName{'\n'}
                                3. react-native run-android  （确保模拟器或真机已打开）
                            </Text>
                        </ScrollView>
                    </View>

                    <Text style={[styles.h2]}>三、项目调试</Text>
                    <View>
                        <Text>
                            在修改了项目中代码之后，可以双击 R 键 （模拟器）或  摇晃 （真机） 以打开开发者菜单，可以进行热更新和浏览器远程调试。
                        </Text>
                    </View>

                    <Text style={[styles.h2]}>四、项目发布</Text>
                    <View>
                        <Text>项目发布参考官网。以下是 Android 项目的打包发布流程。</Text>

                        <Text style={[styles.h3]}>1. 生成签名密钥</Text>
                        <View>
                            <Text>
                                在Windows上keytool命令放在JDK的bin目录中（比如C:\Program Files\Java\jdkx.x.x_x\bin），进入该目录在命令行中执行以下命令：
                            </Text>
                            <ScrollView horizontal={true}>
                                <Text style={[styles.code]}>
                                    .\keytool -genkey -v -keystore d:\my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
                                </Text>
                            </ScrollView>

                            <Text>
                                执行之后将生成一个叫做 my-release-key.keystore 的密钥库文件。
                            </Text>
                        </View>

                        <Text style={[styles.h3]}>2. 设置 gradle 变量</Text>
                        <View>
                            <Text>
                                1>  把 my-release-key.keystore 文件放到你工程中的 android/app 文件夹下。
                            </Text>
                            <Text>
                                2>  编辑 ~/.gradle/gradle.properties（没有这个文件就创建一个），添加如下的代码:
                            </Text>
                            <ScrollView horizontal={true}>
                                <Text style={[styles.code]}>
                                    MYAPP_RELEASE_STORE_FILE = my-release-key.keystore{'\n'}
                                    MYAPP_RELEASE_KEY_ALIAS = my-key-alias{'\n'}
                                    MYAPP_RELEASE_STORE_PASSWORD = *****{'\n'}
                                    MYAPP_RELEASE_KEY_PASSWORD = *****
                                </Text>
                            </ScrollView>
                            <Text>
                                注意把其中的****替换为相应密码，~ 表示用户目录，比如windows上可能是C:\Users\用户名，而mac上可能是/Users/用户名。
                            </Text>
                        </View>


                        <Text style={[styles.h3]}>3. 添加签名到项目的 gradle 配置文件</Text>
                        <View>
                            <Text>
                                编辑项目目录下的 android/app/build.gradle，添加如下的签名配置：
                            </Text>
                            <ScrollView horizontal={true}>
                                <Text style={[styles.code]}>
                                {`android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}`}
                                </Text>
                            </ScrollView>
                        </View>

                        <Text style={[styles.h3]}>4. 生成 release 版 APK 包</Text>
                        <View>
                            <Text>进入 android 目录执行以下命令：</Text>
                            <Text style={[styles.code]}>./gradlew assembleRelease</Text>
                            <Text>生成的APK文件位于 android/app/build/outputs/apk/app-release.apk 。</Text>
                        </View>

                        <Text style={[styles.h3]}>5. 测试应用的 release 版</Text>
                        <View>
                            <Text>进入 android 目录执行以下命令：</Text>
                            <Text style={[styles.code]}>./gradlew installRelease</Text>
                            <Text>Release 版 APK 将安装到模拟器或真机中，此时可离线使用了。</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    h1:{
        fontWeight:'bold',
        fontSize:18,
        paddingVertical:10
    },
    h2:{
        fontWeight:'bold',
        fontSize:16,
        paddingVertical:10
    },
    h3:{
        fontWeight:'400',
        fontSize:14,
        paddingVertical:10
    },
    code:{
        backgroundColor:'#ccc',
        borderColor:'#00f',
        borderLeftWidth:3,
        padding:5,
        paddingLeft:10,
    }
});

export default App ;