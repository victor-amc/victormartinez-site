import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Helmet from 'react-helmet';
import {Global, css} from '@emotion/react';
 
const Layout = (props) => {


    return (
        <>
            <Global styles={css`
                @font-face {
                    font-family: 'Signux';
                    src: url("../fonts/signux/Signux.eot");
                    src: url("../fonts/signux/Signux.eot?#iefix") format("embedded-opentype"), 
                        url("../fonts/signux/Signux.woff2") format("woff2"), 
                        url("../fonts/signux/Signux.woff") format("woff"), 
                        url("../fonts/signux/Signux.svg#Signux") format("svg");
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }
                
                @font-face {
                    font-family: 'Bebas Kai';
                    src: url("../fonts/bebas-kai/BebasKai.eot");
                    src: url("../fonts/bebas-kai/BebasKai.eot?#iefix") format("embedded-opentype"), 
                        url("../fonts/bebas-kai/BebasKai.woff2") format("woff2"), 
                        url("../fonts/bebas-kai/BebasKai.woff") format("woff"), 
                        url("../fonts/bebas-kai/BebasKai.svg#BebasKai") format("svg");
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }

                :root {
                --primary-color: #f10e5e; 
                --secondary-color: ##0EF1A1;
                --tertiary-color: #b3ff24;
                --quaternary-color: #ffb324;

                --fore-primary-color: #303030;
                --back-primary-color: #ffffff;
                }

                html{
                    font-size: 62.5%;
                    box-sizing: border-box;
                    margin:0;
                    padding:0;
                }
                
                //width error
                *,
                *:before,
                *:after{
                    box-sizing: inherit;
                } 

                body{
                    font-size: 18px;
                    font-size: 1.8rem;
                    line-height: 1.5;
                    font-family: "Poppins", "Karla", sans-serif;
                }
                h1,
                h2,
                h3 {
                    margin: 0;
                    line-height: 1.5;
                }
                h1,
                h2 {
                    font-family: "Bebas Kai", sans-serif;
                }
                h3 {
                    font-family: "Poppins", "Karla", sans-serif;
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
            `}
            />

            <Helmet>
                <meta charset="utf-8" />
                <title>{props.title}</title> 
                <meta name="author" content="Victor Martinez" /> 
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="I am an architect by training that slowly transition to software development. This happens to be the space where I like to share more about work and myself."/>

                <meta http-equiv="refresh" content="7200"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;700&family=Nunito+Sans:wght@200;300;400;700&family=Poppins:wght@100;200;400;700&display=swap" rel="stylesheet"></link>
                <meta name="keywords" content="Victor, Martinez, Contreras, Alejandro, Victor Martinez, Victor Martinez Contreras, Victor Alejandro Martinez Contreras, Computational Design, Spatial Science, Computational Consultancy, AEC Software Development, Vuxal, Vuxal.io, architect"></meta>
                {/*
                
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/vuxal-logo-whitecolor-192.png" />
                <link rel="icon" href="%PUBLIC_URL%/vuxal-logo-icon-color-100.ico" />
                <link rel="shortcut icon" href="%PUBLIC_URL%/vuxal-logo-icon-color-100.ico">
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                
                */}
            </Helmet>

            <Header/>
            {props.children}

            <Footer title = {props.title}/>
        </>
    )
}

export default Layout;
