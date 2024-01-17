import Dropdown from "../../components/dropdown/index";
import Photo from "../../components/photo/index";
import Tag from "../../components/tag";
import './index.scss';
import { useParams } from "react-router-dom";
import logements from '../../logements.json'

function Housing() {
    const { id: idParams } = useParams();

    /**
     * @var {Logement} logement
     */

    const logement = logements.find((logement) => logement.id === idParams)

    return(
        <div className="housing">
            <div className="housing-photo">
                <Photo
                title="Housing Photo Kasa"
                imageSrc={logement.cover}/>
            </div>
            <h2 className="housing-title">
                {
                    logement.title
                }
            </h2>
            <p className="housing-location">
                {
                    logement.location
                }
            </p>
            <div className="housing-tags">
                {
                    logement.tags.map((tag) => (
                        <Tag
                            key={tag}
                            tagName={tag}/>
                    ))
                }
            </div>
            <div className="housing-dropdowns">
                <Dropdown
                title="Description">
                    <p>
                        {
                            logement.description
                        }
                    </p>    
                </Dropdown>
                <Dropdown
                title="Équipements">
                    <ul>
                        {
                            logement.equipments.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))
                        }
                    </ul>
                </Dropdown>
            </div>
    </div>
    )
}

export default Housing;