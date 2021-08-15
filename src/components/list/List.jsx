/* eslint-disable no-undef */
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./List.scss";

function List() {
    const [slideNumber, setSlideNumber] = useState();
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current?.getBoundingClientRect()?.x - 50;

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber +1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    };

    return (
        <div className="list" >
            <span className="listTitle">Continue  to Watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                    className="sliderArrow left" 
                    style={{display: !isMoved && "none"}} 
                    onClick={() => handleClick("left")} 
                />
                <div className="container" ref={listRef} >
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined 
                    className="sliderArrow right" 
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    )
};


export default List;
