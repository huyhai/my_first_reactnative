
import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,Alert,PixelRatio,StatusBar,TouchableOpacity,ListView,Text,TouchableHighlight,TextInput

} from 'react-native';

import Rating from 'react-native-easy-rating'
import Util from '../libs/Util.js';
import DrawerLayout from 'react-native-drawer-layout';
import Spinner from '../libs/loading.js';
import { getList } from '../services/DataManager.js';
import Test from './test.js';
var arr = [];
const propTypes = {
  dispatch: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
};
import Storage from '../libs/Storage';


var UID123_object = {
    accounting: []
};


class MainContent extends Component {
  getList(){
    return arr;
  }

  componentWillMount(){
    Storage.get('text')
      .then((text) => {
        if(null==text){
                console.log('null');
          Storage.save('text', UID123_object);
        }
        console.log('dkm '+text);
          text.forEach(function(entry) {
            console.log(entry.name);
        }, this);

      });
    // Storage.save('text', vvv);

  //  alert("POST " +typeof arr);

  }

  getBlockHome() {
    var formBody=Util.getDefauldParams('product.getList');
    var APIinfo = {
      'stateId': '437',
      'offset': '0',
      'limit': '20',
      'categoryId': '557'
    }
    for (var property in APIinfo) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(APIinfo[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return fetch(Util.getURLSV(), {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    }).then((response) => response.json())
      .then((responseData) => {
      console.log(responseData);

      // var len = responseData.data.listProduct.length;
      // for (var i = 0; i < len; i++) {
      //     arr.push({
      //         name: responseData.data.listProduct[i].name,
      //         price: responseData.data.listProduct[i].price,
      //         sortable: true,
      //         resizeable: true
      //     });
      // }
      arr.push(responseData.data.listProduct);
      // arr.forEach(function(entry) {
      //   console.log(entry.name);
      // }, this);

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.data.listProduct),
        showloading: !this.state.showloading
      });

    }).catch((error) => {
      console.error(error);
    }).done();
  }



  constructor(props) {
   super(props);
   var ds = new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
     });
     this.state = {
        dataSource: ds.cloneWithRows([]),
        starCount: 3.5,
        drawerLockMode:'unlocked',
        showloading: true
     };

  }

  _renderRow(data, sectionID, rowID) {
      return (
        <TouchableOpacity onPress={() => this._handlePress(data)}>
          {this._renderButton(data)}
          <View style={styles.line}>
          </View>
        </TouchableOpacity>
      );
  }

  _handlePress(item){
    // console.log(typeof arr)

    this.props.navigator.push({
      name: 'g',
      component: Test,
      passProps: {av: arr},
    });
      // this.props.navigator.pop();
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  _renderButton(item){
    // Alert.alert(
    //   "POST",
    //   "Response Body -> " + getTextSize(GLOBAL.TEXTSIZEMEDIUM)+" a= "+GLOBAL.DEVICE_WIDTH
    // )

console.log(item.image);
    return (
      <View style={styles.row}>
        <View style={styles.rowleft}>
          <Image  source={{uri: item.image}}
                  style={{flex:1}} />
        </View>
        <View style={styles.rowright}>
            <Text numberOfLines={2} style={styles.textMediumBlackNormal} >
            {item.name}
            </Text>

            <View style={styles.rowstar1}>
              <View >
              <Rating
                  rating={1}
                  max={5}
                  iconWidth={Util.setWidth(20)}
                  iconHeight={Util.setWidth(20)}
                  editable={false}
                  iconSelected={require('../img/start_yellow.png')}
                  iconUnselected={require('../img/start_grey.png')}
                  onRate={(rating) => this.setState({starCount: rating})}/>
              </View>

            </View>

            <View style={styles.rowstar}>
              <Image
                resizeMode='contain'
                style={styles.tag}
                source={require('../img/icon_tag.png')}>
                <Text numberOfLines={1} style={styles.textSmallDiscount}>
                  {item.discountValue+'%'}
                </Text>
              </Image>
              <Text numberOfLines={1} style={styles.textMediumRed} >
                {Util.formatMoney(item.price,0, ',', '.')}

              </Text>
              <Text numberOfLines={1} style={styles.textMediumBlack}>
                {Util.formatMoney(item.listPrice,0, ',', '.')}

              </Text>
            </View>
            <View style={styles.rowstar}>
              <Image
                resizeMode='stretch'
                style={styles.nguoimua}
                source={require('../img/ic_nguoimua.png')}>
              </Image>
              <Text numberOfLines={1} style={styles.textMediumBlackRate}>
                {Util.formatMoney(item.nowNumber,0, ',', '.')}

              </Text>
            </View>
        </View>
      </View>
    );
  }
  pressStarButton (rating) {
    console.log('stayt');
  }
  _renderHeader() {
      return (
        <Text>This is some text. This is some text. This is some text. This is some text.</Text>
      );
  }

  render() {

    var navigationView = (
      <View style={[styles.containerslide, {backgroundColor: '#fff'}]}>
        <Text>Hello there!</Text>
        <TouchableHighlight onPress={() => this.drawer.closeDrawer()}>
          <Text>Close drawer</Text>
        </TouchableHighlight>
      </View>
    );

      return (

        <DrawerLayout
          onDrawerSlide={(e) => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)})}
          onDrawerStateChanged={(e) => this.setState({drawerStateChangedOutput: JSON.stringify(e)})}
          drawerWidth={Util.setWidth(1.2)}
          drawerLockMode={this.state.drawerLockMode}
          ref={(drawer) => { return this.drawer = drawer}}
          keyboardDismissMode="on-drag"
          renderNavigationView={() => navigationView}>

          <View style={styles.bg_all}>
            <Spinner visible={this.state.showloading} />
            <View style={styles.bg_header}>
              <View style={styles.bg_toogle}>
              <TouchableOpacity onPress={() => this.drawer.openDrawer()}>
                  <Image resizeMode='contain' style={styles.ic_header} source={require('../img/toggle.png')}/>
              </TouchableOpacity>
              </View>
              <View style={styles.bg_logo}>
                  <Image resizeMode='contain' style={styles.ic_logo} source={require('../img/logo_hotdealvn2.png')}/>
              </View>
              <View style={styles.bg_cart1}>
                  <Image resizeMode='contain' style={styles.ic_search_new} source={require('../img/ic_search_new.png')}/>
                  <Image resizeMode='contain' style={styles.ic_header} source={require('../img/ic_cart_new.png')}/>
              </View>
            </View>
            <View style={styles.bg_lv}>
              <ListView
                  style={styles.list}
                    // items={Array.from(category.typeList)}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                  enableEmptySections={true}
                  // renderHeader={this._renderHeader.bind(this)}
                  />
            </View>
          </View>
        </DrawerLayout>
      );
  }

  componentDidMount(){

   this.getBlockHome();
  //  console.log(StatusBarSizeIOS.currentHeight+" StatusBarManager.HEIGHT");
    // const { dispatch } = this.props;
    // dispatch(getList());
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
    // backgroundColor:'black',
    flex: 1

  },
  bg_header: {
    flexDirection:"row",
    backgroundColor:"red",
   //justifyContent: 'center',
    flex:1,
    paddingTop: (Util.isiOS()) ? 20 : 10,
    padding:10
  },
  bg_lv: {
    flex:16,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  ic_header:{
    width: PixelRatio.getPixelSizeForLayoutSize(10),
    height: PixelRatio.getPixelSizeForLayoutSize(12),
  },
  ic_search_new:{
    width: PixelRatio.getPixelSizeForLayoutSize(10),
    height: PixelRatio.getPixelSizeForLayoutSize(12),
    marginRight: PixelRatio.getPixelSizeForLayoutSize(4)
  },
  ic_logo:{
    width: PixelRatio.getPixelSizeForLayoutSize(50),
    height: PixelRatio.getPixelSizeForLayoutSize(12),
  },
  bg_toogle:{
    flex:1,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  bg_cart1:{
    flex:1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection:"row",
  },
  bg_logo:{
    flex:1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
      flex: 1,
      backgroundColor:'transparent',

  },
  row: {
      flex:1,
      padding: PixelRatio.getPixelSizeForLayoutSize(5),
      flexDirection: 'row'

  },
  rowleft: {
      flex:1,
  },
  rowright: {
      flex:2,
      marginLeft: PixelRatio.getPixelSizeForLayoutSize(7),
      flexDirection: 'column'

  },
  title: {
      fontSize: 20,
      color: 'white'
  },
  line: {
    borderWidth:0.2,
    borderColor:'black',
    // backgroundColor: 'black',
  },
  rowstar: {
    flexDirection:"row",
    alignItems:"center"
  },
  rowstar1: {

    flexDirection:"row",
    // justifyContent:"center"
    // alignItems:"center",
    // height: 10,

  },

  nguoimua:{
    width:Util.setWidth(22),
    height:Util.setHeight(36)

  },
  textMediumRed:{
    color:'red',
    fontSize:Util.getTextSize(GLOBAL.TEXTSIZEMEDIUM_LARGE),
    // height: GLOBAL.DEVICE_HEIGHT/40,
    marginLeft:PixelRatio.getPixelSizeForLayoutSize(5),
  },
  textMediumBlack:{
    color:'#7c7c7c',
    fontSize:Util.getTextSize(GLOBAL.TEXTSIZEMEDIUM),
    marginLeft:PixelRatio.getPixelSizeForLayoutSize(5),
    textDecorationLine: 'line-through'
  },
  textMediumBlackNguoimua:{
    color:'#7c7c7c',

    fontSize:Util.getTextSize(GLOBAL.TEXTSIZEMEDIUM),
    marginLeft:PixelRatio.getPixelSizeForLayoutSize(5),

  },
  textSmallDiscount:{

    fontSize:Util.getTextSize(GLOBAL.TEXTSIZESMALL),
    color:'white'

  },
  textMediumBlackRate:{
    color:'#7c7c7c',
    fontSize:Util.getTextSize(GLOBAL.TEXTSIZEMEDIUM),
    marginLeft:PixelRatio.getPixelSizeForLayoutSize(5),

  },
  textMediumBlackNormal:{
    color:'#7c7c7c',
    fontSize:Util.getTextSize(GLOBAL.TEXTSIZEMEDIUM),

  }

});

export default MainContent;
