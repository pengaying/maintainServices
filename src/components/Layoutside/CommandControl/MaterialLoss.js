import React, { Component } from 'react';
import Dialog from '../../Dialog/Dialog';
import { Button, Input, Form } from 'antd';
import styles from './commandControl.less';
import { materialLoss } from '../../../services/services';

import { connect } from 'dva';
class MaterialLoss extends Component {
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
                span: 7
            },
            wrapperCol: {
                span: 17
            },
        };

        return (
            <Dialog
                visible={this.props.visible}
                title='物资损耗'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '300px' }}>
                        <div className={styles.contentPN} style={{ marginTop: '10px' }}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='物资类型:'>
                                    {getFieldDecorator('material', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '213px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='损耗数量:'>
                                    {getFieldDecorator('loss', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '213px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle} style={{ width: '100%' }}>
                                <Form.Item  {...formItemLayoutRemark} label='注释:'>
                                    {getFieldDecorator('note', {
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
        materialLoss(values);
    }


}
MaterialLoss = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        // if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
        //     return {
        //         pn: Form.createFormField({
        //             ...props,
        //             value: props.pnsign != null && props.pnsign === 'MaterialLoss' ? props.choicePNDetail.PN : null,
        //         }),
        //     };
        // }
    }

})(MaterialLoss);
export default connect()(MaterialLoss);