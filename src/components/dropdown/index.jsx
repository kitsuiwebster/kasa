import './index.scss';
import { useState } from "react";

function Dropdown({ children, title }) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">
            <div className="dropdown--container" onClick={toggle}>
                <div className="dropdown--title">{title}</div>
                <div className={`dropdown--arrow ${open ? "dropdown--arrow-rotated" : ""}`}>

                </div>
            </div>
            <div className={`dropdown--content ${open ? "dropdown--open" : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default Dropdown;
