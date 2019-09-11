
import React, { Component } from 'react';
import Dialog from '../../Dialog/Dialog';
import { Form, Input, Button, DatePicker, Select, Table } from 'antd';
import styles from './MaintainGuidance.less';
import { connect } from 'dva';

class DataBankDetail extends Component {
  constructor(props) {
    super();
    this.state = {

    }

  }
  render() {
    const columnstool = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '10%',
      },
      {
        title: '仪器仪表名称',
        dataIndex: 'apparatusName', key: 'apparatusName',
        width: '20%',
      },
      {
        title: '仪器仪表型号',
        width: '20%',
        dataIndex: 'apparatusType', key: 'apparatusType',
      },
      {
        title: '工具名称',
        dataIndex: 'toolName', key: 'toolName',
        width: '15%',
      },
      {
        title: '工具型号',
        width: '20%',
        dataIndex: 'toolType', key: 'toolType',
      }, {
        title: '操作',
        dataIndex: 'details', key: 'details',
        render: (text, record) => (
          <div style={{ display: 'inline-block' }}>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.AddTool(record.key)}>修改</span>
            <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
          </div>
        )
      }
    ];

    const columnsList = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '10%',
      },
      {
        title: '更换件名称',
        dataIndex: 'ReplaceName', key: 'ReplaceName',
        width: '20%',
      },
      {
        title: '更换件PN',
        width: '20%',
        dataIndex: 'ReplacePN', key: 'ReplacePN',
      },
      {
        title: '更换件型号',
        dataIndex: 'ReplaceType', key: 'ReplaceType',
        width: '15%',
      },
      {
        title: '需求数量',
        width: '20%',
        dataIndex: 'requireNum', key: 'requireNum',
      }, {
        title: '操作',
        dataIndex: 'details', key: 'details',
        render: (text, record) => (
          <div style={{ display: 'inline-block' }}>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.AddReplace(record.key)}>修改</span>
            <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
          </div>
        )
      }
    ];

    let ToolData = [];
    // let data = this.props.dataManagement.outStorageRecordTableData;//出库历史记录数据
    // if (data != null && data.length !== 0) {
    //   for (let i = 0; i < data.length; i++) {
    //     ToolData.push({
    //       key: data[i].id,
    //       apparatusName: data[i].apparatusName,
    //       apparatusType: data[i].people,
    //       toolName: data[i].people,
    //       toolType: data[i].people
    //     });
    //   }
    // }

    let ListData = [];
    // let data = this.props.dataManagement.outStorageRecordTableData;//出库历史记录数据
    // if (data != null && data.length !== 0) {
    //   for (let i = 0; i < data.length; i++) {
    //     ListData.push({
    //       key: data[i].id,
    //       ReplaceName: data[i].apparatusName,
    //       ReplacePN: data[i].people,
    //       ReplaceType: data[i].people,
    //       requireNum: data[i].people
    //     });
    //   }
    // }

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
        span: 5
      },
      wrapperCol: {
        span: 19
      },
    };
    return (
      <Dialog
        visible={this.props.visible}
        title='维修数据详情'
        index={this.props.index}
        zIndex={this.props.zIndex}
        changeIndex={this.props.changeIndex}
        close={this.props.closeWinodow}
      >
        <div className="popup_s_confirm_box">
          <div style={{ width: '700px' }}>

            <div className={styles.field}>
              <div className={styles.fieldTitle}>基本信息</div>
              <div className={styles.fieldContent}>
                <div className={styles.contentPN_Form} style={{marginTop:'0px'}}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='所属整机'>
                      {getFieldDecorator('a', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '200px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.contentPN_Form} style={{marginTop:'0px'}}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='整机PN'>
                      {getFieldDecorator('b', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '200px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.contentPN_Form}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='整机型号:'>
                      {getFieldDecorator('aa', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.contentPN_Form}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='所属分机:'>
                      {getFieldDecorator('aaa', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.contentPN_Form}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='分机PN:'>
                      {getFieldDecorator('aaaa', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.contentPN_Form}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='分机型号:'>
                      {getFieldDecorator('aaaaa', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.contentPN_Form}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='故障设备名称:'>
                      {getFieldDecorator('b', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.contentPN_Form}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='故障设备PN:'>
                      {getFieldDecorator('bbb', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.contentPN_Form}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='故障设备SN:'>
                      {getFieldDecorator('bbbbb', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.contentPN_Form}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='故障关键字:'>
                      {getFieldDecorator('bbbbbb', {
                        initialValue: '',
                      })(
                        <Input style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.contentPN_Form}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='维修层级:'>
                      {getFieldDecorator('bbbbbb3', {
                        initialValue: '',
                      })(
                        <Select style={{ width: '195px' }}>
                          <Option value='已处理'>二级</Option>
                          <Option value='未处理'>三级</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </div>
                </div>

              </div>
            </div>

            <div className={styles.table_content} style={{ textAlign: 'center' }}>
              <span style={{ marginRight: '10px', lineHeight: '30px' }}>仪表和工具</span>
              <div style={{ float: 'left',  textAlign: 'left' }}><Button onClick={this.AddTool} type='primary'>添加</Button></div>
              <div className={styles.bodyCss_table}>
                <Table
                  bordered
                  columns={columnstool}
                  dataSource={ToolData}
                  pagination={false}
                  className={styles.mynoiseClass}
                  scroll={{ y: 107 }}
                  rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                />
              </div>
            </div>

            <div className={styles.table_content} style={{ textAlign: 'center' }}>
              <span style={{ marginRight: '10px', lineHeight: '30px' }}>更换件清单</span>
              <div style={{ float: 'left', textAlign: 'left' }}><Button onClick={this.AddReplace} type='primary'>添加</Button></div>
              <div className={styles.bodyCss_table}>
                <Table
                  bordered
                  columns={columnsList}
                  dataSource={ToolData}
                  pagination={false}
                  className={styles.mynoiseClass}
                  scroll={{ y: 107 }}
                  rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                />
              </div>
            </div>

            <div className={styles.TextAreaStyle}>
              <Form.Item  {...formItemLayoutRemark} label='故障现象:'>
                {getFieldDecorator('explain', {
                  initialValue: '',
                })(
                  <TextArea rows={3} />
                )}
              </Form.Item>
            </div>

            <div className={styles.TextAreaStyle}>
              <Form.Item  {...formItemLayoutRemark} label='故障原因:'>
                {getFieldDecorator('explain2', {
                  initialValue: '',
                })(
                  <TextArea rows={3} />
                )}
              </Form.Item>
            </div>

            <div className={styles.TextAreaStyle}>
              <Form.Item  {...formItemLayoutRemark} label='解决方法:'>
                {getFieldDecorator('explain22', {
                  initialValue: '',
                })(
                  <TextArea rows={3} />
                )}
              </Form.Item>
            </div>

            {/*确认*/}
            <div style={{ float: 'left', textAlign: 'center', width: '100%', marginTop: '10px' }}>
              <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                <Button type="primary">确认</Button>
              </div>
            </div>

          </div>
        </div>
      </Dialog>
    )
  }


  // 点击 添加工具
  AddTool = () => {
    this.props.dispatch({
      type: 'dataManagement/ShowAddToolPop',
    })
  }
  // 点击 添加更换件
  AddReplace = () => {
    this.props.dispatch({
      type: 'dataManagement/ShowAddReplacePop',
    })
  }


  // 点击删除
  ClickDelete = (key) => {
    this.props.dispatch({
      type: 'dataManagement/ProductControlDelete',
      payload: key
    })
  }
}


DataBankDetail = Form.create({

  mapPropsToFields(props) {
    // console.log("props=====", props);
    // if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
    //     return {
    //         pn: Form.createFormField({
    //             ...props,
    //             value: props.pnsign != null && props.pnsign === 'DataBankDetail' ? props.choicePNDetail.PN : null,
    //         }),
    //     };
    // }
  }

})(DataBankDetail);
export default connect()(DataBankDetail);
