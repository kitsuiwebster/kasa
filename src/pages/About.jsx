import Dropdown from "../components/Dropdown";

function About() {
    return(
        <div>
        <h1>À propos</h1>
        <Dropdown title="Fiabilité">
            <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont réfulièrement vérifiées par nos équipes.
            </p>
        </Dropdown>
        <Dropdown title="Respect">
            <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
        </Dropdown>
        <Dropdown title="Service">
            <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
        </Dropdown>
        <Dropdown title="Sécurité">
            <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos service. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
        </Dropdown>
    </div>
    )
}

export default About;