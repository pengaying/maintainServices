import React, { Component } from 'react';
import { Radio, Table, } from 'antd';
import styles from './MaintainGuidance.less';
import EquipTree from './EquipTree';
import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class DataBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }

    componentDidMount() {
        
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '15%',
            },
            {
                title: '名称',
                dataIndex: 'name', key: 'name',
                width: '25%',
            },
            {
                title: '日期',
                width: '30%',
                dataIndex: 'date', key: 'date',
            }, {
                title: '操作',
                //   width: '18%',
                dataIndex: 'detail', key: 'detail',
                render: (text, record) => (
                    <div style={{ display: 'inline-block' }}>
                        <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.ClickDetail(record.key)} >打开</span>
                        <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
                    </div>
                )
            }
        ];


        let Tabledata = [];
        for (let i = 0; i < 25; i++) {
            Tabledata.push({
                key: i + 1,
                location: '桂林长海',
                time: '2019/04/06  07:00',
            });
        }
        return (
            <div className={styles.CenterContent}>
                <div className={styles.CenterContentTitle}>
                    入库
                    </div>
                <div className={styles.CenterContentRadio}>
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value={1}>全部</Radio>
                        <Radio value={2}>图纸资料</Radio>
                        <Radio value={3}>指导资料</Radio>
                    </Radio.Group>
                </div>
                <div className={styles.CenterContentRate35}>
                    <EquipTree />
                </div>
                <div className={styles.CenterContentRate65}>
                    <div className={styles.bodyCss_query}>
                        <Table
                            bordered
                            columns={columns}
                            dataSource={Tabledata}
                            className={styles.mynoiseClass}
                            pagination={{ pageSize: 12 }}
                            rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                        />
                    </div>
                </div>
            </div>
        )
    }

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    // 点击  详情
    ClickDetail = (key) => {
        this.setState({
            DetailState: true,
        })
    }

    CloseDetail = () => {
        this.setState({
            DetailState: false
        })
    }

}

