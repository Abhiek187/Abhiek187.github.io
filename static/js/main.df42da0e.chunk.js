(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports=[{id:"3d-collectathon",name:"3D Collectathon",image:"/img/3D Collectathon (Compressed).png",about:"A game created in Unity where the player has to collect 5 Mega Gems scattered across the land. The Mega Gems can be gotten by solving puzzles or clearing platforming challenges. The player is free to explore the 5 open terrains in first person and collect Mini Gems along the way. The player is scored at the end based on their time and Mini Gem count.",technology:["Unity","Blender","C#"],website:"https://abhiek187.github.io/3d-collectathon/WebGL",repo:"https://github.com/Abhiek187/3d-collectathon"},{id:"captain-conundrum",name:"Captain Conundrum",image:"/img/App Icon.png",about:"An iOS game created at Make School Summer Academy in just 8 weeks. It is a top-down space shooter designed around the GameKit library in Swift. The game features motion controls, a high and low score system, power-ups, and various customization options.",technology:["Swift","GameKit"],website:"https://appsite.skygear.io/captain_conundrum/",repo:"https://github.com/Abhiek187/Captain-Conundrum"},{id:"area-advice",name:"Area Advice",image:"/img/Area Advice.png",about:"An Android app that recommends places based on sensor data, user input, distance, and ratings.  This app features a quality user interface using navigation bars, explores the Google Places API, and makes use of light and temperature sensors to give users the best mobile experience.",technology:["Kotlin","Google Places","Google Maps","SQLite"],website:null,repo:"https://github.com/Abhiek187/AreaAdvice"},{id:"giphy-gif-search",name:"Giphy GIF Search",image:"/img/GIF Search.gif",about:"A search engine for GIFs powered by the Giphy API and running on a node.js server. Created at a local hackathon at Rutgers.",technology:["Giphy","node.js","Handlebars","CSS","JavaScript"],website:null,repo:"https://github.com/Abhiek187/Giphy-GIF-Search"},{id:"concentration",name:"Memory Game",image:"/img/Memory Game.PNG",about:"Built a complete browser-based card matching game (also known as Concentration). But this isn\u2019t just any memory game! It\u2019s a snazzy, well-designed, feature-packed memory game!",technology:["HTML","CSS","JavaScript","Font Awesome"],website:"https://abhiek187.github.io/Memory-Game",repo:"https://github.com/Abhiek187/Memory-Game"},{id:"frogger",name:"Classic Arcade Game Clone (Frogger)",image:"/img/Frogger.PNG",about:"An HTML5 Canvas powered video game based on the popular arcade game Frogger, developed using the best practices in Object Oriented JavaScript.",technology:["HTML","CSS","JavaScript"],website:"https://abhiek187.github.io/frontend-nanodegree-arcade-game",repo:"https://github.com/Abhiek187/frontend-nanodegree-arcade-game"}]},23:function(e,t,a){e.exports=a(42)},28:function(e,t,a){},30:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n,o,r=a(0),c=a.n(r),i=a(10),s=a.n(i),l=a(46),m=(a(28),a(4)),h=a(5),u=a(7),d=a(6),p=a(8),b=a(44),g=a(48),f=a(45),k=a(47),w=a(14),y=(a(30),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("title").textContent="Abhishek Chaudhuri - About",document.querySelector(".links-about").classList.add("selected"),document.querySelector(".links-projects").classList.remove("selected"),document.querySelector(".links-contact").classList.remove("selected")}},{key:"render",value:function(){var e=this.props.onClickLink;return c.a.createElement("main",{className:"about"},c.a.createElement("div",{className:"about-wrapper"},c.a.createElement("h3",{className:"about-heading",tabIndex:0},"About"),c.a.createElement("div",{className:"about-container"},c.a.createElement("img",{className:"about-headshot",tabIndex:0,src:"/img/Headshot.png",alt:"Headshot of Abhishek"}),c.a.createElement("p",{className:"about-bio",tabIndex:0},"Abhishek Chaudhuri is a college student from North Brunswick, New Jersey. He studies at Rutgers University-New Brunswick, majors in Computer Engineering, and minors in Computer Science. He excels in subjects like math and science and has a strong penchant for programming and technology. Some of his hobbies include doing taekwondo, playing the flute & piccolo, and playing video games. His ultimate goal in life is to help make society better for everyone. He can put his technical skills to good use by gaining experience from working with other companies who value his ambitions."))),c.a.createElement(b.a,{className:"arrow-right",to:"/projects","aria-label":"Go to Projects",onClick:function(){return e("projects")}},c.a.createElement("i",{className:"fas fa-arrow-right"})))}}]),t}(r.Component)),E=a(20),N=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("title").textContent="Abhishek Chaudhuri - Projects",document.querySelector(".links-about").classList.remove("selected"),document.querySelector(".links-projects").classList.add("selected"),document.querySelector(".links-contact").classList.remove("selected")}},{key:"render",value:function(){var e=this.props.onClickLink,t=JSON.parse(JSON.stringify(E));return c.a.createElement("main",{className:"projects"},c.a.createElement(b.a,{className:"arrow-left",to:"/about","aria-label":"Go to About",onClick:function(){return e("about")}},c.a.createElement("i",{className:"fas fa-arrow-left"})),c.a.createElement("div",{className:"projects-wrapper"},c.a.createElement("h3",{className:"projects-heading",tabIndex:0},"Projects"),c.a.createElement("ul",{className:"projects-list"},t.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("h4",{className:"projects-name",tabIndex:0},e.name),c.a.createElement("img",{className:"projects-image",tabIndex:0,src:e.image,alt:"Image of "+e.name}),c.a.createElement("p",{className:"projects-about",tabIndex:0},e.about),c.a.createElement("p",{className:"projects-technology",tabIndex:0},"Made Using: ",e.technology.join(", ")),e.website?c.a.createElement("a",{className:"projects-website",href:e.website,target:"_blank",rel:"noopener noreferrer"},"View Project"):c.a.createElement("p",{className:"projects-website",tabIndex:0},"\u2193 See GitHub link below \u2193"),c.a.createElement("a",{className:"projects-repo",href:e.repo,target:"_blank",rel:"noopener noreferrer"},"View on GitHub"))})),c.a.createElement("p",{className:"projects-addendum",tabIndex:0},"...And much more on GitHub!")),c.a.createElement(b.a,{className:"arrow-right",to:"/contact","aria-label":"Go to Contact",onClick:function(){return e("contact")}},c.a.createElement("i",{className:"fas fa-arrow-right"})))}}]),t}(r.Component),j=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("title").textContent="Abhishek Chaudhuri - Contact",document.querySelector(".links-about").classList.remove("selected"),document.querySelector(".links-projects").classList.remove("selected"),document.querySelector(".links-contact").classList.add("selected")}},{key:"render",value:function(){var e=this.props.onClickLink;return c.a.createElement("main",{className:"contact"},c.a.createElement(b.a,{className:"arrow-left",to:"/projects","aria-label":"Go to Projects",onClick:function(){return e("projects")}},c.a.createElement("i",{className:"fas fa-arrow-left"})),c.a.createElement("div",{className:"contact-wrapper"},c.a.createElement("h3",{className:"contact-heading",tabIndex:0},"Contact"),c.a.createElement("span",{className:"contact-row"},c.a.createElement("a",{className:"contact-resume",href:"https://www.dropbox.com/s/yjfranbk08szefq/Resume%20v5.pdf?dl=0",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fas fa-file-pdf"})," Resume"),c.a.createElement("a",{className:"contact-linkedin",href:"https://www.linkedin.com/in/abhiek187",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-linkedin-in"})," LinkedIn"),c.a.createElement("a",{className:"contact-github",href:"https://github.com/abhiek187",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-github"})," GitHub"),c.a.createElement("a",{className:"contact-email",href:"mailto:achaudhuri2011@yahoo.com",target:"_top"},c.a.createElement("i",{className:"fas fa-envelope"})," Email"))))}}]),t}(r.Component),v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={slideDirection:"left"},a.checkScroll=function(){n=document.querySelector(".links"),o=0===n.offsetTop?o:n.offsetTop,window.pageYOffset>=o?n.classList.add("sticky"):n.classList.remove("sticky")},a.setSlider=function(e){"/contact"===window.location.pathname?a.setState({slideDirection:"right"}):"/projects"===window.location.pathname&&"about"===e?a.setState({slideDirection:"right"}):a.setState({slideDirection:"left"})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){"/"===window.location.pathname?document.querySelector("title").textContent="Abhishek Chaudhuri - Home":"/about"!==window.location.pathname&&"/projects"!==window.location.pathname&&"/contact"!==window.location.pathname&&"/Memory-Game"!==window.location.pathname&&"/frontend-nanodegree-arcade-game"!==window.location.pathname&&"/Neighborhood-Map"!==window.location.pathname&&(document.querySelector("title").textContent="Abhishek Chaudhuri - Error"),n=document.querySelector(".links"),o=n.offsetTop}},{key:"render",value:function(){var e=this,t=this.state.slideDirection,a=this.props.location;return window.onscroll=this.checkScroll,c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"heading"},c.a.createElement("h1",{className:"heading-name",tabIndex:0},"Abhishek Chaudhuri"),c.a.createElement("h2",{className:"heading-headline",tabIndex:0},"Computer Engineering & Science Student at Rutgers University - New Brunswick")),c.a.createElement("nav",{className:"links"},c.a.createElement(b.a,{className:"links-about",to:"/about",onClick:function(){return e.setSlider("about")}},"About"),c.a.createElement(b.a,{className:"links-projects",to:"/projects",onClick:function(){return e.setSlider("projects")}},"Projects"),c.a.createElement(b.a,{className:"links-contact",to:"/contact",onClick:function(){return e.setSlider("contact")}},"Contact")),c.a.createElement("hr",null),c.a.createElement(w.TransitionGroup,{className:"transition-group "+t},c.a.createElement(w.CSSTransition,{key:a.key,timeout:{enter:600,exit:600},classNames:"slide"},c.a.createElement(g.a,{location:a},c.a.createElement(f.a,{exact:!0,path:"/",render:function(){return c.a.createElement("main",{className:"home"},c.a.createElement("p",{className:"home-info",tabIndex:0},"Hello and welcome to my website! Please click the links above for more info about me."))}}),c.a.createElement(f.a,{path:"/about",render:function(){return c.a.createElement(y,{onClickLink:e.setSlider})}}),c.a.createElement(f.a,{path:"/projects",render:function(){return c.a.createElement(N,{onClickLink:e.setSlider})}}),c.a.createElement(f.a,{path:"/contact",render:function(){return c.a.createElement(j,{onClickLink:e.setSlider})}})))),"/"!==window.location.pathname&&"/about"!==window.location.pathname&&"/projects"!==window.location.pathname&&"/contact"!==window.location.pathname&&"/Memory-Game"!==window.location.pathname&&"/frontend-nanodegree-arcade-game"!==window.location.pathname&&"/Neighborhood-Map"!==window.location.pathname&&c.a.createElement(f.a,{render:function(){return c.a.createElement("main",{className:"error"},c.a.createElement("p",{className:"error-message",tabIndex:0},"Whoops! That path is invalid. Please click the links above."))}}),c.a.createElement("hr",null),c.a.createElement("footer",{className:"foot"},c.a.createElement("span",{className:"foot-left"},"Made using ",c.a.createElement("a",{className:"foot-react",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),c.a.createElement("img",{className:"foot-react-img",src:"/img/logo.svg",alt:"React logo (an atom)"})),c.a.createElement("span",{className:"foot-right"},c.a.createElement("a",{className:"foot-mit",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Abhiek187/abhiek187.github.io/blob/dev/LICENSE"},"MIT License")," Copyright (c) 2019 Abhishek Chaudhuri")))}}]),t}(r.Component),S=Object(k.a)(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(l.a,{basename:""},c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.df42da0e.chunk.js.map