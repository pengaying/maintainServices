import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Select, Form } from 'antd';
import styles from '../DataManagementDialog.less';
import { connect } from 'dva';
class Approal extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    render() {
        const { TextArea } = Input;
        const Option = Select.Option;
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
                title='审批'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '300px' }}>
                        <div className={styles.contentPN_div} style={{ marginTop: '10px' }}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='审批结果:'>
                                    {getFieldDecorator('a', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '213px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN_div}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='审批时间:'>
                                    {getFieldDecorator('a', {
                                        initialValue: '',
                                    })(
                                       <Input autoComplete='off'  style={{ width: '213px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN_div}>
                            <div style={{ float: 'right', width: '100%' }}>
                                <Form.Item  {...formItemLayoutRemark} label='审批意见:'>
                                    {getFieldDecorator('remarks', {
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
                                <Button type="primary">确定</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }
}


Approal = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        // if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
        //     return {
        //         pn: Form.createFormField({
        //             ...props,
        //             value: props.pnsign != null && props.pnsign === 'Approal' ? props.choicePNDetail.PN : null,
        //         }),
        //     };
        // }
    }

})(Approal);
export default connect()(Approal);