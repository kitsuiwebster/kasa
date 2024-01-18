import HousingThumb from "../../components/thumb/index";
import './index.scss';
import logements from '../../logements.json'
import { useParams } from "react-router-dom";

function Home() {

    const { id: idParams } = useParams();

    /**
     * @var {Logement} logement
     */

    const logement = logements.find((logement) => logement.id === idParams)

    return (
        <div className="home">
            <div className="home-slogan">
                Chez vous, partout et ailleurs
            </div>
            <div className="home-thumbs">
                {
                    logements.map((logement) => {
                            return <HousingThumb key={logement.id} logement={logement}/>;

                    })
                }
            </div>
        </div>
    )
}

export default Home