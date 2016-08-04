
import Util from '../libs/Util.js';

export function callServer(method, api, APIinfo) {

  return new Promise((resolve, reject) => {
    var formBody=Util.getDefauldParams(api);
    for (var property in APIinfo) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(APIinfo[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return fetch(Util.getURLSV(), {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    }).then((response) => response.json())
      .then((responseData) => {
      console.log(responseData);
      resolve(responseData);

      // this.setState({
      //   dataSource: this.state.dataSource.cloneWithRows(responseData.data.listProduct),
      //   showloading: !this.state.showloading
      // });
    }).catch((error) => {
      console.error(error);
      reject(responseData);
    }).done();
  });
}

export function getList() {
  var APIinfo = {
    'stateId': '437',
    'offset': '0',
    'limit': '20',
    'categoryId': '557'
  }
  return dispatch => {
    dispatch(fetchTypeList());
    return callServer('post','product.getList', APIinfo)
      .then((typeList) => {
        dispatch(receiveTypeList(typeList.data.listProduct));
        const errorMessage = 'typeList.showapi_res_error';
        if (errorMessage && errorMessage !== '') {
          toastShort(errorMessage);
        }
      })
      .catch(() => {
        dispatch(receiveTypeList([]));
        toastShort('dfgdfgdfg');
      });
  };
}

function fetchTypeList() {
  return {
    type: "get"
  };
}

function receiveTypeList(typeList) {
  return {
    type: 'reciver',
    typeList
  };
}
