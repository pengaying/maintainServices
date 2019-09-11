import React, { Component } from 'react';
import Dialog from '../../Dialog/Dialog';
import { Button, Select, Form } from 'antd';
import styles from './commandControl.less';
import { equipState } from '../../../services/services';
import { connect } from 'dva';
class EquipState extends Component {
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
        const Option = Select.Option;
        return (
            <Dialog
                visible={this.props.visible}
                title='装备状态'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '300px' }}>
                        <div className={styles.contentPN} style={{ marginTop: '10px' }}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='工作状态:'>
                                    {getFieldDecorator('workState', {
                                        initialValue: '1',
                                    })(
                                        <Select style={{ width: '120px' }}>
                                            <Option value='1'>未就绪</Option>
                                            <Option value='2'>待命</Option>
                                            <Option value='3'>执行中</Option>
                                            <Option value='4'>完成</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='技术状态:'>
                                    {getFieldDecorator('technicalState', {
                                        initialValue: '1',
                                    })(
                                        <Select style={{ width: '120px' }}>
                                            <Option value='1'>正常</Option>
                                            <Option value='2'>一般故障</Option>
                                            <Option value='3'>致命故障</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </div>
                        </div>


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
        let values = this.props.form.getFieldsValue();
        equipState(values);
    }

}
EquipState = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        // if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
        //     return {
        //         pn: Form.createFormField({
        //             ...props,
        //             value: props.pnsign != null && props.pnsign === 'EquipState' ? props.choicePNDetail.PN : null,
        //         }),
        //     };
        // }
    }

})(EquipState);
export default connect()(EquipState);