import React from 'react';
import echarts from 'echarts';
import styles from './Chart.less';

export default class Chart extends React.PureComponent {
  componentDidMount() {
    const { chartData } = this.props;
    if (!chartData) return;
    const chart = echarts.init(this.container);
    const { xData, yData, max, maxIndex, min, minIndex, cIndex, cValue } = chartData;
    const markPoints = [];
    if (typeof max === 'number') {
      markPoints.push({ value: 'A', coord: [maxIndex, max], itemStyle: { color: '#2884D8' } });
    } 
    if (typeof min === 'number') {
      markPoints.push({ value: 'B', coord: [minIndex, min], itemStyle: { color: '#2884D8' } })
    }
    if (typeof cValue === 'number') {
      const point = { value: 'C', coord: [cIndex, cValue], itemStyle: { color: '#F5222D' } };
      if (cIndex === maxIndex) { // 倾斜使得
        point.symbolRotate = 45;
        point.label = { rotate: 45, offset: [ 0, 3 ] };
      }
      markPoints.push(point)
    }

    chart.setOption({
      grid: {
        left: 48,
        top: 45,
        right: 75,
        bottom: 31,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xData,
        name: '距离 (km)'
      },
      yAxis: { type: 'value', name: '高程 (m)' },
      series: [{
        type: 'line',
        name: 'height',
        data: yData,
        areaStyle: {
          color: 'rgb(250,140,22)',
          opacity: 0.1,
        },
        lineStyle: {
          color: '#FA8C16',
          width: 3,
        },
        markPoint: {
          symbolSize: [25, 30],
          data: markPoints,
        },
      }],
    });
  }

  render() {
    const { handleClose, chartData } = this.props;
    const { maxIndex, minIndex, cIndex, minCoords, maxCoords, cCoords, xData } = chartData;

    return(
      <div className={styles.wrapper}>
        <div className={styles.title}>
          地形分析
          <span onClick={handleClose} className={styles.close}>×</span>
        </div>
        <div className={styles.body}>
          <div ref={container => { this.container = container }} style={{ height: 290 }} />
          <div className={styles.text}>
            {
              typeof maxIndex === 'number' &&
              <div><span className={styles.blueCircle} /> 最高点A ({maxCoords[0].toFixed(2)}°,{maxCoords[1].toFixed(2)}°): {xData[maxIndex]} km</div>
            }
            {
              typeof minIndex === 'number' &&
              <div><span className={styles.blueCircle} /> 最低点B ({minCoords[0].toFixed(2)}°,{minCoords[1].toFixed(2)}°): {xData[minIndex]} km</div>
            }
            {
              typeof cIndex === 'number' &&
              <div className={styles.red}><span className={styles.redCircle} /> 两点之间不可通视，最近障碍点C({cCoords[0].toFixed(2)}°,{cCoords[1].toFixed(2)}°): {xData[cIndex]} km</div>
            }
          </div>
        </div>
      </div>
    )
  }
}