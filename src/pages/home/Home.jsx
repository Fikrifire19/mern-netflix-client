import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80" alt="profile picture" />
        </div>
    )
};

export default Home;
