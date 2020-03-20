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
    hideInMenu: false,
    title: '柱状图',
    icon: 'BarChartOutlined',
    routes: [{
      path: '/',
      redirect: '/sample',
    }, {
      path: '/sample',
      component: BarChart,
      hideInMenu: false,
      title: '基础柱状图',
    }],
  },
  {
    path: '/chart/pip',
    hideInMenu: false,
    title: '扇形图',
    icon: 'PieChartOutlined',
    routes: [{
      path: '/',
      redirect: '/sample',
    }, {
      path: '/sample',
      component: PipChart,
      hideInMenu: false,
      title: '基础饼图',
    }, {
      path: '/dount',
      component: PipChart,
      hideInMenu: false,
      title: '环图',
    }],
  },
];
