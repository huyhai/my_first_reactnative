import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class TextView extends Component {
  render() {
    return (
      <View>
        <Text numberOfLines={this.props.numlines} style={{color:this.props.mau, fontSize:20}} >
          {this.props.text}

        </Text>
      </View>
    );
  }
}
