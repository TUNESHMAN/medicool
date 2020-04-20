import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Toolbar.module.css";
// import Newlogo from "../../images/Newlogo.png";
// // import decode from "jwt-decode";

import Prescription from "../Prescription";

import { Layout, Menu, Icon, Button, Modal } from "antd";
import { AddPrescription } from "../AddPrescription";

const { Sider, Content } = Layout;

const Toolbar = (props) => {
  const [state, setState] = useState({
    collapsed: false,
  });

  const token = localStorage.getItem("token");

//   //   if (token !== null) {
//   //     const decoded = decode(token);
//   //     var userName = decoded.name;
//   //   }

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  function logout() {
    localStorage.clear();
  }

  return (
    <div>
      <Layout className={styles.dashboard}>
        <div
          className={
            state.collapsed
              ? styles.dashboardLeftCollapsed
              : styles.dashboardLeft
          }
        >
          <Sider
            className={state.collapsed ? styles.siderCollapsed : styles.sider}
            trigger={null}
            collapsible
            collapsed={state.collapsed}
          >
            <div
              className={
                state.collapsed
                  ? styles.logoAndCollapseCollapsed
                  : styles.logoAndCollapse
              }
            >
              <Link to="/">
                {/* <img
                  src={Newlogo}
                  alt="logo"
                  className={
                    state.collapsed ? styles.logoCollapsed : styles.logo
                  }
                  data-testid="logo"
                /> */}
              </Link>
              <Icon
                className="trigger"
                type={state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={toggle}
                style={{ fontSize: "24px" }}
                data-testid="toggle-icon"
              />
            </div>
            <h3
              className={styles.greeting}
              style={state.collapsed ? { display: "none" } : null}
              data-testid="greeting"
            >
              {/* Welcome, {userName}! */}
            </h3>

            <Menu
              className={state.collapsed ? styles.menuCollapsed : styles.menu}
              theme="light"
              mode="inline"
              // defaultSelectedKeys="1"
              data-testid="menu"
            >
              <Menu.Item key="1" className={styles.menuItem}>
                <NavLink
                  to="/"
                  activeClassName={styles.navItemSeleted}
                  className={styles.navItem}
                  exact
                >
                <Icon type="home" />
                 <span>Home</span>
              </NavLink>
             </Menu.Item>
             <Menu.Item key="2" className={styles.menuItem}>
                <NavLink
                  to="/prescription"
                  activeClassName={styles.navItemSeleted}
                  className={styles.navItem}
                >
                  <Icon type="eye" />
                  <span>Prescriptions</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key></Menu.Item>
              {/* <Menu.Item key="3" className={styles.menuItem}>
                <Button onClick={props.toggleModal}>Add Prescription</Button>
              </Menu.Item> */}

              {/* <Menu.Item key="3" className={styles.menuItem}>
                <NavLink
                  to="/addprescription"
                  activeClassName={styles.navItemSeleted}
                  className={styles.navItem}
                >
                  <Icon type="plus" />
                </NavLink>
              </Menu.Item> */}
            </Menu>
            <footer
              className={styles.footer}
              style={state.collapsed ? { display: "none" } : null}
              data-testid="footer"
            >
              <Link to="/login">
                <Button
                  onClick={() => logout()}
                  type="primary"
                  className={styles.logoutButton}
                  data-testid="logout-button"
                >
                  Logout
                </Button>
              </Link>
              <p>
                <Icon type="setting" /> Profile Settings
              </p>
            </footer>
          </Sider>
        </div>
        <Layout>
          <Content
            className={
              state.collapsed ? styles.contentCollapsed : styles.content
            }
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Toolbar;

