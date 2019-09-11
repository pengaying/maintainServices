import axios from 'axios';

// 系统设置请求
// 确定
export async function SystemOk(param) {
  console.log('param=====', param)
  axios({
    method: 'post',
    url: 'http://localhost/commandapi/sysSettings',
    params: param
  }).then(res => { console.log('res======', res) }).catch(error => console.log('error is', error));
}
