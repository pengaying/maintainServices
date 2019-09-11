
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Form, DatePicker, Table } from 'antd';
import styles from '../DataManagementDialog.less';
import { connect } from 'dva';

class Detail extends Component {
    constructor(props) {
        super();
        this.state = {
            modifyState: false,
            LendState: false
        }

    }
    render() {

        const { form } = this.props;
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
            },
            wrapperCol: {
                span: 7
            },
        };



        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '25%',
            },
            {
                title: '测试对象SN',
                width: '25%',
                dataIndex: 'testObjictSN', key: 'testObjictSN',
            }, {
                title: '测试次数',
                width: '25%',
                dataIndex: 'testNumber', key: 'testNumber',
            }, {
                title: '故障次数',
                width: '25%',
                dataIndex: 'failureNumber', key: 'failureNumber',
            }
        ];

        //默认显示页数
        //   const paginationProps = {
        //     pageSize: 3
        //   }

        let Tabledata = [];
        // let storagedata = this.props.dataManagement.outStorageTableData;// 测试对象SN列表数据

        // // 测试对象SN列表
        // if (storagedata != null && storagedata.length !== 0) {
        //     for (let i = 0; i < storagedata.length; i++) {
        //         Tabledata.push({
        //             key: i + 1,
        //             sparepartpn: storagedata[i].pn,
        //             sparepartname: storagedata[i].name,
        //             sparecategory: storagedata[i].category,
        //             sparebrand: storagedata[i].brand,
        //             sparetype: storagedata[i].model,
        //             quantity: storagedata[i].count,
        //         });
        //     }
        // }

        return (
            <Dialog
                visible={this.props.visible}
                title='统计详情'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '600px' }}>

                        {/*  <div className={styles.ButtonDIv}>
                            <div className={styles.TextAreaStyle} style={{ margin: '0' }}>
                                <Button type="primary" onClick={this.ClickModify}>
                                    {this.state.modifyState === false ? '修改参数' : '正在修改'}
                                </Button>
                            </div>
                        </div>
*/}

                        {/* 基本信息 */}
                        <div className={styles.field}>
                            <div className={styles.fieldTitle}>基本信息</div>
                            <div className={styles.fieldContent}>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='整机:'>
                                            {getFieldDecorator('extensionName', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '195px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='整机PN:'>
                                            {getFieldDecorator('extensionPn', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled style={{ width: '195px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                {/*
                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='整机BN:'>
                                            {getFieldDecorator('extensionBn', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '195px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>
                                            */}

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='整机SN:'>
                                            {getFieldDecorator('extensionSn', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '195px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='测试对象:'>
                                            {getFieldDecorator('objectName', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '195px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='测试对象PN:'>
                                            {getFieldDecorator('objectPn', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '195px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='测试次数:'>
                                            {getFieldDecorator('testFrequency', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '195px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='故障次数:'>
                                            {getFieldDecorator('fFrequency', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '195px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='测试时间:'>
                                            {getFieldDecorator('testTime', {
                                                // initialValue: '',
                                            })(
                                                <DatePicker
                                                    format="YYYY-MM-DD HH:mm:ss"
                                                    showTime
                                                    disabled={this.state.modifyState ? false : true}
                                                    style={{ minWidth: '195px' }}
                                                />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='操作人:'>
                                            {getFieldDecorator('testPerson', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '195px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.tableContent_delivery}>
                            <div className={styles.tableStyle}>
                                <div style={{ marginRight: '10px', lineHeight: '30px', textAlign: 'center' }}>测试对象SN列表</div>
                                <div className={styles.bodyCss_query}>
                                    <Table
                                        bordered
                                        columns={columns}
                                        dataSource={Tabledata}
                                        pagination={false}
                                        className={styles.mynoiseClass}
                                        scroll={{ y: 100 }}
                                        rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                    />
                                </div>

                            </div>
                        </div>

                        {/* 确认 */}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickOK}>
                                    确认
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    // 改变 出借状态
    ChangeLend = () => {
        this.setState({
            LendState: !this.state.LendState
        })
    }
    // 修改参数
    ClickModify = () => {
        this.setState({
            modifyState: !this.state.modifyState
        });
    }

    // 修该参数
    ClickOK = () => {
        this.props.form.validateFields((err, fieldsValue) => {
            let testTime = this.props.form.getFieldValue('testTime');
            console.log(testTime)
            if (testTime !== '' && testTime !== undefined && inTime !== '' && inTime !== undefined && outTime !== '' && outTime !== undefined) {
                let values = {
                    ...fieldsValue,
                    'testTime': fieldsValue['testTime'].format('YYYY-MM-DD HH:mm:ss'),
                }
                console.log(values);

                if (this.state.modifyState) {
                    this.props.dispatch({
                        type: 'dataManagement/SADetailModify',
                        payload: values
                    })
                }
            }
            else {
                let values = {
                    ...fieldsValue,
                }
                delete values.testTime;//删除时间属性
                console.log(values);
                if (this.state.modifyState) {
                    this.props.dispatch({
                        type: 'dataManagement/SADetailModify',
                        payload: values
                    })
                }
            }
        })

        this.setState({
            modifyState: false
        });

    }

}

Detail = Form.create({

    mapPropsToFields(props) {
        // console.log('props=====', props);
        if (props.DetailView != null) {
            return {
                extensionName: Form.createFormField({
                    ...props,
                    value: props.DetailView.extensionName,
                }),
                extensionPn: Form.createFormField({
                    ...props,
                    value: props.DetailView.extensionPn,
                }),
                extensionSn: Form.createFormField({
                    ...props,
                    value: props.DetailView.extensionSn,
                }),
                objectName: Form.createFormField({
                    ...props,
                    value: props.DetailView.objectName,
                }),
                objectPn: Form.createFormField({
                    ...props,
                    value: props.DetailView.objectPn,
                }),
                testFrequency: Form.createFormField({
                    ...props,
                    value: props.DetailView.testFrequency,
                }),
                fFrequency: Form.createFormField({
                    ...props,
                    value: props.DetailView.fFrequency,
                }),
                // testTime: Form.createFormField({
                //     ...props,
                //     value: props.DetailView.testTime,
                // }),
                testPerson: Form.createFormField({
                    ...props,
                    value: props.DetailView.testPerson,
                }),
            };
        }
    }

})(Detail);
export default connect()(Detail);