import React, { Component } from 'react';
import { Button, Table, DatePicker } from 'antd';
import styles from './DM.less';
import Query from '../../Dialog/DataManagement/TestData/Query';
import ApplyDetail from './../../Dialog/DataManagement/MaintainApply/ApplyDetail';
import Approal from './../../Dialog/DataManagement/MaintainApply/Approal';

import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class MaintainApply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            QureryState: false, //选择PN弹窗
            DetailState: false, //选择自动生成弹窗
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'dataManagement/MaintainApplyInit'
        })
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '8%',
            },
            {
                title: '备件名称',
                dataIndex: 'spareName', key: 'spareName',
                width: '18%',
            },
            {
                title: '备件PN',
                width: '18%',
                dataIndex: 'sparePN', key: 'sparePN',
            }, {
                title: '备件SN',
                width: '18%',
                dataIndex: 'spareSN', key: 'spareSN',
            }, {
                title: '备件类别',
                width: '10%',
                dataIndex: 'spareType', key: 'spareType',
            }, {
                title: '申请时间',
                width: '18%',
                dataIndex: 'time', key: 'time',
            }, {
                title: '详情',
                //   width: '18%',
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
        let tableData = this.props.dataManagement.MaintainApplyTableData; //维修数据 表格数据
        if (tableData != null && tableData.length !== 0) {
            for (let i = 0; i < tableData.length; i++) {
                Tabledata.push({
                    key: tableData[i].id,
                    spareName: tableData[i].spName,
                    sparePN: tableData[i].spPn,
                    spareSN: tableData[i].spSn,
                    spareType: tableData[i].spType,
                    time: tableData[i].applyTime,
                });
            }
        }

        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        维修申请管理
                    </div>

                    <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
                        <div style={{ float: 'right', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <DatePicker placeholder="请选择日期" showTime onChange={this.ChangeTime} />
                            </div>

                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button onClick={this.TimeQuery} type="primary">查询</Button>
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
                                    pagination={{ pageSize: 12 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>
                        </div>
                    </div>


                </div>

                {/* 选择查询弹窗 */}
                {
                    this.state.QureryState ?
                        <Query
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.HideQurery}
                            visible={this.state.QureryState}
                        />
                        : null
                }

                {/* 选择详情弹窗 */}
                {
                    this.state.DetailState ?
                        <ApplyDetail
                            DetailViewData={this.props.dataManagement.MADetailData}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseDetail}
                            visible={this.state.DetailState}
                        />
                        : null
                }

                {/* 审批结果弹窗 */}
                {
                    this.props.dataManagement.MAApproal ?
                        <Approal
                            DetailViewData={this.props.dataManagement.MADetailData}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseAppproal}
                            visible={this.props.dataManagement.MAApproal}
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
            console.log("this.state.dateString=======", this.state.dateString)
            this.props.dispatch({
                type: 'dataManagement/MaintainApplyTimeQuery',
                payload: { 'time': this.state.dateString }
            })
        }
    }

    HideQurery = () => {
        this.setState({
            QureryState: false
        });
    }

    // 点击详情
    ClickDetail = (key) => {
        this.setState({
            DetailState: true,
        })
        this.props.dispatch({
            type: 'dataManagement/MaintainApplyDetail',
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
            type: 'dataManagement/MaintainApplyDelete',
            payload: { 'id': key }
        })
    }

    CloseAppproal = () => {
        this.props.dispatch({
            type: 'dataManagement/HMaintainApplyApproal',
        })
    }

}

