import { useState } from "react";
import "./menuItem.scss";

const Menuitem = (props) => {

    const { icon, name, subMenus, onClick } = props;
    const [ expand, setExpand ] = useState(false);

    return (
            <li onClick={onClick}>
                <a className="menuItem" onClick={() => setExpand(!expand)}>
                    <div className="menuItemIcon">
                    <i className={icon}></i>
                    </div>
                    <span>{name}</span>
                </a>
                {subMenus && subMenus.length > 0 ? (
                    <ul className={`subMenu ${expand ? "active" : ""}`}>
                        {subMenus.map((menu, index) => (
                            <li key={index}>
                                <a>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                ) : null}
                
            </li>
    )
}

export default Menuitem