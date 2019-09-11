import React, { Component } from 'react'
import { Tree, Icon, Button } from 'antd';
import styles from "./index.less";
import defaultLight from '../assets/grayLight.png'//灰灯
// import redLight from '../assets/redLight.png'//红灯  
// import greenLight from '../assets/greenLight.png'//绿灯 
import iconFont from './iconfont.js'
import { connect } from 'dva';
@connect(({ windowModal }) => ({ windowModal }))
export default class ComondControl extends Component {
    constructor() {
        super();
        this.state = {
            superior: false,
            sibling: false

        }
    }

    onSelect = (selectedKeys, info) => {
        // console.log('selected', selectedKeys, info);
        console.log('selected===info====', info.node.props.title);
        let title = info.node.props.title;
        if (title === '团指挥所') {
            this.setState({
                superior: true,
                sibling: false
            })
        }
        else if (title === '电源设备维修车' || title === '备品备件车') {
            this.setState({
                superior: false,
                sibling: true
            })
        }
    };
    render() {
        const { TreeNode } = Tree;
        const IconFont = Icon.createFromIconfontCN({
            scriptUrl: iconFont
        })
        return (
            <>
                <div className={styles.treeNode}>
                    <Tree showLine defaultExpandedKeys={['0-0-0', '0-0-1']} onSelect={this.onSelect}>
                        {/* <TreeNode key="0-0"> */}

                        <TreeNode title="上级" key="0-0-0">
                            <TreeNode icon={({ selected }) => <img src={defaultLight} />} title="团指挥所" key="0-0-0-0" />

                        </TreeNode>

                        <TreeNode title="下级" key="0-0-1">
                            <TreeNode icon={({ selected }) => <Icon style={{ background: '#d9d9d9' }} type="iconyuanxing1" />} title="电源设备维修车" key="0-0-1-0" />
                            <TreeNode title="备品备件车" key="0-0-1-1" />
                        </TreeNode>

                        {/* </TreeNode> */}
                    </Tree>

                    {/** <IconFont style={{background:'#d9d9d9'}} type="iconyuanxing1" /> */}
                </div>

                {
                    this.state.superior ?
                        <Superior close={this.HiddenSuperior} />
                        :
                        null
                }

                {
                    this.state.sibling ?
                        <Sibling close={this.HiddenSibling} />
                        :
                        null
                }
            </>
        )
    }


    HiddenSuperior = () => {
        this.setState({
            superior: false
        })
    }
    HiddenSibling = () => {
        this.setState({
            sibling: false
        })
    }
}

@connect(({ windowModal }) => ({ windowModal }))
class Superior extends Component {
    constructor(propps) {
        super(propps);
        this.state = {

        }
    }
    render() {
        return (
            <div style={{ float: 'left' }}>
                <div className={styles.LayoutSide_title}>
                    上级
                    <div style={{ float: 'right', padding: '2px 10px 0 0' }}>
                        <span style={{ cursor: 'pointer' }} onClick={this.props.close}><Icon type="close" style={{ fontSize: '18px' }} /></span>
                    </div>
                </div>
                <div className={styles.LayoutSide_SContent}>
                    <div>
                        <span style={{ margin: '0 0 0 10px' }}>
                            <Button type='primary'>在线问询</Button>
                        </span>
                        <span style={{ margin: '0 10px' }}>
                            <Button onClick={this.CEquipLocation} type='primary'>装备位置</Button>
                        </span>
                        <span style={{ margin: '0 10px 0 0' }}>
                            <Button onClick={this.CEquipState} type='primary'>装备状态</Button>
                        </span>
                    </div>
                </div>

                <div className={styles.LayoutSide_SContent}>
                    <div>
                        <span style={{ margin: '0 0 0 10px' }}>
                            <Button onClick={this.CTimeTick} type='primary'>对时申请</Button>
                        </span>
                        <span style={{ margin: '0 10px' }}>
                            <Button onClick={this.CPeopleLoss} type='primary'>人员损失</Button>
                        </span>
                        <span style={{ margin: '0 10px 0 0' }}>
                            <Button onClick={this.CMaterialLoss} type='primary'>物资损耗</Button>
                        </span>
                    </div>
                </div>

                <div className={styles.LayoutSide_SContent}>
                    <div>
                        <span style={{ margin: '0 10px' }}>
                            <Button onClick={this.CEquipLoss} type='primary'>装备损耗</Button>
                        </span>
                    </div>
                </div>

            </div>
        )
    }
    CEquipLocation = () => {
        this.props.dispatch({
            type: 'windowModal/ShowEquipLocation'
        })
    }
    CEquipState = () => {
        this.props.dispatch({
            type: 'windowModal/ShowEquipState'
        })
    }
    CTimeTick = () => {
        this.props.dispatch({
            type: 'windowModal/ShowTimeTick'
        })
    }
    CPeopleLoss = () => {
        this.props.dispatch({
            type: 'windowModal/ShowPeopleLoss'
        })
    }
    CMaterialLoss = () => {
        this.props.dispatch({
            type: 'windowModal/ShowMaterialLoss'
        })
    }
    CEquipLoss = () => {
        this.props.dispatch({
            type: 'windowModal/ShowEquipLoss'
        })
    }
}

