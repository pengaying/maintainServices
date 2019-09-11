import React, { Component } from 'react'
import styles from "./bodyCom.less"
import { Radio, Table, Tree, Icon, Input, Button } from 'antd';
import Dialog from '../../Dialog//Dialog';
export default class BodyCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

            ],
            addVisable: false
        }

    }
    addTree = () => {
        console.log("8888888888888888")
        this.setState({
            addVisable: true
        })
    }
    closeWinodow = () => {
        this.setState({
            addVisable: false
        })
    }
    changeIndex = (e) => {
        // this.props.changeIndex(e);
    };
    render() {
        console.log(this.state.addVisable)
        const { TreeNode } = Tree;
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
                        <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.handleClickLook(record)}>查看</span>
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
        const RadioGroup = Radio.Group;
        return (
            <div style={{ float: 'left', width: '100%', height: '100%' }}>
                <div className={styles.messageIcon}>
                    <div className={styles.iconColor} />
                    <div className={styles.messageTitle}>资料库</div>
                </div>
                <div className={styles.tableShow}>
                    <div className={styles.layoutSide}>
                        <div className={styles.radioContent}>
                            <RadioGroup onChange={this.handleChange} >
                                <div className={styles.model} >
                                    <div className={styles.Circular_Mode}>
                                        <Radio value="全部"> <span className={styles.ModeSelect_Font}>全部</span></Radio>
                                    </div>
                                    <div className={styles.Circular_Mode}>
                                        <Radio value="图纸资料"> <span className={styles.ModeSelect_Font}>图纸资料</span></Radio>
                                    </div>

                                    <div className={styles.Circular_Mode}>
                                        <Radio value="指导资料"> <span className={styles.ModeSelect_Font}>指导资料</span></Radio>
                                    </div>

                                </div>
                            </RadioGroup>
                        </div>
                        <Tree
                            className="draggable-tree"
                            defaultExpandedKeys={this.state.expandedKeys}
                            draggable
                            blockNode
                            onSelect={this.addTree}
                            onDragEnter={this.onDragEnter}
                            onDrop={this.onDrop}
                        >
                            <TreeNode icon={<Icon type="smile-o" />} title="装备目录" key="0-0">
                                <TreeNode

                                    icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                    title="指挥控制设备"
                                    key="0-0-0"
                                >
                                    <TreeNode onClick={this.addTree}
                                        icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                        title="指挥控制设备1"
                                        key="0-0-0-0"
                                    />
                                </TreeNode>
                                <TreeNode
                                    icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                    title="雷达对抗设备"
                                    key="0-0-1"
                                >
                                    <TreeNode
                                        icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                        title="雷达对抗设备1"
                                        key="0-0-1-0"
                                    />
                                </TreeNode>
                                <TreeNode
                                    icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                    title="通信对抗设备"
                                    key="0-0-2"
                                >
                                    <TreeNode
                                        icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                        title="通信对抗设备1"
                                        key="0-0-2-0"
                                    />
                                </TreeNode>
                                <TreeNode
                                    icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                    title="光电对抗设备"
                                    key="0-0-3"
                                >
                                    <TreeNode
                                        icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                        title="光电对抗设备1"
                                        key="0-0-3-0"
                                    />
                                </TreeNode>
                                <TreeNode
                                    icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                    title="雷达设备"
                                    key="0-0-4"
                                >
                                    <TreeNode
                                        icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                        title="雷达设备1"
                                        key="0-0-4-0"
                                    />
                                </TreeNode>
                                <TreeNode
                                    icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                    title="通信设备"
                                    key="0-0-5"
                                >
                                    <TreeNode
                                        icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                        title="通信设备1"
                                        key="0-0-5-0"
                                    />
                                </TreeNode>
                            </TreeNode>
                        </Tree>
                    </div>
                    <div className={styles.tableContent}>
                        <Table
                            bordered
                            columns={columns}
                            dataSource={Tabledata}
                            rowSelection={rowSelection}
                            pagination={{ pageSize: 20 }}
                            className={styles.mynoiseClassQuery}
                            scroll={{ x: 950 }}
                            rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                        />
                        {this.state.addVisable == true ? <AddMessage index={1} zIndex={2} addVisable={this.state.addVisable} changeIndex={this.changeIndex} closeWinodow={this.closeWinodow} /> : <AddMessage index={1} zIndex={2} changeIndex={this.changeIndex} closeWinodow={this.closeWinodow} />}
                    </div>


                </div>
            </div>
        )
    }
}
class AddMessage extends Component {
    render() {
        return (
            <Dialog
                visible={this.props.addVisable}
                title="添加资料"
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div style={{ marginBottom: "10px" }}>
                    <Button type="primary">添加</Button>
                    <Input style={{ width: "300px", marginLeft: "10px" }}></Input>
                </div>
                <div style={{ marginLeft: "165px" }}>
                    <Button type="primary">确定</Button>
                </div>
            </Dialog>
        )
    }

}