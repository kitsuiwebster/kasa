import './index.scss';

function Photo({ imageSrc, title }) {
    return(
        <div className="photo">
            <img className="photo-file" src={imageSrc} alt={title}></img>
        </div>
    )
}

export default Photo