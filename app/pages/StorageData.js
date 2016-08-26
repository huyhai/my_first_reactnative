import React, { Component } from 'react';
import { AppRegistry, View ,Text,TouchableOpacity,TextInput} from 'react-native';

import Util from '../libs/Util.js';
import Storage from '../libs/Storage';
class StorageData extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataState: '',
        textSave:''
     };
  }
  componentDidMount(){
    Storage.get('data').then((data) => {
            this.setState({dataState:data})
    });
  }
  render() {

    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>
        <Text>
              {'Data From Storage: '+this.state.dataState}
        </Text>

        <TextInput
            style={{height: 40,width:Util.setWidth(1), borderColor: 'gray', borderWidth: 1}}
             placeholder="nhap data!"
             onChangeText={(text) => this.setState({textSave:text})}
           />

        <TouchableOpacity onPress={() => this._handlePress2(this.state.textSave)}>
             <View style={{borderColor:'red',
               alignItems:'center',
               marginTop:10,
               borderWidth:2}}>
                <Text style={{padding:10}}>
                    SAVE
                </Text>
             </View>
         </TouchableOpacity>
      </View>
    );
  }

  _handlePress2(dataStr){
    console.log(dataStr);
      Storage.save('data', dataStr);
      this.props.navigator.pop();
  }
};


export default StorageData;
