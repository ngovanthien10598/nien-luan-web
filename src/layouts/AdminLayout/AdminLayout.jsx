import React from 'react';
import { Layout, Menu } from 'antd';
import { HashRouter, Switch, Route, useRouteMatch, useLocation, Link, Redirect } from 'react-router-dom';
import AdminHomePage from 'pages/admin';
import AdminRealestatePage from 'pages/admin/real-estate';
import AdminNewsPage from 'pages/admin/news';
import AdminProjectsPage from 'pages/admin/projects';
import AdminUserPage from 'pages/admin/user';
import withAdminRote from 'HOCs/withAdminRoute';

import './AdminLayout.scss';

const { Header, Sider, Content } = Layout;

const AdminLayout = props => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const adminRoutes = [
    { path: `${path}/`, name: 'Tổng quan' },
    { path: `${path}/real-estate`, name: 'Quản lý bất động sản' },
    { path: `${path}/project`, name: 'Quản lý dự án' },
    { path: `${path}/news`, name: 'Quản lý tin tức' },
    { path: `${path}/user`, name: 'Quản lý người dùng' },
  ]
  return (
    <HashRouter>
      <Layout className="admin-layout">
        <Header className="admin-layout_header">
          <Link to="/" className="admin-layout_brand">
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Homedey" width={32} />
          </Link>
        </Header>
        <Layout>
          <Sider width={200} className="admin-layout_sider">
            <Menu theme="dark" mode="vertical" selectedKeys={[pathname]}>
              {
                adminRoutes.map(route => (
                  <Menu.Item key={route.path}>
                    <Link to={`${route.path}`}>
                      {route.name}
                    </Link>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Route path={`${path}/`} exact component={AdminHomePage} />
              <Route path={`${path}/real-estate`} component={AdminRealestatePage} />
              <Route path={`${path}/news`} component={AdminNewsPage} />
              <Route path={`${path}/project`} component={AdminProjectsPage} />
              <Route path={`${path}/user`} component={AdminUserPage} />
              <Route path={`${path}/*`} component={() => <Redirect to={`${path}/`} />} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </HashRouter>
  )
}

export default withAdminRote(AdminLayout);