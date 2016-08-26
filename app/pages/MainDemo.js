
import React, { Component } from 'react';
import {
  View,
  Image,StyleSheet,Text,Alert,TouchableOpacity
} from 'react-native';

import Util from '../libs/Util.js';
import WidgetAndLayout from './WidgetAndLayout.js';
import AutoLayout from './AutoLayout.js';
import State from './State.js';
import StorageData from './StorageData.js';
import TransferData from './TransferData.js';
import CustomView from './CustomView.js';
import MainContent from './MainContent.js';

class MainDemo extends Component {

  constructor(props) {
   super(props);
   console.log('constructor call');
 }
 choosenLocation() {
   this.props.navigator.push({
     name: 'main',
     component: WidgetAndLayout,
     passProps: {username: 'fuck'},
   });
 }
 componentDidMount() {
   console.log('componentDidMount call');
 }
 componentWillMount(){
   console.log('componentWillMount call');
 }

  render() {
    console.log('render call');
    return (
      <View style={styles.bg_all}>
        <TouchableOpacity onPress={() => this._handlePress()}>
             <View style={styles.button}>
                <Text>
                    Layout with flex
                </Text>
             </View>
         </TouchableOpacity>

        <TouchableOpacity onPress={() => this._handlePress1()}>
             <View style={styles.button}>
                <Text>
                    Auto Layout
                </Text>
             </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => this._handlePress2()}>
              <View style={styles.button}>
                 <Text>
                     State
                 </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this._handlePress3()}>
               <View style={styles.button}>
                  <Text>
                      Storage local data
                  </Text>
               </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => this._handlePress4()}>
                <View style={styles.button}>
                   <Text>
                       Transfer data between class
                   </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this._handlePress5()}>
                 <View style={styles.button}>
                    <Text>
                        Custom view
                    </Text>
                 </View>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => this._handlePress6()}>
                  <View style={styles.button}>
                     <Text>
                         DEMO WITH CONNECT API
                     </Text>
                  </View>
              </TouchableOpacity>
     </View>
    );
  }
  _handlePress6(){
    this.props.navigator.push({
      name: 'main',
      component: MainContent,
      passProps: {username: 'fuck'},
    });
  }
  _handlePress5(){
    this.props.navigator.push({
      name: 'main',
      component: CustomView,
      passProps: {username: 'fuck'},
    });
  }
  tranfer(str) {
    this.props.navigator.push({
      name: 'main',
      component: TransferData,
      passProps: {data: str},
    });
  }
  _handlePress4(){
    Alert.alert(
      'THÔNG BÁO',
      'CHỌN MỘT NÚT',
      [
        {text: 'Ask me later', onPress: () => this.tranfer('Ask me later')},
        {text: 'Cancel', onPress: () => this.tranfer('Cancel'), style: 'cancel'},
        {text: 'OK', onPress: () => this.tranfer('OK')},
      ]
    )

  }
  _handlePress3(){
    this.props.navigator.push({
      name: 'main',
      component: StorageData,
      passProps: {username: 'fuck'},
    });
  }
  _handlePress2(){
    this.props.navigator.push({
      name: 'main',
      component: State,
      passProps: {username: 'fuck'},
    });
  }
  _handlePress1(){
    this.props.navigator.push({
      name: 'main',
      component: AutoLayout,
      passProps: {username: 'fuck'},
    });
  }
  _handlePress(){
    // Alert.alert(
    //   "Message", 'responseData.data.listProduct'
    // )
     this.choosenLocation();
  }
}

var styles = StyleSheet.create({
  tag: {
    width: Util.setWidth(16),
    height: Util.setWidth(15),
    alignItems:"center" ,
    justifyContent:"center"
  },
  container: {
    padding: 20,
    flex: 1,
  },
  containerslide: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  bg_all: {
    flex: 1,
    padding:20,
    flexDirection:'column'
  },
  button:{

    borderColor:'red',
    alignItems:'center',
    padding:10,
    marginTop:10,
    borderWidth:1
  }

});


export default MainDemo;
