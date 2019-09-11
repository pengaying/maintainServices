import React, { Component } from 'react';
import Dialog from '../Dialog';
import { Button, Tree ,Icon,Table,Dropdown,Menu } from 'antd';
import styles from './SystemDialog.less'

export default class DataBaseDialog extends Component {
    constructor(){
        super();
        this.state={
            receiveBox:true,  //是否展开侧边 收件箱 属性选择器  true 展开
            sendBox:false,  //是否展开侧边 发件箱 属性选择器  true 展开
            spareDatabase:false,//是否展开 备品数据库 侧边属性选择器  true 展开
            equipDatabase:false,//是否展开侧边 装备数据库 属性选择器  true 展开
            selfCheckDatabase:false,//是否展开侧边 自检数据库 属性选择器  true 展开
            
        }
    }

    onSelect = (selectedKeys, info) => {
        // console.log('selected', selectedKeys, info);
        console.log('selected', selectedKeys[0]);
        if(selectedKeys!=null && selectedKeys[0]!=null){
            if(selectedKeys[0] === '0-0-0'){
                this.setState({
                    receiveBox:true,  
                    sendBox:false, 
                    spareDatabase:false,
                    equipDatabase:false,
                    selfCheckDatabase:false,
                })
            }
            else if(selectedKeys[0] === '0-0-1'){
                this.setState({
                    receiveBox:false,  
                    sendBox:true, 
                    spareDatabase:false,
                    equipDatabase:false,
                    selfCheckDatabase:false,
                })
            }
            else if(selectedKeys[0] === '0-0-2'){
                this.setState({
                    receiveBox:false,  
                    sendBox:false, 
                    spareDatabase:true,
                    equipDatabase:false,
                    selfCheckDatabase:false,
                })
            }
            else if(selectedKeys[0] === '0-0-3'){
                this.setState({
                    receiveBox:false,  
                    sendBox:false, 
                    spareDatabase:false,
                    equipDatabase:true,
                    selfCheckDatabase:false,
                })
            }
            else if(selectedKeys[0] === '0-0-4'){
                this.setState({
                    receiveBox:false,  
                    sendBox:false, 
                    spareDatabase:false,
                    equipDatabase:false,
                    selfCheckDatabase:true,
                })
            }
        }
    };

