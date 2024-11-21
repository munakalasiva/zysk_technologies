import "./index.css";
import Logos from '../../assets/Logos.png';
const SocialSection=()=>{
    return(
        <div className="section-cont">
             <p>Join 4,000+ companies already growing</p> 
             <img src={Logos} alt="logos"/>
        </div>
    )
}
export default SocialSection;