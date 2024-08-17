import "./App.css";
import logo from "./assets/logo.png";
import profil from "./assets/profil.png";
import burger from "./assets/burger.png";
import close from "./assets/cache.png";
import open from "./assets/burger.png";
import react from "./assets/react.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import docker from "./assets/docker.png";
import cv1 from "./assets/cv1.png";
import cv2 from "./assets/cv2.png";


import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./components/accueil";
import About from "./components/about";
import Experiences from "./components/experiences";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Contact from "./components/contact";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil} burger={burger} close={close} open={open}/>
                <Accueil react={react} html={html} css={css} js={js} docker={docker}/>
            </div>
    },
    {
        path: '/about',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <About/>
                <Footer/>
            </div>
    },
    {
        path: '/experiences',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <Experiences/>
                <Footer/>
            </div>
    },
    {
        path: '/portfolio',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <Portfolio/>
                <Footer/>
            </div>
    },
    {
        path: '/resume',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <Resume cv1={cv1} cv2={cv2}/>
                <Footer/>
            </div>
    },
    {
        path: '/contact',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <Contact/>
                <Footer/>
            </div>
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;