@connect(({ windowModal }) => ({ windowModal }))
class Sibling extends Component {
    constructor(propps) {
        super(propps);
        this.state = {

        }
    }
    render() {
        return (
            <div style={{ float: 'left' }}>
                <div className={styles.LayoutSide_title}>
                    下级
                <div style={{ float: 'right', padding: '2px 10px 0 0' }}>
                        <span style={{ cursor: 'pointer' }} onClick={this.props.close}><Icon type="close" style={{ fontSize: '18px' }} /></span>
                    </div>
                </div>
                <div className={styles.LayoutSide_SContent}>
                    <div>
                        <span style={{ margin: '0  0 0 10px' }}>
                            <Button type='primary'>在线问询</Button>
                        </span>
                        <span style={{ margin: '0 10px' }}>
                            <Button onClick={this.CEquipLocation} type='primary'>装备位置</Button>
                        </span>
                        <span style={{ margin: '0 10px 0 0' }}>
                            <Button onClick={this.CEquipState} type='primary'>装备状态</Button>
                        </span>
                    </div>
                </div>

                <div className={styles.LayoutSide_SContent}>
                    <div>
                        <span style={{ margin: '0  0 0 10px' }}>
                            <Button onClick={this.CTimeTick} type='primary'>对时申请</Button>
                        </span>
                        <span style={{ margin: '0 10px' }}>
                            <Button onClick={this.CPeopleLoss} type='primary'>人员损失</Button>
                        </span>
                        <span style={{ margin: '0 10px 0 0' }}>
                            <Button onClick={this.CMaterialLoss} type='primary'>物资损耗</Button>
                        </span>
                    </div>
                </div>

                <div className={styles.LayoutSide_SContent}>
                    <div>
                        <span style={{ margin: '0  0 0 10px' }}>
                            <Button onClick={this.CEquipLoss} type='primary'>装备损耗</Button>
                        </span>
                    </div>
                </div>

            </div>
        )
    }

    CEquipLocation = () => {
        this.props.dispatch({
            type: 'windowModal/ShowEquipLocation'
        })
    }
    CEquipState = () => {
        this.props.dispatch({
            type: 'windowModal/ShowEquipState'
        })
    }
    CTimeTick = () => {
        this.props.dispatch({
            type: 'windowModal/ShowTimeTick'
        })
    }
    CPeopleLoss = () => {
        this.props.dispatch({
            type: 'windowModal/ShowPeopleLoss'
        })
    }
    CMaterialLoss = () => {
        this.props.dispatch({
            type: 'windowModal/ShowMaterialLoss'
        })
    }
    CEquipLoss = () => {
        this.props.dispatch({
            type: 'windowModal/ShowEquipLoss'
        })
    }
}