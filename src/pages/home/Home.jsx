import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";

const Home = (props) => {
    return (
        <div className="home">
            <Navbar />
            <Featured type={props.type} />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
};

export default Home;
