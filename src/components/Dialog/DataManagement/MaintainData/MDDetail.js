

// 前段增删改版本
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Form, Input, Button, DatePicker, Select, Table } from 'antd';
import styles from '../DataManagementDialog.less';
import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
class MDDetail extends Component {
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
        span: 5
      },
      wrapperCol: {
        span: 19
      },
    };

    const columnsToolDetail = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '10%',
      },
      {
        title: '仪器仪表名称',
        dataIndex: 'name', key: 'name',
        width: '20%',
      },
      {
        title: '仪器仪表型号',
        width: '20%',
        dataIndex: 'model', key: 'model',
      },
      {
        title: '工具名称',
        dataIndex: 'toolName', key: 'toolName',
        width: '15%',
      },
      {
        title: '工具型号',
        width: '20%',
        dataIndex: 'toolModel', key: 'toolModel',
      }, {
        title: '操作',
        dataIndex: 'details', key: 'details',
        render: (text, record) => (
          <div style={{ display: 'inline-block' }}>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.modifyTool(record)}>修改</span>
            <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDeleteTool(record.key)} >删除</span>
          </div>
        )
      }
    ];

    let ToolData = [];
    let tooldata = this.props.dataManagement.DMDToolTableDataSource;//维修数据 工具数据  
    if (tooldata != null && tooldata.length !== 0) {
      for (let i = 0; i < tooldata.length; i++) {
        ToolData.push({
          key: tooldata[i].key,
          name: tooldata[i].name,
          model: tooldata[i].model,
          toolName: tooldata[i].toolName,
          toolModel: tooldata[i].toolModel
        });
      }
    }

    const columnsListDetail = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '10%',
      },
      {
        title: '更换件名称',
        dataIndex: 'name', key: 'name',
        width: '20%',
      },
      {
        title: '更换件PN',
        width: '20%',
        dataIndex: 'pn', key: 'pn',
      },
      {
        title: '更换件型号',
        dataIndex: 'model', key: 'model',
        width: '15%',
      },
      {
        title: '需求数量',
        width: '20%',
        dataIndex: 'count', key: 'count',
      }, {
        title: '操作',
        dataIndex: 'details', key: 'details',
        render: (text, record) => (
          <div style={{ display: 'inline-block' }}>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.modifyReplace(record)}>修改</span>
            <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDeleteList(record.key)} >删除</span>
          </div>
        )
      }
    ];

    let ListData = [];
    let data = this.props.dataManagement.DMDListTableDataSource;//维修数据 更换件数据 
    if (data != null && data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        ListData.push({
          key: data[i].key,
          name: data[i].name,
          pn: data[i].pn,
          model: data[i].model,
          count: data[i].count
        });
      }
    }
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
                <div className={styles.contentPN} style={{ marginTop: '0px' }}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='所属整机:'>
                      {getFieldDecorator('stationName', {
                        initialValue: '',
                      })(
                        <Input autoComplete='off' style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.contentPN} style={{ marginTop: '0px' }}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='整机PN:'>
                      {getFieldDecorator('stationPn', {
                        initialValue: '',
                      })(
                        <Input autoComplete='off' disabled style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.contentPN}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='整机BN:'>
                      {getFieldDecorator('stationBn', {
                        initialValue: '',
                      })(
                        <Input autoComplete='off' disabled style={{ width: '195px' }} />
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
                        <Input autoComplete='off' disabled style={{ width: '195px' }} />
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
                        <Input autoComplete='off' style={{ width: '195px' }} />
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
                        <Input autoComplete='off' disabled style={{ width: '195px' }} />
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
                        <Input autoComplete='off' disabled style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.contentPN}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='被测对象名称:'>
                      {getFieldDecorator('objectName;', {
                        initialValue: '',
                      })(
                        <Input autoComplete='off' style={{ width: '195px' }} />
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
                        <Input autoComplete='off' disabled style={{ width: '195px' }} />
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
                        <Input autoComplete='off' disabled style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.contentPN}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='维修层级:'>
                      {getFieldDecorator('repairLevel', {
                        initialValue: '1',
                      })(
                        <Select style={{ width: '195px' }}>
                          <Option value='1'>二级</Option>
                          <Option value='2'>三级</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.contentPN}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='维修时间:'>
                      {getFieldDecorator('repairTime', {
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

                <div className={styles.contentPN}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='完成时间:'>
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
                <div className={styles.contentPN}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='操作人:'>
                      {getFieldDecorator('repairPerson', {
                        initialValue: '',
                      })(
                        <Input autoComplete='off' style={{ width: '195px' }} />
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.contentPN}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='维修状态:'>
                      {getFieldDecorator('repairState', {
                        initialValue: '1',
                      })(
                        <Select style={{ width: '195px' }}>
                          <Option value='1'>已完成</Option>
                          <Option value='2'>未完成</Option>
                          <Option value='3'>终止</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.contentPN}>
                  <div className={styles.InputStyle}>
                    <Form.Item  {...formItemLayout} label='维修结果:'>
                      {getFieldDecorator('repairResult', {
                        initialValue: '1',
                      })(
                        <Select style={{ width: '195px' }}>
                          <Option value='1'>已解决</Option>
                          <Option value='2'>未解决</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </div>
                </div>

              </div>
            </div>

            <div className={styles.table_content} style={{ textAlign: 'center' }}>
              <span style={{ marginRight: '10px', lineHeight: '30px' }}>仪表和工具</span>
              <div style={{ float: 'left', textAlign: 'left' }}>
                <Button onClick={e => this.AddTool()} type='primary'>添加</Button>
              </div>
              <div className={styles.bodyCss}>
                <Table
                  bordered
                  columns={columnsToolDetail}
                  dataSource={ToolData}
                  pagination={false}
                  className={styles.mynoiseClass}
                  scroll={{ y: 70 }}
                  rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                />
              </div>
            </div>

            <div className={styles.table_content} style={{ textAlign: 'center' }}>
              <span style={{ marginRight: '10px', lineHeight: '30px' }}>更换件清单</span>
              <div style={{ float: 'left', textAlign: 'left' }}>
                <Button onClick={e => this.AddReplace()} type='primary'>添加</Button>
              </div>
              <div className={styles.bodyCss}>
                <Table
                  bordered
                  columns={columnsListDetail}
                  dataSource={ListData}
                  pagination={false}
                  className={styles.mynoiseClass}
                  scroll={{ y: 70 }}
                  rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                />
              </div>
            </div>

            <div className={styles.TextAreaStyle}>
              <Form.Item  {...formItemLayoutRemark} label='故障现象:'>
                {getFieldDecorator('fPhenomenon', {
                  initialValue: '',
                })(
                  <TextArea rows={3} />
                )}
              </Form.Item>
            </div>

            <div className={styles.TextAreaStyle}>
              <Form.Item  {...formItemLayoutRemark} label='故障原因:'>
                {getFieldDecorator('fReason', {
                  initialValue: '',
                })(
                  <TextArea rows={3} />
                )}
              </Form.Item>
            </div>

            <div className={styles.TextAreaStyle}>
              <Form.Item  {...formItemLayoutRemark} label='解决方法:'>
                {getFieldDecorator('method', {
                  initialValue: '',
                })(
                  <TextArea rows={3} />
                )}
              </Form.Item>
            </div>

            <div className={styles.TextAreaStyle}>
              <Form.Item  {...formItemLayoutRemark} label='总结:'>
                {getFieldDecorator('summary', {
                  initialValue: '',
                })(
                  <TextArea rows={3} />
                )}
              </Form.Item>
            </div>

            {/*确认*/}
            <div style={{ float: 'left', textAlign: 'center', width: '100%', marginTop: '10px' }}>
              <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                <Button type="primary" onClick={this.ClickConfirm}>确认</Button>
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
      type: 'dataManagement/DShowAddToolPop',
    })
  }
  // 点击 修改工具
  modifyTool = (param) => {
    console.log('修改===detaildata==', param)
    this.props.dispatch({
      type: 'dataManagement/DMDToolDetailData',
      payload: param
    })
  }
  // 点击删除 工具
  ClickDeleteTool = (key) => {
    let newData = this.props.dataManagement.DMDToolTableDataSource;//获取所有工具列表数据
    const index = newData.findIndex((item) => key === item.key);
    newData.splice(index, 1);
    console.log(newData);
    this.props.dispatch({
      type: 'dataManagement/DMDToolTableData',
      payload: newData
    })
  }

  // 点击 添加更换件
  AddReplace = () => {
    this.props.dispatch({
      type: 'dataManagement/DShowAddReplacePop',
    })
  }
  // 点击 修改更换件
  modifyReplace = (param) => {
    console.log('修改===detaildata==', param)
    this.props.dispatch({
      type: 'dataManagement/DMDListDetailData',
      payload: param
    })
  }
  // 点击删除 更换件
  ClickDeleteList = (key) => {
    let newData = this.props.dataManagement.DMDListTableDataSource;//获取所有 更换件列表数据
    const index = newData.findIndex((item) => key === item.key);
    newData.splice(index, 1);
    console.log(newData);
    this.props.dispatch({
      type: 'dataManagement/DMDListTableData',
      payload: newData
    })
  }

  ClickConfirm = () => {
    this.props.form.validateFields((err, fieldsValue) => {
      let idsign = this.props.idsign;//获取选中行的id
      console.log('idsign====', idsign)
      let repairTime = this.props.form.getFieldValue('repairTime');
      if (repairTime !== '' && repairTime !== undefined && repairTime !== null &&
        endTime !== '' && endTime !== undefined && endTime !== null) {
        let values = {
          ...fieldsValue,
          'repairTime': fieldsValue['repairTime'].format('YYYY-MM-DD HH:mm:ss'),
          'endTime': fieldsValue['endTime'].format('YYYY-MM-DD HH:mm:ss'),
        }
        let obj = {};
        obj.repairData = values;
        obj.rmatList = this.props.dataManagement.DMDListTableDataSource;//获取所有 工具 列表数据
        obj.rspList = this.props.dataManagement.DMDListTableDataSource;//获取所有 更换件 列表数据
        values.id = idsign;//选中行的id
        console.log('values======', values)
        this.props.dispatch({
          type: 'dataManagement/MaintainDataModify',
          payload: obj
        })
      }
      else {
        let values = this.props.form.getFieldsValue();
        delete values.repairTime;
        delete values.endTime;
        let obj = {};
        obj.repairData = values;
        obj.rmatList = this.props.dataManagement.DMDListTableDataSource;//获取所有 工具 列表数据
        obj.rspList = this.props.dataManagement.DMDListTableDataSource;//获取所有 更换件 列表数据
        values.id = idsign;//选中行的id
        console.log('values======', values)
        this.props.dispatch({
          type: 'dataManagement/MaintainDataModify',
          payload: obj
        })
      }
    })
  }

}


MDDetail = Form.create({

  mapPropsToFields(props) {
    console.log("props=====", props);
    if (props.DetailViewData != null && props.DetailViewData.repairData != null) {
      let repairData = props.DetailViewData.repairData;
      return {
        stationName: Form.createFormField({
          ...props,
          value: repairData.stationName,
        }),
        stationPn: Form.createFormField({
          ...props,
          value: repairData.stationPn,
        }),
        stationSn: Form.createFormField({
          ...props,
          value: repairData.stationSn,
        }),
        stationBn: Form.createFormField({
          ...props,
          value: repairData.stationBn,
        }),

        extensionName: Form.createFormField({
          ...props,
          value: repairData.extensionName,
        }),
        extensionPn: Form.createFormField({
          ...props,
          value: repairData.extensionPn,
        }),
        extensionSn: Form.createFormField({
          ...props,
          value: repairData.extensionSn,
        }),
        objectName: Form.createFormField({
          ...props,
          value: repairData.objectName,
        }),
        objectPn: Form.createFormField({
          ...props,
          value: repairData.objectPn,
        }),
        objectSn: Form.createFormField({
          ...props,
          value: repairData.objectSn,
        }),
        repairTime: Form.createFormField({
          ...props,
          value: repairData.repairTime,
        }),
        endTime: Form.createFormField({
          ...props,
          value: repairData.endTime,
        }),
        repairLevel: Form.createFormField({
          ...props,
          value: repairData.repairLevel,
        }),
        repairPerson: Form.createFormField({
          ...props,
          value: repairData.repairPerson,
        }),
        repairState: Form.createFormField({
          ...props,
          value: repairData.repairState,
        }),
        repairResult: Form.createFormField({
          ...props,
          value: repairData.repairResult,
        }),
        fPhenomenon: Form.createFormField({
          ...props,
          value: repairData.fPhenomenon,
        }),
        fReason: Form.createFormField({
          ...props,
          value: repairData.fReason,
        }),
        method: Form.createFormField({
          ...props,
          value: repairData.method,
        }),
        summary: Form.createFormField({
          ...props,
          value: repairData.summary,
        }),
      };
    }
  }

})(MDDetail);
export default connect()(MDDetail);
