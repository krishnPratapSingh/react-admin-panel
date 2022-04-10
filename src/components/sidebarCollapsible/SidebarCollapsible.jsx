import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menuitem from "../menuItem/MenuItem";
import "./sidebarCollapsible.scss";

const menuItems = [
    {icon: "bi bi-speedometer2", name: "Dashboard", to: "/"},
    {icon: "bi bi-person", name: "Users", to: "/users"},
    {icon: "bi bi-calendar4-event", name: "Events", to: "/events"},
    {
        icon: "bi bi-clipboard",
        name: "Subscription", 
        to: "/subscription",
        subMenus: [{name: "Products", to: "/products"}, {name: "Active", to: "/active"}]
    }
]

const SideMenu = (props) => {

    let navigate = useNavigate();

    const [inActive, setInactive] = useState(false)

    useEffect(() => {
        if(inActive){
            document.querySelectorAll(".subMenu").forEach(el => {
                el.classList.remove("active")
            })
        }

        props.onCollapse(inActive)
    }, [inActive])

  return (
    <div className={`sideMenu ${inActive ? "inActive" : ""}`}>
        <div className="topSection">
            <div className="logo">
                <img src="https://flutin.com/images/Web.png" alt="" className="logoImg" />
            </div>
            <div className="toggleSidebar" onClick={() => setInactive(!inActive)}>
                {inActive ? (<i className="bi bi-arrow-right-square-fill"></i>) : (<i className="bi bi-arrow-left-square-fill"></i>) }
            </div>
        </div>
        <div className="search">
            <button className="searchButton">
                <i className="bi bi-search"></i>
            </button>
            <input type="text" className="searchField" placeholder="search" />
        </div>
        <div className="sidebarDivider"></div>

        <div className="mainMenu">
            <ul>
                {
                    menuItems.map((menuItem, index) => (
                        <Menuitem
                            key={index}
                            icon={menuItem.icon}
                            name={menuItem.name}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            onClick={() => {
                                console.log("click to =>", menuItem.to)
                                navigate(menuItem.to);
                                if(inActive){
                                    setInactive(false)
                                }
                            }}
                        />
                    ))
                }
                {/* <li>
                    <a className="menuItem">
                        <div className="menuItemIcon">
                            <i class="bi bi-speedometer2"></i>
                        </div>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a className="menuItem">
                        <div className="menuItemIcon">
                            <i class="bi bi-person"></i>
                        </div>
                        <span>Users</span>
                    </a>
                </li>
                <li>
                    <a className="menuItem">
                        <div className="menuItemIcon">
                            <i class="bi bi-calendar4-event"></i>
                        </div>
                        <span>Events</span>
                    </a>
                </li>
                <Menuitem 
                    name={"Subscription"}
                    subMenus={[{name: "Products"}, {name: "Active"}]}
                /> */}
            </ul>
        </div>

        <div className="sideMenufooter">
            <div className="avatar">
                <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="userImg" />
            </div>
            <div className="userInfo">
                <h5>Krishna Singh</h5>
                <p>krishna@flutin.com</p>
            </div>
        </div>
    </div>
  )
}

export default SideMenu