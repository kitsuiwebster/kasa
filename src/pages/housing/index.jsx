import Dropdown from "../../components/dropdown/index";
import Photo from "../../components/photo/index";
import Tag from "../../components/tag";
import './index.scss';
import { useParams } from "react-router-dom";
import logements from '../../logements.json'
import HostProfile from "../../components/host-profile/index";
import StarRating from "../../components/rating/index";

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
                imageSrcs={logement.pictures}/>
            </div>
            <div className="housing-infos">
                <div>
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
                </div>
                <div>
                        <HostProfile name={logement.host.name} picture={logement.host.picture} />
                        <StarRating rating={parseInt(logement.rating)} />
                </div>
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