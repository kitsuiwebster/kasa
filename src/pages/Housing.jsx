import Dropdown from "../components/dropdown/index";
import HousingPhoto from "../components/housing-photo/index";
import Tag from "../components/tag";

function Housing() {
    return(
        <div>
        <h1>Logements</h1>
        <HousingPhoto/>
        <Tag/>
        <Dropdown/>
    </div>
    )
}

export default Housing;