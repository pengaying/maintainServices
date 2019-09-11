import React, { Component } from 'react';
import { Button, Table, DatePicker, Input } from 'antd';
import styles from './DM.less';
import { connect } from 'dva';
import Detail from './../../Dialog/DataManagement/ElecSituation/Detail';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class ElecSituation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DetailState: false, //详情弹窗
            location: ''
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'dataManagement/ElecSituationInit'
        })
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '15%',
            },
            {
                title: '地点',
                dataIndex: 'location', key: 'location',
                width: '25%',
            },
            {
                title: '最后采集时间',
                width: '30%',
                dataIndex: 'time', key: 'time',
            }, {
                title: '详情',
                //   width: '18%',
                dataIndex: 'detail', key: 'detail',
                render: (text, record) => (
                    <div style={{ display: 'inline-block' }}>
                        <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.ClickDetail(record.key)} >详情</span>
                        <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
                    </div>
                )
            }
        ];

        let Tabledata = [];
        let tableData = this.props.dataManagement.ElecSituationData; //电磁态势 表格数据
        if (tableData != null && tableData.length !== 0) {
            for (let i = 0; i < tableData.length; i++) {
                Tabledata.push({
                    key: tableData[i].id,
                    location: tableData[i].location,
                    time: tableData[i].endTime,
                });
            }
        }

        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        电磁态势
                    </div>

                    <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
                        <div style={{ float: 'left', width: '10%', textAlign: 'left', margin: '0 0px 10px 10px' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button onClick={this.ShowCreate} type="primary">模板下载</Button>
                            </div>
                        </div>
                        <div style={{ float: 'left', width: '10%', textAlign: 'left', margin: '0 0px 10px 10px' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button onClick={this.ShowCreate} type="primary">导入</Button>
                            </div>
                        </div>
                        <div style={{ float: 'left', width: '30%', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <span style={{ marginRight: '10px' }}>采集地点:</span>
                               <Input autoComplete='off'  value={this.state.location} onChange={this.ChangeLocation} style={{ width: '150px' }} />
                            </div>
                        </div>
                        <div style={{ float: 'left', width: '35%', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <span style={{ marginRight: '10px' }}>最后采集时间:</span>
                                <DatePicker placeholder="请选择日期" showTime onChange={this.ChangeTime} />
                            </div>
                        </div>
                        <div style={{ float: 'right', textAlign: 'left', margin: '0 0px 10px 10px' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button onClick={this.ClickSearch} type="primary">搜索</Button>
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

                {/* 选择 详情 弹窗 */}
                {
                    this.state.DetailState ?
                        <Detail
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

    // 日期选择 筛选表格
    ChangeTime = (date, dateString) => {
        this.setState({
            dateString: dateString
        })
    }
    // 地点
    ChangeLocation = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    // 点击  新建
    ShowCreate = () => {
        this.setState({
            AddState: true
        });
    }

    // 点击查询
    ClickSearch = () => {
        let obj = {};
        if (this.state.dateString != null && this.state.dateString !== '' && this.state.dateString !== undefined) {
            obj.time = this.state.dateString;
        }
        obj.location = this.state.location;
        console.log("obj====", obj)
        this.props.dispatch({
            type: 'dataManagement/ESSearch',
            payload: obj
        })
    }

    // 点击  详情
    ClickDetail = (key) => {
        this.setState({
            DetailState: true,
        })
        this.props.dispatch({
            type: 'dataManagement/ESDetail',
            payload: { 'rdid': key }
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
            type: 'dataManagement/ESTableDelete',
            payload: { 'id': key }
        })
    }


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
}

