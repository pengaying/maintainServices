import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from "./DataManagement.less";

import u83 from '../assets/u83.svg';
import u84 from '../assets/u84.svg';
import u85 from '../assets/u85.svg';
import u103 from '../assets/u103.svg';
import u106 from '../assets/u106.svg';

import u88 from '../assets/u88.svg';
import u95 from '../assets/u95.svg';
import u100 from '../assets/u100.svg';

import TestData from './component/TestData';
import MaintainData from './component/MaintainData';
import MaintainLog from './component/MaintainLog';
import MaintainApply from './component/MaintainApply';
import SpareSupplementary from './component/SpareSupplementary';

import ElecSituation from './component/ElecSituation';

import StatisticAnalysis from './component/StatisticAnalysis';

import WorkSummary from './component/WorkSummary';

@connect(({ dataManagement }) => ({ dataManagement }))
export default class DataManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenmenu: true,//控制所有二级菜单显隐true显示

            testData_Sign: false,// 备件管理测试数据点击背景改变，false不改变背景色
            testData_MouseSign: false,// 备件管理测试数据移入移出背景改变，false不加背景色   
            maintainData_Sign: false,// 维修数据
            maintainData_MouseSign: false,// 维修数据  移入移出
            maintainLog_Sign: true,// 维修日志
            maintainLog_MouseSign: false,// 维修日志  移入移出
            maintainApply_Sign: false,// 维修申请
            maintainApply_MouseSign: false,// 维修申请  移入移出
            spareApply_Sign: false,// 备件申请记录
            spareApply_MouseSign: false,// 备件申请记录  移入移出

            statisticAnalysis_Sign: false,// 统计分析
            statisticAnalysis_MouseSign: false,// 统计分析  移入移出

            workSummary_Sign: false,// 阶段工作总结
            workSummary_MouseSign: false,// 阶段工作总结  移入移出

            ElecSituation_Sign: false,// 电磁态势
            ElecSituation_MouseSign: false,// 电磁态势  移入移出
        }
    }

    // 备件管理
    // 点击选中  测试数据
    ClickStorage = (e) => {
        this.setState({
            testData_Sign: true,
            maintainData_Sign: false,
            maintainLog_Sign: false,
            spareApply_Sign: false,
            maintainApply_Sign: false,
            statisticAnalysis_Sign: false,
            workSummary_Sign: false,
            ElecSituation_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseStorage = (e) => {
        this.setState({
            testData_MouseSign: true,
        })
    }
    onMouseOutStorage = (e) => {
        this.setState({
            testData_MouseSign: false,
        })
    }

    // 点击选中 维修数据
    ClickmaintainData = (e) => {
        this.setState({
            testData_Sign: false,
            maintainData_Sign: true,
            maintainLog_Sign: false,
            spareApply_Sign: false,
            maintainApply_Sign: false,
            statisticAnalysis_Sign: false,
            workSummary_Sign: false,
            ElecSituation_Sign: false,
        });
    }
    //  鼠标移入 
    onMousemaintainData = (e) => {
        this.setState({
            maintainData_MouseSign: true,
        })
    }
    onMouseOutmaintainData = (e) => {
        this.setState({
            maintainData_MouseSign: false,
        })
    }

    //点击选中 维修日志
    ClickCheck = (e) => {
        this.setState({
            testData_Sign: false,
            maintainData_Sign: false,
            maintainLog_Sign: true,
            spareApply_Sign: false,
            maintainApply_Sign: false,
            statisticAnalysis_Sign: false,
            workSummary_Sign: false,
            ElecSituation_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseCheck = (e) => {
        this.setState({
            maintainLog_MouseSign: true,
        })
    }
    onMouseOutCheck = (e) => {
        this.setState({
            maintainLog_MouseSign: false,
        })
    }

    // 点击选中 维修申请
    ClickmaintainApply = (e) => {
        this.setState({
            testData_Sign: false,
            maintainData_Sign: false,
            maintainLog_Sign: false,
            spareApply_Sign: false,
            maintainApply_Sign: true,
            statisticAnalysis_Sign: false,
            workSummary_Sign: false,
            ElecSituation_Sign: false,
        });
    }
    //  鼠标移入 
    onMousemaintainApply = (e) => {
        this.setState({
            maintainApply_MouseSign: true,
        })
    }
    onMouseOutmaintainApply = (e) => {
        this.setState({
            maintainApply_MouseSign: false,
        })
    }


    // 点击选中 备件申请记录
    ClickspareApply = (e) => {
        this.setState({
            testData_Sign: false,
            maintainData_Sign: false,
            maintainLog_Sign: false,
            spareApply_Sign: true,
            maintainApply_Sign: false,
            statisticAnalysis_Sign: false,
            workSummary_Sign: false,
            ElecSituation_Sign: false,
        });
    }
    //  鼠标移入 
    onMousespareApply = (e) => {
        this.setState({
            spareApply_MouseSign: true,
        })
    }
    onMouseOutspareApply = (e) => {
        this.setState({
            spareApply_MouseSign: false,
        })
    }



    // 统计分析
    ClickstatisticAnalysis = (e) => {
        this.setState({
            testData_Sign: false,
            maintainData_Sign: false,
            maintainLog_Sign: false,
            spareApply_Sign: false,
            maintainApply_Sign: false,
            statisticAnalysis_Sign: true,
            workSummary_Sign: false,
            ElecSituation_Sign: false,
        });
    }
    //  鼠标移入 
    onMousestatisticAnalysis = (e) => {
        this.setState({
            statisticAnalysis_MouseSign: true,
        })
    }
    onMouseOutstatisticAnalysis = (e) => {
        this.setState({
            statisticAnalysis_MouseSign: false,
        })
    }

    // 点击选中 电磁态势
    ClickElecSituation = (e) => {
        this.setState({
            ElecSituation_Sign: true,
            testData_Sign: false,
            maintainData_Sign: false,
            maintainLog_Sign: false,
            spareApply_Sign: false,
            maintainApply_Sign: false,
            statisticAnalysis_Sign: false,
            workSummary_Sign: false,
            ElecSituation_Sign: true,
        });
    }
    //  鼠标移入 
    onMouseElecSituation = (e) => {
        this.setState({
            ElecSituation_MouseSign: true,
        })
    }
    onMouseOutElecSituation = (e) => {
        this.setState({
            ElecSituation_MouseSign: false,
        })
    }

    // 点击选中 阶段工作总结
    ClickworkSummary = (e) => {
        this.setState({
            testData_Sign: false,
            maintainData_Sign: false,
            maintainLog_Sign: false,
            spareApply_Sign: false,
            maintainApply_Sign: false,
            statisticAnalysis_Sign: false,
            workSummary_Sign: true,
            ElecSituation_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseworkSummary = (e) => {
        this.setState({
            workSummary_MouseSign: true,
        })
    }
    onMouseOutworkSummary = (e) => {
        this.setState({
            workSummary_MouseSign: false,
        })
    }




    //点击菜单区二级菜单隐藏只显示子域内容
    hiddenMenuButton = () => {
        this.setState({
            hiddenmenu: !this.state.hiddenmenu
        })
        // this.props.dispatch({
        //     type: 'statemaintainLog/HSMenu'
        // })
    }

    render() {
        let { testData_Sign, testData_MouseSign, maintainData_Sign, maintainData_MouseSign, maintainLog_Sign, maintainLog_MouseSign,
            spareApply_Sign, spareApply_MouseSign, maintainApply_Sign, maintainApply_MouseSign, ElecSituation_Sign,
            ElecSituation_MouseSign, productCycle_Sign, productCycle_MouseSign, PN_Management_Sign, PN_Management_MouseSign,
            technicalFile_Sign, technicalFile_MouseSign, StorageArea_Sign, StorageArea_MouseSign, viewLog_Sign, viewLog_MouseSign,
            productControl_Sign, productControl_MouseSign, statisticAnalysis_Sign, statisticAnalysis_MouseSign, workSummary_Sign,
            workSummary_MouseSign } = this.state;
        return (
            <>
                <div className={styles.Menu} style={{ height: this.state.hiddenmenu ? '109px' : '30px' }}>
                    {/* 二级菜单 */}
                    <div style={{ float: 'left' }}>
                        {/* 二级菜单子项 */}

                        <div className={styles.AllMenuButton}>

                            {/* 数据管理 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 测试数据 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: testData_Sign || testData_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickStorage}
                                            onMouseEnter={this.onMouseStorage}
                                            onMouseLeave={this.onMouseOutStorage}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u83} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: testData_Sign ? "#56AFFF" : "#BBC4DA" }}>测试数据</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 维修数据 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: maintainData_Sign || maintainData_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickmaintainData}
                                            onMouseEnter={this.onMousemaintainData}
                                            onMouseLeave={this.onMouseOutmaintainData}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u84} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: maintainData_Sign ? "#56AFFF" : "#BBC4DA" }}>维修数据</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 维修日志 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: maintainLog_Sign || maintainLog_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickCheck}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseCheck}
                                            onMouseLeave={this.onMouseOutCheck}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u85} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: maintainLog_Sign ? "#56AFFF" : "#BBC4DA" }}>维修日志</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 维修申请 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: maintainApply_Sign || maintainApply_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickmaintainApply}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMousemaintainApply}
                                            onMouseLeave={this.onMouseOutmaintainApply}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u103} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: maintainApply_Sign ? "#56AFFF" : "#BBC4DA" }}>维修申请</span>
                                            </div>
                                        </div>
                                    </div>


                                    {/* 备件申请记录 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: spareApply_Sign || spareApply_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickspareApply}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMousespareApply}
                                            onMouseLeave={this.onMouseOutspareApply}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u106} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: spareApply_Sign ? "#56AFFF" : "#BBC4DA" }}>备件申请记录</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>数据管理</span>
                                </div>
                            </div>

                            {/* 统计分析 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>

                                    {/* 统计分析 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: statisticAnalysis_Sign || statisticAnalysis_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickstatisticAnalysis}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMousestatisticAnalysis}
                                            onMouseLeave={this.onMouseOutstatisticAnalysis}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u88} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: statisticAnalysis_Sign ? "#56AFFF" : "#BBC4DA" }}>统计分析</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>统计分析</span>
                                </div>
                            </div>

                            {/* 电磁态势 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 菜单按钮 */}
                                    <div className={styles.menuButton}>

                                        <div
                                            style={{ background: ElecSituation_Sign || ElecSituation_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickElecSituation}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseElecSituation}
                                            onMouseLeave={this.onMouseOutElecSituation}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u95} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: ElecSituation_Sign ? "#56AFFF" : "#BBC4DA" }}>电磁态势</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.childrenName}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>小工具</span>
                                </div>
                            </div>

                            {/* 阶段工作总结 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 菜单按钮 */}
                                    <div className={styles.menuButton}>

                                        <div
                                            style={{ background: workSummary_Sign || workSummary_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickworkSummary}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseworkSummary}
                                            onMouseLeave={this.onMouseOutworkSummary}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u100} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: workSummary_Sign ? "#56AFFF" : "#BBC4DA" }}>阶段工作总结</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.childrenName}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>工作汇报</span>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* 控制菜单项的显隐 */}
                    <div className={styles.childrenButton} style={{ color: "#909cb9", textAlign: 'right', padding: this.state.hiddenmenu ? '85px 10px 0 0' : '5px 10px 0 0', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                        <div onClick={this.hiddenMenuButton} >
                            {this.state.hiddenmenu ? <Icon type="shrink" />
                                : <Icon type="arrows-alt" />
                            }
                        </div>
                    </div>

                </div>

                {
                    testData_Sign ? <TestData /> : null
                }
                {
                    maintainData_Sign ? <MaintainData /> : null
                }
                {
                    maintainLog_Sign ? <MaintainLog /> : null
                }
                {
                    maintainApply_Sign ? <MaintainApply /> : null
                }
                {
                    spareApply_Sign ? <SpareSupplementary /> : null
                }


                {
                    ElecSituation_Sign ? <ElecSituation /> : null
                }
                {
                    statisticAnalysis_Sign ? <StatisticAnalysis /> : null
                }
                {
                    workSummary_Sign ? <WorkSummary /> : null
                }
            </>
        )
    }

    //改变弹窗层级事件//控制对话框层级
    changeIndex = (e) => {
        // // let temp = this.state.zIndex;
        // let temp = this.props.CacheData.zIndex;
        // for(let i = 0; i < temp.length; i++){
        //     temp[i] = 1010;
        // }
        // temp[e] = 1020;
        // this.props.dispatch({
        //     type:'CacheData/changeZindex',
        //     payload:temp
        // });
    };
}
