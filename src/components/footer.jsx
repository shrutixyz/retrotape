import { useNavigate } from "react-router-dom";
import '../styles/footer.css'
import start from '../images/start.svg'

const Footer = () => {
    var current = new Date();
    const navigate = useNavigate();
    return (
      <>
      
        <div className="footer">
            <div className="startCont">
            <img src={start} alt="" height={40} />
<p className="start-text"><i>start</i></p>
            </div>
            <div className="time">
          
<p className="time-text">{current.getHours() + ":" + current.getMinutes()}</p>
            </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  