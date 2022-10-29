import { db } from "../utils/utils";
import Modal from 'react-modal';
import { useState, useEffect } from "react";

import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";


const grabLink = require('youtube-thumbnail-grabber')


const Create = () => {

    const Push = async () => {
       var randomString = (Math.random() + 1).toString(36).substring(7);

        const docRef = doc(db, 'tapes', randomString);
        await setDoc(docRef, {songs: songs}).then((val)=>{
          console.log(val)
        })
        setRandomString(randomString)
    
openModal()
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
        <h1>Create Your RetroTape</h1>
        <input type="text" name="name" id="" placeholder="enter song name" value={songname} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" name="link" id="" placeholder="enter youtube link" value={songlink} onChange={(e)=>{setLink(e.target.value)}}/>
        <button onClick={()=>{setNewSong({"name": songname, "link": songlink})}}>Add</button>
        <br /><br />
        <div className="songsTile">
        {
       songs!=[]?  <div>

        {
            songs.map((item)=>{
                return <div>
<img src={grabLink(item["link"], 'mq')} alt="" height="200px" />
<p>{item["name"]}</p>
                </div>
            })
        }
       </div> :  <p>nothing here</p>
            }
        </div>

        <button onClick={()=>{
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
        <button onClick={closeModal}>Done</button>
        <p>https://retrotape.web.app/view?{randomString}</p>
        <button>share</button>
      </Modal>
      </>
    );
  };
  
  export default Create;
  