
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
      <View>
       <Image
          resizeMode='stretch'
          style={{width:Util.setWidth(1) , height:Util.setHeight(1)}}
          source={require('../img/hinh.jpg')}
       />
     </View>
    );
  }
}

export default AutoLayout;
