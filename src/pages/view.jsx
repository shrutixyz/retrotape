
import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { db, initialise } from '../utils/utils'
import { doc, getDoc } from 'firebase/firestore'

const View =()=>{
    const navigate = useNavigate()
    const queryString = window.location.search.split('?')[1];
    console.log(queryString);
    const [feedPost, setFeedPost] = useState([]);

    const getPost = () => {
        initialise()
        const docRef = doc(db, "tapes", window.location.search.split('?')[1]);
        getDoc(docRef).then((value) => {
          if (value.exists()) {
            setFeedPost(value.data()["songs"])
            console.log(value.data()["songs"])
          }
          else {
            console.log("empty")
            alert("ran into some error")
          }
        });
    
      }

    useEffect(() => {
// uses
        getPost()
        
        
           }, [] );

  



return (
    <>
<center>
<div>

{feedPost.map((item)=>{
    return <p>{item["name"]}</p>
})}

<button onClick={()=>{navigate('/')}}>Navigate to Home</button>
</div>
</center>
    </>
)
}

export default View