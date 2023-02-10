import React from "react";
import "./MainContainer.css";
import Banner from "../assets/1.jpeg";
import CardMain from "./CardMain.js";
import MainRightTop from './MainRightTop'
import MainRightBottom from './MainRightBottom'

//cards
import Card1 from '../assets/card1.jpeg';
import Card2 from '../assets/card2.jpeg';
import Card3 from '../assets/card3.jpeg';
import Card4 from '../assets/card4.jpeg';
import Card5 from '../assets/card5.jpeg';
import Card6 from '../assets/card6.jpeg';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Alexander D'Great</p>
            <div className="bid">
                <a href="/" className="button1">
                    BID NOW
                </a>

                <p>Ending In <span>2d:15h:20m</span></p>
            </div>
          </div>
        </div>

        {/* After Banner */}
        <div className="cards">
            <div className="filters">
                <div className="popular">
                    <h2>Feed</h2>
                    <a href='/' className="button2">
                        Popular
                    </a>
                </div>
                <div className="filter_buttons">
                    <a href='/' className="button1">All</a>
                    <a href='/' className="button2">Illustrator</a>
                    <a href='/' className="button2">Art</a>
                    <a href='/' className="button2">Games</a>
                </div>
            </div>

            <main>
                <CardMain imgSrc={Card1} title={"Cubic Thunder"} hearts={"65"} />
                <CardMain imgSrc={Card2} title={"Pokenmon Ball"} hearts={"45"} />
                <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"25"} />
                <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"85"} />
                <CardMain imgSrc={Card5} title={"Star Crystal"} hearts={"75"} />
                <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"55"} />
            </main>
        </div>
      </div>

      <div className="right">
        <MainRightTop />
        <MainRightBottom />
      </div>
    </div>
  );
};

export default MainContainer;
