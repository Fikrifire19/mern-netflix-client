import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";

const Featured = (props) => {
    return (
        <div className="featured">
            { props.type && (
                <div className="category">
                    <span>{ props.type === "movies" ? "Movies" : "Series" }</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                    </select>
                </div>
            ) }
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80" alt="image banner" />
            <div className="info">
                <img src="https://www.kindpng.com/picc/m/149-1492314_fury-movie-logo-title-screen-fury-movie-logo.png" alt="movie image" />
                <span className="desc">Nulla amet duis et sit Lorem nulla incididunt esse eiusmod non laborum. Sit incididunt aliqua adipisicing mollit quis ullamco exercitation cupidatat irure nostrud anim occaecat laborum veniam. Cillum ipsum magna aute exercitation exercitation proident. Aliqua fugiat occaecat eu in consectetur adipisicing eu magna Lorem quis laborum qui commodo deserunt.</span> 
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Featured;
