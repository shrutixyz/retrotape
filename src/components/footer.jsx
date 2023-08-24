// import { useNavigate } from "react-router-dom";
import "../styles/footer.css";
import start from "../images/start.svg";
import { useEffect, useState } from "react";
import MenuItem from "./menuitem";

const Footer = () => {
  var exp = "Explore these amazing retrotapes <3";
  const [currentTime, setCurrentTime] = useState(new Date());
  const [show, setShow] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="footer">
        <div
          className="startCont"
          onClick={() => {
            setShow(!show);
          }}
        >
          <img src={start} alt="" height={40} />
          <p className="start-text">
            <i>start</i>
          </p>
        </div>
        <div className="time">
          <p className="time-text">
            {currentTime.toLocaleTimeString().toUpperCase()}
          </p>
        </div>
      </div>

      {show ? (
        <div className="menu">
          <div className="menu-left">
            <div
              className="menu-left-icons"
              id="github"
              onClick={() => {
                window.location.href = "https://github.com/shrutixyz/retrotape";
              }}
            ></div>
            <div
              className="menu-left-icons"
              id="aakash"
              onClick={() => {
                window.location.href = "https://github.com/shrutixyz/";
              }}
            ></div>
            <div
              className="menu-left-icons"
              id="shruti"
              onClick={() => {
                window.location.href = "https://github.com/aakzsh";
              }}
            ></div>
          </div>

          <div className="menu-right">
            <br></br>
            <p className="explore-text">{exp}</p>
            <MenuItem
              text="This is ZAYN"
              url="https://thisis-images.scdn.co/37i9dQZF1DZ06evO3x2k4o-default.jpg"
              nav="https://retrotape.web.app/view?zayn"
            />
            <MenuItem
              text="This is Olivia Rodrigo"
              url="https://i.scdn.co/image/ab67706f00000002327bfdda8d0d7d57367ff158"
              nav="https://retrotape.web.app/view?olivia"
            />
            <MenuItem
              text="Ecstatic"
              url="https://img.freepik.com/free-vector/gradient-grainy-gradient-background_23-2149904902.jpg"
              nav="https://retrotape.web.app/view?ecstacy"
            />
            <MenuItem
              text="Heartbreak Weather"
              url="https://i.scdn.co/image/ab67616d0000b2733d13e91ce05c4e9b3e7201b7"
              nav="https://retrotape.web.app/view?heartbreak"
            />
            <p className="explore-text">Our Recommendations</p>
            <MenuItem
              text="The beautiful concept of mixtapes"
              url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Funky_Stuff_mixtape.jpg/330px-Funky_Stuff_mixtape.jpg"
              nav="https://en.wikipedia.org/wiki/Mixtape"
            />
            <MenuItem
              text="Biggest Music Fest"
              url="https://cdn.media.amplience.net/i/naras/ra_ga_logo.webp?w=175"
              nav="https://www.grammy.com/"
            />
            {/* <MenuItem text="hehe" url="https://avatars.githubusercontent.com/u/69726390?v=4" nav="https://google.com"/>
                <MenuItem text="hehe" url="https://avatars.githubusercontent.com/u/69726390?v=4" nav="https://google.com"/>
                <MenuItem text="hehe" url="https://avatars.githubusercontent.com/u/69726390?v=4" nav="https://google.com"/> */}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Footer;
