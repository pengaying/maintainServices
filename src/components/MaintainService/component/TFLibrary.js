import React, { Component } from 'react'
import styles from './MaintainGuidance.less';
import { Button, Table, Select, Input } from 'antd';
import DataBankDetail from './DataBankDetail';

import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class TFLibrary extends Component {
    constructor(propps) {
        super(propps);
        this.state = {
            DetailState: false,
            ApplyTime: '',
            ApplyState: '远距离雷达探测站',
            ApplyResult: '二级',
        }
    }

    componentDidMount() {
        //初始化表格数据
        // this.props.dispatch({
        //     type: 'dataManagement/SapreApplyTableInit',
        // })
    }
    render() {
        // const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
        const field = {
            position: 'relative',
            float: 'left',
            border: '1px solid #bdcddc',
            padding: '10px 10px',
            width: '98%',
            margin: '10px'
        }
        const fieldTitle = {
            padding: '0 5px',
            position: 'absolute',
            top: '-12px',
            fontSize: '12px',
            height: '21px',
        }
        const fieldContent = {
            width: '100%',
            marginTop: '5px',
            display: 'inline-block'
        }
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '10%',
            },
            {
                title: '所属整机',
                width: '20%',
                dataIndex: 'machine', key: 'machine',
            }, {
                title: '故障设备名称',
                width: '20%',
                dataIndex: 'faileEquipName', key: 'faileEquipName',
            }, {
                title: '故障设备PN',
                width: '20%',
                dataIndex: 'faileEquipPN', key: 'faileEquipPN',
            }, {
                title: '维修层级',
                width: '10%',
                dataIndex: 'hierarchy', key: 'hierarchy',
            }, {
                title: '故障关键字',
                width: '10%',
                dataIndex: 'faultKey', key: 'faultKey',
            },
            {
                title: '操作',
                dataIndex: 'operation', key: 'operation',
                render: (text, record) => (
                    <div style={{ display: 'inline-block' }}>
                        <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.ClickDetail(record.key)} >详情</span>
                        <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
                    </div>
                )
            }
        ];

        let Tabledata = [];
        for (let i = 0; i < 20; i++) {
            Tabledata.push({
                key: i + 1,
                machine: '远距离雷达探测站',
                faileEquipName: '告警电路',
                faileEquipPN: 'PN20190408001',
                hierarchy: '三级',
                faultKey: '告警电路',
            });
        }
        // let tabledata = this.props.dataManagement.ChooiceApplyTableData;//维修日志 表格数据
        // if (tabledata != null && tabledata.length !== 0) {
        //     for (let i = 0; i < tabledata.length; i++) {
        //         Tabledata.push({
        //             key: tabledata[i].id,
        //             machine: tabledata[i].formNum,
        //             faileEquipName: tabledata[i].people,
        //             faileEquipPN: tabledata[i].begintime,
        //             hierarchy: tabledata[i].state,
        //             faultKey: tabledata[i].result,
        //             result: tabledata[i].hierarchy,
        //         });
        //     }
        // }
        const Option = Select.Option;
        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        典型故障库
                    </div>

                    <div className={styles.layoutContent}>
                        <div style={field}>
                            <div style={fieldTitle}>查询</div>
                            <div style={fieldContent}>
                                <div style={{ float: 'left', width: '100%' }}>
                                    <div className={styles.SupplementarySelect}>
                                        <span style={{ marginRight: '10px' }}>所属整机:</span>
                                        <Select value={this.state.ApplyState} onChange={this.changeState} style={{ width: '55%' }}>
                                            <Option value='已处理'>远距离雷达探测站</Option>
                                            <Option value='未处理'>远距离雷达干扰站</Option>
                                        </Select>
                                    </div>
                                    <div className={styles.SupplementarySelect}>
                                        <span style={{ marginRight: '10px' }}>所属分机:</span>
                                        <Input style={{ width: '55%' }} />
                                    </div>
                                    <div className={styles.SupplementaryDatepicker}>
                                        <span style={{ marginRight: '10px' }}>故障设备名称:</span>
                                        <Input style={{ width: '55%' }} />
                                    </div>
                                </div>

                                <div style={{ float: 'left', width: '100%', marginTop: '10px' }}>
                                    <div className={styles.SupplementarySelect}>
                                        <span style={{ marginRight: '10px' }}>故障设备PN:</span>
                                        <Input style={{ width: '55%' }} />
                                    </div>
                                    <div className={styles.SupplementarySelect}>
                                        <span style={{ marginRight: '10px' }}>维修层级:</span>
                                        <Select value={this.state.ApplyResult} onChange={this.changeState} style={{ width: '55%' }}>
                                            <Option value='二级'>二级</Option>
                                            <Option value='三级'>三级</Option>
                                        </Select>
                                    </div>
                                    <div className={styles.SupplementaryDatepicker}>
                                        <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                            <Button type="primary">重置</Button>
                                        </div>
                                        <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                            <Button onClick={this.clickChooice} type="primary">查询</Button>
                                        </div>
                                    </div>
                                </div>

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
                                    // scroll = {{y: 100 }}
                                    pagination={{ pageSize: 9 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

                        </div>
                    </div>

                </div>

                {/* 点击详情 */}
                {
                    this.state.DetailState ?
                        <DataBankDetail
                            // DetailViewData={this.props.dataManagement.ApplyFormlData}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseDetail}
                            visible={this.state.DetailState}
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

    // 点击表格详情查看
    ClickDetail = (key) => {
        this.setState({
            DetailState: true
        })
        // this.props.dispatch({
        //     type: 'dataManagement/ClickApplyDetailAsync',
        //     payload: key
        // })
    }
    CloseDetail = () => {
        this.setState({
            DetailState: false
        })
    }
    // 点击删除
    ClickDelete = (key) => {
        this.props.dispatch({
            type: 'dataManagement/DeleteApplyDetailAsync',
            payload: key
        })
    }

    //改变申请时间
    onChangeTime = (date, dateString) => {
        this.setState({
            ApplyTime: dateString
        })
    }
    //改变申请状态
    changeState = (value) => {
        this.setState({
            ApplyState: true
        })
    }
    //改变申请结果
    onChangeResult = (value) => {
        this.setState({
            ApplyResult: value
        })
    }
    //筛选结果
    clickChooice = () => {
        let { ApplyTime, ApplyState, ApplyResult } = this.state;
        let obj = {
            "begintime": ApplyTime,
            "state": ApplyState,
            "result": ApplyResult
        }
        this.props.dispatch({
            type: 'dataManagement/ChooiceApplyResult',
            payload: obj
        })
    }



}
