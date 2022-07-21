import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";
import "./Sidebar.module.css"; 
import Avatar from 'react-avatar';


/*export const SideBar = () => */ export function SideBar() {
  return (
    <CDBSidebar className="side-bar-full">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        MisCallPay
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
        <CDBSidebarMenuItem>
        
        </CDBSidebarMenuItem>

          <CDBSidebarMenuItem
            icon="fas fa-tachometer-alt"
            className="sidebar-menu-item"
          >
            <Link to={"/"}>Client</Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fas fa-tachometer-alt">
            <Link to={"/users"}>users</Link>
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
}
//export default Sidebar;
