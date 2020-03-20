import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import CustomIcon from '../../components/CustomIcon';

import { chartRoutes } from '../../routes/config';
import './style.css';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const BasiceLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const showMenus = chartRoutes.filter((item) => !item.hideInMenu);
  const clickMenu = (e) => {
    props.history.push(e.key);
  };

  const formatRoutes = (parentPath,routes) => routes.map((route) => {
    if (route.hideInMenu || route.redirect) {
      return null;
    }
    if (route.routes && route.routes.length > 0) {
      return (
        <SubMenu
          key={`${parentPath}${route.path}`}
          title={
            <span>
              {route.icon && (<CustomIcon type={route.icon} />)}
              <span>{route.title}</span>
            </span>
          }
        >
          {
            formatRoutes(`${parentPath}${route.path}`, route.routes)
          }
        </SubMenu>
      );
    } 
      return (
        <Menu.Item key={`${parentPath}${route.path}`} onClick={(e) => clickMenu(e)}>
          {route.icon && (<CustomIcon type={route.icon} />)}
          <span>{route.title}</span>
        </Menu.Item>
      )
  });

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {collapsed ? (
            <h3 style={{ textAlign: 'center', color: 'white' }}>Charts</h3>
          ) : (
            <h2 style={{ textAlign: 'center', color: 'white' }}>
              <CustomIcon /> Charts
            </h2>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[showMenus[0].path || '']}
          selectedKeys={props.location.pathname || ''}
        >
          {
            formatRoutes('', chartRoutes)
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(BasiceLayout);
