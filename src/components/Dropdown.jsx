import '../assets/scss/components/Dropdown.scss';
import {useState} from "react";

function Dropdown({children, title}) {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }

    return(
        <div className={`dropdown ${open?"":"dropdown--reduced"}`} onClick={toggle}>
            <div className={'dropdown--title'}>
                {title}
            </div>
            <div className={'dropdown--content'}>
                {children}
            </div>
        </div>
    )
}

export default Dropdown