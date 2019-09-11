import React, { Component } from 'react';
import Dialog from '../../Dialog/Dialog';
import { Button, Input, Form } from 'antd';
import { timeTick } from '../../../services/services';

import { connect } from 'dva';
class TimeTick extends Component {
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
                title='对时申请'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '100px' }}>
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
        // let values = this.props.form.getFieldsValue();
        timeTick();
    }

}
TimeTick = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        // if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
        //     return {
        //         pn: Form.createFormField({
        //             ...props,
        //             value: props.pnsign != null && props.pnsign === 'TimeTick' ? props.choicePNDetail.PN : null,
        //         }),
        //     };
        // }
    }

})(TimeTick);
export default connect()(TimeTick);