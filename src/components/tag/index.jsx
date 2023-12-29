import './index.scss';

function Tag({ tagName }) {
    return(
        <div className="tag">
            <a className='tag-text' href="/">{tagName}</a>
        </div>
    )
}

export default Tag