import react from "react";
import PropTypes from "prop-types";



const ProfileData = ({fullName = "hfhf", bio = "hdh" , profession ="hfg"}) => {
    const styleObject = { color :'black' , marginLeft: '300px' ,textAlign: 'justify', width: '600px'  }

    return(
        <div  style ={styleObject}>
           <div >
               <span>FullName: {fullName}</span>
           </div>
           <div>
               <span>Profession: {profession}</span>
           </div>
           <div>
               <span>Bio: {bio}</span>
           </div>
           
        </div>
    )
}
    ProfileData.PpropTypes = {
        stringProp: PropTypes.string,
        functionProp: PropTypes.func
    };


export default ProfileData;