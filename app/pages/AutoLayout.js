
import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

import Util from '../libs/Util.js';
import MainContent from './MainContent.js';
import MainDemo from './MainDemo.js';

class AutoLayout extends Component {

  render() {
    return (
      <View style={{flex:1, flexDirection:"column"}}>
       <View style={{flex:1, flexDirection:"row"}}>
       <Image
          resizeMode='stretch'
          style={{width:Util.setWidth(2) , height:Util.setHeight(2)}}
          source={require('../img/hinh.jpg')}
       />
       <Image
          resizeMode='stretch'
          style={{width:Util.setWidth(2) , height:Util.setHeight(2)}}
          source={require('../img/hinh.jpg')}
       />
        </View>
        <View style={{flex:1, flexDirection:"row"}}>
        <Image
           resizeMode='stretch'
           style={{width:Util.setWidth(2) , height:Util.setHeight(2)}}
           source={require('../img/hinh.jpg')}
        />
        <Image
           resizeMode='stretch'
           style={{width:Util.setWidth(2) , height:Util.setHeight(2)}}
           source={require('../img/hinh.jpg')}
        />
         </View>

     </View>
    );
  }
}

export default AutoLayout;
