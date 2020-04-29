import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Toolbar.module.css";
import WrappedNormalLoginForm from "../AddPrescription";

import { Layout, Menu, Icon, Button, Modal } from "antd";

const { Sider, Content } = Layout;

const Toolbar = (props) => {
  const [state, setState] = useState({
    collapsed: false,
  });

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
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
              <Icon
                className="trigger"
                type={state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={toggle}
                style={{ fontSize: "24px" }}
              />
            </div>

            <Menu
              className={state.collapsed ? styles.menuCollapsed : styles.menu}
              theme="light"
              mode="inline"
              defaultSelectedKeys="1"
            >
              <Menu.Item key="1" className={styles.menuItem}>
                <NavLink
                  to="/"
                  activeClassName={styles.navItemSeleted}
                  className={styles.navItem}
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

              <Menu.Item key="3" className={styles.menuItem}>
                <Icon type="plus" onClick={toggleModal} />
                <span>Prescriptions</span>
              </Menu.Item>
              <Modal
                title="Add a prescription"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                destroyOnClose={true}
                footer={null}
              >
                <WrappedNormalLoginForm toggleModal={toggleModal} />
              </Modal>
            </Menu>
            <footer
              className={styles.footer}
              style={state.collapsed ? { display: "none" } : null}
            >
              <Link to="/login">
                <Button
                  onClick={() => logout()}
                  type="primary"
                  className={styles.logoutButton}
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
