import React, { useRef } from 'react';
import { Waterfall as WaterfallPlot } from '@antv/g2plot';
import WaterfallChart from '../../components/Charts';

const Waterfall = () => {
  const chartRef = useRef();
  return (
    <div>
      <WaterfallChart
        ref={chartRef}
        Plot={WaterfallPlot}
        data={[
          { type: '日用品', money: 120 },
          { type: '伙食费', money: 900 },
          { type: '交通费', money: 200 },
          { type: '水电费', money: 300 },
          { type: '房租', money: 1200 },
          { type: '商场消费', money: 1000 },
          { type: '应酬红包', money: -2000 },
        ]}
        configOptions={{
          title: {
            visible: true,
            text: '每月收支情况（瀑布图）',
          },
          forceFit: true,
          padding: 'auto',
          xField: 'type',
          yField: 'money',
          meta: {
            type: {
              alias: '类别',
            },
            money: {
              alias: '金额',
            },
          },
        }}
      />
    </div>
  );
};

export default Waterfall;
