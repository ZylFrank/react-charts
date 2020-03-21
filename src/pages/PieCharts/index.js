import React, { useState, useRef } from 'react';
import { Card, Tooltip } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Pie } from '@antv/g2plot';

import CommonChart from '../../components/Charts';

import './style.css';

function PieChart() {
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
            text: '多色饼图',
          },
          description: {
            visible: true,
            text:
              '指定颜色映射字段(colorField)，饼图切片将根据该字段数据显示为不同的颜色。指定颜色需要将color配置为一个数组。\n当把饼图label的类型设置为inner时，标签会显示在切片内部。设置offset控制标签的偏移值。',
          },
          radius: 0.8,
          angleField: 'value',
          colorField: 'type',
          label: {
            visible: true,
            type: 'outer-center',
            // eslint-disable-next-line no-underscore-dangle
            formatter: (text, item) => `${item._origin.type}: ${item._origin.value}`,
          },
        }}
      />
    </Card>
  );
}

export default PieChart;
