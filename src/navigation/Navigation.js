import React from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css"

function Navigation() {
  return (
    <nav className="Navi">
        <Link className="Navi" to="/">Home</Link>
        <Link className="Navi" to="/music">Music</Link>
    </nav>
  );
}

export default Navigation;