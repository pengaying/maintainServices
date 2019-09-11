
import { receiveTableInitFetch, sendTableInitFetch, spareTableInitFetch, equipTableInitFetch, selfTableInitFetch } from '../services/services';//发起请求

export default {

    namespace: 'systemModal',

    state: {
        receiveTableInitDataSource: null,//数据库表格数据
        sendTableInitDataSource: null,
        spareTableInitDataSource: null,
        equipTableInitDataSource: null,
        selfTableInitDataSource: null,


        conditionSearch: false,//条件检索显隐标志位  true显示
        allSearch: false,//全部检索显隐标志位  true显示
        allDelete: false,//全部删除 显隐标志位  true显示
        signalDelete: false,//单个删除 显隐标志位  true显示
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {

    },

    reducers: {      
        // 控制 条件检索 显隐
        ConditionSearchShow(state, { payload }) {
            // console.log('selfTableInitData====', payload);
            return {
                ...state,
                conditionSearch: true
            }
        },
        ConditionSearchHide(state, { payload }) {
            // console.log('selfTableInitData====', payload);
            return {
                ...state,
                conditionSearch: false
            }
        },

        // 控制 全部检索 显隐
        allSearchShow(state, { payload }) {
            // console.log('selfTableInitData====', payload);
            return {
                ...state,
                allSearch: true
            }
        },
        allSearchHide(state, { payload }) {
            // console.log('selfTableInitData====', payload);
            return {
                ...state,
                allSearch: false
            }
        },

        // 控制 全部删除 显隐
        allDeleteShow(state, { payload }) {
            // console.log('selfTableInitData====', payload);
            return {
                ...state,
                allDelete: true
            }
        },
        allDeleteHide(state, { payload }) {
            // console.log('selfTableInitData====', payload);
            return {
                ...state,
                allDelete: false
            }
        },

        // 控制 单个删除 显隐
        signalDeleteShow(state, { payload }) {
            // console.log('selfTableInitData====', payload);
            return {
                ...state,
                signalDelete: true
            }
        },
        signalDeleteHide(state, { payload }) {
            // console.log('selfTableInitData====', payload);
            return {
                ...state,
                signalDelete: false
            }
        },












    },

};
