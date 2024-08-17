import React from 'react'
import "../stylesheets/accueil.css";

export default function Accueil({react, html, css, js}) {
    return (
        <div>
        <div class='accueil'>
            <div class='article'>
                <p class='p_a'>Aymeric Chassagne</p>
                <p class='p_a'>
                    Bienvenue sur le site internet personnel de <span class='blue'>Aymeric Chassagne</span>.<br/>

                    Ce site renferme quelques informations, projets, idées à propos de son auteur qui vous a laissé un
                    message afin que vous puissiez mieux vous y retrouver.<br/><br/>

                    Sur ce site vous retrouverez tout d'abord quelques-uns de mes projets personnels et scolaire ainsi que les projets <span class='blue'>Hackathons</span>
                    , des projets que j'ai commencé tout<br/><br/>
                    
                    Ce site a été développé <span class='blue'>100%</span> à la main en <span class='blue'>react</span>.<br/>
                </p>

                {/*<div class='dd_logo'>
                    <a href='' class='hover'>Les langages et logiciels que j'ai utilisés pour coder ce site :</a>
                    <div class='dd_images'>
                        <img src={js} class='js'/>
                        <img src={html} class='html'/>
                        <img src={css} class='css'/>
                        <img src={react} class='react'/>
                    </div>
                </div><br/><br/><br/><br/><br/><br/>*/}
                <p class='p_a'>Bon voyage . . .</p>

                
            </div>
            
        </div><div class='footer_a'>
                <p class='copyright_a'>© 2024. Aymeric Chassagne - Tous droits réservés.</p>
            </div>
        </div>
    )
}
