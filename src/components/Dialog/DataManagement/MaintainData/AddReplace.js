
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Form, Input, Button, DatePicker } from 'antd';
import styles from '../DataManagementDialog.less';
import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
class AddReplace extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    NumberValidator = (rule, value, callback) => {//验证输入时的值是否符合输入范围
        if ((value !== "") || (value !== undefined)) {
            // return
        }
        else {
            callback('不可为空');
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
                title='添加更换件'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '450px' }}>

                        <div className={styles.field}>
                            <div className={styles.fieldTitle}>添加更换件</div>
                            <div className={styles.fieldContent}>
                                <div style={{ float: 'left', width: '100%' }}>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='更换件名称:'>
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
                                            <Form.Item  {...formItemLayout} label='更换件PN:'>
                                                {getFieldDecorator('pn', {
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
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='更换件型号:'>
                                            {getFieldDecorator('model', {
                                                initialValue: '',
                                            })(
                                                <Input autoComplete='off' style={{ width: '120px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='更换件数量:'>
                                            {getFieldDecorator('count', {
                                                initialValue: '',
                                            })(
                                                <Input autoComplete='off' style={{ width: '120px' }} />
                                            )}
                                        </Form.Item>
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
        let data = this.props.dataManagement.MDListTableDataSource;//获取更换件表格数据
        let detaildata = this.props.dataManagement.MDListDetailDataSource;//获取详情待修改数据
        let datalength = this.props.dataManagement.MDListTableDataSource.length;//获取更换件表格数据长度

        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (detaildata != null) {//若是详情传过来的数据
                    // if (
                    //     values.name != null && values.name !== '' && values.name !== undefined &&
                    //     values.pn != null && values.pn !== '' && values.pn !== undefined
                    // ) {
                    let key = detaildata.key;
                    values.key = key;
                    data[key] = values;
                    console.log('修改更换件表格数据===', data)
                    this.props.dispatch({
                        type: 'dataManagement/MDListTableData',
                        payload: data
                    })
                    // }
                }
                else {//若是新增
                    // if (
                    //     values.name != null && values.name !== '' && values.name !== undefined &&
                    //     values.pn != null && values.pn !== '' && values.pn !== undefined
                    // ) {
                    values.key = datalength;
                    data.push(values);//将新增的更换件数据添加至表格数据源
                    console.log('新增更换件表格数据===', data)
                    this.props.dispatch({
                        type: 'dataManagement/MDListTableData',
                        payload: data
                    })
                    // }
                }
            }
        });
    }
}


AddReplace = Form.create({

    mapPropsToFields(props) {
        console.log("props=====", props);
        if (props.DetailViewData != null && props.DetailViewData !== undefined) {
            return {
                name: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.name,
                }),
                pn: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.pn,
                }),
                model: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.model,
                }),
                count: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.count,
                }),
            };
        }
    }

})(AddReplace);
export default connect()(AddReplace);
