import React from 'react';
// import { useLocation} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

import { SidebarData } from '../Sidebar/SidebarData';

function Sidebar({ color, routes }) {
	// const location = useLocation();
	// const activeRoute = (routeName) => {
	//   return location.pathname.indexOf(routeName) > -1 ? "active" : "";
	// };
	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<div className="sidebar" data-color={color}>
				<div className="sidebar-wrapper">
					<Nav>
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />;
						})}

						{/* {routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : activeRoute(prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.path}
                      className="nav-link"
                      activeClassName="active"
                    ></NavLink>
                  </li>
                );
              return null;
            })} */}
					</Nav>
				</div>
			</div>
		</IconContext.Provider>
	);
}

export default Sidebar;
