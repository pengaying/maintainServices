
import React, { Component, Fragment } from 'react';
import styles from "../index.less";
import defaultLight from '../../assets/grayLight.png'//灰灯
// import redLight from '../../assets/redLight.png'//红灯  
// import greenLight from '../../assets/greenLight.png'//绿灯 
import { Icon, Table } from 'antd';


export default class AirConditionState extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // console.log("3333333=====",this.props.closeWindow())
  closeWindow = () => {
    this.props.closeWindow()
  }

  render() {
    return (
      <div style={{ float: 'left' }} hidden={this.props.hiddenstate}>
        <div className={styles.LayoutSide_title}>
          空调自检详细状态
          <div style={{ float: 'right', padding: '2px 10px 0 0' }}>
            <span style={{ cursor: 'pointer' }}><Icon type="close" style={{ fontSize: '18px' }} onClick={this.closeWindow} /></span>
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.fieldTitle}>
            报警
          </div>
          <div className={styles.fieldContent}>
            <div className={styles.Button_Control_Seventeen}>
              <div className={styles.SystemState_Button_div}>
                <div className={styles.ButtonImages_div}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>RT1室内温度传感器断开</span>
                </div>
                <div className={styles.ButtonImages_div}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>线控板和主控板通信失败</span>
                </div>
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>过热保护</span>
                </div>
                <br />
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>超温保护</span>
                </div>
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>压力保护</span>
                </div>
                <br />
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>冻结保护</span>
                </div>
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>电源故障</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.fieldTitle}>
            状态回报
                  </div>
          <div className={styles.fieldContent}>
            <div className={styles.Button_Control_Seventeen}>
              <div className={styles.SystemState_Button_div}>
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>设定模式:</span>
                </div>
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>运行模式:</span>
                </div>
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>设定风速:</span>
                </div>
                <br />
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>运行风速:</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.fieldTitle}>
            温度回报
                  </div>
          <div className={styles.fieldContent}>
            <div className={styles.Button_Control_Seventeen}>
              <div className={styles.SystemState_Button_div}>
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>环境温度:</span>
                </div>
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>排气温度:</span>
                </div>
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>盘管温度:</span>
                </div>
                <br />
                <div className={styles.ButtonImages5}>
                  <img src={defaultLight} className={styles.Image} alt='图片' />
                  <span className={styles.span_section}>设定温度:</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
} 