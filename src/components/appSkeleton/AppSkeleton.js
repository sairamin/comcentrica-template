import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

// Components
import SideBar from "../sideBar";

// Styles
import styles from "./appSkeleton.module.scss";

const { Header, Footer, Sider, Content } = Layout;

function AppSkeleton({ children }) {
  return (
    <Layout className={styles.container}>
      <Header></Header>
      <Layout>
        <Sider>
          <SideBar />
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

AppSkeleton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppSkeleton;
