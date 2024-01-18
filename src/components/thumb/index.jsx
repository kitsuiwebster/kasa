import { Link } from 'react-router-dom';
import './index.scss';

/**
 * @typedef {{"id": string,
 *		"title": string,
 *		"cover": string,
 *		"pictures": string[],
 *		"description": string,
 *		"host": {
 *			"name": string,
 *			"picture": string
 *		},
 *		"rating": string,
 *		"location": string,
 *		"equipments": string[],
 *		"tags": string[]
 *}} Logement
 */

/**
 * 
 * @param {Logement} logement 
 * @return {JSX.Element}
 * @constructor 
 */


function HousingThumb({logement}) {
    return(
        <Link to ={`/housing/${logement.id}`} className="thumb">
            <div className="thumb-container" style={{ backgroundImage: `url(${logement.cover})` }}>
                <h2 className="thumb-container-title">{logement.title}</h2>
            </div>
        </Link>
    )
}


export default HousingThumb