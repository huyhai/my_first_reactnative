import {
  Dimensions, PixelRatio,Alert,Platform
} from 'react-native';

import {md5Encode}  from './hmac-md5.js';
GLOBAL = require('./Globals.js');

var width = 0;
var height = 0;
class Util{

  static isiOS(){
    if(Platform.OS === 'ios'){
      return true;
    }
    return false;
  }

  static getURLSV(){
    return GLOBAL.BASE_URL;
  }
  static getDimens(){
    height =Dimensions.get('window').height;
    width =Dimensions.get('window').width;
  }
  static setWidth(layoutSize: number): number {
    if(width===0||height===0){
      this.getDimens();
    }
    return width / layoutSize;
  }
  static setHeight(layoutSize: number): number {
    if(width===0||height===0){
      this.getDimens();
    }
    return height / layoutSize;
  }
  static naviGoBack(navigator) {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }
    return false;
  }

  static  getDimen(message){
    var a=Dimensions.get('window').height;
    var b=Dimensions.get('window').width;
    GLOBAL.DEVICE_WIDTH=b;
    GLOBAL.DEVICE_HEIGHT=a;
    console.log(GLOBAL.DEVICE_WIDTH+' '+GLOBAL.DEVICE_HEIGHT+" accccc");
  }
  static  getTextSize(size){
    // showIOSAlert(PixelRatio.get()+"");
    if(Platform.OS === 'ios'){
      if(GLOBAL.DEVICE_HEIGHT === 568) {
           return size
       } else if(GLOBAL.DEVICE_HEIGHT === 667) {
           return size * 1.1
       } else if(GLOBAL.DEVICE_HEIGHT === 736) {
           return size * 1.2
       }

    }else if(Platform.OS === 'android'){
      if(GLOBAL.DEVICE_WIDTH <= 600) {
           return size
       } else if(GLOBAL.DEVICE_WIDTH > 600&&GLOBAL.DEVICE_WIDTH<=800) {
           return size * 1.2
       } else if(GLOBAL.DEVICE_WIDTH >800) {
           return size * 1.4
       }
    }
      return size
  }

    static  getDefauldParams(api){
      var formBody = [];
      formBody.push(GLOBAL.API + "=" + api);
      formBody.push(GLOBAL.DEVICE + "=" + 'android');
      console.log(api + 'android' + GLOBAL.PRIVATE_KEY +  GLOBAL.TIME_TAMP + GLOBAL.APPVERVALUE);
      var hash = md5Encode(api + 'android' + GLOBAL.PRIVATE_KEY +  Math.floor(Date.now() / 1000)+ GLOBAL.APPVERVALUE);
      formBody.push(GLOBAL.SIG + "=" + hash);
        // formBody.push(GLOBAL.SIG + "=" + 'DUONGNV');
      formBody.push(GLOBAL.APPVER + "=" + GLOBAL.APPVERVALUE );
    //  formBody.push(GLOBAL.TS + "=" + GLOBAL.TIME_TAMP );
        formBody.push(GLOBAL.TS + "=" + Math.floor(Date.now() / 1000));
      return formBody;
    }


    static  showAlert(message){
      Alert.alert(
        "POST",
        "Message: " + message
      )
    }
    static formatMoney(money,c, d, t){
      var n = money,
          c = isNaN(c = Math.abs(c)) ? 2 : c,
          d = d == undefined ? "." : d,
          t = t == undefined ? "," : t,
          s = n < 0 ? "-" : "",
          i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
          j = (j = i.length) > 3 ? j % 3 : 0;
         return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }

}
module.exports = Util;
