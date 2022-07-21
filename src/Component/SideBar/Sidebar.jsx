import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import Avatar from "react-avatar";

/*export const SideBar = () => */ export function SideBar() {
  let activeClassName = "sidebar-menu-item active-link";
  return (
    <CDBSidebar className="side-bar-full">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        MisCallPay
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem className="sidebar-menu-item sidebar-menu-avatar">
            <div className="avatar-container">
              <img
                className="avatar"
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQFpLbQY11Mo8Q/company-logo_200_200/0/1607360741423?e=2147483647&v=beta&t=H_0h1U3BYNH-VqIZPTfoojM0QVdtDCzpdUaWp1HwSj8"
              />
              <Link to={"/avatar"}>Avatar name</Link>
            </div>
          </CDBSidebarMenuItem>
          <hr />
          <CDBSidebarMenuItem
            icon="fas fa-tachometer-alt"
            className={({ isActive }) =>
              isActive ? activeClassName : "sidebar-menu-item"
            }
          >
            <Link to={"/"}>Client</Link>
          </CDBSidebarMenuItem>
          <NavLink to={"/users"}>
          <CDBSidebarMenuItem
            icon="fas fa-tachometer-alt"
            className="sidebar-menu-item"
            style={({ isActive }) =>
              isActive ? {"backgroundColor":"#fff"} : {}
            }
          >
            <span >users</span>
          </CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
}
//export default Sidebar;
