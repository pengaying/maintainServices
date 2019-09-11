import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Table, Input, Button, Form, DatePicker } from 'antd';
import styles from '../DataManagementDialog.less';
import { connect } from 'dva';
import moment from 'moment';

class SpareAddApply extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    render() {
        const { TextArea } = Input;
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '20%',
            },
            {
                title: '备件名称',
                dataIndex: 'SpareName', key: 'SpareName',
                width: '25%',
            },
            {
                title: '备件PN',
                width: '30%',
                dataIndex: 'sparePN', key: 'sparePN',
            }, {
                title: '备件数量',
                width: '25%',
                dataIndex: 'spareNum', key: 'spareNum',
            }
        ];


        let Tabledata = [];
        let tabledata = this.props.DetailViewData;

        if (tabledata != null) {
            if (tabledata.list != null && tabledata.list.length !== 0) {
                let data = tabledata.list;
                for (let i = 0; i < data.length; i++) {
                    Tabledata.push({
                        key: data[i].id,
                        SpareName: data[i].name,
                        sparePN: data[i].pn,
                        spareNum: data[i].count,
                    });
                }
            }
        }


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
                span: 6
            },
            wrapperCol: {
                span: 18
            },
        };
        let timedata = this.props.DetailViewData != null ? this.props.DetailViewData.apply : null;

        return (
            <Dialog
                visible={this.props.visible}
                title='备件申请表单'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ height: '200px', width: '700px' }}>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='申请单号:'>
                                    {getFieldDecorator('formNum', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '200px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='期望时间:'>
                                    {getFieldDecorator('time', {
                                        initialValue: timedata != null && timedata.time != null ? moment(timedata.time, 'YYYY-MM-DD HH:mm:ss') : null,
                                    })(
                                        <DatePicker
                                            format="YYYY-MM-DD HH:mm:ss"
                                            showTime
                                            // value={timedata != null ? timedata.time : null}
                                            disabled={this.state.modifyState ? false : true}
                                            // placeholder="请选择日期"
                                            style={{ minWidth: '200px' }}
                                        />
                                        // <Input autoComplete='off' style={{ width: '200px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='申请人:'>
                                    {getFieldDecorator('people', {
                                        initialValue: '',
                                    })(
                                        <Input autoComplete='off' style={{ width: '200px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='申请时间:'>
                                    {getFieldDecorator('begintime', {
                                        initialValue: timedata != null && timedata.begintime != null ? moment(timedata.begintime, 'YYYY-MM-DD HH:mm:ss') : null,
                                    })(
                                        <DatePicker
                                            format="YYYY-MM-DD HH:mm:ss"
                                            showTime
                                            // value={timedata != null ? timedata.begintime : null}
                                            disabled={this.state.modifyState ? false : true}
                                            placeholder="请选择日期"
                                            style={{ minWidth: '200px' }}
                                        />
                                        //    <Input autoComplete='off'  style={{ width: '200px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.TextAreaContent}>
                            <div className={styles.TextAreaStyle} style={{ width: '100%' }}>
                                <Form.Item  {...formItemLayoutRemark} label='说明:'>
                                    {getFieldDecorator('explain', {
                                        initialValue: '',
                                    })(
                                        <TextArea rows={7} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.table_content}>
                            <div className={styles.bodyCss}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    pagination={false}
                                    className={styles.mynoiseClass}
                                    scroll={{ y: 107 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>
                        </div>

                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickChoicePN}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

}


SpareAddApply = Form.create({

    mapPropsToFields(props) {
        console.log('props=====', props);
        if (props.DetailViewData != null) {
            if (props.DetailViewData.apply != null) {
                let data = props.DetailViewData.apply;
                return {
                    formNum: Form.createFormField({
                        ...props,
                        value: data.formNum,
                    }),
                    // time: Form.createFormField({
                    //     ...props,
                    //     value: data.time,
                    // }),
                    people: Form.createFormField({
                        ...props,
                        value: data.people,
                    }),
                    // begintime: Form.createFormField({
                    //     ...props,
                    //     value: data.begintime,
                    // }),
                    explain: Form.createFormField({
                        ...props,
                        value: data.explain,
                    }),
                };
            }
        }
    }

})(SpareAddApply);
export default connect()(SpareAddApply);
