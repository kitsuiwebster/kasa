import '../assets/scss/components/Dropdown.scss';
import {useState} from "react";

function Dropdown({children, title}) {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }

    return(
        <div className={`dropdown`} onClick={toggle}>
            <div className={'dropdown--title'}>
                {title}
            </div>
            <div className={`dropdown--content ${open ? "" : "dropdown--reduced"}`}>
                {children}
            </div>
        </div>
    )
}

export default Dropdown