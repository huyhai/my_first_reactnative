import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class WidgetAndLayout extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};


export default WidgetAndLayout;
