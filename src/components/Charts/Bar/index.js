import React, { useEffect, useRef } from 'react';
import { Bar } from '@antv/g2plot';

function BarChart({ data, renderType = 'canvas', ...configOptions }) {
  const chartRef = useRef();
  useEffect(() => {
    if (!chartRef.current) {
      return;
    }
    const barPlot = new Bar(chartRef.current, {
      data,
      ...configOptions,
    });

    barPlot.render(renderType);
    return () => {
      barPlot.destory();
    };
  }, [data, configOptions, renderType]);

  return <div ref={chartRef} />;
}

export default BarChart;
