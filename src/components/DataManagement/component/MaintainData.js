import React, { Component } from 'react';
import { Button, Table, DatePicker } from 'antd';
import styles from './DM.less';
import Query from '../../Dialog/DataManagement/TestData/Query';
import AddTool from './../../Dialog/DataManagement/MaintainData/AddTool';
import DAddTool from './../../Dialog/DataManagement/MaintainData/DAddTool';
import AddReplace from '../../Dialog/DataManagement/MaintainData/AddReplace';
import DAddReplace from './../../Dialog/DataManagement/MaintainData/DAddReplace';
import Create from './../../Dialog/DataManagement/MaintainData/Create';
// import Detail from './../../Dialog/DataManagement/MaintainData/Detail';
import MDDetail from './../../Dialog/DataManagement/MaintainData/MDDetail';

import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class MaintainData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AddState: false,//新建弹窗
            QueryState: false, //查询弹窗
            DetailState: false, //详情弹窗
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'dataManagement/MaintainDataInit'
        })
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '7%',
            },
            {
                title: '装备站名称',
                dataIndex: 'EquipStationName', key: 'EquipStationName',
                width: '15%',
            },
            {
                title: '分机',
                width: '10%',
                dataIndex: 'Extension', key: 'Extension',
            }, {
                title: '被测对象',
                width: '10%',
                dataIndex: 'testObject', key: 'testObject',
            }, {
                title: '被测对象PN',
                width: '15%',
                dataIndex: 'testObjectPN', key: 'testObjectPN',
            }, {
                title: '操作人',
                width: '8%',
                dataIndex: 'people', key: 'people',
            }, {
                title: '测试结果',
                width: '10%',
                dataIndex: 'testResult', key: 'testResult',
            }, {
                title: '接收时间',
                width: '14%',
                dataIndex: 'receiveTime', key: 'receiveTime',
            }, {
                title: '详情',
                dataIndex: 'report', key: 'report',
                render: (text, record) => (
                    <div style={{ display: 'inline-block' }}>
                        <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.ClickDetail(record.key)} >详情</span>
                        <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
                    </div>
                )
            }
        ];


        let Tabledata = [];
        let tableData = this.props.dataManagement.MaintainDataTableDataSource; //维修数据 表格数据
        if (tableData != null && tableData.length !== 0) {
            for (let i = 0; i < tableData.length; i++) {
                Tabledata.push({
                    key: tableData[i].id,
                    EquipStationName: tableData[i].stationName,
                    Extension: tableData[i].extensionName,
                    testObject: tableData[i].objectName,
                    testObjectPN: tableData[i].objectPn,
                    people: tableData[i].repairPerson,
                    testResult: tableData[i].testResult,
                    receiveTime: tableData[i].endTime,
                });
            }
        }

        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        维修数据
                    </div>

                    <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
                        <div style={{ float: 'left', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button onClick={this.ShowCreate} type="primary">新建</Button>
                            </div>
                        </div>

                        <div style={{ float: 'right', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button onClick={this.ShowMore} type="primary">查询...</Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tableContent_delivery}>
                        <div className={styles.tableStyle}>
                            <div className={styles.bodyCss_query}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    className={styles.mynoiseClass}
                                    pagination={{ pageSize: 9 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>
                        </div>
                    </div>


                </div>

                {/* 选择查询弹窗 */}
                {
                    this.state.QueryState ?
                        <Query
                            sign='maindata'
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.HideMore}
                            visible={this.state.QueryState}
                        />
                        : null
                }

                {/* 选择 新建 弹窗 */}
                {
                    this.state.AddState ?
                        <Create
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.HideCreate}
                            visible={this.state.AddState}
                        />
                        : null
                }
                {/* 选择 添加仪表和工具 弹窗 */}
                {
                    this.props.dataManagement.ToolState ?
                        <AddTool
                            DetailViewData={this.props.dataManagement.MDToolDetailDataSource}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseTool}
                            visible={this.props.dataManagement.ToolState}
                        />
                        : null
                }
                {/* 选择 添加更换件 弹窗 */}
                {
                    this.props.dataManagement.ReplaceState ?
                        <AddReplace
                            DetailViewData={this.props.dataManagement.MDListDetailDataSource}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseReplace}
                            visible={this.props.dataManagement.ReplaceState}
                        />
                        : null
                }


                {/* 选择 详情 弹窗 */}
                {
                    this.state.DetailState ?
                        <MDDetail
                            // Detail
                            sign='detail'
                            idsign={this.state.idsign}
                            DetailViewData={this.props.dataManagement.MaintainDataDetailDataSource}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseDetail}
                            visible={this.state.DetailState}
                        />
                        : null
                }
                {/* 选择 添加仪表和工具 弹窗 */}
                {
                    this.props.dataManagement.DToolState ?
                        <DAddTool
                            DetailViewData={this.props.dataManagement.DMDToolDetailDataSource}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.DCloseTool}
                            visible={this.props.dataManagement.DToolState}
                        />
                        : null
                }
                {/* 选择 添加更换件 弹窗 */}
                {
                    this.props.dataManagement.DReplaceState ?
                        <DAddReplace
                            DetailViewData={this.props.dataManagement.DMDListDetailDataSource}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.DCloseReplace}
                            visible={this.props.dataManagement.DReplaceState}
                        />
                        : null
                }

            </>
        )
    }

    // 改变弹窗层级事件控制对话框层级
    changeIndex = (e) => {
        // // let temp = this.state.zIndex;
        // let temp = this.props.CacheData.zIndex;
        // for(let i = 0; i < temp.length; i++){
        //     temp[i] = 1010;
        // }
        // temp[e] = 1020;
        // this.props.dispatch({
        //     type:'CacheData/changeZindex',
        //     payload:temp
        // });
    };

    // 日期选择 筛选表格
    ChangeTime = (date, dateString) => {
        this.setState({
            dateString: dateString
        })
    }

    // 点击  新建
    ShowCreate = () => {
        this.setState({
            AddState: true
        });
    }

    HideCreate = () => {
        this.setState({
            AddState: false
        });
    }

    // 点击查询
    ShowMore = () => {
        this.setState({
            QueryState: true
        });
    }

    HideMore = () => {
        this.setState({
            QueryState: false
        });
    }

    // 点击  详情
    ClickDetail = (key) => {
        this.setState({
            DetailState: true,
            idsign: key,
        })
        this.props.dispatch({
            type: 'dataManagement/MaintainDataDetail',
            payload: { 'id': key }
        })
    }

    CloseDetail = () => {
        this.setState({
            DetailState: false
        })
    }

    // 点击删除
    ClickDelete = (key) => {
        this.props.dispatch({
            type: 'dataManagement/MaintainDataDelete',
            payload: { 'id': key }
        })
    }

    // 新增
    // 关闭 添加工具
    CloseTool = () => {
        this.props.dispatch({
            type: 'dataManagement/HideAddToolPop',
        })
    }

    // 关闭 添加更换件
    CloseReplace = () => {
        this.props.dispatch({
            type: 'dataManagement/HideAddReplacePop',
        })
    }
    // 详情
    // 关闭 添加工具
    DCloseTool = () => {
        this.props.dispatch({
            type: 'dataManagement/DHideAddToolPop',
        })
    }

    // 关闭 添加更换件
    DCloseReplace = () => {
        this.props.dispatch({
            type: 'dataManagement/DHideAddReplacePop',
        })
    }
}

