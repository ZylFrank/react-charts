import React, { memo, useEffect, useRef } from 'react';
import { Pie } from '@antv/g2plot';

const DonutChart = memo(({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!chartRef.current) {
      return;
    }
    const piePlot = new Pie(chartRef.current, {
      forceFit: true,
      radius: 0.8,
      data,
      angleField: 'value',
      colorField: 'type',
      label: {
        visible: true,
        type: 'spider',
      },
      legend: {
        visible: true,
        position: 'bottom-center',
      },
    });
    piePlot.render();
    return () => {
      piePlot.destroy();
    };
  }, [data]);

  return <div ref={chartRef} />;
});

export default DonutChart;
