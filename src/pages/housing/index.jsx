import Dropdown from "../../components/dropdown/index";
import Photo from "../../components/photo/index";
import Tag from "../../components/tag";
import './index.scss';
import housingPhoto from '../../assets/images/housing-photo.png';

function Housing() {
    return(
        <div className="housing">
            <div className="housing-photo">
                <Photo
                title="Housing Photo Kasa"
                imageSrc={housingPhoto}/>
            </div>
            <div className="housing-tags">
                <Tag
                tagName="Cozy"/>
                <Tag
                tagName="Canal"/>
                <Tag
                tagName="Paris 10"/>
            </div>
            <div className="housing-dropdowns">
                <Dropdown
                title="Description">
                    <p>
                        Vous serez à 50m du canal Saint-Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs. Vous êtes à la station de la gare de l'est (7 minutes à pied). 
                    </p>    
                </Dropdown>
                <Dropdown
                title="Équipements">
                    <p>
                        Climatisation<br/>Wifi-Fi<br/>Cuisine<br/>Espace de travail<br/>fer à repasser<br/>Sèche-cheveux<br/>Cintres
                    </p>
                </Dropdown>
            </div>
    </div>
    )
}

export default Housing;