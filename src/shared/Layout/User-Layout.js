import React from "react";
import Header from "../Header1/Header";
import Education from "../../modules/UserPortal/Educations/Education";
import SideMenu from "../Sidebar1/SideMenu";
import {menuItems} from '../Sidebar1/menuItems';
import Routers from "../../routers/routers";
import { BrowserRouter as Router, Switch, withRouter } from "react-router-dom";
import { useState } from "react";

function User_Layout() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header />
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>

            <Switch>
              <Routers />
            </Switch>
          
        </div>
      </Router>
      </div>
  );
}

export default withRouter(User_Layout);

// import { useState } from "react";
// import React from "react";
// import { useLocation, Switch, withRouter } from "react-router-dom";

// import Header from "../Header1/Header";
// import SideMenu, {menuItems} from "../Sidebar1/SideMenu";
// import Routers from "../../routers/routers";
// import { Container } from "react-bootstrap";

// function User_Layout() {
//     const [inactive, setInactive] = useState(false);
//   const [color] = React.useState("black");

//   const location = useLocation();
//   const mainPanel = React.useRef(null);

//   React.useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     mainPanel.current.scrollTop = 0;
//     if (
//       window.innerWidth < 993 &&
//       document.documentElement.className.indexOf("nav-open") !== -1
//     ) {
//       document.documentElement.classList.toggle("nav-open");
//       var element = document.getElementById("bodyClick");
//       element.parentNode.removeChild(element);
//     }
//   }, [location]);
//   return (
//     <>
//       <div className="wrapper">
         
//         <SideMenu
//           onCollapse={(inactive) => {
//             console.log(inactive);
//             setInactive(inactive);
//           }}
//         />
//         <div className="main-panel" ref={mainPanel}>
// <Header />
//           <div className="content">
//             <Switch>
//               <Routers />
//             </Switch>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default withRouter(User_Layout);
