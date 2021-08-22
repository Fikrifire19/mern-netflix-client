import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video 
                className="video"
                autoPlay
                progress
                controls
                src="https://www.youtube.com/watch?v=QPistcpGB8o"
            />
        </div>
    );
};

export default Watch;
