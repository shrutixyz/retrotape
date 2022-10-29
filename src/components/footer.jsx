import { useNavigate } from "react-router-dom";
import '../styles/footer.css'
import start from '../images/start.svg'
import { useState } from "react";

const Footer = () => {
    var current = new Date();
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    return (
      <>
      
        <div className="footer">
            <div className="startCont" onClick={()=>{setShow(!show)}}>
            <img src={start} alt="" height={40} />
<p className="start-text"><i>start</i></p>
            </div>
            <div className="time">
          
<p className="time-text">{current.getHours() + ":" + current.getMinutes()}</p>
            </div>
        </div>

        {
          show?<div className="menu">
          <div className="start-menu" onClick={()=>{navigate('/')}}> 
          <p>Home</p>
          </div>
          <div className="start-menu" onClick={()=>{navigate('/create')}}> 
<p>Create Mixtape</p>

  </div>        </div>:<div></div>
        }
      </>
    );
  };
  
  export default Footer;
  