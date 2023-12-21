import Dropdown from "../components/Dropdown";
import HousingPhoto from "../components/HousingPhoto";
import Tag from "../components/Tag";

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