    render() {
        // 收件箱
        const receiveColumn = [
            {
                title: '任务名',
                dataIndex: 'key', key: 'key',align:'center',
                width: '10%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username',align:'center',
                width: '15%',
            },
            {
                title: '信息类别号',
                dataIndex: 'messagenum', key: 'messagenum',align:'center',
                width: '15%',
            }, {
                title: "信息类别",
                dataIndex: 'messagetype', key: 'messagetype',align:'center',
                width:  '15%',
            }, {
                title: '发件站',
                dataIndex: 'Sendstation', key: 'Sendstation',align:'center',
                width:  '15%',
            }, {
                title: '日期时间',
                dataIndex: 'date', key: 'date',align:'center',
                width:  '20%',
            }, {
                title: '状态',
                dataIndex: 'state', key: 'state',align:'center',
                width:  '10%',
            }
        ];
        // 发件箱
        const sendColumn = [
            {
                title: '任务名',
                dataIndex: 'key', key: 'key',align:'center',
                width: '10%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username',align:'center',
                width: '15%',
            },
            {
                title: '信息类别号',
                dataIndex: 'messagenum', key: 'messagenum',align:'center',
                width: '15%',
            }, {
                title: "信息类别",
                dataIndex: 'messagetype', key: 'messagetype',align:'center',
                width:  '15%',
            }, {
                title: '收件站',
                dataIndex: 'receivestation', key: 'receivestation',align:'center',
                width:  '15%',
            }, {
                title: '日期时间',
                dataIndex: 'date', key: 'date',align:'center',
                width:  '20%',
            }, {
                title: '状态',
                dataIndex: 'state', key: 'state',align:'center',
                width:  '10%',
            }
        ];
        // 备品备件  暂时无模型
        const spareColumn = [
            {
                title: '任务名',
                dataIndex: 'key', key: 'key',align:'center',
                width: '10%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username',align:'center',
                width: '15%',
            },
            {
                title: '信息类别号',
                dataIndex: 'messagenum', key: 'messagenum',align:'center',
                width: '15%',
            }, {
                title: "信息类别",
                dataIndex: 'messagetype', key: 'messagetype',align:'center',
                width:  '15%',
            }, {
                title: '发件站',
                dataIndex: 'Sendstation', key: 'Sendstation',align:'center',
                width:  '15%',
            }, {
                title: '日期时间',
                dataIndex: 'date', key: 'date',align:'center',
                width:  '20%',
            }, {
                title: '状态',
                dataIndex: 'state', key: 'state',align:'center',
                width:  '10%',
            }
        ];
        // 装备控制
        const equipColumn = [
            {
                title: '任务名',
                dataIndex: 'key', key: 'key',align:'center',
                width: '20%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username',align:'center',
                width: '20%',
            },
            {
                title: '操作步骤',
                dataIndex: 'operationStep', key: 'operationStep',align:'center',
                width: '30%',
            }, {
                title: "操作时间",
                dataIndex: 'operationTime', key: 'operationTime',align:'center',
                width:  '30%',
            }
        ];
        // 自检数据库
        const selfCheckColumn = [
            {
                title: '任务名',
                dataIndex: 'key', key: 'key',align:'center',
                width: '20%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username',align:'center',
                width: '20%',
            },
            {
                title: '自检过程',
                dataIndex: 'selfCheckProcess', key: 'selfCheckProcess',align:'center',
                width: '30%',
            }, {
                title: "自检时间",
                dataIndex: 'selfCheckTime', key: 'selfCheckTime',align:'center',
                width:  '30%',
            }
        ];
        
        let receiveData=[];
        let sendData=[];
        let spareData=[];
        let equipData=[];
        let selfCheckData=[];
        for (let i = 0; i < 15; i++) {
            receiveData.push({
                key: i,
                username: "",
                messagenum: "",
                messagetype: "",
                Sendstation: "",
                date: "",
                state: "",
            });
            sendData.push({
                key: i,
                username: "",
                messagenum: "",
                messagetype: "",
                receivestation: "",
                date: "",
                state: "",
            });
            spareData.push({
                key: i,
                // username: "",
                // messagenum: "",
                // messagetype: "",
                // receivestation: "",
                // date: "",
                // state: "",
            });
            equipData.push({
                key: i,
                username: "",
                operationStep: "",
                operationTime: "",
            });
            selfCheckData.push({
                key: i,
                username: "",
                selfCheckProcess: "",
                selfCheckTime: "",
            });
        }
        const { TreeNode } = Tree;

        let {receiveBox,sendBox,spareDatabase,equipDatabase,selfCheckDatabase} =this.state;
        const menuSearch = (
            <Menu className={styles.menuItem} onClick={this.handleClick}>
                <Menu.Item key='conditionSearch'>
                    条件检索
                </Menu.Item>

                <Menu.Item key='allSearch'>
                    全部检索   
                </Menu.Item>
            </Menu>
        )
        const menuDelete = (
            <Menu  onClick={this.handleClick}>
                <Menu.Item  key='signalDelete'>                    
                   单行删除
                </Menu.Item>
                <Menu.Item  key='allDelete'>
                    全部删除
                </Menu.Item>
            </Menu>
        )
        
        return (
            <Dialog
                visible={this.props.visible}
                title="数据库管理界面"
                index={this.props.index}
                zIndex={this.props.zIndex}                                    
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{width:'900px',height:'468px'}}>
                        <div className={styles.Database}>
                            <span style={{margin:'0 10px 0 0'}}><Button type='primary'>备份</Button></span>
                            <span style={{margin:'0 10px 0 0'}}><Button type='primary'>还原</Button></span>
                            <span style={{margin:'0 10px 0 0'}}>
                                <Dropdown overlay={menuSearch} placement="bottomLeft">
                                    <Button  type='primary'>检索</Button>
                                </Dropdown>
                            </span>
                            <span style={{margin:'0 10px 0 0'}}>
                                <Dropdown overlay={menuDelete} placement="bottomLeft">
                                    <Button  type='primary'>删除</Button>
                                </Dropdown>
                            </span>
                            <span style={{margin:'0 0px 0 0'}}><Button type='primary'>清除</Button></span>
                        </div>

                        <div style={{float:'left',margin:'10px 0 0 0',width:'100%'}}>
                            <div style={{float:'left',width:'25%'}}>
                                <div  className={styles.treeNode}>
                                    <Tree showLine icon={  <Icon type={this.state.unfold ? "plus-square" : "minus-square"} />} onSelect={this.onSelect}>
                                        <TreeNode title="装备数据库" key="0-0">
                                            <TreeNode title="收件箱" key="0-0-0"/>
                                            <TreeNode title="发件箱" key="0-0-1"/>
                                            <TreeNode title="备品备件数据库" key="0-0-2"/>
                                            <TreeNode title="装备控制数据库" key="0-0-3"/>
                                            <TreeNode title="自检数据库" key="0-0-4"/>
                                        </TreeNode>
                                    </Tree>
                                </div>
                            </div>
                            <div style={{float:'left',width:'74%',margin:'0 0 0 1%'}}>
                                <div className={styles.bodyCss}>
                                    <Table
                                        bordered
                                        columns={
                                            receiveBox? receiveColumn:
                                            sendBox? sendColumn:
                                            spareDatabase?  spareColumn:
                                            equipDatabase?  equipColumn:
                                            selfCheckDatabase? selfCheckColumn:
                                            null 
                                        }
                                        dataSource={
                                            receiveBox? receiveData:
                                            sendBox? sendData:
                                            spareDatabase?  spareData:
                                            equipDatabase?  equipData:
                                            selfCheckDatabase? selfCheckData:
                                            null 
                                        }
                                        pagination={{ pageSize:  11 }}
                                        className={styles.mynoiseClass}
                                        rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                    />
                                </div>
                            </div>
                        </div>                     
                    
                    </div>
                </div>
            </Dialog>
        )
    }

    handleClick = (e) => {
        console.log('click====', e);
        console.log('value=====', e.key);
        switch(e.key){
            case 'conditionSearch':
                // this.setState({

                // })
                break;
            case 'allSearch':
                // this.setState({

                // })
                break;
            case 'allDelete':
                // this.setState({

                // })
                break;
            case 'signalDelete':
                // this.setState({

                // })
                break;
            default:
                break;
        }
    
     }

}
