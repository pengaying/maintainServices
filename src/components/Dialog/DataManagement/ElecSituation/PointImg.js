import React, { Component } from 'react'

// 引入 ECharts 主模块
import echarts from 'echarts';
import 'echarts/lib/chart/bar';//引入柱状图
import 'echarts/lib/chart/line';//引入折线图
import 'echarts/lib/component/legend';//引入工具图表
import 'echarts/lib/component/toolbox';//引入工具栏
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import { connect } from 'dva';
@connect(({ dataManagement }) => ({ dataManagement }))
export default class PointImg extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
  }
  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps')
    let data = props.data;
    console.log('componentWillReceiveProps====', data)
    // 基于准备好的dom，初始化echarts实例渲染频谱图
    var freq = echarts.init(this.ID);
    var freqoption = {
      title: {//标题组件，包含主标题和副标题
        x: 'center',                 // 水平安放位置，默认为左对齐，可选为：
        // 'center' ¦ 'left' ¦ 'right'
        // ¦ {number}（x坐标，单位px）
        y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
        // 'top' ¦ 'bottom' ¦ 'center'
        // ¦ {number}（y坐标，单位px）
        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        text: '电磁态势散点图',
        // top: '100px',
        // left: '93%',
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#666666'          // 主标题文字颜色
        }
      },
      // legend: {//图例组件。图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示
      //   data: ['bar'],
      //   align: 'right'
      // },
      toolbox: {//工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
        right: '90%',
        feature: {//各工具配置项。除了各个内置的工具按钮外，还可以自定义工具按钮。
          // magicType: {//动态类型切换
          //   type: ['tiled']//启用的动态类型，包括'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）。
          // },
          // dataView: {},//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
          // saveAsImage: {//保存为图片。
          //   pixelRatio: 2//保存图片的分辨率，值大于1则表示提高了保存图片的分辨率
          // }
        }
      },
      tooltip: {},
      xAxis: {},
      yAxis: {},
      series: [{
        symbolSize: 5,
        data: data
        // [
        //   [10.0, 8.04],
        //   // [8.0, 6.95],
        //   // [13.0, 7.58],
        //   // [9.0, 8.81],
        //   // [11.0, 8.33],
        //   // [14.0, 9.96],
        //   [6.0, 7.24],
        //   [4.0, 4.26],
        //   [12.0, 10.84],
        //   [7.0, 4.82],
        //   [5.0, 5.68]
        // ]
        ,
        type: 'scatter'
      }]
    };
    // 使用刚指定的配置项和数据显示图表
    freq.setOption(freqoption);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdatecomponentDidUpdatecomponentDidUpdate')
  //   let data = this.props.dataManagement.PointImgData;
  //   console.log('componentDidUpdate====',data)

  //   // 基于准备好的dom，初始化echarts实例渲染频谱图
  //   var freq = echarts.init(this.ID);
  //   var freqoption = {
  //     title: {//标题组件，包含主标题和副标题
  //       x: 'center',                 // 水平安放位置，默认为左对齐，可选为：
  //       // 'center' ¦ 'left' ¦ 'right'
  //       // ¦ {number}（x坐标，单位px）
  //       y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
  //       // 'top' ¦ 'bottom' ¦ 'center'
  //       // ¦ {number}（y坐标，单位px）
  //       //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
  //       text: '电磁态势散点图',
  //       // top: '100px',
  //       // left: '93%',
  //       textStyle: {
  //         fontSize: 18,
  //         fontWeight: 'bold',
  //         color: '#666666'          // 主标题文字颜色
  //       }
  //     },
  //     // legend: {//图例组件。图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示
  //     //   data: ['bar'],
  //     //   align: 'right'
  //     // },
  //     toolbox: {//工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
  //       right: '90%',
  //       feature: {//各工具配置项。除了各个内置的工具按钮外，还可以自定义工具按钮。
  //         // magicType: {//动态类型切换
  //         //   type: ['tiled']//启用的动态类型，包括'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）。
  //         // },
  //         // dataView: {},//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
  //         // saveAsImage: {//保存为图片。
  //         //   pixelRatio: 2//保存图片的分辨率，值大于1则表示提高了保存图片的分辨率
  //         // }
  //       }
  //     },
  //     tooltip: {},
  //     xAxis: {},
  //     yAxis: {},
  //     series: [{
  //       symbolSize: 5,
  //       data: data
  //       // [
  //       //   [10.0, 8.04],
  //       //   // [8.0, 6.95],
  //       //   // [13.0, 7.58],
  //       //   // [9.0, 8.81],
  //       //   // [11.0, 8.33],
  //       //   // [14.0, 9.96],
  //       //   [6.0, 7.24],
  //       //   [4.0, 4.26],
  //       //   [12.0, 10.84],
  //       //   [7.0, 4.82],
  //       //   [5.0, 5.68]
  //       // ]
  //       ,
  //       type: 'scatter'
  //     }]
  //   };
  //   // 使用刚指定的配置项和数据显示图表
  //   freq.setOption(freqoption);
  // }

  render() {
    return (
      <div ref={ID => this.ID = ID} id="freq" style={{ width: '350px', height: '226px', textAlign: 'center', padding: '5px 5px', float: 'left' }}></div>
    )
  }
}
