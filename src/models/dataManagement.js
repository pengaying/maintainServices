import {
  TestDataTableInitFetch, TestDataReportFetch, TestDataDeleteFetch, TestDataTimeQueryFetch, TestDataQueryMoreFetch,
  MaintainDataInitFetch, MaintainDataDetailFetch, MaintainDataModifyFetch, MaintainDataDeleteFetch, MaintainDataCreatFetch, MaintainDataAddToolFetch,
  ShowAddToolPopFetch, MDDeleteToolFetch, MaintainDataAddListFetch, ShowAddReplacePopFetch, MDDeleteListFetch,
  MaintainLogInitFetch, MaintainLogChooiceFetch, MaintainApplyDetailFetch, MaintainApplyDeleteFetch,
  MaintainApplyInitFetch, MaintainApplyTimeQueryFetch, MaintainApplyModifyFetch,
  SapreApplyTableInitFetch, ChooiceApplyResultFetch, ClickApplyDetailFetch, DeleteApplyDetailFetch,
  WorkSummaryInitTableFetch, ArtificialSummarySaveFetch, ArtificialSummaryReportFetch,
  StatisticAnalysisInitFetch, SADetailFetch, SAStatFetch,
  ElecSituationInitFetch, ESDetailFetch, ESSearchFetch, ESDetailPopFetch, ESDetailPopDeleteFetch, ESTableDeleteFetch,
  WorkSummaryViewFetch,
} from '../services/services';//发起所有请求

