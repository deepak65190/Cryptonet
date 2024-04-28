import PropTypes from "prop-types";
import { MdOutlineLocalPhone } from "react-icons/md";
import './App.css';
import { BsGenderFemale } from "react-icons/bs";
import  ReactImageMagnify from "react-image-magnify";

const Card = ({ img, firstName, lastName, gender, phone }) => {

  return (
    <div className="card-container animate__animated animate__backInDown">
      <div className="image-container" >
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: img,
            width: 600, 
            height: 900, 
          },
          largeImage: {
            src: img,
            width: 1200, 
            height: 1800,
          }
        }} />
      </div>
      <div className="info-container">
        <h2 className="name">{firstName} {lastName}</h2>
        <div className="details">
          <p className="detail"><span className="label"><BsGenderFemale /> Gender:</span> {gender}</p>
          <p className="detail"><span className="label"><MdOutlineLocalPhone /> Phone:</span> {phone}</p>
        </div>
      </div>
    </div>
  );
}

// prop type checker point
Card.propTypes = {
  img: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Card;
