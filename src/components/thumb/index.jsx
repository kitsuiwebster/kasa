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
        <div className="thumb" style={{ backgroundImage: `url(${logement.cover})` }}>
            <Link to ={`/housing/${logement.id}`} className="thumb-link">
                <h2 className="thumb-link-title">{logement.title}</h2>
            </Link>
        </div>
    )
}


export default HousingThumb