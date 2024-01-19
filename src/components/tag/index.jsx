import './index.scss';

function Tag({ tagName }) {
    return(
        <div className="tag">
            <p className='tag-text'>{tagName}</p>
        </div>
    )
}

export default Tag