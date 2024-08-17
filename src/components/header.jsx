import React from 'react'
import "../stylesheets/header.css";
import "../scripts/header.js";

export default function Header({logo, profil, close, open}) {
    return (
        
        <div class='header'>
        <title>Faire un menu buger</title>
            <a href="/"><img src={logo} class='logo'/></a>
            <div class='pages'>
                <a href="about" class='h_'><span class='number'>1.</span><span class='invisible'>*</span>ABOUT</a>
                <a href="experiences" class='h_'><span class='number'>2.</span><span class='invisible'>*</span>EXPERIENCES</a>
                <a href="portfolio" class='h_'><span class='number'>3.</span><span class='invisible'>*</span>PORTFOLIO</a>
                <a href="resume" class='h_'><span class='number'>4.</span><span class='invisible'>*</span>RESUME</a>
                <a href="contact" class='h_'><span class='number'>5.</span><span class='invisible'>*</span>CONTACT</a>
            </div>
            <div class='dropdown'>
                <a href=""><img src={profil} class='profil'/></a>
                <div class='dropdown_content'>
                    <a href="#" class='h_'><span class='number'>6.</span><span class='invisible'>*</span>LOG IN</a>
                    <a href="#" class='h_'><span class='number'>7.</span><span class='invisible'>*</span>SIGN UP</a>
                </div>
            </div>

            <div id='mySidenav' class='sidenav'>
                <a id='closeBtn' href="#" class='close' ><img src={close} class='close_Btn'/></a>
                <div class='dropdown_content_3'>
                    <a href="about" class='h_'><span class='number'>1.</span><span class='invisible'>*</span>ABOUT</a>
                    <a href="experiences" class='h_'><span class='number'>2.</span><span class='invisible'>*</span>EXPERIENCES</a>
                    <a href="portfolio" class='h_'><span class='number'>3.</span><span class='invisible'>*</span>PORTFOLIO</a>
                    <a href="resume" class='h_'><span class='number'>4.</span><span class='invisible'>*</span>RESUME</a>
                    <a href="contact" class='h_'><span class='number'>5.</span><span class='invisible'>*</span>CONTACT</a>
                </div>
            </div>

            <a href="" id='openBtn'><img src={open} class='open_Btn'/></a>
        </div>
    )
}
