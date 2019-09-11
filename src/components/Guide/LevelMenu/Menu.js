import React, { Component, Fragment } from 'react'
import styles from "./menu.less"
import BodyCom from '../bodyCompoent/BodyCom';
import { Radio, Icon } from 'antd';
import AboutDialog from "../SystemDialog/AboutDialog"
import ExitDialog from "../SystemDialog/ExitDialog"
import TypicalFaultBase from '../typicalfaultbase/TypicalFaultBase';
import u118 from '../assets/u118.svg';
import u121 from '../assets/u121.svg';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenmenu: true,//控制所有二级菜单显隐true显示

            LeadIn_Sign: false,
            LeadIn_MouseSign: false,
            Download_Sign: false,
            Download_MouseSign: false,

            Abgcolor: '',
            Bbgcolor: '',
            Cbgcolor: '',
            Dbgcolor: '',
            Ebgcolor: '',
            Fbgcolor: '',
            Gbgcolor: '',
            Hbgcolor: '',
            AfontColor: '#BBC4DA',
            BfontColor: '#BBC4DA',
            CfontColor: '#BBC4DA',
            DfontColor: '#BBC4DA',
            EfontColor: '#BBC4DA',
            FfontColor: '#BBC4DA',
            GfontColor: '#BBC4DA',
            HfontColor: '#BBC4DA',
            helpHidden: false,
            zIndex: [1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010],
            exitHidden: false,
            BodyComHidden: "",//资料库显隐
            TypicalHidden: ""//典型故障库显隐
        }
    }
    changeIndex = (e) => {
        let temp = this.state.zIndex;
        for (let i = 0; i < temp.length; i++) {
            temp[i] = 1010;
        }
        temp[e] = 1020;
        this.setState({ zIndex: temp });
    }
    closeWinodow = () => {
        this.setState({
            helpHidden: false
        })
    }
    exitCloseWindow = () => {
        this.setState({
            exitHidden: false
        })
    }
    handleTClickA = () => {
        this.setState({
            Abgcolor: "#141f3e",
            AfontColor: "#56AFFF",
            BodyComHidden: false,
            TypicalHidden: true
        })
    }
    handleenterAMouse = () => {
        this.setState({
            Abgcolor: '#141f3e',
        })
    }
    handlemoveAMouse = () => {
        this.setState({
            Abgcolor: '',
            AfontColor: '#BBC4DA'
        })
    }
    handleTClickB = () => {
        this.setState({
            Bbgcolor: "#141f3e",
            BfontColor: "#56AFFF",
            TypicalHidden: false,
            BodyComHidden: true
        })
    }
    handleenterBMouse = () => {
        this.setState({
            Bbgcolor: '#141f3e',
        })
    }
    handlemoveBMouse = () => {
        this.setState({
            Bbgcolor: '',
            BfontColor: '#BBC4DA'
        })
    }
    handleTClickC = () => {
        this.setState({
            Cbgcolor: "#141f3e",
            CfontColor: "#56AFFF"
        })
    }
    handleenterCMouse = () => {
        this.setState({
            Cbgcolor: '#141f3e',
        })
    }
    handlemoveCMouse = () => {
        this.setState({
            Cbgcolor: '',
            CfontColor: '#BBC4DA'
        })
    }
    handleTClickD = () => {
        this.setState({
            Dbgcolor: "#141f3e",
            DfontColor: "#56AFFF"
        })
    }
    handleenterDMouse = () => {
        this.setState({
            Dbgcolor: '#141f3e',
        })
    }
    handlemoveDMouse = () => {
        this.setState({
            Dbgcolor: '',
            DfontColor: '#BBC4DA'
        })
    }

    handleTClickE = () => {
        this.setState({
            Ebgcolor: "#141f3e",
            EfontColor: "#56AFFF"
        })
    }
    handleenterEMouse = () => {
        this.setState({
            Ebgcolor: '#141f3e',
        })
    }
    handlemoveEMouse = () => {
        this.setState({
            Ebgcolor: '',
            EfontColor: '#BBC4DA'
        })
    }
    handleTClickF = () => {
        this.setState({
            Fbgcolor: "#141f3e",
            FfontColor: "#56AFFF",

        })
    }
    handleenterFMouse = () => {
        this.setState({
            Fbgcolor: '#141f3e',
        })
    }
    handlemoveFMouse = () => {
        this.setState({
            Fbgcolor: '',
            FfontColor: '#BBC4DA'
        })
    }
    handleTClickG = () => {
        this.setState({
            Gbgcolor: "#141f3e",
            GfontColor: "#56AFFF",
            helpHidden: true
        })
    }
    handleenterGMouse = () => {
        this.setState({
            Gbgcolor: '#141f3e',
        })
    }
    handlemoveGMouse = () => {
        this.setState({
            Gbgcolor: '',
            GfontColor: '#BBC4DA'
        })
    }
    handleTClickH = () => {
        this.setState({
            Hbgcolor: "#141f3e",
            HfontColor: "#56AFFF",
            exitHidden: true
        })
    }
    handleenterHMouse = () => {
        this.setState({
            Hbgcolor: '#141f3e',
        })
    }
    handlemoveHMouse = () => {
        this.setState({
            Hbgcolor: '',
            HfontColor: '#BBC4DA'
        })
    }
    render() {
        const RadioGroup = Radio.Group;
        let { LeadIn_Sign, LeadIn_MouseSign, Download_Sign, Download_MouseSign } = this.state;
        return (
            <Fragment>
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
                                        <div className={styles.Af}
                                            onClick={this.handleTClickA}//点击事件
                                            onMouseEnter={this.handleenterAMouse}
                                            onMouseLeave={this.handlemoveAMouse}
                                        >
                                            <div className={styles.menuImag} style={{ background: this.state.Abgcolor }}>
                                                <div className={styles.Image_Area} >
                                                    <img src={require('../assets/u5.svg')} className={styles.ElecImage} alt='图片' />
                                                </div>
                                                <div className={styles.Image_Power} >
                                                    <span className={styles.power} style={{ color: this.state.AfontColor }}>资料库</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 典型故障库 */}
                                    <div className={styles.menuButton}>
                                        <div className={styles.Af}
                                            onClick={this.handleTClickB}//点击事件
                                            onMouseEnter={this.handleenterBMouse}
                                            onMouseLeave={this.handlemoveBMouse}>
                                            <div className={styles.menuImag} style={{ background: this.state.Bbgcolor }}>
                                                <div className={styles.Image_Area} >
                                                    <img src={require('../assets/u6.svg')} className={styles.ElecImage} alt='图片' />
                                                </div>
                                                <div className={styles.Image_Power} >
                                                    <span className={styles.power} style={{ color: this.state.BfontColor }}>典型故障库</span>
                                                </div>
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
                                    {/* 同步 */}
                                    <div className={styles.menuButton}>
                                        <div className={styles.Af}
                                            onClick={this.handleTClickC}//点击事件
                                            onMouseEnter={this.handleenterCMouse}
                                            onMouseLeave={this.handlemoveCMouse}>

                                            <div className={styles.menuImag} style={{ background: this.state.Cbgcolor }}>
                                                <div className={styles.Image_Area} >
                                                    <img src={require('../assets/u25.svg')} className={styles.ElecImage} alt='图片' />
                                                </div>
                                                <div className={styles.Image_Power} >
                                                    <span className={styles.power} style={{ color: this.state.CfontColor }}>同步</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 备份 */}
                                    <div className={styles.menuButton}>
                                        <div className={styles.Af}
                                            onClick={this.handleTClickD}//点击事件
                                            onMouseEnter={this.handleenterDMouse}
                                            onMouseLeave={this.handlemoveDMouse}>
                                            <div className={styles.menuImag} style={{ background: this.state.Dbgcolor }}>
                                                <div className={styles.Image_Area} >
                                                    <img src={require('../assets/u25.svg')} className={styles.ElecImage} alt='图片' />
                                                </div>
                                                <div className={styles.Image_Power} >
                                                    <span className={styles.power} style={{ color: this.state.DfontColor }}>备份</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 还原 */}
                                    <div className={styles.menuButton}>
                                        <div className={styles.Af}
                                            onClick={this.handleTClickE}//点击事件
                                            onMouseEnter={this.handleenterEMouse}
                                            onMouseLeave={this.handlemoveEMouse}>
                                            <div className={styles.menuImag} style={{ background: this.state.Ebgcolor }} >
                                                <div className={styles.Image_Area} >
                                                    <img src={require('../assets/u28.svg')} className={styles.ElecImage} alt='图片' />
                                                </div>
                                                <div className={styles.Image_Power} >
                                                    <span className={styles.power} style={{ color: this.state.EfontColor }}>还原</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>备份还原</span>
                                </div>
                            </div>

                            {/* 系统 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 帮助 */}
                                    <div className={styles.menuButton}>
                                        <div className={styles.Af} onClick={this.handleTClickF}//点击事件
                                            onMouseEnter={this.handleenterFMouse}
                                            onMouseLeave={this.handlemoveFMouse}>
                                            <div className={styles.menuImag} style={{ background: this.state.Fbgcolor }} >
                                                <div className={styles.Image_Area} >
                                                    <img src={require('../assets/u14.png')} className={styles.ElecImage} alt='图片' />
                                                </div>
                                                <div className={styles.Image_Power} >
                                                    <span className={styles.power} style={{ color: this.state.FfontColor }}>帮助</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 备份 */}
                                    <div className={styles.menuButton}>
                                        <div className={styles.Af} onClick={this.handleTClickG}//点击事件
                                            onMouseEnter={this.handleenterGMouse}
                                            onMouseLeave={this.handlemoveGMouse}>
                                            <div className={styles.menuImag} style={{ background: this.state.Gbgcolor }}>
                                                <div className={styles.Image_Area} >
                                                    <img src={require('../assets/u18.png')} className={styles.ElecImage} alt='图片' />
                                                </div>
                                                <div className={styles.Image_Power} >
                                                    <span className={styles.power} style={{ color: this.state.GfontColor }}>关于</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 还原 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            className={styles.Af} 
                                            onClick={this.handleTClickH}//点击事件
                                            onMouseEnter={this.handleenterHMouse}
                                            onMouseLeave={this.handlemoveHMouse}>
                                            <div className={styles.menuImag} style={{ background: this.state.Hbgcolor }} >
                                                <div className={styles.Image_Area} >
                                                    <img src={require('../assets/u22.png')} className={styles.ElecImage} alt='图片' />
                                                </div>
                                                <div className={styles.Image_Power} >
                                                    <span className={styles.power} style={{ color: this.state.HfontColor }}>退出</span>
                                                </div>
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
                {/* 
                <div style={{ float: 'left', height: this.state.hiddenmenu ? '79px' : '30px' }}>
                    <div className={styles.dataku}>
                        <div className={styles.FodderButton} >
                            <div className={styles.Af}
                                onClick={this.handleTClickA}//点击事件
                                onMouseEnter={this.handleenterAMouse}
                                onMouseLeave={this.handlemoveAMouse}
                            >
                                <div className={styles.menuImag} style={{ background: this.state.Abgcolor }}>
                                    <div className={styles.Image_Area} >
                                        <img src={require('../assets/u5.svg')} className={styles.ElecImage} alt='图片' />
                                    </div>
                                    <div className={styles.Image_Power} >
                                        <span className={styles.power} style={{ color: this.state.AfontColor }}>资料库</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Af}
                                onClick={this.handleTClickB}//点击事件
                                onMouseEnter={this.handleenterBMouse}
                                onMouseLeave={this.handlemoveBMouse}>
                                <div className={styles.menuImag} style={{ background: this.state.Bbgcolor }}>
                                    <div className={styles.Image_Area} >
                                        <img src={require('../assets/u6.svg')} className={styles.ElecImage} alt='图片' />
                                    </div>
                                    <div className={styles.Image_Power} >
                                        <span className={styles.power} style={{ color: this.state.BfontColor }}>典型故障库</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.FodderButton} style={{ marginLeft: "5px" }}>
                            <div className={styles.Af}
                                onClick={this.handleTClickC}//点击事件
                                onMouseEnter={this.handleenterCMouse}
                                onMouseLeave={this.handlemoveCMouse}>

                                <div className={styles.menuImag} style={{ background: this.state.Cbgcolor }}>
                                    <div className={styles.Image_Area} >
                                        <img src={require('../assets/u25.svg')} className={styles.ElecImage} alt='图片' />
                                    </div>
                                    <div className={styles.Image_Power} >
                                        <span className={styles.power} style={{ color: this.state.CfontColor }}>同步</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Af}
                                onClick={this.handleTClickD}//点击事件
                                onMouseEnter={this.handleenterDMouse}
                                onMouseLeave={this.handlemoveDMouse}>
                                <div className={styles.menuImag} style={{ background: this.state.Dbgcolor }}>
                                    <div className={styles.Image_Area} >
                                        <img src={require('../assets/u25.svg')} className={styles.ElecImage} alt='图片' />
                                    </div>
                                    <div className={styles.Image_Power} >
                                        <span className={styles.power} style={{ color: this.state.DfontColor }}>备份</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Af}
                                onClick={this.handleTClickE}//点击事件
                                onMouseEnter={this.handleenterEMouse}
                                onMouseLeave={this.handlemoveEMouse}>
                                <div className={styles.menuImag} style={{ background: this.state.Ebgcolor }} >
                                    <div className={styles.Image_Area} >
                                        <img src={require('../assets/u28.svg')} className={styles.ElecImage} alt='图片' />
                                    </div>
                                    <div className={styles.Image_Power} >
                                        <span className={styles.power} style={{ color: this.state.EfontColor }}>还原</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.FodderButton} style={{ marginLeft: "5px" }}>
                            <div className={styles.Af} onClick={this.handleTClickF}//点击事件
                                onMouseEnter={this.handleenterFMouse}
                                onMouseLeave={this.handlemoveFMouse}>
                                <div className={styles.menuImag} style={{ background: this.state.Fbgcolor }} >
                                    <div className={styles.Image_Area} >
                                        <img src={require('../assets/u14.png')} className={styles.ElecImage} alt='图片' />
                                    </div>
                                    <div className={styles.Image_Power} >
                                        <span className={styles.power} style={{ color: this.state.FfontColor }}>帮助</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Af} onClick={this.handleTClickG}//点击事件
                                onMouseEnter={this.handleenterGMouse}
                                onMouseLeave={this.handlemoveGMouse}>
                                <div className={styles.menuImag} style={{ background: this.state.Gbgcolor }}>
                                    <div className={styles.Image_Area} >
                                        <img src={require('../assets/u18.png')} className={styles.ElecImage} alt='图片' />
                                    </div>
                                    <div className={styles.Image_Power} >
                                        <span className={styles.power} style={{ color: this.state.GfontColor }}>关于</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Af} onClick={this.handleTClickH}//点击事件
                                onMouseEnter={this.handleenterHMouse}
                                onMouseLeave={this.handlemoveHMouse}>
                                <div className={styles.menuImag} style={{ background: this.state.Hbgcolor }} >
                                    <div className={styles.Image_Area} >
                                        <img src={require('../assets/u22.png')} className={styles.ElecImage} alt='图片' />
                                    </div>
                                    <div className={styles.Image_Power} >
                                        <span className={styles.power} style={{ color: this.state.HfontColor }}>退出</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ float: 'left', height: this.state.hiddenmenu ? '79px' : '30px' }} >
                    <div style={{ width: "134px", textAlign: "center", float: "left", marginLeft: '10px' }}>
                        <span className={styles.titleBattle}>维修指导</span>
                    </div>
                    <div style={{ width: "144px", textAlign: "center", float: "left" }}>
                        <span className={styles.titleBattle}>备份还原</span>
                    </div>
                    <div style={{ width: "144px", textAlign: "center", float: "left" }}>
                        <span className={styles.titleBattle}>系统</span>
                    </div>
                </div> */}


                <div className={styles.content}>
                    <AboutDialog helpHidden={this.state.helpHidden} closeWinodow={this.closeWinodow} index={0}
                        zIndex={this.state.zIndex[0]}
                        changeIndex={this.changeIndex} />
                    <ExitDialog exitHidden={this.state.exitHidden} closeWinodow={this.exitCloseWindow} index={0}
                        zIndex={this.state.zIndex[0]}
                        changeIndex={this.changeIndex} />
                    {/* <BodyCom /> */}
                    {this.state.BodyComHidden === false ? <BodyCom /> : null}
                    {this.state.TypicalHidden === false ? <TypicalFaultBase /> : null}
                    {(this.state.TypicalHidden === "" && this.state.BodyComHidden === "") ? <TypicalFaultBase /> : null}
                    <div className={styles.messageIcon}>
                        <div className={styles.tailTitle}>登录用户:</div>
                    </div>
                </div>
            </Fragment>

        )
    }

    //点击菜单区二级菜单隐藏只显示子域内容
    hiddenMenuButton = () => {
        this.setState({
            hiddenmenu: !this.state.hiddenmenu
        })
    }

    // 点击选中 导入
    ClickLeadIn = (e) => {
        this.setState({
            LeadIn_Sign: true,
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
            Download_Sign: true,
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
}