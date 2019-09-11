
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button } from 'antd';
import styles from '../DataManagementDialog.less';
import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class Report extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    render() {

        let Tabledata = [];
        for (let i = 0; i < 10; i++) {
            Tabledata.push({
                key: i + 1,
                SpareName: '',
                sparePN: '',
                spareNum: '',
            });
        }

        let TestDataReportDataSource = this.props.dataManagement.TestDataReportDataSource;
        let testData = TestDataReportDataSource != null ? TestDataReportDataSource.testData : null;
        let tdLists = TestDataReportDataSource != null ? TestDataReportDataSource.tdLists != null && TestDataReportDataSource.tdLists.length !== 0 ? TestDataReportDataSource.tdLists[0] : null : null;

        let oddNum = testData != null ? testData.oddNum : null;
        let testPerson = testData != null ? testData.testPerson : null;
        let testTime = testData != null ? testData.testTime : null;
        let stationName = testData != null ? testData.stationName : null;
        let stationPn = testData != null ? testData.stationPn : null;
        let stationSn = testData != null ? testData.stationSn : null;
        let extensionName = testData != null ? testData.extensionName : null;
        let extensionPn = testData != null ? testData.extensionPn : null;
        let extensionSn = testData != null ? testData.extensionSn : null;
        let objectName = testData != null ? testData.objectName : null;
        let objectPn = testData != null ? testData.objectPn : null;
        let objectSn = testData != null ? testData.objectSn : null;
        let tiName = tdLists != null ? tdLists.tiName : null;
        let conclusion = tdLists != null ? tdLists.conclusion : null;
        let aya = tdLists != null ? tdLists.conclusion : null;

        let aba = TestDataReportDataSource != null ? '测频精度' : null;
        let auga = TestDataReportDataSource != null ? '不正常' : null;
        let aija = TestDataReportDataSource != null ? '【1】800.00 【2】900. 【3】1000.00 【4】1100.005' : null;
        let aai = TestDataReportDataSource != null ? '[8000,17000]' : null;
        let appia = TestDataReportDataSource != null ? '晶振Z1' : null;
        let appa = TestDataReportDataSource != null ? 'IG.BM.20190703' : null;
        let apa = TestDataReportDataSource != null ? 'Z1' : null;
        return (
            <Dialog
                visible={this.props.visible}
                title='备件申请表单'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '900px' }}>
                        <div className={styles.ReportTable}>
                            <table style={{ width: '100%' }} cellSpacing="0">
                                <tbody style={{ width: '100%' }}>
                                    <tr className={styles.trStyle} >
                                        <td className={styles.tdStyle} >维修任务单号:</td>
                                        <td className={styles.tdStyleContent}>
                                            {oddNum}
                                        </td>
                                        <td className={styles.tdStyle} >操作员:</td>
                                        <td className={styles.tdStyleContent}>
                                            {testPerson}
                                        </td>
                                        <td className={styles.tdStyle} >测试时间:</td>
                                        <td className={styles.tdStyleContent}>
                                            {testTime}
                                        </td>

                                    </tr>

                                    <tr className={styles.trStyle}>
                                        <td className={styles.tdStyle} >所属整机:</td>
                                        <td className={styles.tdStyleContent}>
                                            {stationName}
                                        </td>
                                        <td className={styles.tdStyle} >图号:</td>
                                        <td className={styles.tdStyleContent}>
                                            {stationPn}
                                        </td>
                                        <td className={styles.tdStyle} >整机序列号:</td>
                                        <td className={styles.tdStyleContent}>
                                            {stationSn}
                                        </td>
                                    </tr>

                                    <tr className={styles.trStyle}>
                                        <td className={styles.tdStyle} >所属分机:</td>
                                        <td className={styles.tdStyleContent}>
                                            {extensionName}
                                        </td>
                                        <td className={styles.tdStyle} >图号:</td>
                                        <td className={styles.tdStyleContent}>
                                            {extensionPn}
                                        </td>
                                        <td className={styles.tdStyle} >分机序列号:</td>
                                        <td className={styles.tdStyleContent}>
                                            {extensionSn}
                                        </td>
                                    </tr>

                                    <tr className={styles.trStyle}>
                                        <td className={styles.tdStyle} >被测对象:</td>
                                        <td className={styles.tdStyleContent}>
                                            {objectName}
                                        </td>
                                        <td className={styles.tdStyle} >图号:</td>
                                        <td className={styles.tdStyleContent}>
                                            {objectPn}
                                        </td>
                                        <td className={styles.tdStyle} >被测对象序列号:</td>
                                        <td className={styles.tdStyleContent}>
                                            {objectSn}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={styles.ReportTable}>
                            <table style={{ width: '100%' }} cellSpacing="0">
                                <tbody style={{ width: '100%' }}>
                                    <tr className={styles.trStyle}>
                                        <td className={styles.tdStyle} colSpan='2'>测试项目:</td>
                                        <td className={styles.tdStyleContent2}>
                                            {tiName}
                                        </td>
                                        <td className={styles.tdStyle} colSpan='2'>结论:</td>
                                        <td className={styles.tdStyleContent2}>
                                            {conclusion}
                                        </td>
                                    </tr>

                                    <tr className={styles.trStyle}>
                                        {/**  <td className={styles.tdStyle} >1</td>*/}
                                        <td className={styles.tdStyle} >通信功能:</td>
                                        <td className={styles.tdStyleContent2} colSpan='4'>
                                            {aya}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className={styles.ReportTable}>
                            <table style={{ width: '100%' }} cellSpacing="0">
                                <tbody style={{ width: '100%' }}>
                                    <tr className={styles.trStyle}>
                                        <td className={styles.tdStyle} colSpan='2'>测试项目:</td>
                                        <td className={styles.tdStyleContent2}>
                                            {aba}
                                        </td>
                                        <td className={styles.tdStyle}>结论:</td>
                                        <td className={styles.tdStyleContent2}>
                                            {auga}
                                        </td>
                                    </tr>
                                    <tr className={styles.trStyle} style={{ width: '16.6%' }}>
                                        <th className={styles.tdStyle_2} >1</th>
                                        <th className={styles.tdStyle_2} >频率:</th>
                                    </tr>
                                    <tr className={styles.trStyle} style={{ width: '50%' }}>
                                        <td className={styles.tdStyleCon_2}>测试值(MHZ)</td>
                                        <td className={styles.tdStyleContent_2}>
                                            {aija}
                                        </td>
                                    </tr>
                                    <tr className={styles.trStyle} style={{ width: '33.3%' }}>
                                        <td className={styles.tdStyleCon_2}>范围</td>
                                        <td className={styles.tdStyleContent_2} >
                                            {aai}
                                        </td>
                                    </tr>

                                    <tr className={styles.trStyle} style={{ width: '16.6%' }}>
                                        <th className={styles.tdStyle_2} >2</th>
                                        <th className={styles.tdStyle_2} >隔离单元:</th>
                                    </tr>
                                    <tr className={styles.trStyle} style={{ width: '25%' }}>
                                        <td className={styles.tdStyle_Content_2} style={{ width: '100%' }}>
                                            {appia}
                                        </td>
                                    </tr>
                                    <tr className={styles.trStyle} style={{ width: '25%' }}>
                                        <td className={styles.tdStyleCon_2}>型号</td>
                                        <td className={styles.tdStyleContent_2}>
                                            {appa}
                                        </td>
                                    </tr>
                                    <tr className={styles.trStyle} style={{ width: '33.3%' }}>
                                        <td className={styles.tdStyleCon_2}>位号</td>
                                        <td className={styles.tdStyleContent_2} >
                                            {apa}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className={styles.TextArea_note_Content}>
                            <Button type='primary'>打印</Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }
}


