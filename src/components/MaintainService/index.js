import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from "./MaintainService.less";

import u111 from '../assets/u111.svg';
import u112 from '../assets/u112.svg';

import u118 from '../assets/u118.svg';
import u121 from '../assets/u121.svg';

import u125 from '../assets/u125.svg';
import u128 from '../assets/u128.svg';

import DataBank from './component/DataBank';
import TFLibrary from './component/TFLibrary';

@connect(({ dataManagement }) => ({ dataManagement }))
export default class MaintainService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenmenu: true,//控制所有二级菜单显隐true显示

            DataBank_Sign: true,// 备件管理资料库点击背景改变，false不改变背景色
            DataBank_MouseSign: false,// 备件管理资料库移入移出背景改变，false不加背景色   
            TFLibrary_Sign: false,// 典型故障库
            TFLibrary_MouseSign: false,// 典型故障库  移入移出

            
        }
    }

    //点击菜单区二级菜单隐藏只显示子域内容
    hiddenMenuButton = () => {
        this.setState({
            hiddenmenu: !this.state.hiddenmenu
        })
        // this.props.dispatch({
        //     type: 'statecheck/HSMenu'
        // })
    }

    render() {
        let { DataBank_Sign, DataBank_MouseSign, TFLibrary_Sign, TFLibrary_MouseSign,
            LeadIn_Sign, LeadIn_MouseSign, Download_Sign, Download_MouseSign,
            Backups_Sign, Backups_MouseSign, Restore_Sign, Restore_MouseSign } = this.state;
        return (
            <>
                <div className={styles.Menu} style={{ height: this.state.hiddenmenu ? '109px' : '30px' }}>
                    {/* 二级菜单 */}
                    <div style={{ float: 'left' }}>
                        {/* 二级菜单子项 */}

                        <div className={styles.AllMenuButton}>
                            {/* 维修指导 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 资料库 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: DataBank_Sign || DataBank_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickStorage}
                                            onMouseEnter={this.onMouseStorage}
                                            onMouseLeave={this.onMouseOutStorage}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u111} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: DataBank_Sign ? "#56AFFF" : "#BBC4DA" }}>资料库</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 典型故障库 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: TFLibrary_Sign || TFLibrary_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickTFLibrary}
                                            onMouseEnter={this.onMouseTFLibrary}
                                            onMouseLeave={this.onMouseOutTFLibrary}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u112} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: TFLibrary_Sign ? "#56AFFF" : "#BBC4DA" }}>典型故障库</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>维修指导</span>
                                </div>
                            </div>

                            {/* 工具 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 导入 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: LeadIn_Sign || LeadIn_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickLeadIn}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseLeadIn}
                                            onMouseLeave={this.onMouseOutLeadIn}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u118} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: LeadIn_Sign ? "#56AFFF" : "#BBC4DA" }}>导入</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 模板下载 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: Download_Sign || Download_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickDownload}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseDownload}
                                            onMouseLeave={this.onMouseOutDownload}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u121} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: Download_Sign ? "#56AFFF" : "#BBC4DA" }}>模板下载</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>工具</span>
                                </div>
                            </div>

                            {/* 备份还原 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 备份 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: Backups_Sign || Backups_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickBackups}
                                            onMouseEnter={this.onMouseBackups}
                                            onMouseLeave={this.onMouseOutBackups}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u125} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: Backups_Sign ? "#56AFFF" : "#BBC4DA" }}>备份</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 还原 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: Restore_Sign || Restore_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickTechnicalFile}
                                            onMouseEnter={this.onMouseTechnicalFile}
                                            onMouseLeave={this.onMouseOutTechnicalFile}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u128} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: Restore_Sign ? "#56AFFF" : "#BBC4DA" }}>还原</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>备份还原</span>
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
                    DataBank_Sign ?
                        <DataBank
                            choicePNDetail={this.props.dataManagement.choisePNData}
                            pnsign={this.props.dataManagement.pnsign}
                        />
                        : null
                }
                {
                    TFLibrary_Sign ? <TFLibrary /> : null
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


    // 点击选中  资料库
    ClickStorage = (e) => {
        this.setState({
            DataBank_Sign: true,
            TFLibrary_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseStorage = (e) => {
        this.setState({
            DataBank_MouseSign: true,
        })
    }
    onMouseOutStorage = (e) => {
        this.setState({
            DataBank_MouseSign: false,
        })
    }
    // 点击选中 典型故障库
    ClickTFLibrary = (e) => {
        this.setState({
            DataBank_Sign: false,
            TFLibrary_Sign: true,
        });
    }
    //  鼠标移入 
    onMouseTFLibrary = (e) => {
        this.setState({
            TFLibrary_MouseSign: true,
        })
    }
    onMouseOutTFLibrary = (e) => {
        this.setState({
            TFLibrary_MouseSign: false,
        })
    }

    // 点击选中 导入
    ClickLeadIn = (e) => {
        this.setState({
        //     DataBank_Sign: false,
        //     TFLibrary_Sign: false,
        
            LeadIn_Sign: true,
        //     Download_Sign: false,

        //     Backups_Sign: false,
        //     Restore_Sign: false,
        });
    }

    //  鼠标移入 
    onMouseLeadIn = (e) => {
        this.setState({
            LeadIn_MouseSign: true,
        })
    }
    onMouseOutLeadIn = (e) => {
        this.setState({
            LeadIn_MouseSign: false,
            LeadIn_Sign: false,
        })
    }
    // 点击选中 模板下载
    ClickDownload = (e) => {
        this.setState({
            // DataBank_Sign: false,
            // TFLibrary_Sign: false,

            // LeadIn_Sign: false,
            Download_Sign: true,

            // Backups_Sign: false,
            // Restore_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseDownload = (e) => {
        this.setState({
            Download_MouseSign: true,
        })
    }
    onMouseOutDownload = (e) => {
        this.setState({
            Download_MouseSign: false,
            Download_Sign: false,
        })
    }


    // 点击选中 备份
    ClickBackups = (e) => {
        this.setState({
            // DataBank_Sign: false,
            // TFLibrary_Sign: false,

            // LeadIn_Sign: false,
            // Download_Sign: false,

            Backups_Sign: true,
            // Restore_Sign: false,

        });
    }
    //  鼠标移入 
    onMouseBackups = (e) => {
        this.setState({
            Backups_MouseSign: true,
        })
    }
    onMouseOutBackups = (e) => {
        this.setState({
            Backups_MouseSign: false,
            Backups_Sign: false,
        })
    }
    // 点击选中 还原
    ClickTechnicalFile = (e) => {
        this.setState({
            // DataBank_Sign: false,
            // TFLibrary_Sign: false,

            // LeadIn_Sign: false,
            // Download_Sign: false,

            // Backups_Sign: false,
            Restore_Sign: true,
        });
    }
    //  鼠标移入 
    onMouseTechnicalFile = (e) => {
        this.setState({
            Restore_MouseSign: true,
        })
    }
    onMouseOutTechnicalFile = (e) => {
        this.setState({
            Restore_MouseSign: false,
            Restore_Sign: false,
        })
    }
}
