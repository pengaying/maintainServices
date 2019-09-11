import React, { Component } from 'react';
import { Button, Table, DatePicker } from 'antd';
import styles from './DM.less';
import Query from '../../Dialog/DataManagement/TestData/Query';
import Report from './../../Dialog/DataManagement/TestData/Report';

import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class TestData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MoreState: false, // 选择 查询弹窗
            ReportState: false, // 选择 报告 弹窗
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'dataManagement/TestDataTableInit'
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
                title: '关联',
                width: '8%',
                dataIndex: 'relevance', key: 'relevance',
            }, {
                title: '测试结果',
                width: '10%',
                dataIndex: 'testResult', key: 'testResult',
            }, {
                title: '接收时间',
                width: '14%',
                dataIndex: 'receiveTime', key: 'receiveTime',
            }, {
                title: '报告',
                //   width: '18%',
                dataIndex: 'report', key: 'report',
                render: (text, record) => (
                    <div style={{ display: 'inline-block' }}>
                        <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.ClickReport(record.key)} >报告</span>
                        <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
                    </div>
                )
            }
        ];


        let Tabledata = [];
        let tableData = this.props.dataManagement.TestDataTableDataSource; //测试数据 表格数据
        if (tableData != null && tableData.length !== 0) {
            for (let i = 0; i < tableData.length; i++) {
                Tabledata.push({
                    key: tableData[i].id,
                    EquipStationName: tableData[i].stationName,
                    Extension: tableData[i].extensionName,
                    testObject: tableData[i].objectName,
                    testObjectPN: tableData[i].objectPn,
                    relevance: tableData[i].relation,
                    testResult: tableData[i].testResult,
                    receiveTime: tableData[i].testTime,
                });
            }
        }
        // for (let i = 0; i < 10; i++) {
        //     Tabledata.push({
        //         key: i,
        //         EquipStationName: '[i].stationName',
        //         Extension: '[i]',
        //         testObject: '[i]',
        //         testObjectPN: '[i].',
        //         relevance: ' [i].relation',
        //         testResult: '',
        //         receiveTime: '',
        //     });
        // }
        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        测试数据
                    </div>

                    <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
                        <div style={{ float: 'right', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <DatePicker placeholder="请选择日期" showTime onChange={this.ChangeTime} />
                            </div>

                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button onClick={this.TimeQuery} type="primary">查询</Button>
                            </div>

                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button onClick={this.ShowMore} type="primary">更多...</Button>
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

                {/* 选择更多弹窗 */}
                {
                    this.state.MoreState ?
                        <Query
                            sign='testdata'
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.HideMore}
                            visible={this.state.MoreState}
                        />
                        : null
                }

                {/* 选择报告弹窗 */}
                {
                    this.state.ReportState ?
                        <Report
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseReport}
                            visible={this.state.ReportState}
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
    // 查询
    TimeQuery = () => {
        if (this.state.dateString != null && this.state.dateString !== '' && this.state.dateString !== undefined) {
            console.log("this.state.dateString=======", this.state.dateString);
            this.props.dispatch({
                type: 'dataManagement/TestDataTimeQuery',
                payload: { 'time': this.state.dateString }
            })
        }
    }
    // 选择更多
    ShowMore = () => {
        this.setState({
            MoreState: true
        });
    }

    HideMore = () => {
        this.setState({
            MoreState: false
        });
    }

    // 点击报告
    ClickReport = (key) => {
        this.setState({
            ReportState: true,
        })
        this.props.dispatch({
            type: 'dataManagement/TestDataReport',
            payload: { 'id': key }
        })
    }

    CloseReport = () => {
        this.setState({
            ReportState: false
        })
    }

    // 点击删除
    ClickDelete = (key) => {
        this.props.dispatch({
            type: 'dataManagement/TestDataDelete',
            payload: { 'id': key }
        })
    }

}

