(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function h(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=h(e);fetch(e.href,t)}})();const l=1990,u=new Date().getFullYear(),a=u-l,o={name:"sebastianPost",age:a,city:"Filipstad / Grängesberg",school:" Medieinstitutet",seeking:"Internship / LIA"},n={name:"Weather App",description:"A project I did for the basic course in Javascript where I focused on basic API protocol. I used Open Weather Maps API for weahter and location.",url:"https://zyncitrus.github.io/Weatherapp/"},s={name:"Nocco landing page",description:"A project I did in the course Graphical Design Tools. The thechnique I used was vanilla Javascript",url:"https://zyncitrus.github.io/MoccoNocco/"};document.querySelector(".infoContainerOne").innerHTML=`
<h1>let ${o.name} = {</h1>
<div class="infotainer">
<h2>Age: ${a} y/o,</h2>
<h2> Location: ${o.city},</h2>
<h2> School: ${o.school},</h2>
<h2> Seeking: ${o.seeking}</h2>
<h2>};</h2>
</div>
<div
`;document.querySelector(".infoContainerTwo").innerHTML=`
<h1>const projectOne = {</h1>
<div class="infotainerTwo">
<h2>name: ${n.name};</h2>
<h2>description: ${n.description};</h2>
<h2>url: <a href="${n.url}">LINK<a/></h2>
</div>
`;document.querySelector(".infoContainerThree").innerHTML=`
<h1>const projectTwo = {</h1>
<div class="infotainerTwo">
<h2>name: ${s.name};</h2>
<h2>description: ${s.description};</h2>
<h2>url: <a href="${s.url}">LINK<a/></h2>
</div>
`;document.querySelector(".sideMenu").innerHTML=`
<a href="https://www.linkedin.com/in/sebastian-p-24381a66/"><img src="./assets/icons/linkedin.png"></a>
<a href="https://discordapp.com/users/InHoSiVi14#2353/"><img src="./assets/icons/discord.png"></a>
<a href="mailto:sebastianpost@protonmail.com"><img src="./assets/icons/email.png"></a>
<a href="https://github.com/ZynCitrus/"><img src="./assets/icons/github.png"></a>
`;
