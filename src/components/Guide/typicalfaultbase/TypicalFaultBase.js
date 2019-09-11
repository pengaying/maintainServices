import React, { Component } from 'react'
import styles from "./typicalFaultBase.less"
import { Select, Input, Button, Table } from 'antd';
import Dialog from '../../Dialog/Dialog';
export default class TypicalFaultBase extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const field = {
      height: 'auto',
      position: 'relative',
      border: '1px solid #666666',
      padding: '10px 10px 0 10px',
      // borderRadius: '2px',
      width: "98%",
      float: 'left',
      margin: '10px 10px',
      border: "1px  solid #bdcddc"
    }
    const fieldTitle = {
      marginLeft: "-5px",
      padding: '0 5px 0 5px',
      position: 'absolute',
      top: '-10px',
      fontSize: '14px',
      height: '21px',
      background: '#E3EAF4 100%',
    }
    const Option = Select.Option;
    return (
      <div className={styles.typiCalContent}>
        <div className={styles.messageIcon}>
          <div className={styles.iconColor} />
          <div className={styles.messageTitle}>典型故障库</div>
        </div>
        <div className={styles.select}>
          <div style={field}>
            {/*   发射机状态 */}
            <div style={fieldTitle}>查询</div>
            <div className={styles.hideTood}>
              <div style={{ float: "left", width: '100%' }}>
                <div className={styles.speed}>
                  <span>所属整机 :</span>
                  <Select
                    style={{ marginLeft: "10px", width: '60%' }}
                    defaultValue="3"
                    onChange={this.handleChange}
                    firstActiveValue={3}
                  >
                    <Option className={styles.options} value="3">远距离雷达探测站</Option>
                    <Option className={styles.options} value="6">远距离雷达干扰站</Option>
                  </Select>
                </div>
                <div className={styles.speed}>
                  <span>所属分机 :</span>
                  <Input style={{ marginLeft: "10px", width: '60%' }} />
                </div>
                <div className={styles.speed}>
                  <span>故障设备名称 :</span>
                  <Input style={{ marginLeft: "10px", width: '60%' }} />
                </div>
              </div>

              <div style={{ float: "left", width: '100%' }}>
                <div className={styles.speed}>
                  <span>故障设备PN :</span>
                  <Input style={{ marginLeft: "10px", width: '60%' }} />
                </div>
                <div className={styles.speed}>
                  <span>维修层级 :</span>
                  <Select
                    style={{ marginLeft: "10px", width: '60%' }}
                    defaultValue="3"
                    onChange={this.handleChange}
                    firstActiveValue={3}
                  >
                    <Option className={styles.options} value="3">二级</Option>
                    <Option className={styles.options} value="6">三级</Option>
                  </Select>
                </div>
                <div className={styles.speed}>
                  <div className={styles.ButtonCon}>
                    <Button type="default">重置</Button>
                  </div>
                  <div className={styles.ButtonCon}>
                    <Button type="primary">查询</Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <TypiTable />
        </div>

      </div>

    )
  }
}
class TypiTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lookVisable: "",
      dataSource: [
        {
          "id": 1,
          "time": 1,
          "people": 1,
          "state": 1,
        }, {
          "id": 1,
          "time": 1,
          "people": 1,
          "state": 1,
        }, {
          "id": 1,
          "time": 1,
          "people": 1,
          "state": 1,
        }, {
          "id": 1,
          "time": 1,
          "people": 1,
          "state": 1,
        }, {
          "id": 1,
          "time": 1,
          "people": 1,
          "state": 1,
        },
        {
          "id": 1,
          "time": 1,
          "people": 1,
          "state": 1,
        }, {
          "id": 1,
          "time": 1,
          "people": 1,
          "state": 1,
        },

      ]
    }
  }
  handleClickLook = () => {
    this.setState({
      lookVisable: true
    })
  }
  closeWinodow = () => {
    this.setState({
      lookVisable: false
    })
  }
  onClickLook = () => {
    this.setState({
      lookVisable: true
    })
  }
  changeIndex = (e) => {
    // this.props.changeIndex(e);
  };
  render() {
    const rowSelection = {//选择复选框
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({
          Deleteid: selectedRowKeys
        })
      },
      // getCheckboxProps: record => ({
      // disabled: record.name === 'Disabled User', // Column configuration not to be checked
      // name: record.name,
      // }),
    };
    const columns = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '10%',
      },
      {
        title: '生成日期',
        dataIndex: 'creationdate', key: 'creationdate',
        width: '22%',
      },
      {
        title: '盘点人',
        width: '20%',
        dataIndex: 'inventory', key: 'inventory',
      }, {
        title: '盘点比例',
        width: '15%',
        dataIndex: 'Inventoryratio', key: 'Inventoryratio',
      }, {
        title: '盘点状态',
        width: '12%',
        dataIndex: 'Inventorystate', key: 'Inventorystate',
      }, {
        title: '详情',
        dataIndex: 'details', key: 'details',
        render: (text, record) => (
          <div style={{ display: 'inline-block' }}>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.handleClickLook(record)}>详情</span>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.handleClickLook(record)}>修改</span>
            <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDeleteCol(record.key)} >删除</span>
          </div>
        )
      }];
    let Tabledata = []
    let tabledata = this.state.dataSource;//盘点表格数据
    if (tabledata != null && tabledata.length !== 0) {
      for (let i = 0; i < tabledata.length; i++) {
        Tabledata.push({
          key: tabledata[i].id,
          creationdate: tabledata[i].time,
          inventory: tabledata[i].people,
          Inventoryratio: tabledata[i].proportion,
          Inventorystate: tabledata[i].state,
        });
      }
    }
    return (
      <div style={{ float: 'left', width: '100%' }}>
        <div>
          <div><Button type="primary" onClick={this.onClickLook}>添加</Button></div>
        </div>
        <div className={styles.tableContent}>
          <Table
            bordered
            columns={columns}
            dataSource={Tabledata}
            rowSelection={rowSelection}
            pagination={{ pageSize: 11 }}
            className={styles.mynoiseClassQuery}
            scroll={{ x: 950 }}
            rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
          />
          {this.state.lookVisable === true ? <Look lookVisable={this.state.lookVisable} index={1} zIndex={2} changeIndex={this.changeIndex} closeWinodow={this.closeWinodow} /> : null}
        </div>
      </div>
    )
  }
}
class Look extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addVisable: false,
      addtdVisable: false
    }
  }
  handleClickLook = () => {
    console.log(9999999999999)
    this.setState({
      addVisable: true
    })
  }
  handleClickLookTwo = () => {
    console.log(9999999999999)
    this.setState({
      addtdVisable: true
    })
    // this.props.closeWinodow()
  }
  closeAddWinodow = () => {
    this.setState({
      addVisable: false
    })
  }
  addClick = () => {
    this.setState({
      addVisable: true
    })
  }
  addtdClick = () => {
    this.setState({
      addtdVisable: true
    })
  }
  closetdAddWinodow = () => {
    this.setState(
      {
        addtdVisable: false

      })
  }
  render() {
    console.log(this.state.addVisable)
    const defaultColoumns = [
      {
        title: "序号",
        dataIndex: 'jamNum', key: 'jamNum', align: 'center',
        width: "15%"
      },
      {
        title: "仪器仪表名称",
        dataIndex: 'jamSign', key: 'jamSign', align: 'center',
        width: "15%"
      }, {
        title: "仪器仪表型号",
        dataIndex: 'threatLevel', key: 'threatLevel', align: 'center',
        width: "15%"
      }, {
        title: "工具名称",
        dataIndex: 'azimuth', key: 'azimuth', align: 'center',
        width: "15%"
      }, {
        title: "工具型号",
        dataIndex: 'azimuth2', key: 'azimuth', align: 'center',
        width: "15%"
      }, {
        title: "操作",
        dataIndex: 'azimuth3', key: 'azimuth', align: 'center', width: "15%",

        render: (text, record) => (
          <div style={{ display: 'inline-block' }}>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.handleClickLook(record)}>查看</span>
            <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDeleteCol(record.key)} >删除</span>
          </div>
        )
      }
    ];
    const defaultColoumnsTwo = [
      {
        title: "序号",
        dataIndex: 'jamNum', key: 'jamNum', align: 'center',
        width: "15%"
      },
      {
        title: "更换件名称",
        dataIndex: 'jamSign', key: 'jamSign', align: 'center',
        width: "15%"
      }, {
        title: "更换件PN",
        dataIndex: 'threatLevel', key: 'threatLevel', align: 'center',
        width: "15%"
      }, {
        title: "更换件型号",
        dataIndex: 'azimuth', key: 'azimuth', align: 'center',
        width: "15%"
      }, {
        title: "需求数量",
        dataIndex: 'azimuth2', key: 'azimuth', align: 'center',
        width: "15%"
      }, {
        title: "操作",
        dataIndex: 'azimuth3', key: 'azimuth', align: 'center', width: "15%",

        render: (text, record) => (
          <div style={{ display: 'inline-block' }}>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.handleClickLookTwo(record)}>查看</span>
            <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDeleteCol(record.key)} >删除</span>
          </div>
        )
      }
    ];
    const field = {
      height: 'auto',
      position: 'relative',
      padding: '10px 10px',
      // borderRadius: '2px',
      width: "700px",
      float: 'left',
      border: "1px  solid #bdcddc"

    }
    const fieldTitle = {
      marginLeft: "-5px",
      padding: '0 5px 0 5px',
      position: 'absolute',
      top: '-10px',
      fontSize: '14px',
      height: '21px',
      background: "#ffffff",
    }
    let tabledata = [
      {
        "jamNum": 1,
        "jamSign": 1,
        "threatLevel": 1,
        "azimuth": 1,
        "azimuth2": 1,
        "azimuth3": 1,

      }, {
        "jamNum": 1,
        "jamSign": 1,
        "threatLevel": 1,
        "azimuth": 1,
        "azimuth2": 1,
        "azimuth3": 1,

      }, {
        "jamNum": 1,
        "jamSign": 1,
        "threatLevel": 1,
        "azimuth": 1,
        "azimuth2": 1,
        "azimuth3": 1,

      }, {
        "jamNum": 1,
        "jamSign": 1,
        "threatLevel": 1,
        "azimuth": 1,
        "azimuth2": 1,
        "azimuth3": 1,

      }, {
        "jamNum": 1,
        "jamSign": 1,
        "threatLevel": 1,
        "azimuth": 1,
        "azimuth2": 1,
        "azimuth3": 1,

      },
      {
        "jamNum": 1,
        "jamSign": 1,
        "threatLevel": 1,
        "azimuth": 1,
        "azimuth2": 1,
        "azimuth3": 1,

      }, {
        "jamNum": 1,
        "jamSign": 1,
        "threatLevel": 1,
        "azimuth": 1,
        "azimuth2": 1,
        "azimuth3": 1,

      },
    ];

    return (
      <div>

        <Dialog
          visible={this.props.lookVisable}
          title="典型资料详情"
          index={this.props.index}
          zIndex={this.props.zIndex}
          changeIndex={this.props.changeIndex}
          close={this.props.closeWinodow}
        >
          <div style={{ width: "700px" }}>
            <div style={field}>
              <div style={fieldTitle}>基本信息</div>
              <div>
                <div className={styles.lode}>
                  <div className={styles.speed}>
                    <span>所属整机 :</span>
                    <Input></Input>
                  </div>
                  <div className={styles.speed}>
                    <span>整机PN :</span>
                    <Input></Input>
                  </div>
                  <div className={styles.speed}>
                    <span>整机型号 :</span>
                    <Input></Input>
                  </div>
                  <div className={styles.speed}>
                    <span>所属分机 :</span>
                    <Input></Input>
                  </div>
                  <div className={styles.speed}>
                    <span>分机PN :</span>
                    <Input></Input>
                  </div>
                  <div className={styles.speed} style={{ marginBottom: "0px" }}>
                    <span>分机型号 :</span>
                    <Input></Input>
                  </div>
                </div>
                <div className={styles.lode}>
                  <div className={styles.speed}>
                    <span>故障设备名称 :</span>
                    <Input></Input>
                  </div>
                  <div className={styles.speed}>
                    <span>故障设备PN :</span>
                    <Input></Input>
                  </div>

                  <div className={styles.speed}>
                    <span>故障设备SN :</span>
                    <Input></Input>
                  </div>
                  <div className={styles.speed}>
                    <span>故障关键字 :</span>
                    <Input></Input>
                  </div>
                  <div className={styles.speed}>
                    <span>维修层级 :</span>
                    <Input></Input>
                  </div>
                  <div className={styles.speed}>
                    <span>操作人 :</span>
                    <Input></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tableContent} >
              <div className={styles.title}>
                <span>仪表和工具</span>
              </div>
              <div>
                <div><Button type="primary" onClick={this.addClick}>添加</Button></div>
              </div>
              <Table
                columns={defaultColoumns}
                className={styles.tableCsss}
                dataSource={tabledata}
                pagination={false}
                bordered
                scroll={{ y: 115 }}
                rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
              />
            </div>
            <div className={styles.tableContent}>
              <div className={styles.title}>
                <span>更换件清单</span>
              </div>
              <div>
                <div><Button type="primary" onClick={this.addtdClick}>添加</Button></div>
              </div>
              <Table
                columns={defaultColoumnsTwo}
                className={styles.tableCsss}
                dataSource={tabledata}
                pagination={false}
                bordered
                scroll={{ y: 115 }}
                rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
              />
            </div>
          </div>
          <div className={styles.Messsage}>
            <div className={styles.messageContent}>
              <span>故障现象：</span>
              <Input style={{ height: "55px", width: "640px", marginBottom: "10px" }}>
              </Input>
            </div>
            <div className={styles.messageContent}>
              <span>故障原因：</span>
              <Input style={{ height: "55px", width: "640px", marginBottom: "10px" }}>
              </Input>
            </div>
            <div className={styles.messageContent}>
              <span>解决办法：</span>
              <Input style={{ height: "55px", width: "640px", marginBottom: "10px" }}>
              </Input>
            </div>
          </div>
        </Dialog>

        {this.state.addVisable == true ? <AddTools addVisable={this.state.addVisable} index={2}
          zIndex={2}
          changeIndex={this.props.changeIndex}
          closeAddWinodow={this.closeAddWinodow} /> : null}

        {this.state.addtdVisable == true ? <AddTd addtdVisable={this.state.addtdVisable} index={2}
          zIndex={2}
          changeIndex={this.props.changeIndex}
          closetdAddWinodow={this.closetdAddWinodow} /> : null}
      </div>
    )
  }
}
class AddTools extends Component {
  constructor(props) {
    super(props)
    this.setState()
  }
  ok = () => {
    this.props.closeAddWinodow
  }
  render() {
    const field = {
      height: 'auto',
      position: 'relative',
      border: '1px solid #666666',
      padding: '10px 10px',
      // borderRadius: '2px',
      marginBottom: "10px",
      marginTop: "5px",
      width: "582px",
      float: 'left',
      border: "1px  solid #bdcddc"
    }
    const fieldTitle = {
      marginLeft: "-5px",
      padding: '0 5px 0 5px',
      position: 'absolute',
      top: '-10px',
      fontSize: '14px',
      height: '21px',
      background: '#ffffff',
    }
    console.log(this.props.addVisable)
    const Option = Select.Option;

    return (

      <Dialog
        visible={this.props.addVisable}
        title="添加仪表和工具"
        index={this.props.index}
        zIndex={this.props.zIndex}
        changeIndex={this.props.changeIndex}
        close={this.props.closeAddWinodow}
      >
        <div style={{ width: "582px" }}>
          <div style={field}>
            <div style={fieldTitle}>添加仪表</div>
            <div className={styles.addYb} style={{ marginLeft: "0px" }}>
              <span>仪表名称 :</span>
              <Select
                style={{ marginLeft: "10px" }}
                defaultValue="3"
                onChange={this.handleChange}
                firstActiveValue={3}
              >
                <Option className={styles.options} value="3"></Option>
                <Option className={styles.options} value="6"></Option>
              </Select>
            </div>
            <div className={styles.addYb}>
              <span>仪表型号 :</span>
              <Input></Input>
            </div>
          </div>

          <div style={field}>
            <div style={fieldTitle}>添加工具</div>
            <div className={styles.addYb} style={{ marginLeft: "0px" }}>
              <span>工具名称 :</span>
              <Select
                style={{ marginLeft: "10px" }}
                defaultValue="3"
                onChange={this.handleChange}
                firstActiveValue={3}
              >

              </Select>
            </div>
            <div className={styles.addYb}>
              <span>工具型号 :</span>
              <Input></Input>
            </div>
          </div>

          <div style={{ marginLeft: "270px", float: "left" }}>
            <Button type="primary" onClick={this.ok}>确定</Button>
          </div>
        </div>
      </Dialog>
    )
  }
}
class AddTd extends Component {
  constructor(props) {
    super(props)
    this.setState()
  }
  ok = () => {
    this.props.closeAddWinodow
  }
  render() {
    const field = {
      height: 'auto',
      position: 'relative',
      border: '1px solid #666666',
      padding: '10px 10px',
      // borderRadius: '2px',
      marginBottom: "10px",
      marginTop: "5px",
      width: "582px",
      float: 'left',
      border: "1px  solid #bdcddc"
    }
    const fieldTitle = {
      marginLeft: "-5px",
      padding: '0 5px 0 5px',
      position: 'absolute',
      top: '-10px',
      fontSize: '14px',
      height: '21px',
      background: '#ffffff',
    }
    console.log(this.props.addVisable)
    const Option = Select.Option;

    return (

      <Dialog
        visible={this.props.addtdVisable}
        title="添加更换件"
        index={this.props.index}
        zIndex={this.props.zIndex}
        changeIndex={this.props.changeIndex}
        close={this.props.closetdAddWinodow}
      >
        <div style={{ width: "582px" }}>
          <div style={field}>
            <div style={fieldTitle}>添加更换件</div>
            <div className={styles.lodel}>
              <div  >
                <span>更换件名称 :</span>  <Input></Input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>更换件型号 :</span>
                <Input></Input>
              </div>
            </div>
            <div className={styles.lodel}>
              <div >
                <span>更换件PN :</span>
                <Input></Input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>更换件数量 :</span>
                <Input></Input>
              </div>
            </div>


          </div>

          <div style={{ float: "left", marginLeft: "270px" }}>
            <Button type="primary" onClick={this.ok}>确定</Button>
          </div>
        </div>
      </Dialog>
    )
  }
}