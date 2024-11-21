import "./index.css";

const Testimonial = ({ image, name, feedback,desig }) => {
    return (
      <div className="testimonial">
        <h3 className="testimonial-feed">{feedback}</h3>
        <img src={image} alt="profi" className="testimonial-image" />
        <h5 className="name">{name}</h5>
        <p className="testimonial-desig">{desig}</p>
      </div>
    );
  };
  
  export default Testimonial;