import Head from 'next/head'
import React, { useState } from "react";
import 'tailwindcss/tailwind.css'
import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaPoo } from 'react-icons/fa';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { AiOutlineCopy } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

export default function Nft() {
    return (
    <div>
    <body style={{background: "rgb(0 0 0)"}} className="bg-black ld" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
      <header className="bg-white py-8 ">
        <div className="container  flex justify-between items-center ">
          <a className="change-on-small md:inline-block  text-white  font-Montserrat  text-sm  font-bold anchor-change uppercase " href="/">HOME</a>
          <a className="change-on-small md:inline-block text-white  font-Montserrat  text-sm  font-bold anchor-change uppercase  " href="#" target="_blank">LINKTREE</a>
          
          <a className="change-on-small md:inline-block text-white  font-Montserrat  text-sm  font-bold anchor-change uppercase  " href="https://meta-football.gitbook.io/metafootball-whitepaper/" target="_blank">WHITEPAPER</a>
          <button style={{display: 'none'}} className="menu"><img src="/images/menu.svg" /></button>
          <a className="change-on-small md:inline-block text-white  font-Montserrat  text-sm  font-bold anchor-change uppercase " href="" target="_blank">NFT</a>
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
            <div style={{width: "100%"}} className="col-span-12">
              <h1 className="first-para text-center text-white shapiro-85 font-82 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800"> <span>COMING</span>
              <span style={{position: 'relative', top: "-5px"}} className="text-yellow shapiro-extd aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              SOON</span>
              </h1>
              <p className="mt-6 mb-8 text-center font-Montserrat custom-text-black font-22 text-theme-gray-300 leading-7 font-light opacity-70 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                NFT's in Development
              </p>
              
              
            </div>
            <div className="col-span-12">
              <img style={{width: "50%", maxWidth: "175px", maxHeight: "250px", position: "relative", top: "0px", left: '0px', margin: "0 auto"}} alt="" id="logo-img" className="ml-auto aos-init aos-animate" data-aos="fade-left" data-aos-duration="800" src="/images/logo_opt-removebg.png" />
            </div>
          </div>
          
        </div>
      </section>
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
        display: flex;
        align-items: center;
        justify-content: center;
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
    </body>
    </div>
    )
}
