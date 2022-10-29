import { useState, useEffect } from "react";
import Modal from 'react-modal';

const Create = () => {

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
    const [songname, setName] = useState(null);
    const [songlink, setLink] = useState(null);

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
        setName(null)
        setLink(null)
        console.log(songs)
        this.forceUpdate();

    }
    return (
      <>
        <h1>Create Your RetroTape</h1>
        <input type="text" name="name" id="" placeholder="enter song name" onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" name="link" id="" placeholder="enter youtube link" onChange={(e)=>{setLink(e.target.value)}}/>
        <button onClick={()=>{setNewSong({"name": songname, "link": songlink})}}>Add</button>
        <br /><br />
        <div className="songsTile">
        {
       songs!=[]?  <div>

        {
            songs.map((item)=>{
                return <p>{item["name"]}</p>
            })
        }
       </div> :  <p>nothing here</p>
            }
        </div>

        <button onClick={openModal}>Save and Share</button>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Congrats, your retrotape is at </h2>
        <button onClick={closeModal}>Done</button>
        <p>https://ejkrtirfed/com</p>
        <button>share</button>
      </Modal>
      </>
    );
  };
  
  export default Create;
  