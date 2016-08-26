import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View
} from 'react-native';
console.disableYellowBox = true;
import Splash from './pages/splash.js';
import Util from './libs/Util.js';

let tempNavigator;
let isRemoved = false;

class App extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.goBack = this.goBack.bind(this);
    BackAndroid.addEventListener('hardwareBackPress', this.goBack);
  }

  goBack() {
    return Util.naviGoBack(tempNavigator);
  }

  configureScene() {
      return Navigator.SceneConfigs.FloatFromRight;
    // return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    // let Component = route.component;

    // if (route.name === 'WebViewPage') {
    //   BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
    //   isRemoved = true;
    // } else {
    //   if (isRemoved) {
    //     BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    //   }
    // }
    // return (
    //   <Component navigator={navigator} route={route} />
    // );
    tempNavigator = navigator;
    if (route.component) {
      return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route});
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          ref="navigator"
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
          name: 'Splash',
          component: Splash,
          index: 0}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default App;
