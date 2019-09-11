
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Form, Input, Button, DatePicker } from 'antd';
import styles from '../DataManagementDialog.less';
import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
class AddTool extends Component {
    constructor(props) {
        super();
        this.state = {

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
        return (
            <Dialog
                visible={this.props.visible}
                title='添加仪表和工具'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '450px' }}>

                        <div className={styles.field}>
                            <div className={styles.fieldTitle}>添加仪表</div>
                            <div className={styles.fieldContent}>
                                <div style={{ float: 'left', width: '100%' }}>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='仪表名称:'>
                                                {getFieldDecorator('name', {
                                                    rules: [
                                                        { message: ' ', required: true, whitespace: true },
                                                    ],
                                                    // rules: [
                                                    //     { message: ' ' },
                                                    //     {
                                                    //         validator: this.NumberValidator
                                                    //     }
                                                    // ],
                                                    // initialValue: '',
                                                })(
                                                    <Input autoComplete='off' style={{ width: '120px' }} />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='仪表型号:'>
                                                {getFieldDecorator('model', {
                                                    initialValue: '',
                                                })(
                                                    <Input autoComplete='off' style={{ width: '120px' }} />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.field} style={{ marginTop: '20px' }}>
                            <div className={styles.fieldTitle}>添加工具</div>
                            <div className={styles.fieldContent}>
                                <div style={{ float: 'left', width: '100%' }}>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='工具名称:'>
                                                {getFieldDecorator('toolName', {
                                                    rules: [
                                                        { message: ' ', required: true, whitespace: true },
                                                    ],
                                                    // rules: [
                                                    //     { message: ' ' },
                                                    //     {
                                                    //         validator: this.NumberValidator
                                                    //     }
                                                    // ],
                                                    // initialValue: '',
                                                })(
                                                    <Input autoComplete='off' style={{ width: '120px' }} />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='工具型号:'>
                                                {getFieldDecorator('toolModel', {
                                                    initialValue: '',
                                                })(
                                                    <Input autoComplete='off' style={{ width: '120px' }} />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/** 确定*/}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickConfirm}>确定</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    ClickConfirm = () => {
        let values = this.props.form.getFieldsValue();
        let data = this.props.dataManagement.MDToolTableDataSource;//获取工具表格数据
        let detaildata = this.props.dataManagement.MDToolDetailDataSource;//获取详情待修改数据
        let datalength = this.props.dataManagement.MDToolTableDataSource.length;//获取工具表格数据长度

        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (detaildata != null) {//若是详情传过来的数据
                    // if (
                    //     values.name != null && values.name !== '' && values.name !== undefined &&
                    //     values.toolName != null && values.toolName !== '' && values.toolName !== undefined
                    // ) {
                        let key = detaildata.key;
                        values.key = key;
                        data[key] = values;
                        console.log('修改工具表格数据===', data)
                        this.props.dispatch({
                            type: 'dataManagement/MDToolTableData',
                            payload: data
                        })
                    // }
                }
                else {//若是新增
                    // if (
                    //     values.name != null && values.name !== '' && values.name !== undefined &&
                    //     values.toolName != null && values.toolName !== '' && values.toolName !== undefined
                    // ) {
                        values.key = datalength;
                        data.push(values);//将新增的工具数据添加至表格数据源
                        console.log('新增工具表格数据===', data)
                        this.props.dispatch({
                            type: 'dataManagement/MDToolTableData',
                            payload: data
                        })
                    // }
                }
            }
        });
    }
    NumberValidator = (rule, value, callback) => {//验证输入时的值是否符合输入范围
        if ((value !== "") || (value !== undefined)) {
            // return
        }
        else {
            callback('不可为空');
        }
    }

}


AddTool = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        if (props.DetailViewData != null && props.DetailViewData !== undefined) {
            return {
                name: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.name,
                }),
                model: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.model,
                }),
                toolName: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.toolName,
                }),
                toolModel: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.toolModel,
                }),
            };
        }
    }

})(AddTool);
export default connect()(AddTool);
