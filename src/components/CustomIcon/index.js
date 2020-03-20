import React from 'react';
import { BarChartOutlined, AreaChartOutlined, PieChartOutlined } from '@ant-design/icons';

const CustomIcon = ({ type }) => {
  switch (type) {
    case 'BarChartOutlined': {
      return <BarChartOutlined />;
    }
    case 'PieChartOutlined': {
      return <PieChartOutlined />;
    }
    default:
      return <AreaChartOutlined />;
  }
};

export default CustomIcon;
