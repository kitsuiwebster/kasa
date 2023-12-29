import Thumb from "../../components/thumb/index";
import './index.scss';

function Home() {
    return (
        <div className="home">
            <div className="home-slogan">
                Chez vous, partout et ailleurs
            </div>
            <div className="home-thumbs">
                <Thumb/>
                <Thumb/>
                <Thumb/>
                <Thumb/>
                <Thumb/>
                <Thumb/>
            </div>
        </div>
    )
}

export default Home