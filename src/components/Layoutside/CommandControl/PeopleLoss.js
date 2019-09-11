import React, { Component } from 'react';
import Dialog from '../../Dialog/Dialog';
import { Button, Input, Form } from 'antd';
import styles from './commandControl.less';
import { peopleLoss } from '../../../services/services';

import { connect } from 'dva';
class PeopleLoss extends Component {
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
        const formItemLayoutRemark = {
            labelCol: {
                span: 9
            },
            wrapperCol: {
                span: 15
            },
        };

        return (
            <Dialog
                visible={this.props.visible}
                title='人员损失'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '400px' }}>
                        <div className={styles.contentPN} style={{ marginTop: '10px' }}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='受伤数量:'>
                                    {getFieldDecorator('injure', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '250px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='病员和非战斗伤员数量:'>
                                    {getFieldDecorator('patient', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '250px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='阵亡数量:'>
                                    {getFieldDecorator('death', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '250px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='失踪数量:'>
                                    {getFieldDecorator('miss', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '250px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='被俘数量:'>
                                    {getFieldDecorator('captured', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '250px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle} style={{ width: '100%' }}>
                                <Form.Item  {...formItemLayoutRemark} label='注释:'>
                                    {getFieldDecorator('notes', {
                                        initialValue: '',
                                    })(
                                        <TextArea rows={5} />
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
        peopleLoss(values);
    }

}
PeopleLoss = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        // if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
        //     return {
        //         pn: Form.createFormField({
        //             ...props,
        //             value: props.pnsign != null && props.pnsign === 'PeopleLoss' ? props.choicePNDetail.PN : null,
        //         }),
        //     };
        // }
    }

})(PeopleLoss);
export default connect()(PeopleLoss);