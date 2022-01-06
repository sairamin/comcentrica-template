import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { FormOutlined, UserOutlined } from "@ant-design/icons";

function SideBar() {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["patients"]}>
      <Menu.Item key="patients" icon={<UserOutlined />}>
        <Link to="/patients">Patients</Link>
      </Menu.Item>
      <Menu.Item key="templates" icon={<FormOutlined />}>
        <Link to="/templates">Templates</Link>
      </Menu.Item>
      <Menu.Item key="documentTypes" icon={<FormOutlined />}>
        <Link to="/documentTypes">Document Types</Link>
      </Menu.Item>
    </Menu>
  );
}

export default SideBar;
