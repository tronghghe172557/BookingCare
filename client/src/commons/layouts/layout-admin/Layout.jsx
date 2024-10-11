import React, { useState } from "react";
import { Layout, Button, Menu, theme } from "antd";
import "./LayoutDefault.css";

import {
  SearchOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

function LayoutAdmin() {
  const [collapsed, setCollapsed] = useState(true);
  const [login, setLogin] = useState(true);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout className="layout-default">
        <header className="header">
          <div
            className={
              "header__logo " + (collapsed && "header__logo--collapsed")
            }
          >
            <img src="/assets/img/vite.svg" alt="logo" />
          </div>

          <div className="header__nav">
            <div className="header__nav-left">
              <div
                className="header__collapse"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>

              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>

            <div className="header__nav-right">
              {login ? (
                <>
                  <Link to={`/admin/profile`}>
                    <Button
                      type="primary"
                      icon={<UserOutlined />}
                    >
                      Gia Trong
                    </Button>
                  </Link>
                  {/* LOGOUT */}
                  <Link to="/admin/logout">
                    <Button
                      type="primary"
                      icon={<LogoutOutlined />}
                    >
                      Logout
                    </Button>
                  </Link>
                </>
              ) : (
                <Link to="/admin/login">
                  <Button
                    type="primary"
                    icon={<LoginOutlined />}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* Layout */}
        <Layout>
          {/* login == true => mới có sider */}
          {login ? (
            <Sider
              style={{
                background: colorBgContainer,
              }}
              width={200}
              collapsed={collapsed}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                items={items2}
              />
            </Sider>
          ) : (
            <></>
          )}
          <Content className="content">
            <div className="content_header">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>

      {/* FOOTER */}
      <Footer>footer</Footer>
    </>
  );
}

export default LayoutAdmin;
