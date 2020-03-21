import BarChart from '../pages/BarCharts';
import PieChart from '../pages/PieCharts';
import PageNotFound from '../pages/PageNotFound';
import Waterfall from '../pages/BarCharts/Waterfall';
import DonutChart from '../pages/PieCharts/Donut';

import test from '../pages/test';

export const commonRoutes = [
  {
    path: '/404',
    component: PageNotFound,
  },
];

export const chartRoutes = [
  {
    path: '/chart',
    redirect: '/chart/bar/sample',
  },
  {
    path: '/chart/bar',
    hideInMenu: false,
    title: '柱状图',
    icon: 'BarChartOutlined',
    routes: [
      {
        path: '/sample',
        component: BarChart,
        hideInMenu: false,
        title: '基础柱状图',
      },
      {
        path: '/waterfall',
        component: Waterfall,
        hideInMenu: false,
        title: '瀑布图',
      },
    ],
  },
  {
    path: '/chart/pie',
    hideInMenu: false,
    title: '饼图',
    icon: 'PieChartOutlined',
    routes: [
      {
        path: '/sample',
        component: PieChart,
        hideInMenu: false,
        title: '基础饼图',
      },
      {
        path: '/donut',
        component: DonutChart,
        hideInMenu: false,
        title: '环图',
      },
    ],
  },
  {
    path: '/chart/test',
    hideInMenu: false,
    title: '扇形图',
    icon: 'PieChartOutlined',
    component: test,
  },
];
