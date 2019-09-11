import React, { Component } from 'react'
import styles from './DM.less';
import { Button, Table, Select, DatePicker, Input, Form } from 'antd';
import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
class MaintainLog extends Component {
    constructor(propps) {
        super(propps);
        this.state = {
            DetailState: false,
            ApplyTime: '',
            ApplyState: '',
            ApplyResult: '',
        }
    }

    componentDidMount() {
        //初始化表格数据
        this.props.dispatch({
            type: 'dataManagement/MaintainLogInit',
        })
    }
    render() {
        const Option = Select.Option;
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
                span: 9
            },
            wrapperCol: {
                span: 15
            },
        };
        const formItemLayoutD = {
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 16
            },
        };

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
                title: '装备站名称',
                width: '20%',
                dataIndex: 'stationName', key: 'stationName',
            }, {
                title: '装备PN',
                width: '20%',
                dataIndex: 'EquipPN', key: 'EquipPN',
            }, {
                title: '操作人',
                width: '10%',
                dataIndex: 'operator', key: 'operator',
            }, {
                title: '日期',
                width: '20%',
                dataIndex: 'time', key: 'time',
            }, {
                title: '地点',
                width: '10%',
                dataIndex: 'location', key: 'location',
            }, {
                title: '结果',
                width: '10%',
                dataIndex: 'result', key: 'result',
            },
            // {
            //     title: '详情',
            //     dataIndex: 'operation', key: 'operation',
            //     render: (text, record) => (
            //         <div style={{ display: 'inline-block' }}>
            //             <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.ClickDetail(record.key)} >详情</span>
            //             <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
            //         </div>
            //     )
            // }
        ];

        let Tabledata = [];
        let tableData = this.props.dataManagement.MaintainLogTableDtaSource; //维修日志 表格数据
        if (tableData != null && tableData.length !== 0) {
            for (let i = 0; i < tableData.length; i++) {
                Tabledata.push({
                    key: tableData[i].id,
                    stationName: tableData[i].stationName,
                    EquipPN: tableData[i].stationPn,
                    operator: tableData[i].person,
                    time: tableData[i].repairTime,
                    location: tableData[i].repairLocation,
                    result: tableData[i].result,
                });
            }
        }
        
        return (
            <div className={styles.CenterContent}>
                <div className={styles.CenterContentTitle}>
                    维修日志
                </div>

                <div className={styles.layoutContent}>
                    <div style={field}>
                        <div style={fieldTitle}>查询信息</div>
                        <div style={fieldContent}>

                            <div style={{ float: 'left', width: '100%' }}>
                                <div className={styles.SupplementarySelect}>
                                    <Form.Item  {...formItemLayout} label='装备站PN:'>
                                        {getFieldDecorator('stationPn', {
                                            initialValue: '',
                                        })(
                                            <Input autoComplete='off' />
                                        )}
                                    </Form.Item>
                                </div>
                                <div className={styles.SupplementarySelect}>
                                    <Form.Item  {...formItemLayout} label='装备站名称:'>
                                        {getFieldDecorator('stationName', {
                                            initialValue: '',
                                        })(
                                            <Input autoComplete='off' />
                                        )}
                                    </Form.Item>
                                </div>
                                <div className={styles.SupplementaryDatepicker} style={{ width: '35%' }}>
                                    <Form.Item  {...formItemLayoutD} label='维修日期:'>
                                        {getFieldDecorator('repairTime', {
                                            // initialValue: '',
                                        })(
                                            <DatePicker
                                                format="YYYY-MM-DD HH:mm:ss"
                                                showTime
                                                placeholder="请选择日期"
                                                // style={{ minWidth: '180px' }}
                                                onChange={this.onChangeTime} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div style={{ float: 'left', width: '100%', marginTop: '10px' }}>
                                <div className={styles.SupplementarySelect}>
                                    <Form.Item  {...formItemLayout} label='地点:'>
                                        {getFieldDecorator('repairLocation', {
                                            // initialValue: '',
                                        })(
                                            <Select onChange={this.changeState} style={{ width: '100%' }}>
                                                <Option value='1'>{''}</Option>
                                                <Option value='2'>{''}</Option>
                                            </Select>
                                        )}
                                    </Form.Item>
                                </div>
                                <div className={styles.SupplementarySelect}>
                                    <Form.Item  {...formItemLayout} label='结果:'>
                                        {getFieldDecorator('result', {
                                            // initialValue: '',
                                        })(
                                            <Select onChange={this.changeState} style={{ width: '100%' }}>
                                                <Option value='1'>{''}</Option>
                                                <Option value='2'>{''}</Option>
                                            </Select>)}
                                    </Form.Item>
                                </div>
                                <div className={styles.SupplementaryDatepicker}>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type="primary">重置</Button>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button onClick={this.clickChooice} type="primary">筛选</Button>
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
                                // scroll={{y: 100 }}
                                pagination={{ pageSize: 9 }}
                                rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                            />
                        </div>

                    </div>
                </div>

            </div>
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
        this.props.dispatch({
            type: 'dataManagement/ClickApplyDetailAsync',
            payload: key
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
    // //改变申请结果
    // onChangeResult = (value) => {
    //     this.setState({
    //         ApplyResult: value
    //     })
    // }
    //筛选结果
    clickChooice = () => {
        // let { ApplyTime, ApplyState, ApplyResult } = this.state;
        // let obj = {
        //     "begintime": ApplyTime,
        //     "state": ApplyState,
        //     "result": ApplyResult
        // }
        this.props.form.validateFields((err, fieldsValue) => {
            let repairTime = this.props.form.getFieldValue('repairTime');
            let values = this.props.form.getFieldsValue();
            // console.log("4444444444", repairTime)
            if (repairTime !== '' && repairTime !== undefined && repairTime !== null) {
                let values = {
                    ...fieldsValue,
                    'repairTime': fieldsValue['repairTime'].format('YYYY-MM-DD HH:mm:ss'),
                }
                this.props.dispatch({
                    type: 'dataManagement/MaintainLogChooice',
                    payload: values
                })
            }
            else {
                delete values.repairTime;
                this.props.dispatch({
                    type: 'dataManagement/MaintainLogChooice',
                    payload: values
                })
            }

        })
    }


}


MaintainLog = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        //     if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
        //         return {
        //             name: Form.createFormField({
        //                 ...props,
        //                 value: props.DetailViewData.name,
        //             }),
        //             model: Form.createFormField({
        //                 ...props,
        //                 value: props.DetailViewData.model,
        //             }),
        //             stationPn: Form.createFormField({
        //                 ...props,
        //                 value: props.DetailViewData.stationPn,
        //             }),
        //             toolModel: Form.createFormField({
        //                 ...props,
        //                 value: props.DetailViewData.toolModel,
        //             }),
        //         };
        //     }
    }

})(MaintainLog);
export default connect()(MaintainLog);