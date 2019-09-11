import axios from 'axios';
import TimeTick from './../components/Layoutside/CommandControl/TimeTick';

// 系统设置请求
// 确定
export async function SystemOk(param) {
  console.log('param=====', param)
  axios({
    method: 'post',
    url: 'http://localhost/commandapi/sysSettings',
    params: param
  }).then(res => { console.log('32323232323=======', res) }).catch(error => console.log('error is', error));
}

// 收件箱
export async function receiveTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/iboxapi/selectAll',
  }).catch(error => console.log('error is', error));
}
// 发件箱
export async function sendTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/oboxapi/selectAll',
  }).catch(error => console.log('error is', error));
}
// 备品备件数据库
export async function spareTableInitFetch() {
  // return axios({
  //   method: 'get',
  //   url: 'http://localhost/toolapi/getInit',
  // }).catch(error => console.log('error is', error));
}
// 装备控制数据库
export async function equipTableInitFetch() {
  console.log("333333")
  return axios({
    method: 'get',
    url: 'http://localhost/eqapi/selectAll',
  }).catch(error => console.log('error is', error));
}
// 自检数据库
export async function selfTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/selfapi/selectAll',
  }).catch(error => console.log('error is', error));
}

// 数据管理
// 测试数据 初始化表格数据
export async function TestDataTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/tdapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 按时间查询
export async function TestDataTimeQueryFetch(param) {
  // console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/tdapi/selectByTime',
    params: param
  }).catch(error => console.log('error is', error));
}
// 更多查询
export async function TestDataQueryMoreFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/tdapi/selectBy',
    data: param
  }).catch(error => console.log('error is', error));
}
// 报告
export async function TestDataReportFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/tdapi/selectByKey',
    params: param
  }).catch(error => console.log('error is', error));
}
// 删除
export async function TestDataDeleteFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/tdapi/deleteByKey',
    params: param
  }).catch(error => console.log('error is', error));
}

// 维修数据
// 初始化表格数据
export async function MaintainDataInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/rdapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 新建
export async function MaintainDataCreatFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rdapi/insertAll',
    data: param
  }).catch(error => console.log('error is', error));
}
// 点击详情
export async function MaintainDataDetailFetch(param) {
  // console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rdapi/selectByKey',
    params: param
  }).catch(error => console.log('error is', error));
}
// 修改
export async function MaintainDataModifyFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rdapi/update',
    params: param
  }).catch(error => console.log('error is', error));
}
// 删除
export async function MaintainDataDeleteFetch(param) {
  // console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rdapi/deleteByKey',
    params: param
  }).catch(error => console.log('error is', error));
}
// 添加 工具 
export async function MaintainDataAddToolFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rmatapi/insert',
    params: param
  }).catch(error => console.log('error is', error));
}
// 点击 修改 工具 
export async function ShowAddToolPopFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rmatapi/updateByKey',
    data: param
  }).catch(error => console.log('error is', error));
}

// 点击 删除 工具 
export async function MDDeleteToolFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rdapi/deleteByKey',
    params: param
  }).catch(error => console.log('error is', error));
}

// 添加 更换件清单 
export async function MaintainDataAddListFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rspapi/insert',
    params: param
  }).catch(error => console.log('error is', error));
}
// 点击 修改 更换件清单 
export async function ShowAddReplacePopFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rspapi/updateByKey',
    data: param
  }).catch(error => console.log('error is', error));
}
// 点击 删除 更换件清单
export async function MDDeleteListFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/rdapi/deleteByKey',
    params: param
  }).catch(error => console.log('error is', error));
}

// 维修日志
// 初始化表格数据
export async function MaintainLogInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/rjapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 筛选结果
export async function MaintainLogChooiceFetch(param) {
  console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/rjapi/selectBy',
    data: param
  }).catch(error => console.log('error is', error));
}

// 维修申请
// 初始化表格数据
export async function MaintainApplyInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/raapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 按时间查询
export async function MaintainApplyTimeQueryFetch(param) {
  // console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/raapi/selectByTime',
    params: param
  }).catch(error => console.log('error is', error));
}
// 详情 
export async function MaintainApplyDetailFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/raapi/selectByKey',
    params: param
  }).catch(error => console.log('error is', error));
}
// 修改 
export async function MaintainApplyModifyFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/raapi/updateByKey',
    data: param
  }).catch(error => console.log('error is', error));
}
// 删除 
export async function MaintainApplyDeleteFetch(param) {
  console.log('param====', param)
  return axios({
    method: 'post',
    url: 'http://localhost/tdapi/selectByTime',
    params: param
  }).catch(error => console.log('error is', error));
}

