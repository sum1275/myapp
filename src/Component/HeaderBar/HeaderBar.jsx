import React from "react";
import './HeaderBar.css';
import Button from 'react-bootstrap/Button';

export default function HeaderBar() {
  return (
    <div className="header-bar">
<div className="logout-button">
<Button variant="danger" >Logout</Button>{' '} 
</div>
    </div>
  );
}
