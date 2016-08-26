import React, { Component } from 'react';
import { AppRegistry, View ,Text,TouchableOpacity} from 'react-native';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
        countNumber: 0
     };
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>
        <Text>
              {'Count: '+this.state.countNumber}
        </Text>

        <TouchableOpacity onPress={() => this._handlePress2()}>
             <View style={{borderColor:'red',
               alignItems:'center',
               marginTop:10,
               borderWidth:2}}>
                <Text style={{padding:10}}>
                    PLUS
                </Text>
             </View>
         </TouchableOpacity>
      </View>
    );
  }
  _handlePress2(){
    this.setState({ countNumber: this.state.countNumber+1});
  }
};


export default State;
