import "./ListItem.scss";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ListItem({item,index}) {
    const [ isHovered, setIsHovered ] = useState(false);
    const [ movie, setMovie ] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/fiind/" + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGFhZWFlNzVkZjljMjlkODQ2MWMzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTgxNDc5MywiZXhwIjoxNjMwMjQ2NzkzfQ.axmFhUfvxcYcg_0Rf0bXp-pZ7Is4vzjxF730XDxEPp0"
                    },
                });
                setMovie(res.data);
            } catch(err) {
                console.log(err);
            }
        };

        getMovie();
    }, [item]);

    return (
        <div 
            className="listItem"
            style={{left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={movie.img}
                alt="thumbmail"
            />
            { isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ListItem;
