import BarChart from '../pages/barCharts';
import PipChart from '../pages/pipCharts';
import PageNotFound from '../pages/PageNotFound';

export const commonRoutes = [
  {
    path: '/404',
    component: PageNotFound,
  },
];

export const chartRoutes = [
  {
    path: '/chart/bar',
    component: BarChart,
    hideInMenu: false,
    title: '柱状图',
    icon: 'BarChartOutlined',
  },
  {
    path: '/chart/pip',
    component: PipChart,
    hideInMenu: false,
    title: '扇形图',
    icon: 'PieChartOutlined',
  },
];
