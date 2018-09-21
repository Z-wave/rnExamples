import React, { Component } from 'react';
import { Button,View } from 'react-native';

export default class MainScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{marginTop:100}}>
                <Button title = "Go to profile" onPress = {() => navigate('Profile', { name: 'Jane' })} />
                <View style={{marginTop:30}}>
                    <Button title = "Go to list" onPress = {() => navigate('List', { name: 'Jane' })} />
                </View>
            </View>
        );
    }
}