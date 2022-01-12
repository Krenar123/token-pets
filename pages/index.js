import Head from 'next/head'
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'

import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsReddit } from 'react-icons/bs';
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
  const handleCopy = () => {
    let address = document.getElementById("copy-address");
    address.select();
    address.setSelectionRange(0, 99999); For mobile devices 
 
     Copy the text inside the text field 
    navigator.clipboard.writeText(address.value);
    setEffect(true);
    address.blur();
    document.getElementById("custom-tooltip").style.display = "inline";
    setTimeout( function() {
        document.getElementById("custom-tooltip").style.display = "none";
    }, 1000);
    
  };
  */
  // This will work in Safari

  return (
    <div className="">
      <Head>
        <title>MetaPets - a new world a new pet</title>
        <link rel="icon" href="/favicon.ico" />
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
      <header style={{backgroundColor: '#1A1A22'}} className="bg-white">
        <div   className="container  flex justify-between items-center ">
          <a style={{padding: "10px 30px"}} className="rhomboid change-on-small md:inline-block  text-white  font-Montserrat  text-sm  font-bold anchor-change uppercase " href="#"><img style={{maxWidth: "55px"}} src="/images/logo.png" /></a>
        </div>
      </header>
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
          <section id="triangle-pic" style={{width: "100%", height: "50%", display:"flex", justifyContent: "center"}}>
          <div className="wrapper" id="wrapper-mobile">
                <div className="hero-container">
                  <div className="environment"></div>
                  <h2 className="hero glitch layers text-white" data-text="METAPETS">
                  <div className="text-center revamped" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" >METAPETS</div>
                  </h2>
                </div>
                <div>
                  <p className="text-center text-white revamped" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">NEW WEBSITE COMING SOON</p>
                </div>
                <div id="icons-section" className="flex justify-center">
                  <a href="https://twitter.com/Metapetscoin" target="_blank"><BsTwitter style={{marginRight: "15px", color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100" /></a>
                  <a href="https://discord.gg/NQKR42dVmm" target="_blank"><FaDiscord style={{marginRight: "15px", color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="150" /></a>
                  <a href="https://t.me/metapets" target="_blank"><FaTelegramPlane style={{marginRight: "15px", color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" /></a>
                  <a href="" target="_blank"><AiOutlineGithub style={{marginRight: "15px", color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="250" /></a>
                  <a href="https://www.reddit.com/user/Metapets" target="_blank"><BsReddit style={{color: "rgb(187 80 152)"}} size={40} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" /></a>
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
    @media only screen and (min-width: 550px) {
      #wrapper-mobile {
        position: relative;
        top: 10px;
      }
      #triangle-pic {
        background-image: url("/images/triangle.png");
        background-repeat: no-repeat;
        background-position: bottom;
        align-items: end;
      }
      #icons-section {
        position: relative;
        top: 90px;
        z-index: 12222;
      }
      #section-body {
        min-height: 95vh;
      }
      #section-canvas {
        position: absolute;
        bottom: -2px;
      }
    }
    
    @media only screen and (max-width: 549px) {
      
      #triangle-pic {
        background-image: url("/images/triangle.png");
        background-repeat: no-repeat;
        background-position: center;
        align-items: center;
      }
      #icons-section {
        position: relative;
        top: 130px;
        z-index: 12222;
      }
      #section-canvas {
        position: absolute;
        bottom: -2px;
      }
      #section-body {
        min-height: 92vh;
      }
    }
    @media only screen and (min-width: 1500px) {
      #section-body {
        min-height: 105vh;
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
        margin-left: 25%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(4) {
        margin-left: 35%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(5) {
        margin-left: 45%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(6) {
        margin-left: 55%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(7) {
        margin-left: 65%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(8) {
        margin-left: 75%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(9) {
        margin-left: 85%; }
        .line:nth-child(3)::after {
          animation-delay: 2.5s; }
      .line:nth-child(10) {
        margin-left: 95%; }
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
