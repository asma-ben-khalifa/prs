import react from "react";
import Image from "./Image";
import src from "./flaubert1.jpg";
import ProfileData from "./ProfileData";
import PropTypes from "prop-types";

const Profile = () => {
    const hundleName = e  => {
        e.preventDefault();
        alert("alert");
        
        
    } ;
   

    return(
        <div>
            <ProfileData  
                fullName = "Gustave" 
                profession="auteur"
                bio="Gustave Flaubert est né à Rouen le 12 décembre 1821, dans une famille de la petite bourgeoisie. 
                Son père est chirurgien-chef de l'Hôtel-Dieu de Rouen, tandis que sa mère est fille de médecin. Son enfance est un peu morne, 
                et il se réfugie rapidement dans la littérature. Après son baccalauréat, il décide d'entamer des études de droit, qu'il abandonne rapidement à cause d'une maladie nerveuse. 
                Flaubert s'installe à Croisset, où il cultive une liaison avec la poétesse Louise Collet. 
                Devenu rentier, il se lance dans l'écriture. 
                En 1857, avec Madame Bovary,
                il révolutionnera l'écriture romanesque par son style réaliste. En 1862,
                il rencontre également le succès, grâce à Salammbô, succès qui n'est en revanche pas
                au rendez-vous pour L'Education sentimentale, en 1869. Epuisé par sa maladie,4
                désargenté, l'écrivain meurt à Croisset d'une hémorragie cérébrale le 8 mai 1880,
                alors qu'il vient de mettre le point final à Bouvard et Pécuchet, grande œuvre
                satirique qu'il avait commencé à écrire en juin 1874." 
                />
            
           
            <Image src={src} />
    
        </div>
       
        
    )
   
}

export default Profile;