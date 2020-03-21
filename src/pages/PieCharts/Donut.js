import React, { useState, useRef } from 'react';
import { Card, Tooltip } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Pie } from '@antv/g2plot';

import CommonChart from '../../components/Charts';

import './style.css';

function DonutChart() {
  const chartRef = useRef();

  const [data, setData] = useState([
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ]);

  const showModal = () => {
    setData([
      {
        type: '其它',
        value: 5,
      },
    ]);
  };

  return (
    <Card
      title="环图"
      bordered={false}
      extra={
        <span className="extraIcon">
          <Tooltip placement="bottom" title="配置数据">
            <SettingOutlined onClick={showModal} />
          </Tooltip>
        </span>
      }
    >
      <CommonChart
        ref={chartRef}
        Plot={Pie}
        data={data}
        configOptions={{
          forceFit: true,
          title: {
            visible: true,
            text: '环图',
          },
          description: {
            visible: true,
            text: '环图的外半径决定环图的大小，而内半径决定环图的厚度。',
          },
          radius: 1,
          innerRadius: 0.6,
          padding: 'auto',
          angleField: 'value',
          colorField: 'type',
          statistic: {
            visible: true,
          },
          label: {
            visible: true,
            type: 'spider',
            // eslint-disable-next-line no-underscore-dangle
            formatter: (text, item) => `${item._origin.type}: ${item._origin.value}`,
          },
        }}
      />
    </Card>
  );
}

export default DonutChart;
