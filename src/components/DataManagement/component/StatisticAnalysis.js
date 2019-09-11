import React, { Component } from 'react'
import styles from './DM.less';
import { Button, Table, Input, Select, Radio } from 'antd';
import Detail from './../../Dialog/DataManagement/StatisticAnalysis/Detail';

import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class StatisticAnalysis extends Component {
    constructor() {
        super();
        this.state = {
            ViewState: false,
            AddState: false,
            PN: '',
            SN: '',
            Year: '2018',
            value: 1,
            columns: [
                {
                    title: '序号',
                    dataIndex: 'key', key: 'key',
                    width: '5%',
                },
                {
                    title: '整机名称',
                    width: '15%',
                    dataIndex: 'machineName', key: 'machineName',
                }, {
                    title: '整机PN',
                    width: '14%',
                    dataIndex: 'machinePN', key: 'machinePN',
                },
                // {
                //     title: '整机BN',
                //     width: '9%',
                //     dataIndex: 'type', key: 'type',
                // }, 
                {
                    title: '被测对象名称',
                    width: '10%',
                    dataIndex: 'testObjictName', key: 'testObjictName',
                },
                {
                    title: '被测对象PN',
                    width: '14%',
                    dataIndex: 'testObjictPN', key: 'testObjictPN',
                }, {
                    title: '测试时间',
                    width: '8%',
                    dataIndex: 'testTime', key: 'testTime',
                },
                {
                    title: '测试次数',
                    width: '8%',
                    dataIndex: 'testNumber', key: 'testNumber',
                },
                {
                    title: '故障次数',
                    width: '8%',
                    dataIndex: 'failureNumber', key: 'failureNumber',
                }
            ],
        }
    }

    componentDidMount() {
        this.props.dispatch({//初始化表格数据
            type: 'dataManagement/StatisticAnalysisInit',
        })
    }
    render() {
        const columns = this.state.columns;
        const Option = Select.Option;
        let Tabledata = [];

        let tableData = this.props.dataManagement.StatisticAnalysisData;//统计分析  表格数据
        if (tableData != null && tableData.length !== 0) {
            for (let i = 0; i < tableData.length; i++) {
                Tabledata.push({
                    key: tableData[i].id,
                    machineName: tableData[i].extensionName,
                    machinePN: tableData[i].extensionPn,
                    machineSN: tableData[i].extensionSn,
                    testObjictName: tableData[i].objectName,
                    testTime: tableData[i].testTime,
                    testNumber: tableData[i].testFrequency,
                    failureNumber: tableData[i].fFrequency,
                });
            }
        }

        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        统计分析
                    </div>

                    <div className={styles.tableContent_delivery}>
                        <div className={styles.tableStyle}>
                            <div className={styles.TopDIv}>
                                <Radio.Group style={{ width: '100%' }} onChange={this.onChangeRadio} value={this.state.value}>
                                    <div className={styles.SupplementarySelect}>
                                        <span><Radio value={1}>整机PN:</Radio></span>
                                       <Input autoComplete='off'  value={this.state.PN} onChange={this.changePn} style={{ width: '60%' }} />
                                    </div>
                                    <div className={styles.SupplementarySelect}>
                                        <span><Radio value={2}>整机SN:</Radio></span>
                                       <Input autoComplete='off'  value={this.state.SN} onChange={this.changeSn} style={{ width: '60%' }} />
                                    </div>
                                    <div className={styles.SupplementarySelect}>
                                        <span><Radio value={3}>年份:</Radio></span>
                                        <Select value={this.state.Year} onChange={this.onChangeResult} style={{ width: '50%' }}>
                                            <Option value='2019'>2019</Option>
                                            <Option value='2018'>2018</Option>
                                            <Option value='2017'>2017</Option>
                                        </Select>
                                    </div>
                                </Radio.Group>
                            </div>

                            <div className={styles.ButtonDIv}>
                                <Button onClick={e => this.Confirm(this.state.value)} type='primary'>统计</Button>
                            </div>

                            <div className={styles.bodyCss_PN}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    className={styles.mynoiseClass}
                                    pagination={{ pageSize: 10 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* 列表查看 */}
                {
                    this.state.ViewState ?
                        <Detail
                            DetailView={this.props.dataManagement.SADetailDataSource}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.handleCloseLook}
                            visible={this.state.ViewState}
                        />
                        : null
                }
            </>
        )
    }

    onChangeRadio = e => {
        console.log('radio checked', e.target.value);
        let value = e.target.value
        if (value === 1) {
            this.setState({
                value: e.target.value,
                columns: [
                    {
                        title: '序号',
                        dataIndex: 'key', key: 'key',
                        width: '5%',
                    },
                    {
                        title: '整机名称',
                        width: '15%',
                        dataIndex: 'machineName', key: 'machineName',
                    }, {
                        title: '整机PN',
                        width: '14%',
                        dataIndex: 'machinePN', key: 'machinePN',
                    },
                    // {
                    //     title: '整机BN',
                    //     width: '9%',
                    //     dataIndex: 'type', key: 'type',
                    // }, 
                    {
                        title: '被测对象名称',
                        width: '10%',
                        dataIndex: 'testObjictName', key: 'testObjictName',
                    },
                    {
                        title: '被测对象PN',
                        width: '14%',
                        dataIndex: 'testObjictPN', key: 'testObjictPN',
                    }, {
                        title: '测试时间',
                        width: '8%',
                        dataIndex: 'testTime', key: 'testTime',
                    },
                    {
                        title: '测试次数',
                        width: '8%',
                        dataIndex: 'testNumber', key: 'testNumber',
                    },
                    {
                        title: '故障次数',
                        width: '8%',
                        dataIndex: 'failureNumber', key: 'failureNumber',
                    }
                ],

            });
            this.props.dispatch({//初始化表格数据
                type: 'dataManagement/StatisticAnalysisInit',
            })
        }
        else if (value === 2) {
            this.setState({
                value: e.target.value,
                columns: [
                    {
                        title: '序号',
                        dataIndex: 'key', key: 'key',
                        width: '8%',
                    },
                    {
                        title: '整机名称',
                        width: '18%',
                        dataIndex: 'machineName', key: 'machineName',
                    }, {
                        title: '整机PN',
                        width: '18%',
                        dataIndex: 'machinePN', key: 'machinePN',
                    }, {
                        title: '整机SN',
                        width: '18%',
                        dataIndex: 'machineSN', key: 'machineSN',
                    },
                    {
                        title: '被测对象名称',
                        width: '12%',
                        dataIndex: 'testObjictName', key: 'testObjictName',
                    }, {
                        title: '测试时间',
                        width: '10%',
                        dataIndex: 'testTime', key: 'testTime',
                    }, {
                        title: '详情',
                        dataIndex: 'details', key: 'details',
                        render: (text, record) => (
                            <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.handleClickLook(record.key)} >查看</span>
                        )
                    }
                ],
            });
            this.props.dispatch({//初始化表格数据
                type: 'dataManagement/StatisticAnalysisInit',
            })
        }
        else if (value === 3) {
            this.setState({
                value: e.target.value,
                columns: [
                    {
                        title: '序号',
                        dataIndex: 'key', key: 'key',
                        width: '5%',
                    },
                    {
                        title: '整机名称',
                        width: '15%',
                        dataIndex: 'machineName', key: 'machineName',
                    }, {
                        title: '整机PN',
                        width: '14%',
                        dataIndex: 'machinePN', key: 'machinePN',
                    },
                    // {
                    //     title: '整机BN',
                    //     width: '9%',
                    //     dataIndex: 'type', key: 'type',
                    // }, 
                    {
                        title: '被测对象名称',
                        width: '10%',
                        dataIndex: 'testObjictName', key: 'testObjictName',
                    },
                    {
                        title: '被测对象PN',
                        width: '14%',
                        dataIndex: 'testObjictPN', key: 'testObjictPN',
                    }, {
                        title: '测试时间',
                        width: '8%',
                        dataIndex: 'testTime', key: 'testTime',
                    },
                    {
                        title: '测试次数',
                        width: '8%',
                        dataIndex: 'testNumber', key: 'testNumber',
                    },
                    {
                        title: '故障次数',
                        width: '8%',
                        dataIndex: 'failureNumber', key: 'failureNumber',
                    }
                ],

            });
            this.props.dispatch({//初始化表格数据
                type: 'dataManagement/StatisticAnalysisInit',
            })
        }

    };
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

    // 点击详情 数据
    handleClickLook = (key) => {
        // console.log('pn=====', pn);
        this.setState({
            ViewState: true
        });
        this.props.dispatch({
            type: 'dataManagement/SADetail',
            payload: { 'id': key }
        })
    }
    // 关闭详情 数据
    handleCloseLook = () => {
        this.setState({
            ViewState: false
        })
    }
    // 获取pn值
    changePn = (e) => {
        this.setState({
            PN: e.target.value
        })
    }
    // 获取Sn值
    changeSn = (e) => {
        this.setState({
            SN: e.target.value
        })
    }
    // 获取年份
    onChangeResult = (value) => {
        this.setState({
            Year: value
        })
    }
    // 点击 统计
    Confirm = (key) => {
        // console.log('pn=====', pn);
        if (key === 1) {
            this.props.dispatch({
                type: 'dataManagement/SAStat',
                payload: { 'stationPn': this.state.PN }
            })
        }
        else if (key === 2) {
            this.props.dispatch({
                type: 'dataManagement/SAStat',
                payload: { 'stationSn': this.state.SN }
            })
        }
        else if (key === 3) {
            // this.props.dispatch({
            //     type: 'dataManagement/SAStat',
            //     payload: { 'testTime': this.state.Year }
            // })
        }

    }


}