// 备件申请记录
export async function SapreApplyTableInitFetch() {   //  初始化表格
  return axios({
    method: 'get',
    url: 'http://localhost/apapi/getInit',
  }).catch(error => console.log('error is', error));
}
export async function ChooiceApplyResultFetch(param) {   //  备件申请记录  筛选
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/apapi/selectBy',
    data: param
  }).catch(error => console.log('error is', error));
}
//  备件申请记录  查看
export async function ClickApplyDetailFetch(param) {
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/apapi/selectDetailBy',
    params: { 'aid': param }
  }).catch(error => console.log('error is', error));
}
//  备件申请记录  删除
export async function DeleteApplyDetailFetch(param) {
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/apapi/delete',
    params: { 'aid': param }
  }).catch(error => console.log('error is', error));
}

// 统计分析
// 初始化表格
export async function StatisticAnalysisInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/anapi/getInit',
  }).catch(error => console.log('error is', error));
}
//  详情 SN
export async function SADetailFetch(param) {
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/anapi/selectByKey',
    params: param
  }).catch(error => console.log('error is', error));
}
//  统计
export async function SAStatFetch(param) {
  console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/anapi/selectBy',
    data: param
  }).catch(error => console.log('error is', error));
}


// 电磁态势
// // 初始化表格 
export async function ElecSituationInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/elepapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 搜索 
export async function ESSearchFetch(param) {
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/elepapi/selectBy',
    data: param
  }).catch(error => console.log('error is', error));
}
//表格 删除 
export async function ESTableDeleteFetch(param) {
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/elepapi/deleteByKey',
    params: param
  }).catch(error => console.log('error is', error));
}
//  详情
export async function ESDetailFetch(param) {
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/edpapi/selectByRdId',
    params: param
  }).catch(error => console.log('error is', error));
}
// 详情 弹窗里的数据
export async function ESDetailPopFetch(param) {
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/edlpapi/selectByRdId',
    params: param
  }).catch(error => console.log('error is', error));
}
// 详情 弹窗里的删除
export async function ESDetailPopDeleteFetch(param) {
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost/edpapi/deleteByKey',
    params: param
  }).catch(error => console.log('error is', error));
}

// 阶段总结
// 初始化表格
export async function WorkSummaryInitTableFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost/suapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 详情
export async function WorkSummaryViewFetch(param) {
  // console.log('param========', param)
  return axios({
    method: 'post',
    url: 'http://localhost/suapi/select',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}
// 存为草稿
export async function ArtificialSummarySaveFetch(param) {
  // console.log('param========', param)
  // return axios({
  //   method: 'post',
  //   url: 'http://localhost/suapi/insert',
  //   data: param
  // }).catch(error => console.log('error is', error));
}
// 上报
export async function ArtificialSummaryReportFetch(param) {
  return axios({
    method: 'post',
    url: 'http://localhost/suapi/insert',
    data: param
  }).catch(error => console.log('error is', error));
}


// 侧边请求
//装备位置   
export async function equipLocation(param) {
  console.log("param=====", param)
  axios({
    method: 'post',
    url: 'http://localhost/commandapi/equipmentLocal',
    params: param
  }).catch(error => console.log('error is', error));
}
// 装备状态 
export async function equipState(param) {
  console.log("param=====", param);
  axios({
    method: 'post',
    url: 'http://localhost/commandapi/equipmentState',
    params: param
  }).catch(error => console.log('error is', error));
}
// 对时申请  
export async function timeTick() {
  // console.log("param=====",param)
  axios({
    method: 'post',
    url: 'http://localhost/commandapi/inserttime',
    // params: param
  }).catch(error => console.log('error is', error));
}
// 人员损失
export async function peopleLoss(param) {
  console.log("param=====", param)
  axios({
    method: 'post',
    url: 'http://localhost/commandapi/peopleLoss',
    params: param
  }).catch(error => console.log('error is', error));
}
// 物资损耗  
export async function materialLoss(param) {
  console.log("param=====", param)
  // fetch('http://localhost/commandapi/materialLoss?material=' + param.material + '&loss=' + param.loss + '&note=' + param.note, {
  //   method: 'POST',
  //   // body: new URLSearchParams([["foo", 1], ["bar", 2]]).toString() // 这里是请求对象
  // }).then((res) => {
  //   console.log(res)
  // })
  return axios({
    method: 'post',
    url: 'http://localhost/commandapi/materialLoss',
    params: param
  }).catch(error => console.log('error is', error));
}

// 装备损耗
export async function equipLoss(param) {
  console.log("param=====", param)
  axios({
    method: 'post',
    url: 'http://localhost/commandapi/equipmentLoss',
    params: param
  }).catch(error => console.log('error is', error));
}









export async function stationChooseFetch() {
  // let urll;
  // if (typeof window.getUrl == 'function') {
  //   urll = window.getUrl() //根据主站遥控本控模式设置（全局函数）
  // } else {
  //   urll = 'http://192.168.1.1' //默认请求前缀（根据各模块实际地址）
  // }
  return axios({
    method: 'get',
    url: urll + "/tcr/setStations",
  }).catch(error => console.log('error is', error));
}
