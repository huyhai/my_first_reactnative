
import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

import Util from '../libs/Util.js';
import MainContent from './MainContent.js';

class Splash extends Component {

  constructor(props) {
   super(props);

 }
 choosenLocation() {
   this.props.navigator.push({
     name: 'main',
     component: MainContent,
     passProps: {username: 'fuck'},
   });
 }
 componentDidMount() {
   setTimeout(
     () => { this.choosenLocation()},
     1000
   );
 }

  render() {
    return (
      <View>
       <Image
        style={{width:Util.setWidth(1) , height:Util.setHeight(1)}}
        source={require('../img/splash.png')}
       />
     </View>
    );
  }
}

export default Splash;
