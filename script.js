/* ======================================
   GSAP SETUP
====================================== */

gsap.registerPlugin(ScrollTrigger);

/* ======================================
   LOADER
====================================== */

const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");
const siteContent = document.getElementById("siteContent");

window.addEventListener("load", () => {

    gsap.to(".loading-fill", {
        width: "100%",
        duration: 1.8,
        ease: "power2.out",
        onComplete() {
            enterBtn.classList.add("show");
        }
    });

    gsap.to("#loadingText", {
        opacity: 0.6,
        repeat: -1,
        yoyo: true,
        duration: 0.8
    });

});

enterBtn.addEventListener("click", () => {

    gsap.to("#loader", {
        opacity: 0,
        duration: 0.8,
        onComplete() {
            loader.style.display = "none";
        }
    });

    siteContent.classList.remove("site-hidden");
    siteContent.classList.add("site-visible");

    document.body.style.overflowY = "auto";

    heroAnimation();

});

/* ======================================
   HERO ANIMATION
====================================== */

function heroAnimation() {

    const tl = gsap.timeline();

    tl.from(".hero h3", {
        y: 40,
        opacity: 0,
        duration: 0.8
    })

    .from(".hero h1", {
        y: 80,
        opacity: 0,
        duration: 1
    })

    .from(".hero h2", {
        y: 40,
        opacity: 0,
        duration: 0.7
    })

    .from(".hero p", {
        y: 30,
        opacity: 0,
        duration: 0.7
    })

    .from("#beginBtn", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.8)"
    });

}

/* ======================================
   CUSTOM CURSOR
====================================== */

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "power2.out"
    });

});

/* ======================================
   BUTTON
====================================== */

document.getElementById("beginBtn").addEventListener("click", () => {

    fadeMusic();

    document
        .getElementById("letter")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* ======================================
   MUSIC
====================================== */

const music = document.getElementById("music");

function fadeMusic() {

    if (!music) return;

    music.volume = 0;

    music.play().catch(()=>{});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if (volume >= 1) {

            volume = 1;

            clearInterval(fade);

        }

        music.volume = volume;

    },100);

}

/* ======================================
   LETTER
====================================== */

gsap.from(".letter",{

    scrollTrigger:{
        trigger:".letter",
        start:"top 75%"
    },

    y:100,

    opacity:0,

    duration:1.4,

    ease:"power3.out"

});

/* ======================================
   CARDS
====================================== */

gsap.utils.toArray(".card").forEach((card,i)=>{

    gsap.from(card,{

        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        },

        opacity:0,

        y:80,

        scale:.8,

        rotate:5,

        duration:.7,

        delay:i*0.05,

        ease:"back.out(1.5)"

    });

});

/* ======================================
   QUOTE
====================================== */

gsap.from(".quote-section h2",{

    scrollTrigger:{
        trigger:".quote-section",
        start:"top 75%"
    },

    opacity:0,

    y:80,

    duration:1.4

});

/* ======================================
   ENDING
====================================== */

gsap.from(".ending h1",{

    scrollTrigger:{
        trigger:".ending",
        start:"top 70%"
    },

    scale:.5,

    opacity:0,

    duration:1.5,

    ease:"elastic.out(1,0.6)"

});

gsap.from(".ending p",{

    scrollTrigger:{
        trigger:".ending",
        start:"top 65%"
    },

    opacity:0,

    y:40,

    duration:1

});

/* ======================================
   FLOATING HERO
====================================== */

gsap.to(".hero-card",{

    y:-10,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

/* ======================================
   PARALLAX
====================================== */

window.addEventListener("mousemove",(e)=>{

    const x = (e.clientX/window.innerWidth-.5)*20;

    const y = (e.clientY/window.innerHeight-.5)*20;

    gsap.to(".hero-card",{

        rotationY:x,

        rotationX:-y,

        transformPerspective:1000,

        duration:.4

    });

});

/* ======================================
   SIGNATURE
====================================== */

gsap.to(".signature",{

    opacity:.75,

    duration:2,

    repeat:-1,

    yoyo:true

});


/* ======================================
   HEARTS ON CLICK
====================================== */

document.addEventListener("click", (e) => {

    const heart = document.createElement("div");

    heart.innerHTML = ["❤️","💖","💕","🤍","✨"][Math.floor(Math.random()*5)];

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    gsap.to(heart,{
        y:-180,
        x:(Math.random()-0.5)*120,
        rotation:Math.random()*360,
        opacity:0,
        scale:1.8,
        duration:2,
        ease:"power2.out",
        onComplete(){
            heart.remove();
        }
    });

});


/* ======================================
   SPARKLES
====================================== */

function sparkle(){

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";
    s.style.left=Math.random()*window.innerWidth+"px";
    s.style.top=window.innerHeight+"px";
    s.style.opacity=.3;
    s.style.fontSize=(10+Math.random()*20)+"px";
    s.style.pointerEvents="none";
    s.style.zIndex="-1";

    document.body.appendChild(s);

    gsap.to(s,{
        y:-(window.innerHeight+100),
        x:(Math.random()-.5)*200,
        rotation:360,
        opacity:0,
        duration:12+Math.random()*8,
        ease:"none",
        onComplete(){
            s.remove();
        }
    });

}

setInterval(sparkle,500);

/* ======================================
   FIREWORKS
====================================== */

function fireworks(){

    for(let i=0;i<40;i++){

        const dot=document.createElement("div");

        dot.style.position="fixed";
        dot.style.left="50%";
        dot.style.top="50%";
        dot.style.width="8px";
        dot.style.height="8px";
        dot.style.borderRadius="50%";
        dot.style.background=`hsl(${Math.random()*360},100%,65%)`;
        dot.style.pointerEvents="none";
        dot.style.zIndex="9999";

        document.body.appendChild(dot);

        const angle=Math.random()*Math.PI*2;
        const distance=150+Math.random()*250;

        gsap.to(dot,{
            x:Math.cos(angle)*distance,
            y:Math.sin(angle)*distance,
            opacity:0,
            scale:0,
            duration:2,
            ease:"power2.out",
            onComplete(){
                dot.remove();
            }
        });

    }

}/* ======================================
   FINAL SURPRISE
====================================== */

ScrollTrigger.create({

    trigger:".ending",

    start:"top center",

    once:true,

    onEnter(){

        fireworks();

        setTimeout(fireworks,1200);

        setTimeout(fireworks,2400);

    }

});
