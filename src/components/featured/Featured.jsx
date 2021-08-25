import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Featured.scss";

const Featured = (props) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${props.type}`,
                {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGFhZWFlNzVkZjljMjlkODQ2MWMzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTgxNDc5MywiZXhwIjoxNjMwMjQ2NzkzfQ.axmFhUfvxcYcg_0Rf0bXp-pZ7Is4vzjxF730XDxEPp0"
                    }
                });
                setContent(res.data[0]);
            } catch(err) {
                console.log(err);
            }
        };
        getRandomContent();
    }, [props.type]);

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
            <img src={content.img} alt="image banner" />
            <div className="info">
                <img src={content.imgTitle} alt="movie image" />
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
