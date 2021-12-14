import Head from 'next/head'
import React, { useState } from "react";
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaPoo } from 'react-icons/fa';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { AiOutlineCopy } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

export default function Home() {
  const [effect, setEffect] = useState(false);

  const handleClick = (tabs) => {
    let tab1 = document.getElementById("tab1");
    let tab2 = document.getElementById("tab2");
    let tab3 = document.getElementById("tab3");
    const tab1option = document.getElementById("tab1-option");
    const tab2option = document.getElementById("tab2-option");
    const tab3option = document.getElementById("tab3-option");
    var w = window.innerWidth;

    if (tabs === "tab1") {
      tab1option.classList.add("active");
      tab2option.classList.remove("active");
      tab3option.classList.remove("active");
      if (w <= 800 ) {
        tab1.style.display = 'block';
      }else {
        tab1.style.display = 'flex';
      }
      tab2.style.display = 'none';
      tab3.style.display = 'none';
      console.log("I clicked on the About Page1");
    }
    if (tabs === "tab2") {
      tab2option.classList.add("active");
      tab1option.classList.remove("active");
      tab3option.classList.remove("active");
      if (w <= 800 ) {
        tab2.style.display = 'block';
      }else {
        tab2.style.display = 'flex';
      }
      tab1.style.display = 'none';
      tab3.style.display = 'none';
      console.log("I clicked on the Posts Page2");
    }
    if (tabs === "tab3") {
      tab3option.classList.add("active");
      tab2option.classList.remove("active");
      tab1option.classList.remove("active");
      if (w <= 800 ) {
        tab3.style.display = 'block';
      }else {
        tab3.style.display = 'flex';
      }
      tab2.style.display = 'none';
      tab1.style.display = 'none';
      console.log("I clicked on the Posts Page3");
    }
  };

  const handleCopy = () => {
    let address = document.getElementById("copy-address");
    address.select();
    address.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(address.value);
    setEffect(true);
    address.blur();
    document.getElementById("custom-tooltip").style.display = "inline";
    setTimeout( function() {
        document.getElementById("custom-tooltip").style.display = "none";
    }, 1000);
    
  };

  return (
    <div className="">
      <Head>
        <title>Meta Football</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          rel="preload"
          href="/fonts/Shapiro/Shapiro 65 Light Heavy Wide.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Shapiro/Shapiro 85 Super Heavy Extd.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Shapiro/Shapiro 97 Air Extd.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body style={{background: "rgb(0 0 0)"}} className="bg-black ld" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
      <header className="bg-white py-8 ">
        <div className="container  flex justify-between items-center ">
          <a className="change-on-small md:inline-block  text-white  font-Montserrat  text-sm  font-bold anchor-change uppercase " href="#">HOME</a>
          <a className="change-on-small md:inline-block text-white  font-Montserrat  text-sm  font-bold anchor-change uppercase  " href="#" target="_blank">LINKTREE</a>
          
          <a className="change-on-small md:inline-block text-white  font-Montserrat  text-sm  font-bold anchor-change uppercase  " href="https://meta-football.gitbook.io/metafootball-whitepaper/" target="_blank">WHITEPAPER</a>
          <button style={{display: 'none'}} className="menu"><img src="/images/menu.svg" /></button>
          <a className="change-on-small md:inline-block text-white  font-Montserrat  text-sm  font-bold anchor-change uppercase " href={"/nft"} target="_blank">NFT</a>
        </div>
      </header>
      <div className="mobile-menu">
        <button className="menu-close absolute right-3 top-3 cursor-pointer">
          <img className=" w-8" src="/images/close.png" />
        </button>
        <a className=" block py-3  text-white  font-Montserrat  text-sm font-bold uppercase  hover:text-theme-lightblue-300 transition-all " href="#">HOME</a>
        <a className=" block py-3  text-white  font-Montserrat  text-sm font-bold uppercase hover:text-theme-lightblue-300 transition-all  " href="#">MTF
        TOKEN</a>
        <a className=" block  py-3 text-white  font-Montserrat  text-sm font-bold uppercase   hover:text-theme-lightblue-300 transition-all" href="https://meta-football.gitbook.io/metafootball-whitepaper/">WHITEPAPER</a>
        <a className=" block  py-3  text-white  font-Montserrat  text-sm font-bold uppercase hover:text-theme-lightblue-300 transition-all" href="" target="_blank">PITCH DECK</a>
      </div>
      <section className="train-player pb-20 lg:pt-20 lg:pb-14 relative">
        <div className="container train-player2">
          <div className="lg:grid grid-cols-12" id="top-div">
            <div style={{width: "100%"}} className="col-span-5">
              <h1 className="first-para text-white shapiro-85 font-82 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800"> INVEST
              EARN
              PLAY
              <span className="text-yellow shapiro-extd aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              WIN</span>
              </h1>
              <p className="mt-8 mb-8 font-Montserrat custom-text-black font-22 text-theme-gray-300 leading-7 font-light opacity-70 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              MetaFootball will be one of the most comprehensive football management games ever created, designed as a play-to-earn game for everyone who loves football and wants to earn token reflections and NFT while managing his own football team
              </p>
              <div className="btn-group" style={{marginTop: '15px'}}>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                  <div>
                    <button id="button-mfts1" className="btn-on-active button-mfts bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      BUY $MTF
                    </button>
                    <button style={{border: '2px solid #3f4b95'}} className="button-mfts bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      <AiOutlineAreaChart style={{float: 'left', marginRight: '5px', position: 'relative', top: '4px'}} /> CHART
                    </button>
                  </div>
                  <span id="custom-tooltip">Copied</span>
                </div>
              </div>
              <div className="btn-group col-span-12" style={{marginTop: '15px', display: "flex"}}>
                <div id="input-div-span1">
                  <input id="copy-address" style={{pointerEvents: 'none', background: 'transparent', border: '2px solid #3f4b95', borderTopRightRadius: "0px", borderBottomRightRadius: "0px", overflow: "hidden", width: "100%"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full" defaultValue="0xd024ac1195762f6f13f8cfdf3cdd2c97b33b248b" />
                </div>
                <div id="input-div-span2">
                  <button id="copy-address-button" onClick={() => { handleCopy(); }} style={{display: 'flex', width: '100%', alignItems: 'center', borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }} className={`${effect && "animate-wiggle"} btn-on-active bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-2 rounded-full btn-copy-add`}>
                    <AiOutlineCopy style={{marginRight: '5px'}} /> COPY ADDRESS
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <img style={{width: "50%", maxWidth: "395px", maxHeight: "570px", position: "relative", top: "0px"}} alt="" id="logo-img" className="ml-auto aos-init aos-animate" data-aos="fade-left" data-aos-duration="800" src="/images/logo_opt-removebg.png" />
            </div>
          </div>
          <div className="drop-band">
            <a href="https://app.metasoccer.com/" target="_blank">
              <div className="drop-band--main-band" ><p className="shapiro-85 text-3xl">JOIN US</p><p className="shapiro-extd text-3xl">JOIN US</p><p className="shapiro-85 text-3xl">JOIN US</p><p className="text-3xl shapiro-extd">JOIN US</p><p className="text-3xl shapiro-85">JOIN US</p><p className="last-join-us shapiro-extd text-3xl">JOIN US</p></div>
              <div className="drop-band--secondary-band"></div>
            </a>
          </div>
        </div>
      </section>
      <section className="rrss-icons py-20 lg:pt-6 lg:pb-2">
        <div className="container justify-center items-center flex-wrap grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-20 md:grid-cols-4 md:grid-rows-1 md:px-20">
          <div className="rrss-icon flex justify-end items-center md:justify-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
            <a className="inline-block custom-text-black hover:opacity-70 transition-all" href="https://twitter.com/MetaSoccer_EN" target="_blank">
            <BsTwitter size={40} />
            </a>
          </div>
          <div className="rrss-icon flex justify-start items-center md:justify-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
            <a className="inline-block custom-text-black hover:opacity-70 transition-all" href="https://t.me/MetaSoccerOfficial" target="_blank">
            <FaTelegramPlane size={40} />
            </a>
          </div>
          <div className="rrss-icon flex justify-end items-center md:justify-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
            <a className="inline-block custom-text-black hover:opacity-70 transition-all" href="https://discord.gg/metasoccer" target="_blank">
            <FaDiscord size={40} />
            </a>
          </div>
          <div className="rrss-icon flex justify-start items-center md:justify-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            <a className="inline-block custom-text-black hover:opacity-70 transition-all" href="https://metasoccer.medium.com/" target="_blank">
            <FaPoo size={40}/>
            </a>
          </div>
        </div>
      </section>
      {/* 
      <section className="steps relative  py-8 xl:py-16 ">
        <div className="container ">
          <div className="flow md:grid grid-cols-12 gap-12 ">
            <div className="md:col-span-6 lg:col-span-3 text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-white font-26 shapiro-85 mb-4">FIND</h2>
              <p className="custom-text-black  font-Montserrat text-base text-theme-gray-300 leading-6 font-light">Send your
              Youth Scouts
              to explore and find new promising young players for your team (NFT players)
              </p>
            </div>
            <div className="md:col-span-6 lg:col-span-3 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <h2 className="text-white font-26 shapiro-85 mb-4">TRAIN</h2>
              <p className="custom-text-black font-Montserrat text-base text-theme-gray-300 leading-6 font-light">Train your
              players
              every day and count on them to play matches to develop their full potential
              </p>
            </div>
            <div className="md:col-span-6 lg:col-span-3 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <h2 className="text-white font-26 shapiro-85 mb-4">PLAY</h2>
              <p className="custom-text-black font-Montserrat text-base text-theme-gray-300 leading-6 font-light">Compete in
              official
              matches against other users and climb between divisions to reach the top
              </p>
            </div>
            <div className="md:col-span-6 lg:col-span-3 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <h2 className="text-white font-26 shapiro-85 mb-4">EARN</h2>
              <p className="custom-text-black font-Montserrat text-base text-theme-gray-300 leading-6 font-light">Win matches
              &amp; leagues
              and generate income with your club. There are multiple ways to earn $MTF token
              </p>
            </div>
          </div>
        </div>
      </section>
      */}
      <section className="meta-assets py-8 xl:py-16">
        <div className="container">
          <div className="tabs p-4 md:p-12 border text-white aos-animate relative">
            <h2 className="shapiro-95 text-white font-62 text-right">
              <span className="text-yellow block shapiro-extd aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">METAFOOTBALL</span>
              <span className="block shapiro-85 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">UTILITIES</span>
            </h2>
            <ul className="md:flex   justify-end my-8" id="tabs-nav">
              <li id="tab1-option" className="mr-8 active"><a className="shapiro-65 " onClick={() => handleClick('tab1')} >NFT FANTASY FOOTBALL</a></li>
              <li id="tab2-option" className="mr-8"><a className="shapiro-65 " onClick={() => handleClick('tab2')} >FOOTBALL MANAGER</a></li>
              <li id="tab3-option" className=""><a className="shapiro-65 " onClick={() => handleClick('tab3')} >METAVERSE GAME</a></li>
            </ul>
            <div id="tabs-content">
              <div  className="tab-content lg:flex" id="tab1">
                <div className="player_img">
                  <img data-aos="zoom-in" alt="" style={{maxHeight: "350px"}} className=" mx-auto" src="/images/first_vector.png" />
                </div>
                <div className="text-right">
                  <p className="m-0 font-Montserrat text-lg font-light aos-init aos-animate" data-aos="fade-up">
                  </p><p className="m-0 para-in-utilities font-Montserrat custom-text-black text-lg font-light">
                  MetaFootball provides an advantage over traditional fantasy football leagues in that you are compensated in real money for your efforts because you own the cards you collect, win, and trade. In previous fantasy football games, you don’t own any players, so all you get for your time is the possibility to beat the thousands of other players who enter, but with MetaFootball, you get to collect cards (players) that you are given complete ownership of for the rest of your life.
                  </p>
                  <p></p>
                  <a style={{background: '#F3D250', color: 'white', width: '100%', maxWidth: "200px"}} className="inline-btn text-grey text-base shapiro-65 aos-init aos-animate" data-aos="fade-up" href="https://meta-football.gitbook.io/metafootball-whitepaper/" target="_blank">
                  LEARN
                  MORE </a>
                  <p className="m-0 font-Montserrat text-base font-light aos-init aos-animate" data-aos="fade-up">
                  </p><p className="opacity-80 font-Montserrat custom-text-black text-base font-light"></p><p></p>
                </div>
              </div>
              <div  className="tab-content lg:flex" id="tab2" >
                <div className="player_img">
                  <img data-aos="zoom-in" alt="" style={{maxHeight: "350px"}} className=" mx-auto" src="/images/fourth_vector.jpeg" />
                </div>
                <div className="text-right">
                  <p className="m-0  font-Montserrat  text-lg font-light ">
                  </p><p className="m-0 para-in-utilities custom-text-black font-Montserrat  text-lg font-light">
                  The full simulation experience with high-end developments.
                  Experience the closest thing to being a real manager by taking charge of the world’s greatest sport teams and playing the beautiful games your way.
                  MetaFootball is a living, breathing game world for the metaverse, unparalleled realism and achieves sports authenticity that other sports games can only aspire to.
                  </p>
                  <p></p>
                  <a style={{background: '#F3D250', color: 'white', width: '100%', maxWidth: "200px"}} className=" inline-btn  text-grey text-base shapiro-65 " href="https://meta-football.gitbook.io/metafootball-whitepaper/" target="_blank">
                  LEARN
                  MORE </a>
                  <p className="m-0   font-Montserrat  text-base font-light ">
                  </p><p className="opacity-80 font-Montserrat custom-text-black text-base font-light"></p><p></p>
                </div>
              </div>
              <div className="tab-content lg:flex" id="tab3" >
                <div className="player_img">
                  <img data-aos="zoom-in" style={{maxHeight: "350px"}} alt="" className=" mx-auto" src="/images/fifth_vector.png" />
                </div>
                <div className="text-right">
                  <p className="m-0  font-Montserrat  text-lg font-light ">
                  </p><p className="m-0 para-in-utilities custom-text-black font-Montserrat  text-lg font-light">
                  The entire simulation will be availible. As near as you can go to really executing the job.
                  Simulation game that is unrivaled. Take command of the world's best sports teams and play the most beautiful games your way to get the closest thing to becoming a real manager. MetaFootball is a dynamic, breathing metaverse gaming environment with unrivaled realism and sports authenticity that other sports games can only dream to.
                  MetaFootball's professional world will be meticulously modeled and reconstructed to provide you with all of the management power and resources you’ll need to write your own sports story and live out your goals. Purchase the players you desire. Make a list of the tactics you prefer. Take the awards you want. It's your club, your rules..
                  </p>
                  <p></p>
                  <a style={{background: '#F3D250', color: 'white', width: '100%', maxWidth: "200px"}} className=" inline-btn  text-grey text-base shapiro-65 " href="https://meta-football.gitbook.io/metafootball-whitepaper/" target="_blank">
                  LEARN
                  MORE </a>
                  <p className="m-0   font-Montserrat  text-base font-light ">
                  </p><p className="opacity-80 font-Montserrat custom-text-black text-base font-light"></p><p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="plan py-8 xl:py-16 overflow-hidden">
        <div style={{ display: "flex", justifyContent: 'space-between'}} className="container relative ">
          <a href="https://app.metasoccer.com/" target="_blank"><img style={{width: "200px"}} className="" src="/images/poocoin.png" /></a>
          <a href="https://app.metasoccer.com/" target="_blank"><img style={{width: "200px"}} className="" src="/images/bsc_scan.png" /></a>
          <a href="https://app.metasoccer.com/" target="_blank"><img style={{width: "200px"}} className="" src="/images/coingecko.png" /></a>
          <a href="https://app.metasoccer.com/" target="_blank"><img style={{width: "200px"}} className="" src="/images/dextools.png" /></a>
          <a href="https://app.metasoccer.com/" target="_blank"><img style={{width: "200px"}} className="" src="/images/marketcap.png" /></a>
        </div>
      </section>

      <section style={{marginBottom: "40px"}} className="investor py-8 xl:py-16">
        <div  className="container relative ">
          <h2 className="text-white font-62 shapiro-85 mb-16 xl:mb-28 aos-init" data-aos="fade-up" data-aos-duration="400" data-aos-offset="-300">
          BUY/SELL{/*&amp;*/} TAX 
          <span className="shapiro-extd block text-yellow text-left uppercase ">Total 13%</span>
          </h2>
          <div style={{padding: '0px 20px'}} className="container ">
          <div className="flow md:grid grid-cols-12 gap-8 ">
            <div style={{padding: "23px", borderRadius: "10px", background: "rgb(24 24 24)"}} className="shadow-xl sm-mb-6 md:col-span-6 lg:col-span-3 text-center aos-init aos-animate" data-aos="flip-left" data-aos-duration="800">
            <img style={{width: "150px", margin: '0 auto'}} className="" src="/images/bnb.png" />
              <h2 style={{fontSize: "14px"}} className="text-white font-18 shapiro-85 mt-3 mb-3">INCENTIVE WALLET</h2>
              <p style={{fontSize: "14px"}} className="custom-text-black  font-Montserrat text-base text-theme-gray-300 leading-6 font-light">To keep our community entertained and rewarded, 6% of every transaction will go to the incentive wallet.
              </p>
            </div>
            <div style={{padding: "23px", borderRadius: "10px", background: "rgb(24 24 24)"}} className="shadow-xl sm-mb-6 md:col-span-6 lg:col-span-3 text-center aos-init aos-animate" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
            <img style={{width: "150px", margin: '0 auto'}} className="" src="/images/bunny.png" />
              <h2 style={{fontSize: "14px"}} className="text-white font-18 shapiro-85 mt-3 mb-3">LIQUIDITY</h2>
              <p style={{fontSize: "14px"}} className="custom-text-black font-Montserrat text-base text-theme-gray-300 leading-6 font-light">3% of every transaction goes to our locked liquidity pool MTF/BNB in PancakeSwap, creating an ever rising price floor.
              </p>
            </div>
            <div style={{padding: "23px", borderRadius: "10px", background: "rgb(24 24 24)"}} className="shadow-xl sm-mb-6 md:col-span-6 lg:col-span-3 text-center aos-init aos-animate" data-aos="flip-left" data-aos-delay="200" data-aos-duration="800">
            <img style={{width: "150px", margin: '0 auto'}} className="" src="/images/holding.png" />
              <h2 style={{fontSize: "14px"}} className="text-white font-18 shapiro-85 mt-3 mb-3">REFLECTIONS</h2>
              <p style={{fontSize: "14px"}} className="custom-text-black font-Montserrat text-base text-theme-gray-300 leading-6 font-light">After every buy/sell 2% will be distributed among our amazing holders.
              </p>
            </div>
            <div style={{padding: "23px", borderRadius: "10px", background: "rgb(24 24 24)"}} className="shadow-xl md:col-span-6 lg:col-span-3 text-center aos-init aos-animate" data-aos="flip-left" data-aos-delay="300" data-aos-duration="800">
            <img style={{width: "150px", margin: '0 auto'}} className="" src="/images/whale.png" />  
              <h2 style={{fontSize: "14px"}} className="text-white font-18 shapiro-85 mt-3 mb-3">WHALE SAFETY</h2>
              <p style={{fontSize: "14px"}} className="custom-text-black font-Montserrat text-base text-theme-gray-300 leading-6 font-light">To keep the price consistent and safeguard it from whales & paperhands, 2% will go to the buyback wallet as $MTF tokens.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      <section className="team py-8 xl:py-16">
        <div className="container relative ">
          <h2 className="text-white font-62 shapiro-85 mb-12 aos-init aos-animate" data-aos="fade-up" data-aos-offset="-300"> PROMOTIONS BY
          <span className="shapiro-extd block text-yellow text-left uppercase ">FOOTBALL STARS</span>
          </h2>
          
          <div className="grid py-12 grid-cols-12 gap-4 md:gap-8 xl:gap-7 relative">
            {/*
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/thiago_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Thiago Silva</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/vinicius_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Vinicius Jr.</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            */}
            
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/arda_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Arda Turan</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/sergio_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Sergio Busquets</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/vidal_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Vidal</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/alves_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Dani Alves</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/marcelo_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Marcelo</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/benzema_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Karim Benzema</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}} className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}} >
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/ronaldinho_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Ronaldinho Gaucho</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/mbappe_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Kilian Mbappe</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/ronaldo_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Cristiano Ronaldo</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user img-players-div" style={{height: "100px", width: "100px"}}>
                <img className="img-players" style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%"}} alt="" src="/images/messi_sil.png" />
              </div>
              <h4 className="img-players-name text-center text-white text-xl shapiro-65 mt-3 mb-1">Lionel Messi</h4>
              <div className="links">
                <a href="https://www.twitter.com" target="_blank">
                <BsTwitter size={20} style={{color: '#1d9bf0', marginRight: "10px"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={20} style={{color: '#a63494'}} />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="roadmap py-8 xl:py-16">
        <div className="container relative ">
          <h2 className="text-white font-62 shapiro-85 mb-12 aos-init" data-aos="fade-up" data-aos-offset="-300"> ROADMAP
          </h2>
          <div className="md:grid grid-cols-12 border aos-init" data-aos="fade-up" data-aos-offset="-300">
          <div className=" col-span-12 lg:col-span-3 text-center  py-12 px-6 border-r relative overflow-hidden">
            <h3 className=" text-yellow text-3xl shapiro-65   mb-10"> Q1</h3>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Smart Contract Deployment</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Anti-Dump Security Measures</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Website Launch
            </p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Release Whitepaper</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Establish Mod & Admins Team</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Build out Social Medias</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Build Social media management team</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Presale and launch date announced</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Marketing push to spread awareness</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Whitelist Contest for Presale</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8"> Audit from InterFI & QuillAudits </p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat"> $MTF Presale</p>
          </div>
          <div className=" col-span-12 lg:col-span-3 text-center  py-12 px-6 border-r relative overflow-hidden">
            <h3 className=" text-yellow text-3xl shapiro-65    mb-10"> Q2</h3>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Translation of the web to other languages</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">CoinMarketCap Listing</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat  mb-8">Coingecko Listing</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat  mb-8">Crypto.com Listing</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat  mb-8">Coinbase Listing</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Strategic Marketing Campaign</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">$MTF Football Prediction Telegram Group</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">$MTF Fifa Tournament - P2E</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Football Star Promotions</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Partnerships with Game developers</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat  mb-5">NFT Preview</p>
          </div>
          <div className=" col-span-12 lg:col-span-3 text-center  py-12 px-6 border-r relative overflow-hidden">
            <h3 className=" text-yellow text-3xl shapiro-65    mb-10"> Q3</h3>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Merch Store</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">NFT Airdrop to Holders</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">NFT Public Sale</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Team Expansion</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Certik & Dessert Finance Audit</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">NFT Fantasy Football Development</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Exchange Listing</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Social Platform</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">$MTF Football Prediction Platform</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Partnerships with VR / AR developers</p>
            <p className="custom-text-black text-md opacity-80  font-Montserrat ">Football team Sponsorship/Partnership</p>
          </div>
          <div className=" col-span-12 lg:col-span-3 text-center  py-12 px-6 border-r relative overflow-hidden">
            <div className="gd"></div>
              <h3 className=" text-yellow text-3xl shapiro-65    mb-10">Q4</h3>
              <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">Release Fantasy Football - NFT Version</p>
              <p className="custom-text-black text-md opacity-80  font-Montserrat   mb-8">BETA Release Football Manager - $MTF</p>
              <p className="custom-text-black text-md opacity-80  font-Montserrat  mb-8">Preparing for the Metaverse</p>
              <p className="custom-text-black text-md opacity-80  font-Montserrat  mb-8">Metaverse Concept reveal</p>
              <p className="custom-text-black text-md opacity-80  font-Montserrat  mb-8">Metaverse Partnerships</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team py-8 xl:py-16">
        <div className="container relative ">
          <h2 className="text-white font-62 shapiro-85 mb-12 aos-init aos-animate" data-aos="fade-up" data-aos-offset="-300"> TEAM
          </h2>
          
          <div className="grid  grid-cols-12 gap-4 md:gap-8 xl:gap-20 relative">
            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}} className="team-box box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user">
                <img style={{maxHeight: "200px", margin: "0 auto"}} alt="" src="/images/logo_opt-removebg.png" />
              </div>
              <h4 className="text-center text-white text-xl shapiro-65 mt-8 mb-3">Zer0Bug</h4>
              <p className="text-center text-white text-md font-Montserrat font-light">LEAD DEVELOPER</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="team-box box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user">
                <img style={{maxHeight: "200px", margin: "0 auto"}} alt="" src="/images/logo_opt-removebg.png" />
              </div>
              <h4 className="text-center text-white text-xl shapiro-65 mt-8 mb-3">Sewastoz </h4>
              <p className="text-center text-white text-md  font-Montserrat  font-light">MARKETING</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="team-box box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user">
                <img style={{maxHeight: "200px", margin: "0 auto"}} alt="" src="/images/logo_opt-removebg.png" />
              </div>
              <h4 className="text-center text-white text-xl shapiro-65 mt-8 mb-3">DannyD</h4>
              <p className="text-center text-white text-md  font-Montserrat  font-light">DESIGNER</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="0" data-aos-duration="800" style={{padding: '10px', borderRadius: "10px"}}  className="team-box box col-span-6 md:col-span-4 aos-animate lg:col-span-3 ">
              <div className="user">
                <img style={{maxHeight: "200px", margin: "0 auto"}} alt="" src="/images/logo_opt-removebg.png" />
              </div>
              <h4 className="text-center text-white text-xl shapiro-65 mt-8 mb-3">Zer0Bug</h4>
              <p className="text-center text-white text-md  font-Montserrat  font-light">LEAD DEVELOPER</p>
            </div>
            
          </div>
        </div>
      </section>

      <footer>
        <div className="container relative">
          <div className="lg:grid grid-cols-12 gap-20 relative border-t py-8 md:py-20 items-center">
            <div className="lg:col-span-4 text-center lg:text-left mb-14 lg:mb-0">
              <a href="index.html">
                <img alt="" src="/images/logo_opt-removebg.png" style={{width: '100px'}} className="mx-auto lg:mx-0" />
              </a>
              <p className="mt-4 font-Montserrat text-xs opacity-80 text-white font-normal">
              © 2021 Football Games. All rights reserved
              </p>
            </div>
            <div className="mb-14 lg:mb-0 lg:col-span-4">
              <div className="grid grid-cols-10">
                <div className="col-span-5">
                  <a className="text-theme-lightblue-300 font-Montserrat font-light  text-base block text-center mb-5 hover:opacity-70 transition-all" href="#">Home</a>
                  <a className="text-theme-lightblue-300 font-Montserrat font-light text-base block text-center mb-5 hover:opacity-70 transition-all" href="#" target="_blank">MTF Token</a>
                  <a className="text-theme-lightblue-300 font-Montserrat font-light text-base block text-center hover:opacity-70 transition-all mb-5" href="https://meta-football.gitbook.io/metafootball-whitepaper/" target="_blank">Whitepaper</a>
                  <a className="text-theme-lightblue-300 font-Montserrat font-light text-base block text-center hover:opacity-70 transition-all" href="" target="_blank">Pitch Deck</a>
                </div>
                <div className="col-span-5">
                  <a className="text-theme-lightblue-300 font-Montserrat font-light text-base block text-center mb-5 hover:opacity-70 transition-all" href="mailto:contact@metasoccer.com">Contact us</a>
                  <a className="text-theme-lightblue-300 font-Montserrat font-light text-base block text-center mb-5 hover:opacity-70 transition-all" href="#">Terms &amp; Conditions</a>
                  <a className="text-theme-lightblue-300 font-Montserrat font-light text-base block text-center mb-5 hover:opacity-70 transition-all" href="#">Privacy Policy</a>
                  <a className="text-theme-lightblue-300 font-Montserrat font-light text-base block text-center hover:opacity-70 transition-all" href="https://meta-football.gitbook.io/metafootball-whitepaper/tokenomics/disclaimer" target="_blank">Disclaimer</a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <a className="mr-5 inline-block hover:opacity-70 transition-all" href="https://twitter.com/MetaSoccer_EN" target="_blank">
              <BsTwitter size={30} style={{color: '#dad8d8'}} />
              </a>
              <a className="mr-5 inline-block hover:opacity-70 transition-all" href="https://t.me/MetaSoccerOfficial" target="_blank">
              <FaTelegramPlane size={30} style={{color: '#dad8d8'}} />
              </a>
              <a className="mr-5 inline-block hover:opacity-70 transition-all" href="https://discord.gg/metasoccer" target="_blank">
              <FaDiscord size={30} style={{color: '#dad8d8'}} />
              </a>
              <a className=" inline-block hover:opacity-70 transition-all" href="https://metasoccer.medium.com/" target="_blank">
              <FaPoo size={30} style={{color: '#dad8d8'}}/>
              </a>
            </div>
          </div>
        </div>
      </footer>
