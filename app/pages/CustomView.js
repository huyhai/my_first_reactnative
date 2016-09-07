import React, { Component } from 'react';
import { AppRegistry, View ,Text,TouchableOpacity,TextInput,BackAndroid} from 'react-native';

import Mytext from '../libs/MyTextView.js';
class CustomView extends Component {
  constructor(props) {
    super(props);
  //   BackAndroid.addEventListener('hardwareBackPress', function() {
  //       this.navigator.pop();
  //        return true;
  //
  // });
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>

        <Mytext text='DEMO react-native' mau='red'/>
        <Mytext text='this is a texttttt' mau='blue'/>
        <Mytext text='DEMO react-native' mau='red'/>
        <Mytext text='this is a texttttt' mau='blue'/>
        <Mytext text='DEMO react-native' mau='red'/>
        <Mytext text='this is a texttttt' mau='blue'/>
        <Mytext text='DEMO react-native' mau='red'/>
        <Mytext text='this is a texttttt' mau='blue'/>
      </View>
    );
  }


};


export default CustomView;
