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
        <div className="thumb">
            <Link to ={`/housing/${logement.id}`}>
                <h2 className="thumb-title">{logement.title}</h2>
            </Link>
            
        </div>
    )
}

export default HousingThumb