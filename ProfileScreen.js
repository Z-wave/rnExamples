import React, { Component } from 'react';
import { Button,View } from 'react-native';

export default class ProfileScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{marginTop:100}}>
                <Button title = "Go to Jane's Main" onPress = { () => navigate('Main', { name: 'Jane' })}/>
            </View>
        );
    }
}