
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Form, Input, Button, DatePicker, Select, Table } from 'antd';
import styles from '../DataManagementDialog.less';
import PointImg from './PointImg';
import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class Detail extends Component {
  constructor(props) {
    super();
    this.state = {

    }

  }
  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '10%',
      },
      {
        title: '经度',
        dataIndex: 'lon', key: 'lon',
        width: '13%',
      },
      {
        title: '纬度',
        width: '13%',
        dataIndex: 'lat', key: 'lat',
      },
      {
        title: '采集时间',
        dataIndex: 'time', key: 'time',
        width: '23%',
      },
      {
        title: '采集人',
        width: '13%',
        dataIndex: 'people', key: 'people',
      }, {
        title: '操作',
        dataIndex: 'details', key: 'details',
        render: (text, record) => (
          <div style={{ display: 'inline-block' }}>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.ShowData(record.key)}>数据</span>
            <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
          </div>
        )
      }
    ];
    let ElecData = [];
    let data = this.props.dataManagement.ESDetailTableDataSource;//电磁态势详情列表
    if (data != null && data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        ElecData.push({
          key: data[i].id,
          lon: data[i].lon,
          lat: data[i].lat,
          time: data[i].collectTime,
          people: data[i].collectPeople
        });
      }
    }

    const columnSituation = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '30%',
      },
      {
        title: '频率(MHz)',
        dataIndex: 'freq', key: 'freq',
        width: '30%',
      },
      {
        title: '幅值(V)',
        width: '30%',
        dataIndex: 'am', key: 'am',
      }
    ];

    let SituationData = [];
    let Sdata = this.props.dataManagement.ESDetailPopDataSource;//电磁态势数据列表
    if (Sdata != null && Sdata.length !== 0) {
      for (let i = 0; i < Sdata.length; i++) {
        SituationData.push({
          key: Sdata[i].id,
          freq: Sdata[i].frequency,
          am: Sdata[i].amplitude,
        });
      }
    }

    const rowSelection = {//选择复选框
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({
          choiceArray: selectedRowKeys
        })
      },
      // getCheckboxProps: record => ({
      //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
      //   name: record.name,
      // }),
    };


    return (
      <Dialog
        visible={this.props.visible}
        title='电磁态势详情'
        index={this.props.index}
        zIndex={this.props.zIndex}
        changeIndex={this.props.changeIndex}
        close={this.props.closeWinodow}
      >
        <div className="popup_s_confirm_box">
          <div style={{ height: '452px', width: '900px' }}>

            <div className={styles.table_content6} style={{ textAlign: 'center' }}>
              <span style={{ marginRight: '10px', lineHeight: '30px' }}>电磁态势详情</span>
              <div className={styles.bodyCss}>
                <Table
                  bordered
                  columns={columns}
                  dataSource={ElecData}
                  pagination={false}
                  className={styles.mynoiseClass}
                  scroll={{ y: 347 }}
                  rowSelection={rowSelection}
                  rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                />
              </div>

              {/*确认*/}
              <div style={{ float: 'left', textAlign: 'center', width: '100%', marginTop: '10px' }}>
                <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                  <Button onClick={this.clickAnalysis} type="primary">分析</Button>
                </div>
                <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                  <Button type="primary">上报</Button>
                </div>
              </div>
            </div>

            <div className={styles.table_content4}>
              <div style={{ width: '100%', height: '50%', float: 'left', border: '1px solid #2376c1', textAlign: 'center' }}>
                <span style={{ marginRight: '10px', lineHeight: '30px' }}>电磁态势数据列表</span>
                <div className={styles.bodyCss}>
                  <Table
                    bordered
                    columns={columnSituation}
                    dataSource={SituationData}
                    pagination={false}
                    className={styles.mynoiseClass}
                    scroll={{ y: 160 }}
                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                  />
                </div>
              </div>

              <div style={{ width: '100%', height: '50%', float: 'left', border: '1px solid #2376c1' }}>
                <PointImg data={this.props.dataManagement.PointImgData} />
              </div>
            </div>

          </div>
        </div>
      </Dialog >
    )
  }


  // 点击 数据
  ShowData = (key) => {
    this.props.dispatch({
      type: 'dataManagement/ESDetailPop',
      payload: { 'rdid': key }
    })
  }


  // 点击 删除
  ClickDelete = (key) => {
    this.props.dispatch({
      type: 'dataManagement/ESDetailPopDelete',
      payload: { 'id': key }
    })
  }

  // 点击 分析
  clickAnalysis = () => {
    let data = [
      [10.0, 8.04],
      [8.0, 6.95],
      [13.0, 7.58],
      [9.0, 8.81],
      [11.0, 8.33],
      [14.0, 9.96],
      [6.0, 7.24],
      [4.0, 4.26],
      [12.0, 10.84],
      [7.0, 4.82],
      [5.0, 5.68]
    ];
    this.props.dispatch({
      type: 'dataManagement/ShowPointImg',
      payload: data
    })

  }


}


