
export default {
  namespace: 'dataManagement',

  state: {
    PointImgData: payload,


  },

  reducers: {
    // 显示电磁态势频点图
    ShowPointImg(state, { payload }) {
      console.log('ShowPointImg====', payload);
      return {
        ...state,
        PointImgData: payload
      }
    },

  },

  effects: {
    //  测试数据  
    // 初始化表格数据
    *TestDataTableInit({ payload }, { call, put }) {
      const callData = yield call(TestDataTableInitFetch);
      console.log('测试数据====初始化表格数据=====', callData);
      yield put({ type: 'TestDataTableData', payload: callData.data });
    },
  },


  subscriptions: {
    setup({ dispatch, history }) {

    },
  },

};
