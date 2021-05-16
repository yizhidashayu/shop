import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = (vue) => {
  axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
  vue.prototype.$http = axios
}
export default MyHttpServer
