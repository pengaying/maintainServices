
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Form, Input, Button, DatePicker } from 'antd';
import styles from '../DataManagementDialog.less';
import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
class Query extends Component {
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
                title='查询'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='整机名称:'>
                                    {getFieldDecorator('stationName', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='整机PN:'>
                                    {getFieldDecorator('stationPn', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='整机SN:'>
                                    {getFieldDecorator('stationSn', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='分机名称:'>
                                    {getFieldDecorator('extensionName', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='分机PN:'>
                                    {getFieldDecorator('extensionPn', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='分机SN:'>
                                    {getFieldDecorator('extensionSn', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='维修人员:'>
                                    {getFieldDecorator('testPerson', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='被测对象名称:'>
                                    {getFieldDecorator('objectName', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='被测对象PN:'>
                                    {getFieldDecorator('objectPn', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='被测对象SN:'>
                                    {getFieldDecorator('objectSn', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='测试时间段:'>
                                    {getFieldDecorator('testTime', {
                                        // initialValue: '',
                                    })(
                                        <DatePicker
                                            format="YYYY-MM-DD HH:mm:ss"
                                            showTime
                                            placeholder="请选择日期"
                                            style={{ width: '150px' }}
                                        />
                                    )}
                                </Form.Item>
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
        if(this.props.sign === 'testdata'){
            this.props.form.validateFields((err, fieldsValue) => {
                let testTime = this.props.form.getFieldValue('testTime');
                let values = this.props.form.getFieldsValue();
                if (testTime !== '' && testTime !== undefined&& testTime !== null) {
                    let values = {
                        ...fieldsValue,
                        'testTime': fieldsValue['testTime'].format('YYYY-MM-DD HH:mm:ss'),
                    }
                    this.props.dispatch({
                        type: 'dataManagement/TestDataQueryMore',
                        payload: values
                    })
                }
                else {
                    delete values.testTime;
                    this.props.dispatch({
                        type: 'dataManagement/TestDataQueryMore',
                        payload: values
                    })
                }
            })
        }
        else if(this.props.sign === 'maindata'){
            this.props.form.validateFields((err, fieldsValue) => {
                let testTime = this.props.form.getFieldValue('testTime');
                let values = this.props.form.getFieldsValue();
                if (testTime !== '' && testTime !== undefined&& testTime !== null) {
                    let values = {
                        ...fieldsValue,
                        'testTime': fieldsValue['testTime'].format('YYYY-MM-DD HH:mm:ss'),
                    }
                    this.props.dispatch({
                        type: 'dataManagement/MaintainDataQueryMore',
                        payload: values
                    })
                }
                else {
                    delete values.testTime;
                    this.props.dispatch({
                        type: 'dataManagement/MaintainDataQueryMore',
                        payload: values
                    })
                }
            })
        }
    }

}


Query = Form.create({
    mapPropsToFields(props) {

    }
})(Query);
export default connect()(Query);
