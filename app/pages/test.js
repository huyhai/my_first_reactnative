
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,Alert,PixelRatio,StatusBar,TouchableOpacity,ListView,Text,TouchableHighlight,TextInput

} from 'react-native';
import Storage from '../libs/Storage';
var age1=1;
let UID123_object = {name: 'Chris', age: age1, traits: {hair: 'brown', eyes: 'brown'}};

class Test extends Component {
  componentDidMount(){
    // var cars = this.props.av;
    //   cars[0].forEach(function(entry) {
    //     console.log(entry.name);
    //   }, this);
  }

  render(){
    return(
      <View style={{flex:1, paddingTop:50}}>
        <TouchableOpacity onPress={() => this.handlePress()}>
          <Text numberOfLines={2}>
          heheheheeheheh
          </Text>
          </TouchableOpacity>
      </View>
    );

  }
  handlePress(){
//     var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
//
// var obj = JSON.parse(jsonStr);
// obj['theTeam'].push({"teamId":"4","status":"pending"});
// jsonStr = JSON.stringify(obj);
// console.log(jsonStr);

    Storage.get('text')
      .then((vvv) => {

        // var abc=JSON.parse(vvv);
        // console.log(typeof abc);
        vvv.push(JSON.stringify(UID123_object));
        // var jsonStr = JSON.stringify(obj);
        Storage.save('text', vvv);
      });


    this.props.navigator.pop();
  }
}
export default Test;
