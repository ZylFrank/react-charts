import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import DonutChart from '../../components/Charts/Donut';

import './style.css';

function PipChart() {
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
      <DonutChart data={data} />
    </Card>
  );
}

export default PipChart;
