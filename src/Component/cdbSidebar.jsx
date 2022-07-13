import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import "./CDBsidebar.css";

export const CDBsidebar = () => {
  return (
      <CDBSidebar className="side-bar-full">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>MissCallPay</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem>
                <div>
                <a href="#" className="brand-link">
                <img src="dist/img/Minkville_logo.png"  className="brand-image" 
                 />
                <span classname="brand-text " >Minkville</span>
                 </a>
                </div> 
                </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="fas fa-tachometer-alt">Clients</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="fas fa-tachometer-alt">Users</CDBSidebarMenuItem>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

       
      </CDBSidebar>
  );
};