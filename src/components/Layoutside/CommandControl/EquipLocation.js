import React, { Component } from 'react';
import Dialog from '../../Dialog/Dialog';
import { Button, Input, DatePicker, Form } from 'antd';
import styles from './commandControl.less';
import { equipLocation } from '../../../services/services';
import { connect } from 'dva';

class EquipLocation extends Component {
    constructor(props) {
        super();
        this.state = {

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

        return (
            <Dialog
                visible={this.props.visible}
                title='装备位置'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '350px' }}>

                        <div className={styles.contentPN} style={{ marginTop: '10px' }}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='经度:'>
                                    {getFieldDecorator('lon', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='纬度:'>
                                    {getFieldDecorator('lat', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='高度:'>
                                    {getFieldDecorator('height', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '195px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        {/* <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='部署完成时间:'>
                                    {getFieldDecorator('endTime', {
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
*/}

                        {/*确定*/}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%', marginTop: '10px' }}>
                            <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                                <Button onClick={this.ClickConfirm} type="primary">确定</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }


    ClickConfirm = () => {
        this.props.form.validateFields((err, fieldsValue) => {
            // let endTime = this.props.form.getFieldValue('endTime');
            let values = this.props.form.getFieldsValue();
            equipLocation(values);
            // console.log("4444444444",this.props.form.getFieldsValue())
            // if (endTime !== '' && endTime !== undefined && endTime !== null) {
            // let values = {
            //     ...fieldsValue,
            //     'endTime': fieldsValue['endTime'].format('YYYY-MM-DD HH:mm:ss'),
            // }
            // this.props.dispatch({
            //     type: 'dataManagement/equipLocation',
            //     payload: values
            // })
            // }
            // else {
            // delete values.endTime;
            // this.props.dispatch({
            //     type: 'dataManagement/equipLocation',
            //     payload: values
            // })
            // }

        })
    }

}


EquipLocation = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        // if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
        //     return {
        //         pn: Form.createFormField({
        //             ...props,
        //             value: props.pnsign != null && props.pnsign === 'EquipLocation' ? props.choicePNDetail.PN : null,
        //         }),
        //     };
        // }
    }

})(EquipLocation);
export default connect()(EquipLocation);