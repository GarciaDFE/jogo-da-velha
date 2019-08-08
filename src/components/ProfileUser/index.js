import React from "react";
import "./styles.css"
import ImgProfile from "../../img/avatar-profile.jpg";
import IconGithub from "../../img/icon-github.svg"
import IconLinkedin from "../../img/icon-linkedin.svg"
import IconFacebook from "../../img/icon-facebook.svg"
import IconTwitter from "../../img/icon-twitter.svg"
import IconInstagram from "../../img/icon-instagram.svg"

import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";

const ProfileUser  = () => (
     <dl className="profile-user">
          <dd>
               <AvatarProfile src={ImgProfile} alt="Avatar do Marcial Garcia"/>
          </dd>
          <dt className="title">Marcial Garcia</dt>
          <dd className="description">Saindo de especialista em guias de ruas para um Dev Front End apaixonado por interfaces que as pessoas gostem de ver e usar.</dd>
          <dd className="socials">
               <IconSocial 
                    action="https://github.com/GarciaDFE" 
                    src={IconGithub} 
                    alt="Logo do GitHub"/>
               <IconSocial 
                    action="https://www.linkedin.com/in/marcial-garcia/" 
                    src={IconLinkedin} 
                    alt="Logo do LinkedIn"/>
               <IconSocial 
                    action="https://www.facebook.com/marcial.garcia.9277" 
                    src={IconFacebook} 
                    alt="Logo do Facebook"/>
               <IconSocial 
                    action="https://twitter.com" 
                    src={IconTwitter} 
                    alt="Logo do Twitter"/>
               <IconSocial 
                    action="https://www.instagram.com" 
                    src={IconInstagram} 
                    alt="Logo do Instagram"/>
          </dd>
     </dl>

);

export default ProfileUser;