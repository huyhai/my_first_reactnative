import React, { Component } from 'react';
import { AppRegistry, View ,Text,TouchableOpacity,TextInput} from 'react-native';

class TransferData extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>
        <Text>
              {'You Choosen: '+this.props.data}
        </Text>
      </View>
    );
  }

};


export default TransferData;