<style jsx>
  {
    `
    .links {
      display: none; // display: flex;
      justify-content: center;
    }
    .img-players-div{
      background: rgba(63,75,149);
      transition: border-radius 1s ease-out;
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      overflow: hidden;
      z-index: 5;
      margin: 0 auto;
    }
    .img-players-name {
      display:none;
    }
    .img-players{
      transition: border-radius 1s ease-out;
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      animation: morph 3s ease-in-out infinite both alternate;
      
      position: absolute;
      overflow: hidden;
      z-index: 5;
      opacity: 0.8;
    }

    @keyframes morphdiv {
      0% {border-radius: 60% 40% 40% 60% / 30% 60% 70% 30%;} 
      100% {border-radius: 60% 40%;} 
    }
    
    @keyframes spindiv {
      to {
        transform: rotate(1turn);
      }
    }

    @keyframes morph {
      0% {border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;} 
      100% {border-radius: 40% 60%;} 
    }
    
    @keyframes spin {
      to {
        transform: rotate(1turn);
      }
    }

    .btn-on-active:hover {
      background-color: rgb(52 62 122);
    }
    .btn-on-active {
      background-color: #3f4b95;
    }
    
    #custom-tooltip {
      display: none;
      padding: 5px 12px;
      padding-bottom: 5px;
      background-color: #F3D250;
      border-radius: 4px;
      font-weight: bold;
      color: #000000;
      max-height: 35px;
      margin-right: 40px;
      position:relative;
      top: 8px;
    }
    #input-div-span1 {
      width: 70%;
    }
    #input-div-span2 {
      width: 30%;
    }
    .team-box {
      background: rgb(63,75,149);
      background: linear-gradient(0deg, rgba(63,75,149,1) 0%, rgba(41,48,94,1) 45%, rgba(0,0,0,1) 100%);
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
    .font-22 {
        font-size: 22px;
        line-height: 30px;
    }
      .font-26 {
        font-size: 26px;
    }
    @media screen and (max-width: 1279px){
      .font-62 {
          font-size: 40px;
          line-height: 50px;
      }
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
    @media screen and (max-width: 767px){
      .mobile-menu {
          display: block;
      }
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
    }
    @media screen and (max-width: 1439px){
      .container {
        padding: 0px 40px;
      }
    }
    
    @media screen and (max-width: 1279px){
      .font-82 {
        font-size: 60px;
        line-height: 70px;
      }
      .first-para {
        display: grid;
      }
    }
    .inline-btn {
      position: relative;
      width: 293px;
      margin: 65px 0px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #F3D250;
      transition: 0.3s;
    }
    #tabs-nav li.active a {
      border-bottom: 1px solid #EB00FF;
      color: #F3D250;
    }
    #tabs-nav li.active a {
      border-bottom: 1px solid #F3D250;
      color: #F3D250;
    }
    #tabs-nav li a {
      border-bottom: 1px solid #024a93;
      padding-bottom: 10px;
      transition: 0.3s;
      cursor: pointer;
      color: white;
    }
    .inline-btn:before {
      box-shadow: 1px 1px 1px #bd9700;
      content: "";
      position: absolute;
      top: 5px;
      left: 5px;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: 0.3s;
    }
    #tab2, #tab3{
      display:none;
    }
    .plan ul li:before {
      content: "";
      background-image: url(/images/b19cb1a50c08be7f52b7.svg);
      height: 20px;
      background-size: 10px;
      display: block;
      background-repeat: no-repeat;
      position: absolute;
      top: 9px;
      background-position: 0px 0px;
      width: 20px;
      left: -25px;
    }
    .font-82 {
      font-size: 78px;
      line-height: 86px;
    }
    @media screen and (max-width: 1439px){
      .font-62 {
          font-size: 50px;
      }
    }
    .font-62 {
        line-height: 75px;
        font-size: 62px;
    }
    .font-Montserrat {
      font-family: 'Montserrat', sans-serif;
    }
    .player_img {
      max-width: 400px;
      flex: 0 0 400px;
      position: relative;
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
    @media (min-width: 1240px){
      .para-in-utilities {
        height: 310px;
      }
    }
    .container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0px 85px;
    }
    .train-player {
      background: url(/images/35160075862b1951f2f4.png) no-repeat center;
      background-size: cover;
    }
    .transition-all {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .text-theme-lightblue-300 {
        --tw-text-opacity: 1;
        color: rgba(0, 178, 255, var(--tw-text-opacity));
    }
    .drop-band--main-band {
      display: flex; 
      align-items: center;
      justify-content: space-between;
    }

    .train-player .drop-band .drop-band--main-band {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 3.5em;
      box-shadow: -10px 10px 16px 0 rgb(0 0 0 / 40%);
      background: #F3D250;
      background-repeat: repeat-x;
      background-position: center;
      background-size: 90%;
    }
    @media (min-width: 980px){
      .train-player .drop-band .drop-band--main-band {
        height: 4em;
        background-size: 40%;
      }
    }
    @media (min-width: 980px){
      .train-player .drop-band .drop-band--secondary-band {
        height: 5em;
      }
    }
    .train-player .drop-band .drop-band--secondary-band {
      width: 100%;
      height: 4.5em;
      background: #e6e60e;
    }
    @media (min-width: 980px){
      .train-player .drop-band {
        bottom: 30px;   
      }
    }
    .train-player .drop-band {
      position: absolute;
      width: 100%;
      bottom: -24px;
      left: 0;
    }
    .rrss-icons a img {
      width: 100%;
      height: 100%;
      -o-object-fit: contain;
      object-fit: contain;
    }
    .rrss-icons a {
      display: block;
      width: 42px;
      height: 42px;
    }
    @media (min-width: 1024px){
      .rrss-icons .container {
        max-width: 720px;
      }
    }
    @media (min-width: 980px){
      .train-player .drop-band {
        bottom: 30px;
      }
    }
    @media (min-width: 980px){
      .train-player .drop-band .drop-band--secondary-band {
        height: 5em;
      }
    }
    .investor .gd {
      background: radial-gradient(50% 50% at 50% 50%, #FFFFEE 0%, rgba(255, 255, 238, 0) 100%);
      max-width: 1440px;
      height: 295px;
      left: 0px;
      right: 0;
      margin: 0 auto;
      top: -124px;
      position: absolute;
      opacity: 0.12;
      transform: rotate(180deg);
    }
    .text-blue {
      color: #0575e5;
    }
    .text-purple {
      color: #a72b7f;
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
    .anchor-change {
      width: 110px;
      text-align: center;
      padding-bottom: 10px;
      border-bottom:2px solid #024a93;
    }
    @media screen and (max-width: 979px){
      .train-player .grid-cols-12 {
          display: flex;
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
      }
    }
    @media screen and (max-width: 979px){
      .train-player .font-82 {
          text-align: center;
      }
    }
    @media screen and (max-width: 1279px){
      .font-82 {
          font-size: 60px;
          line-height: 70px;
      }
      .text-3xl {
        font-size: 1.275rem;
        line-height: 1.75rem;
      }
    }
    .grid-cols-12 {
        grid-template-columns: repeat(12, minmax(0, 1fr));
    }
    @media screen and (max-width: 767px){
      .container {
        padding: 0px 25px;
      }
    }
    @media screen and (max-width: 1279px){
      .container {
        padding: 0px 30px;
      }
    }
    @media screen and (max-width: 1439px){
      .container {
        padding: 0px 40px;
      }
    }
    @media screen and (min-width: 768px){
      #logo-img {
        left: -60px;
      }
      #top-div {
        margin-bottom: 95px;
      }
      #copy-address-button {
        font-size: 15px;
      }
      #copy-address {
        font-size: 12px;
      }
    }
    
    @media screen and (max-width: 767px){
      .train-player .font-22 {
        font-size: 18px !important;
        line-height: 30px !important;
        margin-top: 20px !important;
      }
      #logo-img {
        left: 0px;
        margin: 0 auto;
      }
      #top-div {
        margin-bottom: 25px;
      }
      #copy-address-button {
        font-size: 15px;
      }
      #copy-address {
        font-size: 12px;
      }
      .player_img {
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
    .train-player .drop-band a {
      display: inline-block;
      position: relative;
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 767px){
      .steps .text-center {
        text-align: center;
        padding: 20px;
      }
    }
    @media screen and (max-width: 767px){
      .meta-assets .font-62 {
        font-size: 28px;
        line-height: 38px;
        word-break: break-word;
        text-align: center;
      }
    }
    @media screen and (max-width: 767px){
    ul#tabs-nav {
        top: 620px;
        padding: 0px 15px;
        display: flex;
        justify-content: center;
      }
    }
    @media screen and (max-width: 979px){
      ul#tabs-nav {
        z-index: 9;
        width: 82%;
        left: 0px;
        right: 0px;
        margin: 0 auto;
        padding: 0px 20px;
        margin-top: 20px;
      }
    }
    #button-mfts1 {
      margin-right: 15px;
    }
    
    @media screen and (max-width: 767px){
      ul#tabs-nav li {
        margin: 0px;
        text-align: center;
        flex: 0 0 50%;
      }
      .player_img {
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
    @media screen and (max-width: 767px){
      ul#tabs-nav li {
        margin: 0px;
        text-align: center;
        flex: 0 0 50%;
      }
    }
    @media screen and (max-width: 767px)
    {
      #tabs-nav li a {
          display: block;
          font-size: 10px;
      }
    }
    @media screen and (max-width: 979px){
      .player_img {
        margin-top: 0px;
        margin-bottom: 100px;
      }
    }
    @media screen and (max-width: 767px){
      .font-62 {
        font-size: 30px;
        line-height: 45px;
        text-align: center;
      }
    }
    @media screen and (max-width: 767px){
      h2.font-62, h2 span {
        text-align: center;
      }
      .last-join-us {
        display: none;
      }
    }
    .menu {
      display:none;
    }
    @media screen and (max-width: 767px){
      .menu {
          display: inline-block;
      }
      .player_img {
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
    .mobile-menu.show {
      transform: translateX(0px);
    }
    @media screen and (max-width: 767px){
      .mobile-menu {
          display: block;
      }
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
    @media screen and (max-width: 900px){
      .font-62 {
        font-size: 40px;
      }
    }
    @media screen and (max-width: 455px){
      ul#tabs-nav {
        z-index: 9;
        width: 82%;
        left: 0px;
        right: 0px;
        margin: 0 auto;
        padding: 0px 20px;
        margin-top: 20px;
      }
      #input-div-span1, #input-div-span2 {
        width: 50%;
      }
      .button-mfts {
        font-size: 90%;
      }
      #button-mfts1 {
        margin-right: 5px;
      }
      .text-right {
        text-align: center;
      }
      .sm-mb-6 {
        margin-bottom: 15px;
      }
      .change-on-small {
        font-size: 10px;
      }
      #custom-tooltip {
        margin-right: 0px;
        top: 5px;
      }
      #copy-address-button {
        font-size: 15px;
      }
      .meta-assets .font-62 {
        font-size: 19px;
        line-height: 38px;
        word-break: break-word;
        text-align: center;
      }
      .font-62 {
        font-size: 24px;
      }
    }
    #tab1, #tab2, #tab3{
      /* other propertites */
      transition: all 1s ease-in-out;
    }
    div {
      
        /* other propertites */
        transition: all 3s ease-in-out;
      
    }
    #logo-img {
      animation: MoveUpDown 4s linear infinite;
    }
    #copy-address-btn {
      animation: wiggle 1s linear infinite;
    }
    @keyframes MoveUpDown {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    @keyframes wiggle {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    `
  }
</style>
<script src="dist/main.js"></script>
<script src="dist/clipboard.min.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
      AOS.init()
  </script>
</body>

    </div>
  )
}
