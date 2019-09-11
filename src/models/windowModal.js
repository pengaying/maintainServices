import {
  receiveTableInitFetch, sendTableInitFetch,
  spareTableInitFetch, equipTableInitFetch,
  selfTableInitFetch
} from '../services/services';//发起请求

export default {

  namespace: 'windowModal',

  state: {
    hiddenmenu: true,  //控制二级菜单显隐  为true显示
    showLayoutSide: 'EquipmentState',// 装备状态 侧边栏显示  true显示
    showEquipmentState: true,// 装备状态 侧边栏显示  true显示
    showCommandControl: true,//  侧边栏显示  true显示
    showScheduledTask: true,// 装备状态 侧边栏显示  true显示

    showReceiveMessage: true,//停靠区侧边栏 收件箱显隐  true显示
    showSendMessage: true,//停靠区侧边栏 发件箱显隐  true显示
    showDockerArea: 'ReceiveMessage',//停靠区侧边栏 收件箱显示  true显示


    receiveTableInitDataSource: null,//数据库  收件箱表格数据
    sendTableInitDataSource: null,//数据库  发件箱 表格数据
    spareTableInitDataSource: null,//数据库  备品备件数据库 表格数据
    equipTableInitDataSource: null,//数据库  装备控制数据库 表格数据
    selfTableInitDataSource: null,//数据库  自检数据库 表格数据

    EquipLocation: false,//装备位置 弹窗显隐  true显示
    EquipState: false,//装备状态 弹窗显隐  true显示
    TimeTick: false,//对时申请 弹窗显隐  true显示
    PeopleLoss: false,//人员损失 弹窗显隐  true显示
    MaterialLoss: false,//物资损耗 弹窗显隐  true显示
    EquipLoss: false,//装备损耗 弹窗显隐  true显示
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    // 收件箱
    *receiveTableInit({ payload }, { call, put }) {
      const callData = yield call(receiveTableInitFetch);
      console.log('收件箱初始化=======', callData)
      yield put({ type: 'receiveTableInitData', payload: callData.data });
      // yield put({ type: 'ChooseReceiveMessage' });
    },
    // 发件箱
    *sendTableInit({ payload }, { call, put }) {
      const callData = yield call(sendTableInitFetch);
      console.log('发件箱 初始化=======', callData)
      yield put({ type: 'sendTableInitData', payload: callData.data });
    },
    // 备品备件数据库
    *spareTableInit({ payload }, { call, put }) {
      const callData = yield call(spareTableInitFetch);
      console.log('备品备件数据库 初始化=======', callData)
      yield put({ type: 'spareTableInitData', payload: callData.data });
    },
    // 装备控制数据库
    *equipTableInit({ payload }, { call, put }) {
      console.log("33333333333")
      const callData = yield call(equipTableInitFetch);
      console.log('装备控制数据库 初始化=======', callData)
      yield put({ type: 'equipTableInitData', payload: callData.data });
    },
    // 自检数据库
    *selfTableInit({ payload }, { call, put }) {
      const callData = yield call(selfTableInitFetch);
      console.log('自检数据库  初始化=======', callData)
      yield put({ type: 'selfTableInitData', payload: callData.data });
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    closeLayoutside(state, { payload }) {//隐藏侧边栏布局
      return {
        ...state,
        showLayoutSide: false,
        showEquipmentState: false,
        showCommandControl: false,
        showScheduledTask: false,
      }
    },
    closeDockerArea(state, { payload }) {//隐藏停靠区
      return {
        ...state,
        showReceiveMessage: false,
        showSendMessage: false,
      }
    },
    showEquipmentState(state, { payload }) {// 装备状态
      return {
        ...state,
        showLayoutSide: state.showEquipmentState === false ? 'EquipmentState' :
          state.showScheduledTask === true ? 'ScheduledTask' :
            state.showEquipmentState === true ? 'CommandControl' : null,
        showEquipmentState: !state.showEquipmentState,
      }
    },
    ChooseEquipment(state, { payload }) {//选中 装备状态 侧边栏 
      return {
        ...state,
        showEquipmentState: true,// 装备状态 侧边栏显示  true显示  false关闭
        showLayoutSide: 'EquipmentState',
      }
    },
    showScheduledTask(state, { payload }) {// 计划任务
      return {
        ...state,
        showLayoutSide: state.showScheduledTask === false ? 'ScheduledTask' :
          state.showCommandControl === true ? 'CommandControl' :
            state.showEquipmentState === true ? 'EquipmentState' : null,
        showScheduledTask: !state.showScheduledTask,
      }
    },
    ChooseScheduledTask(state, { payload }) {//选中 计划任务 侧边栏 
      return {
        ...state,
        showLayoutSide: 'ScheduledTask',
        showScheduledTask: true,
      }
    },
    showCommandControl(state, { payload }) {//显示 指挥控制 侧边栏布局 
      return {
        ...state,//判断上一次的状态是否是未勾选上的，若未勾选状态为false，触发此次事件后状态为true
        showLayoutSide: state.showCommandControl === false ? 'CommandControl' :
          state.showScheduledTask === true ? 'ScheduledTask' :
            state.showEquipmentState === true ? 'EquipmentState' : null
        ,
        showCommandControl: !state.showCommandControl,
      }
    },
    ChooseCommandControl(state, { payload }) {//选中 指挥控制 侧边栏 
      return {
        ...state,
        showCommandControl: true,
        showLayoutSide: 'CommandControl',
      }
    },

    showReceiveMessage(state, { payload }) {//停靠区侧边栏 收件箱显隐 
      return {
        ...state,//判断上一次的状态是否是未勾选上的，若未勾选状态为false，触发此次事件后状态为true
        showDockerArea: state.showReceiveMessage === false ? 'ReceiveMessage' :
          state.showSendMessage === true ? 'SendMessage' : null,
        showReceiveMessage: !state.showReceiveMessage,
      }
    },
    ChooseReceiveMessage(state, { payload }) {//选中 收件箱 
      return {
        ...state,
        showReceiveMessage: true,
        showDockerArea: 'ReceiveMessage',
      }
    },
    showSendMessage(state, { payload }) {//停靠区侧边栏 发件箱显隐
      return {
        ...state,//判断上一次的状态是否是未勾选上的，若未勾选状态为false，触发此次事件后状态为true
        showDockerArea: state.showSendMessage === false ? 'SendMessage' :
          state.showReceiveMessage === true ? 'ReceiveMessage' : null,
        showSendMessage: !state.showSendMessage,
      }
    },
    ChooseSendMessage(state, { payload }) {//选中 发件箱 
      return {
        ...state,
        showSendMessage: true,
        showDockerArea: 'SendMessage',
      }
    },
    ResetLayout(state, { payload }) {// 重置布局
      return {
        ...state,
        showLayoutSide: 'EquipmentState',// 装备状态 侧边栏显示  true显示
        showEquipmentState: true,// 装备状态 侧边栏显示  true显示
        showCommandControl: true,//  侧边栏显示  true显示
        showScheduledTask: true,// 装备状态 侧边栏显示  true显示

        showReceiveMessage: true,//停靠区侧边栏 收件箱显隐  true显示
        showSendMessage: true,//停靠区侧边栏 发件箱显隐  true显示
        showDockerArea: 'ReceiveMessage',//停靠区侧边栏 收件箱显示  true显示
      }
    },

    receiveTableInitData(state, { payload }) {
      // console.log('receiveTableInitData', payload);
      return {
        ...state,
        receiveTableInitDataSource: payload
      }
    },
    sendTableInitData(state, { payload }) {
      // console.log('sendTableInitData', payload);
      return {
        ...state,
        sendTableInitDataSource: payload
      }
    },
    spareTableInitData(state, { payload }) {
      // console.log('spareTableInitData', payload);
      return {
        ...state,
        spareTableInitDataSource: payload
      }
    },
    equipTableInitData(state, { payload }) {
      // console.log('equipTableInitData', payload);
      return {
        ...state,
        equipTableInitDataSource: payload
      }
    },
    selfTableInitData(state, { payload }) {
      // console.log('selfTableInitData====', payload);
      return {
        ...state,
        selfTableInitDataSource: payload
      }
    },



    // 侧边栏弹窗显隐
    //装备位置 
    ShowEquipLocation(state, { payload }) {
      return {
        ...state,
        EquipLocation: true,
      }
    },
    HideEquipLocation(state, { payload }) {
      return {
        ...state,
        EquipLocation: false,
      }
    },
    //装备状态 弹窗显隐  true显示
    ShowEquipState(state, { payload }) {
      return {
        ...state,
        EquipState: true,
      }
    },
    HideEquipState(state, { payload }) {
      return {
        ...state,
        EquipState: false,
      }
    },
    //对时申请 弹窗显隐  true显示
    ShowTimeTick(state, { payload }) {
      return {
        ...state,
        TimeTick: true,
      }
    },
    HideTimeTick(state, { payload }) {
      return {
        ...state,
        TimeTick: false,
      }
    },
    //人员损失 弹窗显隐  true显示
    ShowPeopleLoss(state, { payload }) {
      return {
        ...state,
        PeopleLoss: true,
      }
    },
    HidePeopleLoss(state, { payload }) {
      return {
        ...state,
        PeopleLoss: false,
      }
    },
    //物资损耗 弹窗显隐  true显示
    ShowMaterialLoss(state, { payload }) {
      return {
        ...state,
        MaterialLoss: true,
      }
    },
    HideMaterialLoss(state, { payload }) {
      return {
        ...state,
        MaterialLoss: false,
      }
    },
    //装备损耗 弹窗显隐  true显示
    ShowEquipLoss(state, { payload }) {
      return {
        ...state,
        EquipLoss: true,
      }
    },
    HideEquipLoss(state, { payload }) {
      return {
        ...state,
        EquipLoss: false,
      }
    },



  },

};
