import React, { memo, useEffect, forwardRef } from 'react';
import isEqual from 'lodash/isEqual';

const CommonChart = memo(
  forwardRef(({ data, Plot, renderType = 'canvas', configOptions }, ref) => {
    useEffect(() => {
      if (!ref.current) {
        return;
      }
      const g2Plot = new Plot(ref.current, {
        data,
        ...configOptions,
      });

      g2Plot.render(renderType);
      return () => {
        g2Plot.destroy();
      };
    }, [data, configOptions, renderType, Plot, ref]);

    return <div ref={ref} />;
  }),
  (perv, next) => isEqual(perv, next),
);

export default CommonChart;
