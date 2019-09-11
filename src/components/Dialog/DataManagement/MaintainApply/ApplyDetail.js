
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Form, Input, Button, DatePicker } from 'antd';
import styles from '../DataManagementDialog.less';
import moment from 'moment';
import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
class ApplyDetail extends Component {
    constructor(props) {
        super();
        this.state = {
            modifyState: false,
        }

    }
    render() {
        const { TextArea } = Input;
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
            },
            wrapperCol: {
                span: 7
            },
        };
        const formItemLayoutRemark = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            },
        };
        return (
            <Dialog
                visible={this.props.visible}
                title='维修申请详情'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>

                        <div className={styles.ButtonDIv}>
                            <div className={styles.TextAreaStyle} style={{ margin: '0' }}>
                                <Button type="primary" onClick={this.ClickModify}>
                                    {this.state.modifyState === false ? '修改参数' : '正在修改'}
                                </Button>
                            </div>
                        </div>

                        <div className={styles.field}>
                            <div className={styles.fieldTitle}>基本信息</div>
                            <div className={styles.fieldContent}>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='故障件名称:'>
                                            {getFieldDecorator('spName', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='故障件PN:'>
                                            {getFieldDecorator('spPn', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='故障件SN:'>
                                            {getFieldDecorator('spSn', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='类别:'>
                                            {getFieldDecorator('spType', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='型号:'>
                                            {getFieldDecorator('spModel', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='规格:'>
                                            {getFieldDecorator('spSpecs', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='申请人:'>
                                            {getFieldDecorator('applyPerson', {
                                                initialValue: '',
                                            })(
                                               <Input autoComplete='off'  disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='申请时间:'>
                                            {getFieldDecorator('applyTime', {
                                                // initialValue: '',
                                            })(
                                                <DatePicker
                                                    format="YYYY-MM-DD HH:mm:ss"
                                                    showTime
                                                    disabled={this.state.modifyState ? false : true}
                                                    placeholder="请选择日期"
                                                    style={{ minWidth: '200px' }}
                                                />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={styles.TextAreaStyle}>
                            <Form.Item  {...formItemLayoutRemark} label='备注:'>
                                {getFieldDecorator('remarks', {
                                    initialValue: '',
                                })(
                                    <TextArea disabled={this.state.modifyState ? false : true} rows={7} />
                                )}
                            </Form.Item>
                        </div>


                        {/** 确定*/}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickAppproal}>审批结果</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickConfirm}>确定</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    // 审批结果
    ClickAppproal = () => {
        this.props.dispatch({
            type: 'dataManagement/SMaintainApplyApproal',
        })
    }
    // 修改参数
    ClickModify = () => {
        this.setState({
            modifyState: !this.state.modifyState
        });
    }

    ClickConfirm = () => {
        this.props.form.validateFields((err, fieldsValue) => {
            let applyTime = this.props.form.getFieldValue('applyTime');
            let values = this.props.form.getFieldsValue();
            let id = this.props.DetailViewData != null ? this.props.DetailViewData.id : null;
            if (id != null) {//判断id是否为空
                values.id = id;
            }
            if (applyTime !== '' && applyTime !== undefined && applyTime !== null) {
                let values = {
                    ...fieldsValue,
                    'applyTime': fieldsValue['applyTime'].format('YYYY-MM-DD HH:mm:ss'),
                }
                console.log('values==========', values);
                this.props.dispatch({
                    type: 'dataManagement/MaintainApplyModify',
                    payload: values
                })
            }
            else {
                delete values.applyTime;
                console.log('values==========', values);
                this.props.dispatch({
                    type: 'dataManagement/MaintainApplyModify',
                    payload: values
                })
            }
        })
    }

}


ApplyDetail = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        if (props.DetailViewData != null) {
            let DetailViewData = props.DetailViewData;
            return {
                spName: Form.createFormField({
                    ...props,
                    value: DetailViewData.spName,
                }),
                spPn: Form.createFormField({
                    ...props,
                    value: DetailViewData.spPn,
                }),
                spSn: Form.createFormField({
                    ...props,
                    value: DetailViewData.spSn,
                }),
                spType: Form.createFormField({
                    ...props,
                    value: DetailViewData.spType,
                }),
                spModel: Form.createFormField({
                    ...props,
                    value: DetailViewData.spModel,
                }),
                spSpecs: Form.createFormField({
                    ...props,
                    value: DetailViewData.spSpecs,
                }),
                spSpecsapplyPerson: Form.createFormField({
                    ...props,
                    value: DetailViewData.spSpecsapplyPerson,
                }),
                applyTime: Form.createFormField({
                    ...props,
                    value: DetailViewData.applyTime,
                }),
                remarks: Form.createFormField({
                    ...props,
                    value: DetailViewData.remarks,
                }),
            };
        }
    }

})(ApplyDetail);
export default connect()(ApplyDetail);
