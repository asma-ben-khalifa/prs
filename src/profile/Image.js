import react from "react";
//import src from "./flaubert1.jpg";
import PropTypes from "prop-types";

const Image = (props) => {
    return(
        <div>
            <img src={props.src} /> 
             {props.children}
        </div>

        )}

        Image.propTypes = {
            anyProp: PropTypes.any,
        }


export default Image;