export default {
  namespace: 'dataManagement',

  state: {
    ToolState: false,//维修数据  详情弹窗里的  添加工具弹窗显隐标志位  true显示(新增)
    DToolState: false,//维修数据  详情弹窗里的  添加工具弹窗显隐标志位  true显示(详情)
    ReplaceState: false,//维修数据  详情弹窗里的  添加更换件弹窗显隐标志位  true显示
    DReplaceState: false,//维修数据  详情弹窗里的  添加更换件弹窗显隐标志位  true显示
    PointImgData: null,//电磁态势  散点图数据源


    TestDataTableDataSource: null, // 测试数据 表格数据初始化  
    TestDataReportDataSource: null, // 测试数据 报告数据  

    MaintainDataTableDataSource: null, // 维修数据 表格数据初始化  
    MaintainDataDetailDataSource: null, // 维修数据 详情数据  
    MDToolTableDataSource: [], // 维修数据新增 工具表格数据  
    MDToolDetailDataSource: null, //  工具详情数据  
    MDListTableDataSource: [], //  更换件数据  
    MDListDetailDataSource: null, //  更换件详情数据 

    DMDToolTableDataSource: [], // 维修数据详情 工具表格数据  
    DMDToolDetailDataSource: null, //  工具详情数据  
    DMDListTableDataSource: [], //  更换件数据  
    DMDListDetailDataSource: null, //  更换件详情数据 

    MaintainLogTableDtaSource: null, // 维修日志 表格数据初始化  

    MaintainApplyTableData: null, // 维修申请 表格数据初始化  
    MADetailData: null, // 维修申请 // 详情数据 
    MAApproal: false,//审批结果弹窗

    ChooiceApplyTableData: null,    // 备件申请记录   初始化表格数据
    ApplyFormlData: null,    // 备件申请记录   查看数据 

    StatisticAnalysisData: null,    //  统计分析   初始化表格数据
    SADetailDataSource: null,    //  统计分析  详情数据

    ElecSituationData: null,    //  电磁态势   初始化表格数据
    ESDetailDataSource: null,    // 详情数据
    ESDetailTableDataSource: null,    // 详情  弹窗里的 电磁态势详情表格数据
    ESDetailPopDataSource: null,    // 详情弹窗里的表格 点击数据 获取到的电磁态势数据列表表格数据

    WorkSummaryData: null,    // 阶段总结  表格数据 
    workSummaryViewData: null,    // 阶段总结  查看数据 

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


    // 数据管理
    // 测试数据初始化  
    TestDataTableData(state, { payload }) {
      // console.log('TestDataTableData====', payload);
      return {
        ...state,
        TestDataTableDataSource: payload
      }
    },
    // 测试数据  报告 
    TestDataReportData(state, { payload }) {
      console.log('TestDataReportData====', payload);
      return {
        ...state,
        TestDataReportDataSource: payload
      }
    },

    // 维修数据
    //维修数据 初始化 
    MaintainDataTableData(state, { payload }) {
      // console.log('MaintainDataTableData====', payload);
      return {
        ...state,
        MaintainDataTableDataSource: payload
      }
    },
    // 维修数据新增
    // 显示 添加工具弹窗
    ShowAddToolPop(state, { payload }) {
      return {
        ...state,
        ToolState: true
      }
    },
    HideAddToolPop(state, { payload }) {
      return {
        ...state,
        ToolState: false,
        MDToolDetailDataSource: null,
      }
    },
    // 显示 添加 更换件 弹窗
    ShowAddReplacePop(state, { payload }) {
      return {
        ...state,
        ReplaceState: true
      }
    },
    HideAddReplacePop(state, { payload }) {
      return {
        ...state,
        ReplaceState: false,
        MDListDetailDataSource: null,
      }
    },
    // 工具的表格数据
    MDToolTableData(state, { payload }) {
      return {
        ...state,
        ToolState: false,
        MDToolTableDataSource: payload,
        MDToolDetailDataSource: null,
      }
    },
    // 新增工具的表格修改数据
    MDToolDetailData(state, { payload }) {
      return {
        ...state,
        ToolState: true,
        MDToolDetailDataSource: payload
      }
    },
    //维修数据 新增更换件的表格数据
    MDListTableData(state, { payload }) {
      return {
        ...state,
        ReplaceState: false,
        MDListTableDataSource: payload,
        MDListDetailDataSource: null,
      }
    },
    //维修数据 新增更换件的表格修改数据
    MDListDetailData(state, { payload }) {
      return {
        ...state,
        ReplaceState: true,
        MDListDetailDataSource: payload
      }
    },

    // 维修数据详情
    // 详情数据
    MaintainDataDetailData(state, { payload }) {
      return {
        ...state,
        MaintainDataDetailDataSource: payload
      }
    },
    // 显示 添加工具 弹窗
    DShowAddToolPop(state, { payload }) {
      return {
        ...state,
        DToolState: true,
      }
    },
    DHideAddToolPop(state, { payload }) {
      console.log('1111111111111')
      return {
        ...state,
        DToolState: false,
        DMDToolDetailDataSource: null
      }
    },
    // 显示 添加更换件 弹窗
    DShowAddReplacePop(state, { payload }) {
      return {
        ...state,
        DReplaceState: true
      }
    },
    DHideAddReplacePop(state, { payload }) {
      console.log('0000000000000000')
      return {
        ...state,
        DReplaceState: false,
        DMDListDetailDataSource: null,
      }
    },
    // 详情中工具 表格数据
    DMDToolTableData(state, { payload }) {
      console.log("222222222")
      return {
        ...state,
        DToolState: false,
        DMDToolTableDataSource: payload,
        DMDToolDetailDataSource: null
      }
    },
    // 详情中工具 表格修改数据
    DMDToolDetailData(state, { payload }) {
      return {
        ...state,
        DToolState: true,
        DMDToolDetailDataSource: payload,
      }
    },
    // 详情中更换件 表格数据
    DMDListTableData(state, { payload }) {
      return {
        ...state,
        DReplaceState: false,
        DMDListTableDataSource: payload,
        DMDListDetailDataSource: null,
      }
    },
    // 详情中更换件 表格修改数据
    DMDListDetailData(state, { payload }) {
      return {
        ...state,
        DReplaceState: true,
        DMDListDetailDataSource: payload,
      }
    },

    // 维修日志
    // 初始化 
    MaintainLogTableDta(state, { payload }) {
      // console.log('MaintainLogTableDta====', payload);
      return {
        ...state,
        MaintainLogTableDtaSource: payload
      }
    },

    // 维修申请
    // 初始化 
    MaintainApplyInitData(state, { payload }) {
      return {
        ...state,
        MaintainApplyTableData: payload
      }
    },
    // 详情数据 
    MaintainApplyDetailData(state, { payload }) {
      return {
        ...state,
        MADetailData: payload
      }
    },
    // 审批结果 弹窗显隐
    SMaintainApplyApproal(state, { payload }) {
      return {
        ...state,
        MAApproal: true
      }
    },
    HMaintainApplyApproal(state, { payload }) {
      return {
        ...state,
        MAApproal: false
      }
    },
    //  备件申请记录  
    // 表格数据
    ApplyTableInitData(state, { payload }) {
      // console.log("ApplyTableInitData====", payload);
      return {
        ...state,
        ChooiceApplyTableData: payload,
      };
    },
    //  查看 弹窗的表格数据
    ClickApplyDetailData(state, { payload }) {
      // console.log("ClickApplyDetailData====", payload);
      return {
        ...state,
        ApplyFormlData: payload,
      };
    },

    // 统计分析
    // 初始化表格
    StatisticAnalysisInitData(state, { payload }) {
      return {
        ...state,
        StatisticAnalysisData: payload,
      };
    },
    // 详情
    SADetailData(state, { payload }) {
      return {
        ...state,
        SADetailDataSource: payload,
      };
    },

    // 电磁态势
    // 初始化表格
    ElecSituationInitData(state, { payload }) {
      console.log("ElecSituationInitData====", payload);
      return {
        ...state,
        ElecSituationData: payload,
      };
    },
    // 详情
    ESDetailData(state, { payload }) {
      return {
        ...state,
        ESDetailDataSource: payload,
      };
    },
    // 详情  弹窗里的 电磁态势详情表格数据
    ESDetailTableData(state, { payload }) {
      // console.log("ESDetailTableData====", payload);
      return {
        ...state,
        ESDetailTableDataSource: payload,
      };
    },
    // 详情弹窗里的表格 点击数据 获取到的电磁态势数据列表表格数据
    ESDetailPopData(state, { payload }) {
      // console.log("ESDetailPopData====", payload);
      return {
        ...state,
        ESDetailPopDataSource: payload,
      };
    },

    // 阶段总结
    // 表格数据
    WorkSummaryTableData(state, { payload }) {
      // console.log("WorkSummaryTableData====", payload);
      return {
        ...state,
        WorkSummaryData: payload,
      };
    },
    // 查看
    WorkSummaryViewData(state, { payload }) {
      // console.log("WorkSummaryViewData====", payload);
      return {
        ...state,
        workSummaryViewData: payload,
      };
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
    // 按时间查询
    *TestDataTimeQuery({ payload }, { call, put }) {
      const callData = yield call(TestDataTimeQueryFetch, payload);
      console.log('按时间查询===表格数据=====', callData);
      yield put({ type: 'TestDataTableData', payload: callData.data });
    },
    // 更多查询
    *TestDataQueryMore({ payload }, { call, put }) {
      const callData = yield call(TestDataQueryMoreFetch, payload);
      console.log('更多查询===表格数据=====', callData);
      yield put({ type: 'TestDataTableData', payload: callData.data });
    },
    // 报告
    *TestDataReport({ payload }, { call, put }) {
      const callData = yield call(TestDataReportFetch, payload);
      console.log('报告====数据=====', callData);
      yield put({ type: 'TestDataReportData', payload: callData.data });
    },
    // 删除
    *TestDataDelete({ payload }, { call, put }) {
      const callData = yield call(TestDataDeleteFetch, payload);
      console.log('删除====数据=====', callData);
      yield put({ type: 'TestDataTableData', payload: callData.data });
    },
    // 维修数据
    // 初始化 
    *MaintainDataInit({ payload }, { call, put }) {
      const callData = yield call(MaintainDataInitFetch);
      console.log('维修数据====初始化表格数据=====', callData);
      yield put({ type: 'MaintainDataTableData', payload: callData.data });
    },
    // 新建
    *MaintainDataCreat({ payload }, { call, put }) {
      const callData = yield call(MaintainDataCreatFetch, payload);
      console.log('维修数据====新建数据=====', callData);
      yield put({ type: 'MaintainDataTableData', payload: callData.data });
    },
    // 更多查询
    *MaintainDataQueryMore({ payload }, { call, put }) {
      const callData = yield call(TestDataQueryMoreFetch, payload);
      console.log('维修数据查询===表格数据=====', callData);
      yield put({ type: 'MaintainDataTableData', payload: callData.data });
    },
    // 点击详情
    *MaintainDataDetail({ payload }, { call, put }) {
      const callData = yield call(MaintainDataDetailFetch, payload);
      console.log('维修数据====详情数据=====', callData);
      if (callData.data != null && callData.data.rmatList != null) {// 详情数据 中的工具表格
        yield put({ type: 'DMDToolTableData', payload: callData.data.rmatList });
      }
      if (callData.data != null && callData.data.rspList != null) {// 详情数据 中的更换件表格
        yield put({ type: 'DMDListTableData', payload: callData.data.rspList });
      }
      yield put({ type: 'MaintainDataDetailData', payload: callData.data });
    },
    // // 添加 工具 
    // *MaintainDataAddTool({ payload }, { call, put }) {
    //   const callData = yield call(MaintainDataAddToolFetch, payload);
    //   console.log('工具====添加数据=====', callData);
    //   yield put({ type: 'MDToolTableData', payload: callData.data });
    // },
    // // 点击 修改 工具 
    // *ShowAddToolPopAsync({ payload }, { call, put }) {
    //   const callData = yield call(ShowAddToolPopFetch, payload);
    //   console.log('工具====修改数据=====', callData);
    //   yield put({ type: 'MDToolDetailData', payload: callData.data });
    // },
    // // 点击 删除 工具 
    // *MDDeleteTool({ payload }, { call, put }) {
    //   const callData = yield call(MDDeleteToolFetch, payload);
    //   console.log('工具====删除数据=====', callData);
    //   yield put({ type: 'MDToolTableData', payload: callData.data });
    // },
    // // 添加 更换件清单 
    // *MaintainDataAddList({ payload }, { call, put }) {
    //   const callData = yield call(MaintainDataAddListFetch, payload);
    //   console.log('更换件清单====添加数据=====', callData);
    //   yield put({ type: 'MDListTableData', payload: callData.data });
    // },
    // // 点击 修改 更换件清单 
    // *ShowAddReplacePopAsync({ payload }, { call, put }) {
    //   const callData = yield call(ShowAddReplacePopFetch, payload);
    //   console.log('更换件清单====修改数据=====', callData);
    //   yield put({ type: 'MDListDetailData', payload: callData.data });
    // },
    // // 点击 删除 更换件清单 
    // *MDDeleteList({ payload }, { call, put }) {
    //   const callData = yield call(MDDeleteListFetch, payload);
    //   console.log('更换件清单====删除数据=====', callData);
    //   yield put({ type: 'MDListTableData', payload: callData.data });
    // },

    // 维修数据表格 修改 
    *MaintainDataModify({ payload }, { call, put }) {
      const callData = yield call(MaintainDataModifyFetch, payload);
      console.log('维修数据====修改 表格数据=====', callData);
      yield put({ type: 'MaintainDataTableData', payload: callData.data });
    },

    // 删除
    *MaintainDataDelete({ payload }, { call, put }) {
      const callData = yield call(MaintainDataDeleteFetch, payload);
      console.log('维修数据====删除 表格数据=====', callData);
      yield put({ type: 'MaintainDataTableData', payload: callData.data });
    },

    // 维修日志
    // 初始化表格数据
    *MaintainLogInit({ payload }, { call, put }) {
      const callData = yield call(MaintainLogInitFetch);
      console.log('维修日志====初始化表格数据=====', callData);
      yield put({ type: 'MaintainLogTableDta', payload: callData.data });
    },
    // 筛选结果
    *MaintainLogChooice({ payload }, { call, put }) {
      const callData = yield call(MaintainLogChooiceFetch, payload);
      console.log('筛选结果====callData=====', callData);
      yield put({ type: 'MaintainLogTableDta', payload: callData.data });
    },

    // 维修申请
    // 初始化表格数据
    *MaintainApplyInit({ payload }, { call, put }) {
      const callData = yield call(MaintainApplyInitFetch);
      console.log('维修申请====初始化表格数据=====', callData);
      yield put({ type: 'MaintainApplyInitData', payload: callData.data });
    },
    // 按时间查询
    *MaintainApplyTimeQuery({ payload }, { call, put }) {
      const callData = yield call(MaintainApplyTimeQueryFetch, payload);
      console.log('按时间查询===表格数据=====', callData);
      yield put({ type: 'MaintainApplyInitData', payload: callData.data });
    },
    // 详情 
    *MaintainApplyDetail({ payload }, { call, put }) {
      const callData = yield call(MaintainApplyDetailFetch, payload);
      console.log('详情===表格数据=====', callData);
      yield put({ type: 'MaintainApplyDetailData', payload: callData.data });
    },
    // 修改 
    *MaintainApplyModify({ payload }, { call, put }) {
      const callData = yield call(MaintainApplyModifyFetch, payload);
      console.log('修改===表格数据=====', callData);
      yield put({ type: 'MaintainApplyInitData', payload: callData.data });
    },

    // 删除 
    *MaintainApplyDelete({ payload }, { call, put }) {
      const callData = yield call(MaintainApplyDeleteFetch, payload);
      console.log('删除===表格数据=====', callData);
      yield put({ type: 'MaintainApplyInitData', payload: callData.data });
    },

    // 备件申请
    // 初始化表格
    *SapreApplyTableInit({ payload }, { call, put }) {
      const callData = yield call(SapreApplyTableInitFetch);
      console.log('备件申请结果初始化表格====callData=====', callData);
      yield put({ type: 'ApplyTableInitData', payload: callData.data });
    },
    // 筛选结果
    *ChooiceApplyResult({ payload }, { call, put }) {
      const callData = yield call(ChooiceApplyResultFetch, payload);
      console.log('筛选结果====callData=====', callData);
      yield put({ type: 'ApplyTableInitData', payload: callData.data });
    },
    // 详情
    *ClickApplyDetailAsync({ payload }, { call, put }) {
      const callData = yield call(ClickApplyDetailFetch, payload);
      console.log('详情====callData=====', callData);
      yield put({ type: 'ClickApplyDetailData', payload: callData.data });
    },
    // 删除
    *DeleteApplyDetailAsync({ payload }, { call, put }) {
      const callData = yield call(DeleteApplyDetailFetch, payload);
      console.log('删除操作后的数据====callData=====', callData);
      yield put({ type: 'ApplyTableInitData', payload: callData.data });
    },

    // 统计分析
    // 初始化表格 PN
    *StatisticAnalysisInit({ payload }, { call, put }) {
      const callData = yield call(StatisticAnalysisInitFetch);
      console.log('统计分析====callData=====', callData);
      yield put({ type: 'StatisticAnalysisInitData', payload: callData.data });
    },
    // 详情 SN
    *SADetail({ payload }, { call, put }) {
      const callData = yield call(SADetailFetch, payload);
      console.log('详情====callData=====', callData);
      yield put({ type: 'SADetailData', payload: callData.data });
    },
    // 修改 SN
    *SADetailModify({ payload }, { call, put }) {
      const callData = yield call(SADetailModifyFetch, payload);
      console.log('详情====callData=====', callData);
      yield put({ type: 'StatisticAnalysisInitData', payload: callData.data });
    },

    // 统计 筛选
    *SAStat({ payload }, { call, put }) {
      const callData = yield call(SAStatFetch, payload);
      console.log('统计筛选====callData=====', callData);
      yield put({ type: 'StatisticAnalysisInitData', payload: callData.data });
    },

    // 电磁态势
    // 初始化表格 
    *ElecSituationInit({ payload }, { call, put }) {
      const callData = yield call(ElecSituationInitFetch);
      console.log('电磁态势====callData=====', callData);
      yield put({ type: 'ElecSituationInitData', payload: callData.data });
    },
    // 搜索 
    *ESSearch({ payload }, { call, put }) {
      const callData = yield call(ESSearchFetch, payload);
      console.log('搜索====callData=====', callData);
      yield put({ type: 'ElecSituationInitData', payload: callData.data });
    },
    // 详情
    *ESDetail({ payload }, { call, put }) {
      const callData = yield call(ESDetailFetch, payload);
      console.log('详情====callData=====', callData);
      yield put({ type: 'ESDetailTableData', payload: callData.data });
    },
    // 详情 弹窗里的数据
    *ESDetailPop({ payload }, { call, put }) {
      const callData = yield call(ESDetailPopFetch, payload);
      console.log('数据====callData=====', callData);
      yield put({ type: 'ESDetailPopData', payload: callData.data });
    },
    // 详情 弹窗里的删除
    *ESDetailPopDelete({ payload }, { call, put }) {
      const callData = yield call(ESDetailPopDeleteFetch, payload);
      console.log('弹窗里的删除====callData=====', callData);
      yield put({ type: 'ESDetailTableData', payload: callData.data });
    },
    //表格 删除 
    *ESTableDelete({ payload }, { call, put }) {
      const callData = yield call(ESTableDeleteFetch, payload);
      console.log('表格删除====callData=====', callData);
      yield put({ type: 'ElecSituationInitData', payload: callData.data });
    },

    // 阶段总结
    // 初始化表格
    *WorkSummaryInitTable({ payload }, { call, put }) {
      const callData = yield call(WorkSummaryInitTableFetch);
      console.log('阶段总结初始化表格====callData=====', callData);
      yield put({ type: 'WorkSummaryTableData', payload: callData.data });
    },
    // 查看
    *WorkSummaryView({ payload }, { call, put }) {
      const callData = yield call(WorkSummaryViewFetch, payload);
      console.log('阶段总结表格查看====callData=====', callData);
      yield put({ type: 'WorkSummaryViewData', payload: callData.data });
    },
    // 存为草稿
    *ArtificialSummarySave({ payload }, { call, put }) {
      const callData = yield call(ArtificialSummarySaveFetch, payload);
      console.log('存为草稿====callData=====', callData);
      yield put({ type: 'WorkSummaryTableData', payload: callData.data });
    },
    // 上报
    *ArtificialSummaryReport({ payload }, { call, put }) {
      const callData = yield call(ArtificialSummaryReportFetch, payload);
      console.log('上报====callData=====', callData);
      yield put({ type: 'WorkSummaryTableData', payload: callData.data });
    },


  },


  subscriptions: {
    setup({ dispatch, history }) {

    },
  },

};
