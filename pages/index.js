import Head from 'next/head'
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'

import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsReddit } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';
import { CgFileDocument } from  'react-icons/cg';
import { CgArrowsExchangeAltV } from  'react-icons/cg';
import { AiOutlineBarChart } from  'react-icons/ai';
import { BsCurrencyExchange } from  'react-icons/bs';
import { AiFillLock } from  'react-icons/ai';
/* 
import { FaPoo } from 'react-icons/fa';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { AiOutlineCopy } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import Countdown from 'react-countdown';
*/
import { Canvas, useFrame } from '@react-three/fiber'


export default function Home() {
  const [effect, setEffect] = useState(false);
  
  /*
  let url = "http://worldtimeapi.org/api/timezone/Europe/Skopje";
  const targetTime = new Date(Date.UTC(2021, 12, 22, 18, 0, 0)).getTime();

  function getTime(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = () =>
            req.status === 200
                ? resolve(req.response)
                : reject(Error(req.statusText));
        req.onerror = (e) => reject(Error(`Network Error: ${e}`));
        req.send();
    });
  }


  const [currentTime, setCurrentTime] = useState(Date.UTC());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  */
  /* 
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  */
 
 const handleCopy = () => {
   let address = document.getElementById("copy-address-value");
   let btn = document.getElementById("copy-button-a");
   address.select();
   address.setSelectionRange(0, 99999); 

   navigator.clipboard.writeText(address.value);
   setEffect(true);
   address.blur();
   
   btn.style.textDecoration = "line-through";
   setTimeout( function() {
    
    
   }, 1000);
   
 };
  // This will work in Safari

  return (
    <div className="">
      <Head>
        <title>MetaPets - a new world a new pet</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          rel="preload"
          href="/fonts/Shapiro/Revamped.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Shapiro/RocketRinder.ttf"
          as="font"
          crossOrigin=""
        />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body style={{background: "#0E0D17"}} className="bg-black ld" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
      
      
      <div id="section-body" style={{position:"relative", overflow: "hidden"}} className=" flex flex-row bg-gray-100">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
        <div style={{backgroundColor: '#1A1A22', borderBottomRightRadius: "0rem", display:"none"}} className="flex flex-col w-56 bg-white rounded-r-2xl overflow-hidden">
          <ul className="flex flex-col py-4">
            <li>
              <a href="#" className="flex flex-row  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                <span className="text-sm font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-row  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                <span className="text-sm font-medium">Music</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-row  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                <span className="text-sm font-medium">Drink</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-row h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                <span className="text-sm font-medium">Shopping</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-row h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                <span className="text-sm font-medium">Chat</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-row h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                <span className="text-sm font-medium">Profile</span>
              </a>
            </li>
          </ul>
        </div>
        <div style={{width: "100%"}}>
          
          
          <section id="triangle-pic" style={{width: "100%", height: "50%"}}>
          
          <div className="wrapper" id="wrapper-mobile" style={{ height: "100%"}}>
          <div style={{position: "relative", display: "flex", justifyContent: "center", height: "0px"}}>
            <img id="main_photo_section" src="/images/main_photo-2.png" />
          </div>
                <div className="hero-container center-items" style={{position: "relative"}}>
                  <div className="environment"></div>
                  <h2 className="hero glitch layers text-white" data-text="METAPETS">
                  <div className="text-center revamped"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" >METAPETS</div>
                  </h2>
                </div>
                
                <div className="center-items" style={{position: "relative"}}>
                  <p className="text-center text-white revamped" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">NEW WEBSITE COMING SOON</p>
                </div>
                <div className="center-items" style={{position: "relative"}}>
                  <div id="icons-section" className="flex justify-center" >
                    <a href="https://twitter.com/Metapetscoin" target="_blank"><BsTwitter style={{marginRight: "15px", color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100" /></a>
                    <a href="https://discord.gg/NQKR42dVmm" target="_blank"><FaDiscord style={{marginRight: "15px", color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="150" /></a>
                    <a href="https://t.me/metapets" target="_blank"><FaTelegramPlane style={{marginRight: "15px", color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" /></a>
                    <a href="https://www.reddit.com/user/Metapets" target="_blank"><BsReddit style={{marginRight: "15px",color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" /></a>
                    <a href="https://linktr.ee/metapets" target="_blank"><SiLinktree style={{color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="350" /></a>
                    
                  </div>
                  <div id="buttons-section" className="flex justify-center " style={{flexWrap: "wrap", justifyContent: "space-evenly"}}>
                  
                    <a id="button-links" href="https://www.dropbox.com/s/ejnajgj67c578ne/MetaPets%20WhitePaper%20-%20V1.pdf?dl=0" target="_blank" style={{border: "3px solid rgb(187 80 152)", color: "white", borderRadius: "30px", fontFamily: "revamped", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px"}}><CgFileDocument size={15} style={{color: "rgb(187 80 152)", marginRight: "2px"}} /> WHITEPAPER</a>
                    <a id="button-links" href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d" target="_blank" style={{border: "3px solid rgb(187 80 152)", color: "white", borderRadius: "30px", fontFamily: "revamped", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px"}}><CgArrowsExchangeAltV size={20} style={{color: "rgb(187 80 152)"}} /> PANCAKESWAP</a>
                    <a id="button-links" href="https://poocoin.app/tokens/0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d" target="_blank" style={{border: "3px solid rgb(187 80 152)",  color: "white", borderRadius: "30px", fontFamily: "revamped", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}><AiOutlineBarChart size={16} style={{color: "rgb(187 80 152)", marginRight: "2px"}} /> CHART</a>
                    <a id="button-links" href="https://whitebit.com/trade/MTP-DECL?utm_campaign=MTP_SMART&utm_medium=social&utm_source=medium" target="_blank" style={{border: "3px solid rgb(187 80 152)", color: "white", borderRadius: "30px", fontFamily: "revamped", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px"}}><BsCurrencyExchange size={15} style={{color: "rgb(187 80 152)", marginRight: "2px"}} /> WHITEBIT</a>
                  </div>
                  <div id="copy-address-section-main" className="flex justify-center flex-wrap">
                    <div id="copy-address-section" className="flex justify-center">
                      <div id="copy-address">
                        <input style={{background: "#0e0d17", border:"none", width:"100%"}}id="copy-address-value" value="0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d" />
                      </div>
                      <div id="copy-button" className="bubbly-button">
                        <a id="copy-button-a" style={{cursor: "pointer"}} onClick={() => { handleCopy(); }} >COPY ADDRESS</a>
                      </div>
                      
                    </div>
                    <div className="flex items-center">
                      <a href="https://www.certik.com/projects/metapetscoin" target="_blank" style={{cursor: "pointer"}} id="certik-button" className="flex justify-center">
                        <div>
                          <AiFillLock size={20} style={{color: "rgb(201 168 74)", marginRight: "5px"}} />
                        </div>
                        <div className="flex flex-col justify-center">
                          <p style={{color: "rgb(201 168 74)"}}>PENDING</p>
                          <p className="text-white">CertiK full Audit</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <section className="plan py-16 overflow-hidden sponsorship">
                    <div style={{ display: "flex", justifyContent: 'space-between'}} className="container relative ">
                      <a href="https://poocoin.app/tokens/0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d" target="_blank"><img style={{width: "200px"}} className="" src="/images/poocoin.png" /></a>
                      <a href="https://bscscan.com/token/0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d" target="_blank"><img style={{width: "200px"}} className="" src="/images/bsc_scan.png" /></a>
                      <a href="https://www.coingecko.com/en/coins/metapets" target="_blank"><img style={{width: "200px"}} className="" src="/images/coingecko.png" /></a>
                      <a href="https://coinmarketcap.com/currencies/metapets/" target="_blank" ><img style={{width: "200px"}} className="" src="/images/marketcap.png" /></a>
                      <a href="https://www.dextools.io/app/bsc/pair-explorer/0x5f29d7f11737455e8e6043944bb62aec6e6e52d4" target="_blank"><img style={{width: "200px"}} className="" src="/images/dextools.png" /></a>
                      <a style={{display: "flex", alignItems: "center"}} href="https://whitebit.com/trade/MTP-DECL?utm_campaign=MTP_SMART&utm_medium=social&utm_source=medium" target="_blank" ><img style={{width: "200px"}} className="" src="/images/whitebit_logo.png" /></a>
                    </div>
                  </section>
                </div>
            </div>
          </section>
          <section id="section-canvas" className=" relative" style={{width: "100%", height: "50%"}}>
            <Layout>
            </Layout>
          </section>
          
        </div>
      </div>
      
      
<style jsx>
  {
    `
    .sponsorship {
      z-index: 1111;
    }
    #copy-address-section-main {
      flex-wrap: wrap;
    }
    .py-16 {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    #certik-button {
      border: 2px dashed white;
      padding: 10px 15px;
      margin-left: 20px;
      border-radius: 5px;
      font-family: revamped;
    }
    
    .bubbly-button {
      -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
           
   }
    .bubbly-button:focus {
      outline: 0;
   }
    .bubbly-button:before, .bubbly-button:after {
      position: absolute;
      content: '';
      display: block;
      width: 140%;
      height: 100%;
      left: -20%;
      z-index: 1000;
      transition: all ease-in-out 0.5s;
      background-repeat: no-repeat;
   }
    .bubbly-button:before {
      display: none;
      top: -75%;
      background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
      background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
   }
    .bubbly-button:after {
      display: none;
      bottom: -75%;
      background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
      background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
   }
    .bubbly-button:active {
      background: #0e0d17;
      text-decoration: line-through;
   }
    .bubbly-button.animate:before {
      display: block;
      animation: topBubbles ease-in-out 0.75s forwards;
   }
    .bubbly-button.animate:after {
      display: block;
      animation: bottomBubbles ease-in-out 0.75s forwards;
   }
    @keyframes topBubbles {
      0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
     }
      50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
     }
      100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
     }
   }
    @keyframes bottomBubbles {
      0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
     }
      50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
     }
      100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
     }
   }
    #copy-address-section {
      border: 3px solid rgb(187 80 152);
      color: white;
      border-radius: 30px; 
      font-family: revamped;
      position: relative;
      max-width: 500px;
      z-index: 111;
      font-size: 12px;
    }
    #copy-address-section::after {
      position: absolute;
      content: "";
      top: calc(-1 * 3px);
      left: calc(-1 * 3px);
      z-index: -1;
      width: calc(100% + 3px * 2);
      height: calc(100% + 3px * 2);
      background: linear-gradient(60deg, #173896, #a65ff2, #ae2f91, #8c2193, #5fa7f2, #952a74, #c614c0, #0b65b1);
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: calc(2 * 3px);
      animation: moveGradient 4s alternate infinite;
    }
    @keyframes moveGradient {
      50% {
        background-position: 100% 50%;
      }
    }
    #copy-address-section a, #copy-address-section div {
      padding: 10px 15px;
    }
    #copy-address {
      margin: 1px;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      background: #0e0d17;
      border: 3px solid #0e0d17;
      margin-right: 0px;
      width: 50%;
      overflow: hidden;
      display: flex; 
      align-items: center;
    }
    #copy-button {
      /* background: rgb(187, 80, 152); */
      width: 45%;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      /* border-top: 1px solid rgb(187, 80, 152); */
      margin: 1px;
      margin-left: 0px;
      border: 3px solid #0e0d17;
      display: flex; 
      align-items: center;
    }
    #button-links {
      box-shadow: 0px 0px 17px 0px rgb(124 86 131);

    }
    @media only screen and (min-width: 550px) {
      #certik-button {
        padding: 15px 15px;
        font-size: 12px;
      }
      #copy-address-section-main { 
        position:relative;
        top: 160px;
        z-index: 111;
      }
      .sponsorship {
        position:relative;
        top: 130px;
        z-index: 1111;
      }
      .center-items {
        top: 34%;
      }
      #button-links {
        width: 190px;
        padding: 10px 30px;
        text-align: center;
        font-size: 12px;
      }
      #wrapper-mobile {
        position: relative;
      }
      #main_photo_section {
        width: 200px;
        height: 200px;
        border-radius: 80%;
        position: relative;
        top: 9px;
        z-index: 1;
        left: 20px;
      }
      #triangle-pic {
        background-image: url("/images/triangle.png");
        background-repeat: no-repeat;
        background-position: center;
        align-items: center;
        position: relative;
      }
      #icons-section {
        position: relative;
        top: 65px;
        z-index: 12222;
      }
      #buttons-section {
        position: relative;
        top: 130px;
        z-index: 12222;
        max-width: 920px;
        margin: 0 auto;
      }
      #section-body {
        min-height: 120vh;
      }
      #section-canvas {
        position: absolute;
        bottom: -2px;
      }
    }
    
    @media only screen and (max-width: 549px) {
      .center-items {
        top: 40%;
      }
      .sponsorship {
        position:relative;
        top: 125px;
        z-index: 1111;
      }
      #button-links {
        width: 170px;
        padding: 10px 20px;
        font-size: 12px;
        text-align: center;
      }
      #copy-address-section {
        max-width: 315px;
        font-size: 9px;
      }
      #certik-button {
        padding: 5px 15px;
        font-size: 12px;
        margin-left: 0px;
        margin-top: 10px;
      }
      #copy-address-section a, #copy-address-section div {
        padding: 5px 5px;
        padding-bottom: 4px;
      }
      #main_photo_section {
        width: 175px;
        height: 190px;
        border-radius: 80%;
        position: relative;
        top: 25px;
        z-index: 1;
        left: 26px;
      }
      #triangle-pic {
        background-image: url("/images/triangle.png");
        background-repeat: no-repeat;
        background-position: center;
        align-items: end;
        position:relative;
      }
      #buttons-section {
        position: relative;
        top: 135px;
        z-index: 111;
      }
      #copy-address-section-main {
        position:relative;
        top: 165px;
        z-index: 111;
      }
      #icons-section {
        position: relative;
        top: 90px;
        z-index: 12222;
      }
      #section-canvas {
        position: absolute;
        bottom: -2px;
      }
      #section-body {
        min-height: 130vh;
      }
    }
    @media (min-width:550px) and (max-width: 630px) {
      #certik-button {
        margin-left: 10px;
      }
    }
    @media only screen and (min-width: 1500px) {
      #section-body {
        min-height: 120vh;
      }
    }
    .lines {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      margin: auto;
      width: 90vw; }
    
    .line {
      position: absolute;
      width: 1px;
      height: 100%;
      top: 0;
      left: 50%;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden; }
      .line::after {
        content: '';
        display: block;
        position: absolute;
        height: 15vh;
        width: 100%;
        top: -50%;
        left: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
        animation: drop 7s 0s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97); }
      .line:nth-child(1) {
        margin-left: -25%; }
        .line:nth-child(1)::after {
          animation-delay: 2s; }
      .line:nth-child(3) {
        margin-left: 15%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(4) {
        margin-left: 45%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(5) {
        margin-left: 35%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(6) {
        margin-left: 55%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(7) {
        margin-left: 75%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(8) {
        margin-left: 65%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(9) {
        margin-left: 95%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(10) {
        margin-left: 85%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
    
    @keyframes drop {
      0% {
        top: -50%; }
      100% {
        top: 110%; } }
    .glitch {
      position: relative;
      color: #fff;
      font-size: 80px;
   }
    .line:not(:first-child) {
      position: absolute;
      top: 0;
      left: 0;
   }
    .line:nth-child(1) {
      animation: clip 3000ms -300ms linear infinite, glitch1 500ms -477ms linear infinite;
   }
    @keyframes glitch1 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(-1px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(1px);
        color: #ac1212;
     }
      95% {
        transform: translateX(0px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    .line:nth-child(2) {
      animation: clip 3000ms -600ms linear infinite, glitch2 500ms -85ms linear infinite;
   }
    @keyframes glitch2 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(-2px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(3px);
        color: #ac1212;
     }
      95% {
        transform: translateX(-1px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    .line:nth-child(3) {
      animation: clip 3000ms -900ms linear infinite, glitch3 500ms -778ms linear infinite;
   }
    @keyframes glitch3 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(-2px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(4px);
        color: #ac1212;
     }
      95% {
        transform: translateX(4px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    .line:nth-child(4) {
      animation: clip 3000ms -1200ms linear infinite, glitch4 500ms -860ms linear infinite;
   }
    @keyframes glitch4 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(-4px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(4px);
        color: #ac1212;
     }
      95% {
        transform: translateX(2px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    .line:nth-child(5) {
      animation: clip 3000ms -1500ms linear infinite, glitch5 500ms -476ms linear infinite;
   }
    @keyframes glitch5 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(1px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(-1px);
        color: #ac1212;
     }
      95% {
        transform: translateX(-3px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    .line:nth-child(6) {
      animation: clip 3000ms -1800ms linear infinite, glitch6 500ms -348ms linear infinite;
   }
    @keyframes glitch6 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(1px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(1px);
        color: #ac1212;
     }
      95% {
        transform: translateX(5px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    .line:nth-child(7) {
      animation: clip 3000ms -2100ms linear infinite, glitch7 500ms -578ms linear infinite;
   }
    @keyframes glitch7 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(-2px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(-1px);
        color: #ac1212;
     }
      95% {
        transform: translateX(2px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    .line:nth-child(8) {
      animation: clip 3000ms -2400ms linear infinite, glitch8 500ms -296ms linear infinite;
   }
    @keyframes glitch8 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(-4px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(0px);
        color: #ac1212;
     }
      95% {
        transform: translateX(-1px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    .line:nth-child(9) {
      animation: clip 3000ms -2700ms linear infinite, glitch9 500ms -863ms linear infinite;
   }
    @keyframes glitch9 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(-1px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(-3px);
        color: #ac1212;
     }
      95% {
        transform: translateX(-1px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    .line:nth-child(10) {
      animation: clip 3000ms -3000ms linear infinite, glitch10 500ms -462ms linear infinite;
   }
    @keyframes glitch10 {
      0% {
        transform: translateX(0);
     }
      80% {
        transform: translateX(0);
        color: #fff;
     }
      85% {
        transform: translateX(-1px);
        color: #4e9a26;
     }
      90% {
        transform: translateX(0px);
        color: #ac1212;
     }
      95% {
        transform: translateX(2px);
        color: #fff;
     }
      100% {
        transform: translateX(0);
     }
   }
    @keyframes clip {
      0% {
        clip-path: polygon(0 100%, 100% 100%, 100% 120%, 0 120%);
     }
      100% {
        clip-path: polygon(0 -20%, 100% -20%, 100% 0%, 0 0);
     }
   }
    .hero {
      font-size: clamp(40px, 10vw, 100px);
      line-height: 1;
      display: inline-block;
      color: #fff;
      z-index: 2;
      letter-spacing: 10px;
    
      /* Bright things in dark environments usually cast that light, giving off a glow */
      filter: drop-shadow(0 1px 3px);
    }
    
    
    .layers {
      position: relative;
    }
    
    .layers::before,
    .layers::after {
      content: attr(data-text);
      position: absolute;
      width: 110%;
      z-index: -1;
    }
    
    .layers::before {
      top: 10px;
      left: 15px;
      color: #e0287d;
    }
    
    .layers::after {
      top: 5px;
      left: -10px;
      color: #1bc7fb;
    }
    
    .single-path {
      clip-path: polygon(
        0% 12%,
        53% 12%,
        53% 26%,
        25% 26%,
        25% 86%,
        31% 86%,
        31% 0%,
        53% 0%,
        53% 84%,
        92% 84%,
        92% 82%,
        70% 82%,
        70% 29%,
        78% 29%,
        78% 65%,
        69% 65%,
        69% 66%,
        77% 66%,
        77% 45%,
        85% 45%,
        85% 26%,
        97% 26%,
        97% 28%,
        84% 28%,
        84% 34%,
        54% 34%,
        54% 89%,
        30% 89%,
        30% 58%,
        83% 58%,
        83% 5%,
        68% 5%,
        68% 36%,
        62% 36%,
        62% 1%,
        12% 1%,
        12% 34%,
        60% 34%,
        60% 57%,
        98% 57%,
        98% 83%,
        1% 83%,
        1% 53%,
        91% 53%,
        91% 84%,
        8% 84%,
        8% 83%,
        4% 83%
      );
    }
    
    
    @keyframes paths {
      0% {
        clip-path: polygon(
          0% 43%,
          83% 43%,
          83% 22%,
          23% 22%,
          23% 24%,
          91% 24%,
          91% 26%,
          18% 26%,
          18% 83%,
          29% 83%,
          29% 17%,
          41% 17%,
          41% 39%,
          18% 39%,
          18% 82%,
          54% 82%,
          54% 88%,
          19% 88%,
          19% 4%,
          39% 4%,
          39% 14%,
          76% 14%,
          76% 52%,
          23% 52%,
          23% 35%,
          19% 35%,
          19% 8%,
          36% 8%,
          36% 31%,
          73% 31%,
          73% 16%,
          1% 16%,
          1% 56%,
          50% 56%,
          50% 8%
        );
      }
    
      5% {
        clip-path: polygon(
          0% 29%,
          44% 29%,
          44% 83%,
          94% 83%,
          94% 56%,
          11% 56%,
          11% 64%,
          94% 64%,
          94% 70%,
          88% 70%,
          88% 32%,
          18% 32%,
          18% 96%,
          10% 96%,
          10% 62%,
          9% 62%,
          9% 84%,
          68% 84%,
          68% 50%,
          52% 50%,
          52% 55%,
          35% 55%,
          35% 87%,
          25% 87%,
          25% 39%,
          15% 39%,
          15% 88%,
          52% 88%
        );
      }
    
      30% {
        clip-path: polygon(
          0% 53%,
          93% 53%,
          93% 62%,
          68% 62%,
          68% 37%,
          97% 37%,
          97% 89%,
          13% 89%,
          13% 45%,
          51% 45%,
          51% 88%,
          17% 88%,
          17% 54%,
          81% 54%,
          81% 75%,
          79% 75%,
          79% 76%,
          38% 76%,
          38% 28%,
          61% 28%,
          61% 12%,
          55% 12%,
          55% 62%,
          68% 62%,
          68% 51%,
          0% 51%,
          0% 92%,
          63% 92%,
          63% 4%,
          65% 4%
        );
      }
    
      45% {
        clip-path: polygon(
          0% 33%,
          2% 33%,
          2% 69%,
          58% 69%,
          58% 94%,
          55% 94%,
          55% 25%,
          33% 25%,
          33% 85%,
          16% 85%,
          16% 19%,
          5% 19%,
          5% 20%,
          79% 20%,
          79% 96%,
          93% 96%,
          93% 50%,
          5% 50%,
          5% 74%,
          55% 74%,
          55% 57%,
          96% 57%,
          96% 59%,
          87% 59%,
          87% 65%,
          82% 65%,
          82% 39%,
          63% 39%,
          63% 92%,
          4% 92%,
          4% 36%,
          24% 36%,
          24% 70%,
          1% 70%,
          1% 43%,
          15% 43%,
          15% 28%,
          23% 28%,
          23% 71%,
          90% 71%,
          90% 86%,
          97% 86%,
          97% 1%,
          60% 1%,
          60% 67%,
          71% 67%,
          71% 91%,
          17% 91%,
          17% 14%,
          39% 14%,
          39% 30%,
          58% 30%,
          58% 11%,
          52% 11%,
          52% 83%,
          68% 83%
        );
      }
    
      76% {
        clip-path: polygon(
          0% 26%,
          15% 26%,
          15% 73%,
          72% 73%,
          72% 70%,
          77% 70%,
          77% 75%,
          8% 75%,
          8% 42%,
          4% 42%,
          4% 61%,
          17% 61%,
          17% 12%,
          26% 12%,
          26% 63%,
          73% 63%,
          73% 43%,
          90% 43%,
          90% 67%,
          50% 67%,
          50% 41%,
          42% 41%,
          42% 46%,
          50% 46%,
          50% 84%,
          96% 84%,
          96% 78%,
          49% 78%,
          49% 25%,
          63% 25%,
          63% 14%
        );
      }
    
      90% {
        clip-path: polygon(
          0% 41%,
          13% 41%,
          13% 6%,
          87% 6%,
          87% 93%,
          10% 93%,
          10% 13%,
          89% 13%,
          89% 6%,
          3% 6%,
          3% 8%,
          16% 8%,
          16% 79%,
          0% 79%,
          0% 99%,
          92% 99%,
          92% 90%,
          5% 90%,
          5% 60%,
          0% 60%,
          0% 48%,
          89% 48%,
          89% 13%,
          80% 13%,
          80% 43%,
          95% 43%,
          95% 19%,
          80% 19%,
          80% 85%,
          38% 85%,
          38% 62%
        );
      }
    
      1%,
      7%,
      33%,
      47%,
      78%,
      93% {
        clip-path: none;
      }
    }
    
    .movement {
      /* Normally this position would be absolute & on the layers, set to relative here so we can see it on the div */
      position: relative;
      animation: movement 8s step-end infinite;
    }
    
    @keyframes movement {
      0% {
        top: 0px;
        left: -20px;
      }
    
      15% {
        top: 10px;
        left: 10px;
      }
    
      60% {
        top: 5px;
        left: -10px;
      }
    
      75% {
        top: -5px;
        left: 20px;
      }
    
      100% {
        top: 10px;
        left: 5px;
      }
    }
    
    .opacity {
      animation: opacity 5s step-end infinite;
    }
    
    @keyframes opacity {
      0% {
        opacity: 0.1;
      }
    
      5% {
        opacity: 0.7;
      }
    
      30% {
        opacity: 0.4;
      }
    
      45% {
        opacity: 0.6;
      }
    
      76% {
        opacity: 0.4;
      }
    
      90% {
        opacity: 0.8;
      }
    
      1%,
      7%,
      33%,
      47%,
      78%,
      93% {
        opacity: 0;
      }
    }
    
    .font {
      animation: font 7s step-end infinite;
    }
    
    @keyframes font {
      0% {
        font-weight: 100;
        color: #e0287d;
        filter: blur(3px);
      }
    
      20% {
        font-weight: 500;
        color: #fff;
        filter: blur(0);
      }
    
      50% {
        font-weight: 300;
        color: #1bc7fb;
        filter: blur(2px);
      }
    
      60% {
        font-weight: 700;
        color: #fff;
        filter: blur(0);
      }
    
      90% {
        font-weight: 500;
        color: #e0287d;
        filter: blur(6px);
      }
    }
    
    .glitch span {
      animation: paths 5s step-end infinite;
    }
    
    .glitch::before {
      animation: paths 5s step-end infinite, opacity 5s step-end infinite,
        font 8s step-end infinite, movement 10s step-end infinite;
    }
    
    .glitch::after {
      animation: paths 5s step-end infinite, opacity 5s step-end infinite,
        font 7s step-end infinite, movement 8s step-end infinite;
    }
    
    .hero-container {
      position: relative;
      padding: 0 0;
      text-align: center;
    }
    .typing-demo {
      width: 12ch;
      animation: typing 2s steps(12), blink .5s step-end infinite alternate;
      white-space: nowrap;
      overflow: hidden;
      border-right: 3px solid;
      font-family: monospace;
      font-size: 2em;
    }
    
    @keyframes typing {
      from {
        width: 0
      }
    }
        
    @keyframes blink {
      50% {
        border-color: transparent
      }
    }
    .rhomboid {
      border-top-right-radius: 38px;
      background-color: #cbc9c9;
      box-shadow: 10px 7px 11px -3px rgb(0 0 0);
      border-right: 3px solid #0e0e13;
      border-bottom-right-radius: 79px;
      border-top-left-radius: 38px;
      border-bottom-left-radius: 69px;
    }
    #background {
      z-index: -1;
    }
    .text-2xl {
      font-size: 1.3rem;
    }
    
    .text-theme-gray-300 {
      color: rgba(255, 255, 255, 0.8);
    }

    .shapiro-extd {
      font-family: 'Shapiro 97 Air Extd';
    }
    .shapiro-65 {
      font-family: 'Shapiro 65 Light Heavy Wide';
    }
    .shapiro-85 {
      font-family: 'Shapiro 85 Super Heavy Extd';
    }
    .revamped {
      font-family: 'Revamped';
    }
    .rocket {
      font-family: 'RocketRinder';
    }
    .font-22 {
        font-size: 22px;
        line-height: 30px;
    }
      .font-26 {
        font-size: 26px;
    }
    
    .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    .font-light {
        font-weight: 300;
    }
    .opacity-70 {
        opacity: 0.7;
    }
    
    .mobile-menu {
      display: none;
      position: fixed;
      width: calc(100% - 80px);
      height: 100%;
      z-index: 20;
      background: black;
      top: 0px;
      left: 0px;
      padding: 50px 15px;
      transform: translateX(-800px);
      transition: 0.5s;
    }
    @media screen and (max-width: 1279px){
      .container {
        padding: 0px 30px;
      }

      .font-62 {
        font-size: 40px;
        line-height: 50px;
      }

      .font-82 {
        font-size: 60px;
        line-height: 70px;
      }

      .text-3xl {
        font-size: 1.275rem;
        line-height: 1.75rem;
      }
    }

    @media screen and (max-width: 1439px){
      .container {
        padding: 0px 40px;
      }

      .font-62 {
        font-size: 50px;
      }
    }
    
    .font-82 {
      font-size: 78px;
      line-height: 86px;
    }

    .font-62 {
      line-height: 75px;
      font-size: 62px;
    }

    .font-Montserrat {
      font-family: 'Montserrat', sans-serif;
    }
    
    @media (min-width: 1024px){
      .container {
        max-width: 1024px;
      }
    }
    @media (min-width: 768px){
      .container {
        max-width: 768px;
      }
    }
    @media (min-width: 640px){
      .container {
        max-width: 640px;
      }
    }
    .container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0px 85px;
    }
   
    .text-theme-lightblue-300 {
        --tw-text-opacity: 1;
        color: rgba(0, 178, 255, var(--tw-text-opacity));
    }
    
    .text-blue {
      color: #0575e5;
    }
    .text-purple {
      color: #a72b7f;
    }
    .text-purple-blue {
      color: #552AE0;
    }
    .text-white {
      color: white;
    }
    .text-pink {
      color: #F76C6C;
    }
    .custom-text-black {
      color: #dad8d8;
    }
    .text-yellow {
      color: #F3D250;
    }
  
    .grid-cols-12 {
        grid-template-columns: repeat(12, minmax(0, 1fr));
    }
    @media screen and (max-width: 767px){
      .container {
        padding: 0px 25px;
      }

      .font-62 {
        font-size: 30px;
        line-height: 45px;
        text-align: center;
      }
    }
  
    @media screen and (max-width: 900px){
      .font-62 {
        font-size: 40px;
      }
    }
    @media screen and (max-width: 455px){
      .text-2xl{
        font-size: 0.7rem;
      }
      .font-62 {
        font-size: 24px;
      }
    }
    `
  }
</style>
<script src="dist/main.js"></script>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en"></script> 
<script src="dist/clipboard.min.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
      AOS.init()
  </script>
</body>

    </div>
  )
}
