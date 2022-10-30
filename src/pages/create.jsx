import { db } from "../utils/utils";
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import '../styles/create.css'
import add from '../images/add.svg'

import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Header from "../components/header";
import Footer from "../components/footer";
import cassette from '../images/cassette.png'
import { RWebShare } from "react-web-share";


const grabLink = require('youtube-thumbnail-grabber')


const Create = () => {

    const Push = async () => {

      if(songs.length>15){
        alert("The maximum song limit is 15")
      }
      else if(songs.length<2){
        alert("Please enter at least 2 songs")
      }
      else{
        var randomString = (Math.random() + 1).toString(36).substring(7);

        const docRef = doc(db, 'tapes', randomString);
        await setDoc(docRef, {songs: songs}).then((val)=>{
          console.log(val)
        })
        setRandomString(randomString)
        openModal()

      }
       
    
      }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const [songs, setSongs] = useState([]);
    const [randomString, setRandomString] = useState(null);
    const [songname, setName] = useState('');
    const [songlink, setLink] = useState('');

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
     
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const setNewSong = (newSong) => {
        var tempData = songs;
        newSong["key"] = songs.length
        songs.push(newSong);
        setSongs(tempData);
        setName('')
        setLink('')
        console.log(songs)
        this.forceUpdate();

    }

    return (
      <>
      <Header/>

      <div className="create-content">
        
   <div className="inputs">
   <input type="text" name="name" id="" placeholder="enter song name" value={songname} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" name="link" id="" placeholder="enter youtube link" value={songlink} onChange={(e)=>{setLink(e.target.value)}}/>
        <div ><img src={add} onClick={()=>{setNewSong({"name": songname, "link": songlink})}} className="addbtn" alt="" />
        </div>
   </div>
        <div className="songsTile">
        {
       songs!=[]?  <div className="cassette-parent">

        {
            songs.map((item)=>{
                return <div className="cassette">
                  <img className="cassette-bg" src={cassette} alt="" />
                  <div className="cassette-items">
                    <p>{item["name"]}</p>
                    <img className="cassette-thumb" src={grabLink(item["link"], 'mq')} alt="" height="50px" />
                  </div>
                  
                </div>
            })
        }
       </div> :  <p>nothing here</p>
            }
        </div>

        <button className="btn" onClick={()=>{
            Push()
        }}>Save and Share</button>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Congrats, your retrotape is at</h2>
        
        <p>https://checkapppp.web.app/view?{randomString}</p>
        <div style={{"display": "flex", "gap": "2rem"}}>

        <RWebShare
        data={{
          text: "Take a look at my retrotape, created just for you <3",
          url: "https://checkapppp.web.app/view?"+{randomString},
          title: "RetroTape MixTape",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="btn">share</button> 
      </RWebShare>

        <button className="btn" onClick={closeModal}>Done</button>
        </div>
      </Modal>
         </div>

         
        <Footer/>
        
      </>
    );

   
  };
  
  export default Create;
  