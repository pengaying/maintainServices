
import React, { Component, Fragment } from 'react';
import styles from "../index.less";
import defaultLight from '../../assets/grayLight.png'//灰灯
// import redLight from '../../assets/redLight.png'//红灯  
// import greenLight from '../../assets/greenLight.png'//绿灯 
import { Icon, Table } from 'antd';
import AirConditionState from './AirConditionState';

export default class StateLight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airCondition: false
        }
    }


    render() {
        const columns = [
            {
                title: '站名',
                dataIndex: 'key', key: 'key',
                width: '20%',
            },
            {
                title: '经度',
                dataIndex: 'lon', key: 'location',
                width: '20%',
            },
            {
                title: '纬度',
                width: '20%',
                dataIndex: 'lat', key: 'lat',
            }, {
                title: '工作状态',
                width: '20%',
                dataIndex: 'workState', key: 'workState',
            }, {
                title: '技术状态',
                width: '20%',
                dataIndex: 'tecState', key: 'tecState',
            }
        ];

        let Tabledata = [];
        for (let i = 0; i < 10; i++) {
            Tabledata.push({
                key: i,
                lon: '',
                lat: '',
                workState: '',
                tecState: '',
            });
        }
        return (
            <Fragment>
                <div className={styles.field}>
                    <div className={styles.fieldTitle}>
                        状态
                    </div>
                    <div className={styles.fieldContent}>
                        <div className={styles.Button_Control_Seventeen}>
                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} onClick={this.ShowAirCondition} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>空调</div>
                            </div>

                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>油机</div>
                            </div>

                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>调平</div>
                            </div>

                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>UPS</div>
                            </div>

                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>定位设备</div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={styles.bodyTable}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={Tabledata}
                        className={styles.mynoiseClass}
                        scroll={{ x: 500, y: 68 }}
                        pagination={false}
                        rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                    />
                </div>


                {
                    this.state.airCondition ?
                        <AirConditionState hiddenstate={!this.state.airCondition} closeWindow={this.HiddenAirCondition} />
                        : null
                }
            </Fragment>
        )
    }


    ShowAirCondition = () => {
        this.setState({
            airCondition: true
        })
    }
    HiddenAirCondition = () => {
        this.setState({
            airCondition: false
        })
    }
}
