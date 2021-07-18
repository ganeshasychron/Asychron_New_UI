
import React from "react";
import { useLocation, Switch, withRouter } from "react-router-dom";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Routers from "../../routers/routers";
// import { Container } from "react-bootstrap";


function User_Layout() {
  
  const [color] = React.useState("black");

  const location = useLocation();
  const mainPanel = React.useRef(null);
  

 
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} />
        <div className="main-panel" ref={mainPanel}>
          <Header />
          <div className="content">
            <Switch><Routers /></Switch>
          </div>
        </div>
      </div>
    </ >
  );
}

export default withRouter(User_Layout);
