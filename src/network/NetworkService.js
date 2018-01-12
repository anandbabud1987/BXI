import RequestService from './RequestService';

const BASE_URL = "http://192.168.2.24:2017/bixi-api";
const API_KEY = "?api-key=GET-YOUR-FREE-API-KEY:)";

class NetworkService {

  getUser(){
    var url = `${BASE_URL}/login/user`
    return RequestService.getRequest(url)
  }

  doLogin(data){
    var url=`${BASE_URL}/userprofile`
    return RequestService.postRequest(url,data);
  }

}

export default new NetworkService()
