(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e){e.exports=[{id:"captain-conundrum",name:"Captain Conundrum",image:"/img/App Icon.png",about:"An iOS game created at Make School Summer Academy in just 8 weeks. It is a top-down space shooter designed around the GameKit library in Swift. The game features motion controls, a high and low score system, power-ups, and various customization options.",technology:["Swift","GameKit"],website:"https://appsite.skygear.io/captain_conundrum/",repo:"https://github.com/Abhiek187/Captain-Conundrum"},{id:"giphy-gif-search",name:"Giphy GIF Search",image:"/img/GIF Search.gif",about:"A search engine for GIFs powered by the Giphy API and running on a node.js server. Created at a local hackathon at Rutgers.",technology:["Giphy","node.js","Handlebars","CSS","JavaScript"],website:null,repo:"https://github.com/Abhiek187/Giphy-GIF-Search"},{id:"concentration",name:"Memory Game",image:"/img/Memory Game.PNG",about:"Built a complete browser-based card matching game (also known as Concentration). But this isn\u2019t just any memory game! It\u2019s a snazzy, well-designed, feature-packed memory game!",technology:["HTML","CSS","JavaScript","Font Awesome"],website:"https://abhiek187.github.io/Memory-Game",repo:"https://github.com/Abhiek187/Memory-Game"},{id:"frogger",name:"Classic Arcade Game Clone (Frogger)",image:"/img/Frogger.PNG",about:"An HTML5 Canvas powered video game based on the popular arcade game Frogger, developed using the best practices in Object Oriented JavaScript.",technology:["HTML","CSS","JavaScript"],website:"https://abhiek187.github.io/frontend-nanodegree-arcade-game",repo:"https://github.com/Abhiek187/frontend-nanodegree-arcade-game"},{id:"restaurant-reviews",name:"Restaurant Reviews",image:"/img/Restaurant Reviews.PNG",about:"A website that shows information about restaurants in New York City. It is responsive on all devices and contains standard accessibility features. In addition, all visited pages can work offline by caching requests through a Service Worker.",technology:["HTML","CSS","JavaScript","Mapbox"],website:null,repo:"https://github.com/Abhiek187/mws-restaurant-stage-1"},{id:"neighborhood-map",name:"Neighborhood Map",image:"/img/Neighborhood Map.PNG",about:"A project built from scratch using React and Google Maps. This site allows users to select from predetermined locations and read reviews through Yelp. It contains a culmination of all skills learned throughout the nanodegree program, including accessibility, responsiveness, and offline functionality.",technology:["HTML","CSS","JavaScript","React","Google Maps","Yelp"],website:"https://abhiek187.github.io/Neighborhood-Map",repo:"https://github.com/Abhiek187/Neighborhood-Map"}]},24:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n,o,r=a(0),i=a.n(r),c=a(11),s=a.n(c),l=a(47),m=(a(30),a(5)),u=a(6),h=a(8),d=a(7),p=a(9),b=a(45),g=a(49),f=a(46),w=a(48),k=a(15),y=(a(41),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("title").textContent="Abhishek Chaudhuri - About",document.querySelector(".links-about").classList.add("selected"),document.querySelector(".links-projects").classList.remove("selected"),document.querySelector(".links-contact").classList.remove("selected")}},{key:"render",value:function(){var e=this.props.onClickLink;return i.a.createElement("main",{className:"about"},i.a.createElement("div",{className:"about-wrapper"},i.a.createElement("h3",{className:"about-heading",tabIndex:0},"About"),i.a.createElement("div",{className:"about-container"},i.a.createElement("img",{className:"about-headshot",tabIndex:0,src:"/img/Headshot.png",alt:"Headshot of Abhishek"}),i.a.createElement("p",{className:"about-bio",tabIndex:0},"Abhishek Chaudhuri is a college student from North Brunswick, New Jersey. He studies at Rutgers University-New Brunswick, majors in Computer Engineering, and minors in Computer Science. He excels in subjects like math and science and has a strong penchant for programming and technology. Some of his hobbies include doing taekwondo, playing the flute & piccolo, and playing video games. His ultimate goal in life is to help make society better for everyone. He can put his technical skills to good use by gaining experience from working with other companies who value his ambitions."))),i.a.createElement(b.a,{className:"arrow-right",to:"/projects","aria-label":"Go to Projects",onClick:function(){return e("projects")}},i.a.createElement("i",{className:"fas fa-arrow-right"})))}}]),t}(r.Component)),E=a(21),N=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("title").textContent="Abhishek Chaudhuri - Projects",document.querySelector(".links-about").classList.remove("selected"),document.querySelector(".links-projects").classList.add("selected"),document.querySelector(".links-contact").classList.remove("selected")}},{key:"render",value:function(){var e=this.props.onClickLink,t=JSON.parse(JSON.stringify(E));return i.a.createElement("main",{className:"projects"},i.a.createElement(b.a,{className:"arrow-left",to:"/about","aria-label":"Go to About",onClick:function(){return e("about")}},i.a.createElement("i",{className:"fas fa-arrow-left"})),i.a.createElement("div",{className:"projects-wrapper"},i.a.createElement("h3",{className:"projects-heading",tabIndex:0},"Projects"),i.a.createElement("ul",{className:"projects-list"},t.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("h4",{className:"projects-name",tabIndex:0},e.name),i.a.createElement("img",{className:"projects-image",tabIndex:0,src:e.image,alt:"Image of "+e.name}),i.a.createElement("p",{className:"projects-about",tabIndex:0},e.about),i.a.createElement("p",{className:"projects-technology",tabIndex:0},"Made Using: ",e.technology.join(", ")),e.website?i.a.createElement("a",{className:"projects-website",href:e.website,target:"_blank",rel:"noopener noreferrer"},"View Project"):i.a.createElement("p",{className:"projects-website",tabIndex:0},"\u2193 See GitHub link below \u2193"),i.a.createElement("a",{className:"projects-repo",href:e.repo,target:"_blank",rel:"noopener noreferrer"},"View on GitHub"))})),i.a.createElement("p",{className:"projects-addendum",tabIndex:0},"...And much more on GitHub!")),i.a.createElement(b.a,{className:"arrow-right",to:"/contact","aria-label":"Go to Contact",onClick:function(){return e("contact")}},i.a.createElement("i",{className:"fas fa-arrow-right"})))}}]),t}(r.Component),v=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("title").textContent="Abhishek Chaudhuri - Contact",document.querySelector(".links-about").classList.remove("selected"),document.querySelector(".links-projects").classList.remove("selected"),document.querySelector(".links-contact").classList.add("selected")}},{key:"render",value:function(){var e=this.props.onClickLink;return i.a.createElement("main",{className:"contact"},i.a.createElement(b.a,{className:"arrow-left",to:"/projects","aria-label":"Go to Projects",onClick:function(){return e("projects")}},i.a.createElement("i",{className:"fas fa-arrow-left"})),i.a.createElement("div",{className:"contact-wrapper"},i.a.createElement("h3",{className:"contact-heading",tabIndex:0},"Contact"),i.a.createElement("span",{className:"contact-row"},i.a.createElement("a",{className:"contact-resume",href:"https://www.dropbox.com/s/daivoubtkiyvupl/Resume%20v4.pdf?dl=0",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fas fa-file-pdf"})," Resume"),i.a.createElement("a",{className:"contact-linkedin",href:"https://www.linkedin.com/in/abhiek187",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-linkedin-in"})," LinkedIn"),i.a.createElement("a",{className:"contact-github",href:"https://github.com/abhiek187",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-github"})," GitHub"),i.a.createElement("a",{className:"contact-email",href:"mailto:achaudhuri2011@yahoo.com",target:"_top"},i.a.createElement("i",{className:"fas fa-envelope"})," Email"))))}}]),t}(r.Component),j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={slideDirection:"left"},a.checkScroll=function(){n=document.querySelector(".links"),o=0===n.offsetTop?o:n.offsetTop,window.pageYOffset>=o?n.classList.add("sticky"):n.classList.remove("sticky")},a.setSlider=function(e){"/contact"===window.location.pathname?a.setState({slideDirection:"right"}):"/projects"===window.location.pathname&&"about"===e?a.setState({slideDirection:"right"}):a.setState({slideDirection:"left"})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){"/"===window.location.pathname?document.querySelector("title").textContent="Abhishek Chaudhuri - Home":"/about"!==window.location.pathname&&"/projects"!==window.location.pathname&&"/contact"!==window.location.pathname&&"/Memory-Game"!==window.location.pathname&&"/frontend-nanodegree-arcade-game"!==window.location.pathname&&"/Neighborhood-Map"!==window.location.pathname&&(document.querySelector("title").textContent="Abhishek Chaudhuri - Error"),n=document.querySelector(".links"),o=n.offsetTop}},{key:"render",value:function(){var e=this,t=this.state.slideDirection,a=this.props.location;return window.onscroll=this.checkScroll,i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"heading"},i.a.createElement("h1",{className:"heading-name",tabIndex:0},"Abhishek Chaudhuri"),i.a.createElement("h2",{className:"heading-headline",tabIndex:0},"Computer Engineering & Science Student at Rutgers University - New Brunswick")),i.a.createElement("nav",{className:"links"},i.a.createElement(b.a,{className:"links-about",to:"/about",onClick:function(){return e.setSlider("about")}},"About"),i.a.createElement(b.a,{className:"links-projects",to:"/projects",onClick:function(){return e.setSlider("projects")}},"Projects"),i.a.createElement(b.a,{className:"links-contact",to:"/contact",onClick:function(){return e.setSlider("contact")}},"Contact")),i.a.createElement("hr",null),i.a.createElement(k.TransitionGroup,{className:"transition-group "+t},i.a.createElement(k.CSSTransition,{key:a.key,timeout:{enter:600,exit:600},classNames:"slide"},i.a.createElement(g.a,{location:a},i.a.createElement(f.a,{exact:!0,path:"/",render:function(){return i.a.createElement("main",{className:"home"},i.a.createElement("p",{className:"home-info",tabIndex:0},"Hello and welcome to my website! Please click the links above for more info about me."))}}),i.a.createElement(f.a,{path:"/about",render:function(){return i.a.createElement(y,{onClickLink:e.setSlider})}}),i.a.createElement(f.a,{path:"/projects",render:function(){return i.a.createElement(N,{onClickLink:e.setSlider})}}),i.a.createElement(f.a,{path:"/contact",render:function(){return i.a.createElement(v,{onClickLink:e.setSlider})}})))),"/"!==window.location.pathname&&"/about"!==window.location.pathname&&"/projects"!==window.location.pathname&&"/contact"!==window.location.pathname&&"/Memory-Game"!==window.location.pathname&&"/frontend-nanodegree-arcade-game"!==window.location.pathname&&"/Neighborhood-Map"!==window.location.pathname&&i.a.createElement(f.a,{render:function(){return i.a.createElement("main",{className:"error"},i.a.createElement("p",{className:"error-message",tabIndex:0},"Whoops! That path is invalid. Please click the links above."))}}),i.a.createElement("hr",null),i.a.createElement("footer",{className:"foot"},i.a.createElement("span",{className:"foot-left"},"Made using ",i.a.createElement("a",{className:"foot-react",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),i.a.createElement("img",{className:"foot-react-img",src:"/img/logo.svg",alt:"React logo (an atom)"})),i.a.createElement("span",{className:"foot-right"},i.a.createElement("a",{className:"foot-mit",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Abhiek187/abhiek187.github.io/blob/dev/LICENSE"},"MIT License")," Copyright (c) 2019 Abhishek Chaudhuri")))}}]),t}(r.Component),S=Object(w.a)(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(l.a,{basename:""},i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.7d51c740.chunk.js.map