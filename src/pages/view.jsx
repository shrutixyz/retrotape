import { useNavigate } from "react-router-dom";
import "../styles/view.css";
import { useEffect, useState } from "react";
import { db, initialise } from "../utils/utils";
import { doc, getDoc } from "firebase/firestore";
import player from "../images/player.svg";
import next from "../images/next.png";
import play from "../images/play.png";
import pause from "../images/pause.png";
import prev from "../images/prev.png";
import shuffle from "../images/shuffle.png";

import move from "../images/move.gif";
import home from "../images/home-new.png";
import ReactPlayer from "react-player";
const grabLink = require("youtube-thumbnail-grabber");

const View = () => {
  const navigate = useNavigate();
  const queryString = window.location.search.split("?")[1];
  console.log(queryString);
  const [feedPost, setFeedPost] = useState([
    { name: "", link: "https://www.youtube.com/watch?v=AjWfY7SnMBI" },
  ]);
  const [counter, setCounter] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [fetched, isFetched] = useState(false);

  const getPost = () => {
    initialise();
    const docRef = doc(db, "tapes", window.location.search.split("?")[1]);
    getDoc(docRef).then((value) => {
      if (value.exists()) {
        setFeedPost(value.data()["songs"]);
        console.log(value.data()["songs"]);
        isFetched(true);
      } else {
        console.log("empty");
        alert("ran into some error");
      }
    });

    // setFeedPost([{"name": "hehe", "link": "hehe"}])
  };

  useEffect(() => {
    if (!fetched) {
      getPost();
    }
  }, []);

  return (
    <>
      <div className="viewbody" id="viewbody">
        <div className="viewplayer">
          <div className="toggle">
            <img
              src={prev}
              alt=""
              className="arrow"
              onClick={() => {
                if (counter == 0) {
                  setCounter(feedPost.length - 1);
                } else {
                  setCounter(counter - 1);
                }
              }}
            />
          </div>
          <img src={player} alt="" className="player" />
          <div className="toggle">
            <img
              src={next}
              alt=""
              className="arrow"
              onClick={() => {
                if (counter == feedPost.length - 1) {
                  setCounter(0);
                } else {
                  setCounter(counter + 1);
                }
              }}
            />
          </div>
        </div>

        <img
          src={shuffle}
          className="shuffle"
          alt=""
          onClick={() => {
            let shuffled = feedPost
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value);
            setFeedPost(shuffled);
            setCounter(Math.floor(Math.random() * feedPost.length));
          }}
        />
        {/* {feedPost.map((item)=>{
    return <p>{item["name"]}</p>
})} */}

        <img
          src={home}
          onClick={() => {
            navigate("/");
          }}
          className="home"
          alt=""
        />

        <div className="songTile">
          <img
            src={grabLink(feedPost[counter]["link"], "mq")}
            alt=""
            className="songImage"
          />
          <p className="songTitle">{feedPost[counter]["name"]}</p>
          <img
            src={playing ? pause : play}
            alt=""
            onClick={() => {
              setPlaying(!playing);
            }}
            className="controller"
          />
        </div>
        {feedPost[counter] ? (
          <ReactPlayer url={feedPost[counter]["link"]} playing={playing} />
        ) : (
          <div></div>
        )}

        {playing ? <img src={move} alt="" className="move" /> : <div></div>}
      </div>
    </>
  );
};

export default View;
