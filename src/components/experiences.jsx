import React from 'react'
import "../stylesheets/experiences.css";

export default function Accueil({/* react, html, css, js, docker */}) {
    return (
        <div class='articles_e'>
            <div class='stages'>
                <p class='p_e'>Stages (informatique)</p>
                <p class='p_e'>
                    <span class='beige'>De Juillet à Septembre 2023 </span><span class='blue'>Python Development</span><br/>
                    Développement d’un logiciel de récupération et traitement de données internes.
                </p>
            </div>

            <div class='hackathons'>
                <p class='p_e'>Hackathons (informatique)</p>
                <p class='p_e'>
                    <span class='beige'>Juin 2024 </span><span class='blue'>Video Games Development</span><br/>
                    Développement d’un jeu vidéo type puzzle polyomino en C#, avec l’éditeur de jeu vidéo Unity, en compétition au sein de l’école.<br/>
                    1e place - 250€ de cashprize.
                </p>
                <p class='p_e'>
                    <span class='beige'>Décembre 2023 </span><span class='blue'>Full-Stack Development</span><br/>
                    Développement d’un site internet et de sa version application pour l’app store ou le
                    google play store, avec Vue en Front-End et Python Flask comme Back-End.
                </p>
                <p class='p_e'>
                    <span class='beige'>Octobre 2023 </span><span class='blue'>Admin Server Linux</span><br/>
                    Développement et configuration d’un serveur NginX avec le terminal linux, et sécurisation avec des frameworks comme Fail2ban.
                </p>
                <p class='p_e'>
                    <span class='beige'>Mai 2023 </span><span class='blue'>Front-End Development</span><br/>
                    Développement d’un site internet sur un thème libre (Formule 1) avec HTML, CSS et SQL.
                </p>
                <p class='p_e'>
                    <span class='beige'>Février 2023 </span><span class='blue'>Video Games Development</span><br/>
                    Développement d’un jeu vidéo semblable aux jeux de la licence Trackmania, en C#, avec l’éditeur de jeu vidéo Unity.
                </p>
                <p class='p_e'>
                    <span class='beige'>Novembre 2022 </span><span class='blue'>Front-End Development</span><br/>
                    Développement d’un site internet pour le BDE de l’Estiam, avec HTML, CSS et JS.
                </p>
            </div>

            <div class='others'>
                <p class='p_e'>Autres expériences</p>
                <p class='p_e'>
                    <span class='beige'>Avril 2022 - 1 semaine </span><span class='blue'>Stage chez André Deliaud</span><br/>
                    Pose de menuiseries.
                </p>
                <p class='p_e'>
                    <span class='beige'>Avril 2021 - 1 semaine </span><span class='blue'>Stage avec un professeur d'EPS</span><br/>
                    Préparation et mise en place des cours, encadrement de l’AS.
                </p>
                <p class='p_e'>
                    <span class='beige'>Décembre 2018 - 1 semaine </span><span class='blue'>Stage chez Renault Trucks</span><br/>
                    Observation des métiers de commercial, ingénieur CAO, Designeur 3D, visite de l’usine moteur.
                </p>
            </div>

            <div class='jobs'>
                <p class='p_e'>Jobs étudiants</p>
                <p class='p_e'>
                    <span class='beige'>Depuis Janvier 2024 </span><span class='blue'>Auchan Retail</span><br/>
                    Préparation de commandes et livraisons aux clients (drive).
                </p>
                <p class='p_e'>
                    <span class='beige'>5 semaines entre septembre 2022 et février 2023 </span><span class='blue'>Univertex (prêt-à-porter)</span><br/>
                    Préparation de commandes pour les grandes distributions.
                </p>
                <p class='p_e'>
                    <span class='beige'>Septembre 2022 - 1 semaine </span><span class='blue'>Domaine Rémy Nodin</span><br/>
                    Vendanges et élagage des pieds de vigne.
                </p>
                <p class='p_e'>
                    <span class='beige'>Juillet 2021 - 1 semaine </span><span class='blue'>EARL Courtial</span><br/>
                    Ramassage, calibrage et tri de l’ail.
                </p>
            </div>
        </div>
    )
}
