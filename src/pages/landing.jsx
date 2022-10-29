import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import '../styles/landing.css'
import Header from "../components/header";
import cassette from '../images/cassette.png'


const Landing = () => {
    const navigate = useNavigate();
    return (
      <>
      <Header/>

      <div className="content">
<div className="subtitle">
<p>Create personalised mixtapes, dressed in retro</p>
</div>
      <button className="btn" onClick={()=>{navigate('/create')}}>create your own mixtape</button>
      <img src={cassette} alt="" className="cst" />
         </div>

         
        <Footer/>
        
      </>
    );
  };
  
  export default Landing;
  