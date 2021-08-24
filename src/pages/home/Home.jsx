import axios from "axios";
import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGFhZWFlNzVkZjljMjlkODQ2MWMzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTgxNDc5MywiZXhwIjoxNjMwMjQ2NzkzfQ.axmFhUfvxcYcg_0Rf0bXp-pZ7Is4vzjxF730XDxEPp0"
                        }
                    }
                );
                console.log(res);
                setLists(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list) => {
                <List list={list}/>
            })}
        </div>
    )
};

export default Home;
