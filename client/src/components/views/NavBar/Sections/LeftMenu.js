import React from "react";
import { Menu } from "antd";
function LeftMenu(props) {
  return (
    <Menu className="left" mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="pizza-menu">
        <a href="/menu">Menu</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
